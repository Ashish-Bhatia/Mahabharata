# MASTER CONTINUITY CHECKPOINT
Checkpoint dated: 23 October 2026. Translation batch 01.001.021–01.001.030.

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
- Published passage range: 01.001.000–01.001.030 inclusive (31 units, including the opening invocation and prose).
- Initial bilingual translations are editorial drafts awaiting a separate independent Sanskrit review. Verses 01.001.011–01.001.030 were checked against the BORI Devanāgarī e-text in consecutive batches, including the 011e and 013e pādas and the speaker attributions at 015 and 020. Verses 021–030 continue Sūta's speech and contain no new speaker marker. No chapter is marked fully translated.
- Script to download 18 academic Sanskrit e-text files to ignored local folder, preserving hash manifest.
- Full electronic text is NOT republished due to the BORI electronic-text copyright notice.

## Deployment verification blocker

The current repository tree contains a root index.html, .nojekyll and relative static asset URLs, and no .github/workflows directory. The public repository reports `has_pages: true`, but the live GitHub Pages URL was blocked to the checker and GitHub Pages source settings could not be independently read or confirmed through available access on 23 October 2026. Inspect GitHub Settings -> Pages. Set Source to "Deploy from a branch", Branch main, Folder /(root), and Save as needed. This connection cannot change or verify repository Pages settings. Do not create a custom workflow as a workaround.

## Next content batch, EXACT

Book 01, Ādi Parva.
Sub-parva 01, Anukramaṇikā.
Adhyāya 001.
Next Sanskrit passage ID: 01.001.031.
Translate IDs 01.001.031 through 01.001.040, with all Sanskrit pādas and any speaker markers. Primary source:
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

## Last batch record

- Source checked directly: BORI Ādi Parva electronic text, verse keys 01001021–01001030 (all ten with a and c half-lines).
- Published in this batch: 01.001.021–01.001.030 (10 passages), in exact verse order. No new speaker headings in this range; Sūta's speech from 020 continues. The invocation concludes at 023, the textual-transmission discussion continues at 024–026, and a cosmogonic passage begins at 027.
- Scope: data/translations.json, CONTINUITY.md and PROJECT_STATE.json, in one atomic commit on main, message `Translate Anukramanika 01.001.021-030 and advance checkpoints`. Base commit before update: `41de98eaa124bbd58771308c5db1bbfc41ed0b5c`. Find the resulting commit SHA using main git history; a commit cannot embed its own hash in its committed files.
- Last published: 01.001.030. Next exact passage: 01.001.031. Next batch: 01.001.031–01.001.040.
- GitHub repository `has_pages` is true, root index.html and .nojekyll are present, no custom workflow exists in main tree; live Pages response and Pages branch/root setting remain unverified because they are inaccessible to the current checker. Set Settings > Pages > Deploy from a branch > main > /(root) as needed.
- Sanskrit verified to electronic source line labels; independent textual/translation second pass remains open.
- No complete adhyāya should be claimed yet.

## READY-TO-PASTE NEXT CHAT PROMPT

Continue Mahabharata (A Version of the AI Era) from the latest main of https://github.com/Ashish-Bhatia/Mahabharata. Read CONTINUITY.md and PROJECT_STATE.json first and preserve every existing passage. Verify the public site https://ashish-bhatia.github.io/Mahabharata/ and its GitHub Pages configuration: Deploy from a branch > main > /(root); do not create GitHub Actions workflows. Retrieve the BORI Critical Edition Ādi Parva original Sanskrit from https://bombay.indology.info/mahabharata/text/UD/MBh01.txt. Translate exactly verses 01.001.031 through 01.001.040 of Ādi Parva, Anukramaṇikā, Adhyāya 001, checking every source pāda and any speaker heading, with faithful separately labelled Sanskrit, English, Hindi, modern context and grounded teachings where justified. Atomically commit data/translations.json, CONTINUITY.md and PROJECT_STATE.json to main. Validate JSON, verse counts and source fidelity, preserve earlier work, report full new commit SHA and independent deployment verification status, and finish with the exact next prompt for 01.001.041–01.001.050.
