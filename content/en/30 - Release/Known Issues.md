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
| Client entering the Gas-station Shop | 🔴 Known issue | After the AI-system update, clients become stuck on the loading screen when entering the Gas-station Shop. |

## Still needs adjustment

| Item | Status | Details |
| --- | --- | --- |
| Enemy strength | 🛠 Needs tuning | High-tier enemies can immediately down a 100-health player, and enemy health is high. |
| Loot Box contents and trading prices | 🛠 Needs tuning | Loot Box contents and Recovery Broker prices need to be rebalanced around raid risk. |
| Quality of existing firearm content | 🛠 Needs remake | Functionality has no obvious problems, but asset and audio sources are inconsistent in quality. |

## Items to test

- The map-entry loading screen during multiplayer.

## Recent multiplayer test: passed

- Clients can reload and ammo is deducted correctly.
- Players entered the map successfully; the earlier missing-map issue did not recur in the latest test.
- PvP enabled and disabled notifications no longer flood the screen. Different teams can enter raids, and same-team players no longer damage each other or lose teammate names.
- Multiplayer extraction points and countdowns, respawning after death, and dropped-item handling now work normally.
- The Gas-station Shop portal, entry and exit countdowns, return flow, and interior-loot refreshing passed earlier multiplayer testing. After the AI-system update, clients now become stuck on the loading screen when entering the shop; this needs a fix.
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
