# Mahabharata (A Version of the AI Era)

Read the epic in its textual sequence. This is a source-first editorial project pairing Sanskrit passages with English and Hindi translation, modern explanation, and separately highlighted teachings.

**Repository:** https://github.com/Ashish-Bhatia/Mahabharata

**Intended Pages URL:** https://ashish-bhatia.github.io/Mahabharata/

## Progress checkpoint: 23 October 2026

- Canonical 18 parvas mapped to their proper order.
- 1,995 critical-edition chapters across the 18 parvas. All chapter IDs have browser navigation.
- Preliminary upa-parva maps for 17 books; book 9 is intentionally pending source-boundary research.
- 11 text units translated: 01.001.000 invocation; 01.001.001 prose; 01.001.002 to 01.001.010.
- Multilingual reading, mobile navigation, chapter selector, published-text search, original-Sanskrit source links and teachings display.
- IMPORTANT: the translation is only in its opening section. The index does not imply the entire epic is translated.

## Authoritative Sanskrit edition

Source: Bhandarkar Oriental Research Institute (BORI) Critical Edition, Unicode Devanagari e-text prepared by Muneo Tokunaga and revised by John Smith:
https://bombay.indology.info/mahabharata/welcome.html

There is no surviving single autograph manuscript that can simply be labelled "the original". The critical edition is an editorial reconstruction. The electronic files display a BORI 1999 copyright notice. We therefore link their text instead of blindly mirroring the entire transcribed dataset.

## Find and download the Sanskrit edition locally

Requires Python 3. From the repository directory, run:

    python scripts/download_sanskrit.py

Or retrieve Adi Parva only:

    python scripts/download_sanskrit.py --books 1

The script downloads directly from the academic reference site and writes the 18 original source files under source-local/, with SHA-256 hashes. The folder is ignored by Git and is not part of the public site. No CI/CD or GitHub Actions are involved.

## Configure GitHub Pages

The connector created the files in the root of the main branch. To activate Pages if necessary:

1. Repository Settings -> Pages.
2. Under Build and deployment choose Source: Deploy from a branch.
3. Choose Branch: main and Folder: /(root), then Save.
4. Visit the published URL above.

There are no custom GitHub Actions workflows. Note that GitHub itself may use an internal Pages build process while deploying from a branch.

## Folder contract

- index.html, styles.css, app.js: static browser site.
- data/parvas.json: 18 original books and per-book chapter counts.
- data/upaparvas.json: provisional sub-parva chapter groups, with omissions identified.
- data/translations.json: verse-by-verse source, English, Hindi, modern context and optionally a distinct teaching.
- scripts/download_sanskrit.py: local Sanskrit downloader.
- SOURCES.md: source history, text segmentation and copyright.
- CONTINUITY.md: persistent editorial checkpoint and exact next chat prompt.
- PROJECT_STATE.json: machine-readable progress and next action.

Continue in strict source order: Ādi -> Anukramaṇikā -> Adhyāya 1 -> verse 01.001.011. Read CONTINUITY.md before adding passages.
