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
| Same-team players can damage each other and cannot see names | 🔴 Needs fixing | In a raid, players displayed as the same team can still damage teammates and cannot see teammate names. |
| Reward Loot Box textures fragment on raid entry | 🔴 Needs fixing | Reward Loot Box textures can still display as fragmented when entering a raid world. |
| Extra transition when returning from the Gas-station Shop | 🛠 Needs fixing | Returning from the shop goes through the main world before going to Desert Wasteland. |
| Entering and exiting the Gas-station Shop refreshes loot | 🔴 Needs fixing | Repeated entry and exit can refresh its interior loot. |
| Dropped items return after a player dies | 🔴 Needs fixing | Items that should stay in the raid can return to the player on returning to the main world. |
| Enemies do not turn after being attacked from behind | 🛠 Needs fixing | An enemy can keep facing the same direction after being attacked, making its reaction unnatural. |
| Enemy projectile speed and behaviour | 🛠 Needs tuning | Projectiles are too slow and behave differently from player projectiles. |
| Merchant cannot buy modded items brought back from raids | 🔴 Needs fixing | The merchant currently cannot purchase modded items brought back from a raid. |
| Team resets after entering with another team | 🛠 Needs fixing | The player's team can be reset after entering with another team. |

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
- PvP enabled and disabled notifications no longer flood the screen.
- Multiplayer extraction points and countdowns now work normally.
- The Gas-station Shop portal and entry and exit countdowns now work normally. The earlier incorrect return, lost input, item loss, and client player-data restoration stall have been fixed.
- Players can now respawn normally after death in multiplayer, and normal monsters no longer generate in raid worlds.
- Sterile Bandages restore health normally, and medical-item use is no longer randomly interrupted.
- Enemies no longer tend to get stuck on high ground or vehicles; their projectiles can hit players, and loot boxes now generate after enemies die.
- Reward Loot Boxes no longer duplicate.
- Team preparation, departure, Loot Box searches, existing items, and supplies now work normally.

See [[en/30 - Release/Resolved Issues|Resolved Issues]] for confirmed fixes.

## No current known issues

- The player hideout works normally.
- Ammo and magazine counts display correctly.
- Text display has no known issues. Traditional and Simplified Chinese switching will be added in the future.

Related: [[en/00 - Project/Progress|Current Progress]] · [[en/30 - Release/Resolved Issues|Resolved Issues]] · [[en/00 - Project/Updates|Update Log]]
