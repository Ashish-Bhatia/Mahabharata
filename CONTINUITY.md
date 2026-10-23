# MASTER CONTINUITY CHECKPOINT
Checkpoint dated: 23 October 2026. Translation batch 01.001.041–01.001.050.

This repository file is the persistent project handoff. It MUST be read at the start of every new session and updated in the same commit as any new translated passages. PROJECT_STATE.json is the machine-readable counterpart.

## Locked user requirements

Repository: https://github.com/Ashish-Bhatia/Mahabharata
Website title: Mahabharata (A Version of the AI Era)
Intended GitHub Pages: https://ashish-bhatia.github.io/Mahabharata/
GitHub Pages from main branch and /(root), without a custom GitHub Actions workflow.

Find an authoritative Sanskrit Mahābhārata, translate into English and Hindi VERSE BY VERSE, modern context separately explained, teachings separately called out where grounded, and keep the textual order and numbering.

Every response MUST end with an exact new-chat continuation prompt. Never assume prior chat context survives: this file is the handoff record.

## Textual control

Primary source: https://bombay.indology.info/mahabharata/welcome.html
Edition: BORI Critical Edition (Tokunaga transcription and John Smith revisions).
There is no single available physical "original autograph"; this is the selected scholarly base, not a claim of absolute textual originality.
Text order: 18 parvas, 1,995 adhyāyas. Use critical-edition PP.CCC.VVV identifiers.

The web site has a provisional upa-parva map in data/upaparvas.json for 17/18 books. The third-party table disagrees internally for Śalya/Book 09. Do NOT invent its sub-parva boundaries. Review against scholarly source before filling.

Do not merge Harivaṃśa, popular later retellings, or other recensions into the main verse sequence. Annotate any future variants as independently sourced apparatus.

## Verified implementation actions completed

- Root static reader committed on main. No custom .github/workflows files created.
- 18 parvas and 1,995 original chapter-index entries navigable.
- Provisional sub-parva navigation, with source qualification and a known gap.
- English + Hindi bilingual controls, Sanskrit, modern context and optional separate teachings.
- Search limited to translated passages, responsive sidebar and stable hash navigation.
- Published passage range: 01.001.000–01.001.050 inclusive (51 units, including the opening invocation and prose).
- Initial bilingual translations remain editorial drafts awaiting independent Sanskrit and translation review. Verses 01.001.011–01.001.050 were checked against consecutive BORI Devanāgarī e-text lines, including the 011e and 013e pādas and speaker attributions at 015 and 020. Verses 021–050 continue Sūta's speech, without any new speaker marker. Verses 031–050 have explicit a/c source-line identifiers in the dataset; the 041–050 entries also record the continuing speaker in metadata without inserting a heading absent from the source. No chapter is marked fully translated.
- Script to download 18 academic Sanskrit e-text files to ignored local folder, preserving hash manifest.
- Full electronic text is NOT republished due to the BORI electronic-text copyright notice.

## Deployment verification status

The main tree contains a root index.html, .nojekyll and relative static asset URLs, and no .github/workflows directory. Direct HTTPS requests to the public Pages root, app.js and data/translations.json each returned HTTP 200 on 23 October 2026. Before this batch's commit, the live dataset contained 41 passages through 01.001.040 and matched the existing main data. The web-search checker could not open the URL, but direct retrieval verified public availability. Post-commit delivery of this new batch must be checked separately and reported honestly.

GitHub Pages source settings remain unverified. The connector rejects the Pages endpoint as unsupported; an unauthenticated REST request returned HTTP 404. Neither response establishes which branch/folder is configured. Inspect GitHub Settings -> Pages to confirm Source "Deploy from a branch", Branch main, Folder /(root). Do not create a custom workflow as a workaround.

## Next content batch, EXACT

Book 01, Ādi Parva.
Sub-parva 01, Anukramaṇikā.
Adhyāya 001.
Next Sanskrit passage ID: 01.001.051.
Translate IDs 01.001.051 through 01.001.060, with all Sanskrit pādas and any speaker markers. Primary source:
https://bombay.indology.info/mahabharata/text/UD/MBh01.txt

