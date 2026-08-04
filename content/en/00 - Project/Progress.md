---
title: LastRecall Current Progress
tags:
  - lastrecall
  - progress
---

# LastRecall Current Progress

## In progress

**Desert Wasteland** is still in a very early map-building phase. Terrain, exploration routes, buildings and scenes, and atmosphere are all being created from prototype level.

## Feature overview

| Status | Feature                         | Current state                                                                                                                |
| ------ | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| ✅     | Player hideout                  | Works normally with no known issues.                                                                                         |
| ✅     | Client-side reloading           | Reloading and ammo consumption worked correctly in the latest multiplayer test.                                              |
| ✅     | Entering the map                | The latest multiplayer test entered the map successfully; the earlier missing-map issue did not recur.                       |
| 🛠     | Gas-station Shop entry and exit | Works in single-player; the entry portal did not spawn in multiplayer testing.                                               |
| 🛠     | Extraction and death recovery   | Works in single-player; in multiplayer, extraction points did not spawn and the respawn countdown stuck on its final second. |
| ✅     | Information display             | Ammo, magazines, and trading-currency balances display correctly.                                                            |
| 🛠     | Teleporter and departure        | Works in single-player; the map-selection interface and block textures still need work.                                      |
| 🛠     | Expedition loadout management   | Items not taken out are temporarily kept in hideout storage; the final persistence method is still being planned.            |
| 🛠     | Enemies                         | Basic AI is acceptable, but spawning, damage, and health still need adjustment.                                              |
| 🛠     | Loot Boxes                      | They can be searched and reveal contents gradually; sound and loot balance are still missing.                                |
| 🛠     | Recovery Broker trading         | Buying and selling work; item selection and prices still need balancing.                                                     |
| 🛠     | Existing firearms               | Function correctly in single-player, but their assets and audio are inconsistent in quality.                                 |
| 🔍     | Supplies and medical items      | Not yet retested after the latest mechanics update.                                                                          |

## Current priorities

1. Fix the multiplayer blockers: extraction points, gas-station portals, and post-death respawning.
2. Fix duplicate reward Loot Box spawns when entering a map and broken reward Loot Box textures.
3. Build the basic Desert Wasteland map.
4. Balance enemies, container loot, and scavenger prices.
5. Improve the teleporter map-selection interface and block textures.

## Next directions

- Make enemy spawns and extraction points easier to tune through configuration.
- Build the Gas-station Shop interior and allow future maps to have multiple extraction points.
- Remake firearm and item assets; firearm modifications will also change weapon appearance.
- Add Traditional and Simplified Chinese language options.

For unplanned ideas, see [[en/20 - Content/Future Ideas|Future Ideas]].

For complete testing and known issues, see [[en/30 - Release/Known Issues|Known Issues and Testing]].
