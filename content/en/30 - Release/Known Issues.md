---
title: LastRecall Known Issues and Testing
tags:
  - lastrecall
  - testing
---

# LastRecall Known Issues and Testing

## Current blockers

| Issue                                                  | Status          | Details                                                                             |
| ------------------------------------------------------ | --------------- | ----------------------------------------------------------------------------------- |
| Multiplayer extraction points do not spawn             | 🔴 Needs fixing | Extraction points did not appear during multiplayer testing.                        |
| Multiplayer Gas-station Shop portal does not spawn     | 🔴 Needs fixing | The portal to enter the Gas-station Shop did not appear during multiplayer testing. |
| Players cannot respawn after death in multiplayer      | 🔴 Needs fixing | The post-death respawn countdown sticks on its final second.                        |
| Reward Loot Boxes spawn repeatedly when entering a map | 🔴 Needs fixing | One reward Loot Box is spawned for each player when entering a map.                 |
| Reward Loot Box textures are broken                    | 🔴 Needs fixing | Reward Loot Box textures do not display correctly.                                  |

## Still needs adjustment

| Item                                 | Status          | Details                                                                                         |
| ------------------------------------ | --------------- | ----------------------------------------------------------------------------------------------- |
| Enemy strength                       | 🛠 Needs tuning | High-tier enemies can immediately down a 100-health player, and enemy health is high.           |
| Loot Box contents and trading prices | 🛠 Needs tuning | Loot Box contents and Recovery Broker prices need to be rebalanced around raid risk.            |
| Quality of existing firearm content  | 🛠 Needs remake | Functionality has no obvious problems, but asset and audio sources are inconsistent in quality. |

## Items to test

- Team preparation and departure countdown.
- Post-death item recovery.
- Container searches and existing items or supplies.
- The single-player flow for supplies and medical items under the latest mechanics.

## Latest multiplayer test: passed

- Players entered the map successfully; the earlier missing-map issue did not recur in this test.

Client-side reloading and ammo consumption are confirmed fixed. See [[en/30 - Release/Resolved Issues|Resolved Issues]].

## No current known issues

- The player hideout works normally.
- Ammo, magazines, and trading-currency balances display correctly.
- Text display has no known issues. Traditional and Simplified Chinese switching will be added in the future.

Related: [[en/00 - Project/Progress|Current Progress]] · [[en/30 - Release/Resolved Issues|Resolved Issues]] · [[en/00 - Project/Updates|Update Log]]