Update data/translations.json, CONTINUITY.md and PROJECT_STATE.json in one commit and check site behavior. Do not skip, duplicate, reorder, summarize instead of translating, or fabricate any verse. Carry forward the exact subsequent passage ID.

## Editorial acceptance checklist

1. Exact Sanskrit from source; preserve all verse half-lines and prose.
2. English translation accurate and intelligible. Hindi translation natural and source-faithful.
3. Clearly label modern explanatory material as editorial context.
4. Teachings only where justified by text, distinct from translation.
5. Keep naming and source citation consistent. Avoid presenting contested historicity as settled fact.
6. Record last published ID, scope, change commit and next exact ID.
7. Never conflate a browsing chapter placeholder with a completed translation.

## Prior batch record (01.001.021–01.001.030)

- Source checked directly: BORI Ādi Parva electronic text, verse keys 01001021–01001030 (all ten with a and c half-lines).
- Published in this batch: 01.001.021–01.001.030 (10 passages), in exact verse order. No new speaker headings in this range; Sūta's speech from 020 continues. The invocation concludes at 023, the textual-transmission discussion continues at 024–026, and a cosmogonic passage begins at 027.
- Scope: data/translations.json, CONTINUITY.md and PROJECT_STATE.json, in one atomic commit on main, message `Translate Anukramanika 01.001.021-030 and advance checkpoints`. Base commit before update: `41de98eaa124bbd58771308c5db1bbfc41ed0b5c`. Find the resulting commit SHA using main git history; a commit cannot embed its own hash in its committed files.
- Last published: 01.001.030. Next exact passage: 01.001.031. Next batch: 01.001.031–01.001.040.
- GitHub repository `has_pages` is true, root index.html and .nojekyll are present, no custom workflow exists in main tree; live Pages response and Pages branch/root setting remain unverified because they are inaccessible to the current checker. Set Settings > Pages > Deploy from a branch > main > /(root) as needed.
- Sanskrit verified to electronic source line labels; independent textual/translation second pass remains open.
- No complete adhyāya should be claimed yet.

## Prior batch record (01.001.031–01.001.040)

- Source checked: BORI Ādi Parva electronic text, source line keys 01001031a–01001040c, all ten verses having their a and c lines; no new speaker marker. Sūta's speech from 01.001.020 continues.
- Published this batch: 01.001.031–01.001.040, 10 passages in source sequence; cosmogonic enumeration (031–035), dissolution and recurring cycles (036–038), numerical account of devas (039), and divine/solar names (040, continuing into 041).
- All earlier published passages remain unchanged. New entries store exact per-pāda source IDs as metadata without changing the reader's established Sanskrit / English / Hindi / editorial context fields.
- One atomic commit on main updates data/translations.json, CONTINUITY.md and PROJECT_STATE.json; commit message: `Translate Anukramanika 01.001.031-040 and advance checkpoints`; parent commit: `a215b91793ab6d0c733ecaf7289d3d2681b81da0`. Find resulting commit SHA in GitHub history, since a commit cannot embed its own SHA.
- Last published: 01.001.040. Next exact: 01.001.041, batch 01.001.041–01.001.050. Total passages: 41, including opening invocation and prose.
- Reader code and other site files remain unchanged. JSON structure and identifier sequence verified before commit; runtime Pages delivery and Pages branch/root setting remain independently unverified because these endpoints are inaccessible in the checker.
- The BORI electronic source is copyright-marked. Do not republish the entire base text. Independent second-pass philological and translation review remains outstanding, and no chapter is considered complete.

## Latest batch record (01.001.041–01.001.050)

