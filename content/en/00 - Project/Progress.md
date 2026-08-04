---
title: LastRecall Current Progress
tags:
  - lastrecall
  - progress
---

# LastRecall Current Progress

## In progress

**Desert Wasteland** is still in a very early map-building phase. Terrain, exploration routes, buildings and scenes, and atmosphere are all being built from a prototype level.

## Feature overview

| Status | Feature | Current state |
| --- | --- | --- |
| ✅ | Player hideout | Works normally with no known issues. |
| ✅ | Client reloading | Reloading and ammo consumption worked correctly in the latest multiplayer test. |
| ✅ | Entering the map | The latest multiplayer test entered the map successfully; the earlier missing-map issue did not recur. |
| 🛠 | Map-entry loading screen | A loading screen has been added when entering a map; it still needs continued multiplayer testing. |
| 🔴 | Raid PvP and team recognition | PvP turns on automatically when a player enters a raid world, and notification spam has been fixed. However, same-team players can still damage each other and cannot see teammate names. |
| 🛠 | Gas-station Shop | The earlier incorrect main-world return, lost input, and item-loss issues have been fixed. Returning still takes an unnecessary trip through the main world before Desert Wasteland, and repeated entry and exit can refresh interior loot. |
| 🛠 | Extraction and death handling | Multiplayer extraction points and countdowns, plus respawning after death, have been fixed. Dropped items may still return to the player after death. |
| 🔴 | Reward Loot Boxes | Duplicate spawns have been fixed, but textures can still fragment when entering a raid world. |
| 🛠 | Information display | Ammo and magazine counts display correctly. Keeping Terra Coin totals visible beside merchant transactions is a future improvement. |
| 🛠 | Teleporter and departure | Team preparation and departure now work normally; the map-selection interface and block textures still need work. |
| 🛠 | Expedition loadout management | Items not taken out are temporarily kept in hideout storage; the final persistence method is still being planned. |
| 🛠 | Enemies | The patrol and getting-stuck-on-high-ground-or-vehicles issue has been fixed, but enemies still do not turn after being attacked from behind. |
| 🛠 | Enemy ranged attacks and loot | Projectile hits and loot boxes after enemy deaths have been fixed; projectile speed and behaviour still need adjustment. |
| 🛠 | Loot Boxes | Existing items and supplies can be searched normally and reveal contents gradually; sound and loot balance are still missing. |
| 🔴 | Recovery Broker trading | The merchant cannot buy modded items brought back from raids; item selection and prices still need balancing. |
| 🛠 | Existing firearms | Function correctly in single-player, but their assets and audio are inconsistent in quality. |
| ✅ | Supplies and medical items | Sterile Bandage healing and interrupted medical-item use have been fixed. |

## Current priorities

1. Fix same-team friendly fire and missing teammate names in raids.
2. Fix fragmented Reward Loot Box textures on raid entry, the extra main-world transition from the Gas-station Shop, and interior-loot refreshing.
3. Fix merchant purchase of modded raid items and plan an always-visible Terra Coin display during transactions.
4. Improve enemy reactions to attacks from behind, plus projectile speed and behaviour.
5. Prevent dropped items from returning to players after death and teams from resetting after entering with another team.

## Next directions

- Make enemy spawns and extraction points easier to tune through configuration.
- Build the Gas-station Shop interior and allow future maps to have multiple extraction points.
- Remake firearm and item assets; firearm modifications will also change weapon appearance.
- Add Traditional and Simplified Chinese language options.

For unplanned ideas, see [[en/20 - Content/Future Ideas|Future Ideas]].

For complete testing and known issues, see [[en/30 - Release/Known Issues|Known Issues and Testing]].
