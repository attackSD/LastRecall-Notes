---
title: LastRecall Known Issues and Testing
tags:
  - lastrecall
  - testing
---

# LastRecall Known Issues and Testing

## Current blockers

| Item | Status | Details |
| --- | --- | --- |
| Desert Wasteland multiplayer raid loading | 🔴 Known issue | Preparing a raid map in multiplayer can occasionally fail to load, preventing that raid from starting normally. This is under investigation. |

## Still needs adjustment

| Item | Status | Details |
| --- | --- | --- |
| Enemy strength | 🛠 Needs tuning | High-tier enemies can immediately down a 100-health player, and enemy health is high. |
| Loot Box contents and trading prices | 🛠 Needs tuning | Loot Box contents and Recovery Broker prices need to be rebalanced around raid risk. |
| Firearm content polish and expansion | 🛠 In progress | The M1911 core flow is usable. Held pose, audio mixing, and further firearm content are still being polished and expanded. |

## Items to test

- Reliability of preparing and starting Desert Wasteland raid maps in multiplayer.

## Recent multiplayer test: passed

- Clients can reload and ammo is deducted correctly.
- Players entered the map successfully; the earlier missing-map issue did not recur in the latest test.
- PvP enabled and disabled notifications no longer flood the screen. Different teams can enter raids, and same-team players no longer damage each other or lose teammate names.
- Multiplayer extraction points and countdowns, respawning after death, and dropped-item handling now work normally.
- Host and remote-client entry and return at the Gas-station Shop have passed multiplayer testing. NPC, loot, extraction, and death flows also remained normal after round trips.
- Sterile Bandages restore health normally, and medical-item use is no longer randomly interrupted.
- Enemies patrol normally, no longer get stuck on high ground or vehicles, and turn after being attacked from behind. Their projectiles can hit players, and loot boxes now generate after enemies die.
- Enemy projectiles now behave like player projectiles.
- The Recovery Broker can buy modded items brought back from raids.
- Reward Loot Boxes no longer duplicate, and their raid-entry textures display normally.
- Team preparation, departure, Loot Box searches, existing items, and supplies now work normally.

See [[en/30 - Release/Resolved Issues|Resolved Issues]] for confirmed fixes.

## No current known issues

- The player hideout works normally.
- Ammo and magazine counts display correctly.
- Text display and switching between Traditional and Simplified Chinese have no known issues.

Related: [[en/00 - Project/Progress|Current Progress]] · [[en/30 - Release/Resolved Issues|Resolved Issues]] · [[en/00 - Project/Updates|Update Log]]
