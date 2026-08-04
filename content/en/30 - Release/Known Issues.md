---
title: LastRecall Known Issues and Testing
tags:
  - lastrecall
  - testing
---

# LastRecall Known Issues and Testing

## Current blockers

| Issue | Status | Details |
| --- | --- | --- |
| Gas-station Shop entry has no countdown | 🔴 Needs fixing | Players do not see a countdown when entering the Gas-station Shop. |
| Extraction has no countdown | 🔴 Needs fixing | Players do not see a countdown when extracting. |
| Gas-station Shop return location is incorrect | 🔴 Needs fixing | Players return to the main spawn instead of beside the shop. |
| Clients lose input after returning from the Gas-station Shop | 🔴 Needs fixing | A client may be unable to use any controls after returning. |
| Player-data restoration can stall after leaving the Gas-station Shop | 🔴 Needs fixing | A client can become stuck while player data is being restored. |
| Players cannot respawn after death in multiplayer | 🔴 Needs fixing | The post-death respawn countdown sticks on its final second. |
| Dropped items return after a player dies | 🔴 Needs fixing | Items that should stay in the raid can return to the player on returning to the main world. |
| Normal monsters appear in raid worlds | 🛠 Needs fixing | Raid worlds should not generate normal monsters. |
| Medical supplies have no effect | 🔴 Needs fixing | Medical supplies may not produce their intended effect. |
| Medical supplies can be interrupted immediately | 🛠 Needs fixing | Using a medical supply may stop before it takes effect. |
| Team resets after entering with another team | 🛠 Needs fixing | The player's team can be reset after entering with another team. |

## Still needs adjustment

| Item | Status | Details |
| --- | --- | --- |
| Enemy strength | 🛠 Needs tuning | High-tier enemies can immediately down a 100-health player, and enemy health is high. |
| Loot Box contents and trading prices | 🛠 Needs tuning | Loot Box contents and Recovery Broker prices need to be rebalanced around raid risk. |
| Quality of existing firearm content | 🛠 Needs remake | Functionality has no obvious problems, but asset and audio sources are inconsistent in quality. |

## Items to test

- Team preparation and departure countdown.
- Container searches and existing items or supplies.
- Medical supplies again after their current issues are fixed.

## Latest multiplayer test: passed

- Clients can reload and ammo is deducted correctly.
- Players entered the map successfully; the earlier missing-map issue did not recur in the latest test.
- Multiplayer extraction points and the Gas-station Shop portal now generate.
- Duplicate reward Loot Box spawns and broken reward Loot Box textures have been fixed.

See [[en/30 - Release/Resolved Issues|Resolved Issues]] for confirmed fixes.

## No current known issues

- The player hideout works normally.
- Ammo, magazines, and trading-currency balances display correctly.
- Text display has no known issues. Traditional and Simplified Chinese switching will be added in the future.

Related: [[en/00 - Project/Progress|Current Progress]] · [[en/30 - Release/Resolved Issues|Resolved Issues]] · [[en/00 - Project/Updates|Update Log]]