- Retrieved the complete Ādi Parva Sanskrit file directly from https://bombay.indology.info/mahabharata/text/UD/MBh01.txt on 23 October 2026. Download size: 1,889,070 bytes. SHA-256: `e8a8c8f6f586f070ed8c2f24bd4888eebadd751aca9464372ec34c2200bfa592`. The downloaded base text remains local and is not part of this publication commit.
- Source checked: all 20 consecutive lines 01001041a, 01001041c through 01001050a, 01001050c. Each verse has two source half-lines. There is no new speaker heading; Sūta's attribution at 01001020 continues. Sanskrit is assembled directly from the downloaded lines without spelling normalization or inserted headings.
- Published this batch: 01.001.041–01.001.050, ten passages in exact source order. Scope: Vivasvat's descendants and numerical genealogy (041–045); the epic's subjects and knowledge traditions (046–048); summary and detailed exposition (049); different recognised narrative openings (050).
- Sentences continuing across 040–041, 044–045 and 046–048 are explained separately from the translations. Sanskrit forms such as देवभ्राट्, सुभ्राडिति, सुभ्राजस्तु, आत्मवान् and सवैयाख्या remain exactly as supplied. Verse 046 retains the threefold mystery without inventing an additional explanatory enumeration.
- All 41 earlier passage objects, including their Sanskrit, translations, commentary, source IDs and order, remain unchanged. New entries retain all established reader fields, explicit source-line metadata and the continuing Sūta attribution. The teaching for 049 is separately stated; no teaching is imposed on the genealogical list.
- One atomic commit updates only data/translations.json, CONTINUITY.md and PROJECT_STATE.json on main. Commit message: `Translate Anukramanika 01.001.041-050 and advance checkpoints`. Parent main commit: `c67221f509719282bfda5bee2d4ca8862260b870`. Find the resulting full SHA in GitHub history; a commit cannot embed its own SHA.
- Last published: 01.001.050. Next exact passage: 01.001.051. Next batch: 01.001.051–01.001.060. Total: 51 passages, including invocation and prose. No adhyāya is marked complete.
- Validation: JSON integrity, 51 unique consecutive IDs 000–050, ten new entries, all 20 exact Sanskrit source lines, inherited speaker attribution and preservation of every earlier passage checked before commit. Reader code remains unchanged. The actual app.js passed a DOM runtime check using a local data-file fetch adapter for all 51 rendered passages, exact Sanskrit/English/Hindi text, separately labelled context and teachings, bilingual controls, search, chapter navigation and menu behavior, without runtime errors. Visual browser QA was unavailable because the browser binary download failed. Post-commit repository/data checks must be reported from their actual results.
- Public Pages availability was verified by direct HTTPS; the main /(root) source setting remains unverified. No custom GitHub Actions workflow was created. The independent second-pass philological and translation review and the provisional Śalya/Book 09 sub-parva boundary gap remain outstanding.

## READY-TO-PASTE NEXT CHAT PROMPT

Continue Mahabharata (A Version of the AI Era) from the latest main branch of https://github.com/Ashish-Bhatia/Mahabharata. Read CONTINUITY.md and PROJECT_STATE.json first. Preserve all 51 existing published passages, every original project requirement and exact textual sequence. Verify https://ashish-bhatia.github.io/Mahabharata/ and GitHub Pages deployment source Deploy from a branch > main > /(root), distinguishing public availability from unverified settings; do not create custom GitHub Actions workflows. Retrieve the BORI Critical Edition Sanskrit at https://bombay.indology.info/mahabharata/text/UD/MBh01.txt. Continue Ādi Parva, Anukramaṇikā, Adhyāya 001, translating exactly verses 01.001.051 through 01.001.060, preserving every Sanskrit pāda, source identifier, speaker attribution and textual order. Supply faithful English and Hindi, separately labelled modern context and grounded teachings where appropriate. Verify every Sanskrit line against the electronic source, with no fabrication, omission, duplication or reordering. Atomically commit data/translations.json, CONTINUITY.md and PROJECT_STATE.json together to main. Validate the new commit, JSON integrity, Sanskrit fidelity, counts, sequential identifiers, earlier-passage preservation and reader compatibility. Report the full commit SHA, completed verses, deployment verification status and outstanding issues, including pending independent philological review. Finish with the next exact continuation prompt for 01.001.061 through 01.001.070.
