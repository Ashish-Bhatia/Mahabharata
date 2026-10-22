# MASTER CONTINUITY CHECKPOINT
Checkpoint dated: 23 October 2026.

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
- First published passage set: 01.001.000, 01.001.001, 01.001.002, 01.001.003, 01.001.004, 01.001.005, 01.001.006, 01.001.007, 01.001.008, 01.001.009, 01.001.010.
- Initial bilingual translations are editorial drafts awaiting a separate independent Sanskrit review. No chapter is marked fully translated.
- Script to download 18 academic Sanskrit e-text files to ignored local folder, preserving hash manifest.
- Full electronic text is NOT republished due to the BORI electronic-text copyright notice.

## Deployment verification blocker

GitHub Pages URL has not been independently confirmed live. Inspect GitHub Settings -> Pages. Set Source to "Deploy from a branch", Branch main, Folder /(root), and Save as needed. The GitHub connector used here cannot change repository Pages settings. Do not create a custom workflow as a workaround.

## Next content batch, EXACT

Book 01, Ādi Parva.
Sub-parva 01, Anukramaṇikā.
Adhyāya 001.
Next Sanskrit passage ID: 01.001.011.
Translate IDs 01.001.011 through 01.001.020, with all Sanskrit pādas (including possible e markers). Primary source:
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

## READY-TO-PASTE NEXT CHAT PROMPT

Continue Mahabharata (A Version of the AI Era) from CONTINUITY.md and PROJECT_STATE.json in the main branch of https://github.com/Ashish-Bhatia/Mahabharata. First verify the public GitHub Pages site at https://ashish-bhatia.github.io/Mahabharata/ and, if needed, specify Settings > Pages > Deploy from a branch > main > /(root), with NO custom GitHub Actions workflow. Next fetch the BORI Sanskrit critical-edition text at https://bombay.indology.info/mahabharata/text/UD/MBh01.txt. Complete accurate verse-by-verse Sanskrit, English and Hindi for Ādi Parva, Anukramaṇikā, Adhyāya 001, verses 01.001.011 to 01.001.020, preserving original order and every pāda, with separately identified modern context and grounded teachings where appropriate. Commit data/translations.json, CONTINUITY.md and PROJECT_STATE.json. Preserve prior work. Report exactly what changed and supply the next exact continuation prompt.
