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
| 🛠 | Gas-station Shop | The multiplayer portal now appears, but the entry countdown, return location, client controls, and player-data flow need fixes. |
| 🛠 | Extraction and death recovery | The multiplayer extraction point now appears, but extraction has no countdown and death recovery still has serious multiplayer issues. |
| ✅ | Reward Loot Boxes | The duplicate-spawn and broken-texture issues have been fixed. |
| ✅ | Information display | Ammo, magazines, and trading-currency balances display correctly. |
| 🛠 | Teleporter and departure | Works in single-player; the map-selection interface and block textures still need work. |
| 🛠 | Expedition loadout management | Items not taken out are temporarily kept in hideout storage; the final persistence method is still being planned. |
| 🛠 | Enemies | Basic AI is acceptable, but spawning, damage, and health still need adjustment. |
| 🛠 | Loot Boxes | They can be searched and reveal contents gradually; sound and loot balance are still missing. |
| 🛠 | Recovery Broker trading | Buying and selling work; item selection and prices still need balancing. |
| 🛠 | Existing firearms | Function correctly in single-player, but their assets and audio are inconsistent in quality. |
| 🔴 | Supplies and medical items | Medical supplies currently may have no effect or be interrupted immediately when used. |

## Current priorities

1. Fix the Gas-station Shop multiplayer flow: countdown, return location, client controls, and player-data flow.
2. Fix multiplayer respawning after death and prevent dropped items from returning to the player.
3. Restore reliable effects and uninterrupted use for medical supplies.
4. Stop normal monsters from appearing in raid worlds and prevent teams from resetting after entering with another team.
5. Build the basic Desert Wasteland map, then balance enemies, container loot, and trading prices.

## Next directions

- Make enemy spawns and extraction points easier to tune through configuration.
- Build the Gas-station Shop interior and allow future maps to have multiple extraction points.
- Remake firearm and item assets; firearm modifications will also change weapon appearance.
- Add Traditional and Simplified Chinese language options.

For unplanned ideas, see [[en/20 - Content/Future Ideas|Future Ideas]].

For complete testing and known issues, see [[en/30 - Release/Known Issues|Known Issues and Testing]].
