---
title: LastRecall Known Issues and Testing
tags:
  - lastrecall
  - testing
---

# LastRecall Known Issues and Testing

## Still needs adjustment

| Item                                 | Status          | Details                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------ | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enemy strength                       | 🛠 Needs tuning | High-tier enemy damage and health still need to be balanced around Raid risk.                                                                                                                                                                                                                                                |
| Loot Box contents and trading prices | 🛠 Needs tuning | Loot Box contents, search sounds, and Recovery Broker prices still need adjustment.                                                                                                                                                                                                                                          |
| Firearm content polish and expansion | 🛠 In progress  | M1911, the AK-47 placeholder, and the MP5 placeholder support the basic firearm flow in-game. Placeholder art and held alignment, multiplayer muzzle-effect synchronisation, lethal-hit readability, audio, environment tails, attachments, the firearm lineup, balance, and special weapon mechanisms remain in refinement. |

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
