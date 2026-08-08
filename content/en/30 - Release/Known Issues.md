---
title: LastRecall Known Issues and Testing
tags:
  - lastrecall
  - testing
---

# LastRecall Known Issues and Testing

## Current verification item

| Item                             | Status                   | Details                                                                                                                                      |
| -------------------------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Background Raid sector lifecycle | 🔍 Awaiting verification | A remaining edge case involving replacement background Raid sectors has an implemented fix and is still awaiting final runtime verification. |

## Still needs adjustment

| Item                                 | Status          | Details                                                                                                                              |
| ------------------------------------ | --------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Enemy strength                       | 🛠 Needs tuning | High-tier enemy damage and health still need to be balanced around Raid risk.                                                        |
| Loot Box contents and trading prices | 🛠 Needs tuning | Loot Box contents, search sounds, and Recovery Broker prices still need adjustment.                                                  |
| Firearm content polish and expansion | 🛠 In progress  | The M1911 core flow is verified in-game; held pose, audio mixing, attachments, the firearm lineup, and balance remain in refinement. |

## Recent testing passed

- Raid entry, Exterior, sector travel, extraction, death return, and death-drop recovery are working.
- The Raid-to-main-world control regression is resolved.
- Host and remote-client entry and return at the Gas-station Shop passed multiplayer testing; NPC, loot, extraction, and death flows remained normal after round trips.
- M1911 held-position drift, left/right flipping, high-rate dry-fire repetition, and custom gunshot playback have completed their relevant tests.
- Sterile Bandages restore health normally, and medical-item use is no longer interrupted abnormally.

See [[en/30 - Release/Resolved Issues|Resolved Issues]] for confirmed fixes.

## No current known issues

- The player hideout works normally.
- Ammo and magazine counts display correctly.
- Text display and switching between Traditional and Simplified Chinese have no known issues.

Related: [[en/00 - Project/Progress|Current Progress]] · [[en/30 - Release/Resolved Issues|Resolved Issues]] · [[en/00 - Project/Updates|Update Log]]
