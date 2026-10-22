#!/usr/bin/env python3
"""Download original BORI e-text into a local reference folder, never publish it.

Reference: https://bombay.indology.info/mahabharata/welcome.html
Electronic text (C) Bhandarkar Oriental Research Institute, 1999.
Local copies are intended for research and comparison, not redistribution.
"""
import argparse
import hashlib
import json
import re
import time
import urllib.error
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

BASE = "https://bombay.indology.info/mahabharata/text/UD/MBh{book:02d}.txt"

def main():
    parser=argparse.ArgumentParser(description="Retrieve BORI Critical Edition Sanskrit to local storage")
    parser.add_argument("--books",type=int,nargs="+",default=list(range(1,19)),help="Parva number 1 to 18")
    parser.add_argument("--dest",type=Path,default=Path("source-local"))
    parser.add_argument("--timeout",type=int,default=35)
    parser.add_argument("--overwrite",action="store_true")
    args=parser.parse_args()
    if not args.books or any(n<1 or n>18 for n in args.books):
        parser.error("Only book numbers 1 to 18 are permitted")
    args.dest.mkdir(parents=True,exist_ok=True)
    mf=args.dest/"download-manifest.json"
    manifest=json.loads(mf.read_text(encoding="utf-8")) if mf.exists() else {"edition":"BORI Critical Edition","files":{}}
    errors=[]
    for book in sorted(set(args.books)):
        url=BASE.format(book=book)
        local=args.dest/("MBh%02d.txt"%book)
        if local.exists() and not args.overwrite:
            print("SKIP",local)
            continue
        try:
            req=urllib.request.Request(url,headers={"User-Agent":"MahabharataReferenceDownloader/1.0"})
            with urllib.request.urlopen(req,timeout=args.timeout) as response:
                blob=response.read()
            source=blob.decode("utf-8-sig")
            if len(blob)<200 or not source.lstrip().startswith("% Mahabharata:"):
                raise ValueError("Response does not match the expected source file")
            if not re.search(r"(?m)^"+("%02d"%book)+r"\d{6}[aceA]?\s",source):
                raise ValueError("Missing Sanskrit verse IDs for this book")
            local.write_bytes(blob)
            manifest["files"]["%02d"%book]={
                "file":local.name,"url":url,"bytes":len(blob),
                "sha256":hashlib.sha256(blob).hexdigest(),
                "retrieved_utc":datetime.now(timezone.utc).isoformat()
            }
            mf.write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
            print("OK",local,len(blob),"bytes")
        except (urllib.error.URLError,UnicodeError,ValueError) as exc:
            errors.append(book)
            print("FAILED",book,str(exc))
        time.sleep(0.2)
    print("Local destination:",args.dest.resolve())
    if errors:
        raise SystemExit("Unable to retrieve book(s): "+", ".join(map(str,errors)))

if __name__=="__main__":
    main()
