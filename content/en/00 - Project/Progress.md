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
| ✅ | Language options | Switching between Traditional and Simplified Chinese is now available in-game. |
| 🛠 | Map-entry loading screen | A loading screen has been added when entering a map; it still needs continued multiplayer testing. |
| ✅ | Raid PvP and team recognition | PvP turns on automatically when a player enters a raid world, and notification spam has been fixed. Different teams can enter raids; same-team players no longer damage each other and can see teammate names. |
| ✅ | Gas-station Shop | Host and remote-client entry and return both passed multiplayer testing. NPC, loot, extraction, and death flows also remained normal after round trips. |
| ✅ | Extraction and death handling | Multiplayer extraction points and countdowns, respawning after death, and dropped-item handling have been fixed. |
| 🛠 | Reward Loot Boxes | Duplicate spawns and fragmented textures on raid entry have been fixed; sound and loot balance are still missing. |
| 🛠 | Information display | Ammo and magazine counts display correctly. Keeping a text-only “Terra Coin: amount” display beside merchant transactions is a future improvement. |
| 🛠 | Teleporter and departure | Team preparation and departure now work normally; the map-selection interface and block textures still need work. |
| 🛠 | Expedition loadout management | Items not taken out are temporarily kept in hideout storage; the final persistence method is still being planned. |
| 🛠 | Enemies | Patrol, stuck, and turn-reaction issues have been fixed; enemy strength still needs balancing. |
| ✅ | Enemy ranged attacks and loot | Projectile hits, player-matching projectile behaviour, and loot boxes after enemy deaths have all been fixed. |
| 🛠 | Loot Boxes | Existing items and supplies can be searched normally and reveal contents gradually; sound and loot balance are still missing. |
| 🛠 | Recovery Broker trading | The merchant can now buy modded items brought back from raids; item selection and prices still need balancing. |
| 🛠 | Firearm overhaul | Firearm audio, weapon models, and attachments are being built in parallel. A new crosshair system gives each firearm and modification state its own default crosshair. M1911 severe held-position and left/right flip issues are fixed, its custom gunshot audio now plays correctly in-game, and dry-fire audio no longer repeats at an abnormally high rate. Held pose and audio mixing may receive later polish; the overall firearm lineup and balance are still incomplete. |
| ✅ | Supplies and medical items | Sterile Bandage healing and interrupted medical-item use have been fixed. |

## Current priorities

1. Build the basic Desert Wasteland map and balance enemy strength.
2. Expand and balance M1911, its attachments, crosshairs, and firearm audio.
3. Balance Loot Box contents and Recovery Broker prices, and plan an always-visible Terra Coin total during trading.

## Next directions

- Make enemy spawns and extraction points easier to tune through configuration.
- Build the Gas-station Shop interior and allow future maps to have multiple extraction points.
- Remake firearm and item assets; firearm modifications will also change weapon appearance.

For unplanned ideas, see [[en/20 - Content/Future Ideas|Future Ideas]].

For complete testing and known issues, see [[en/30 - Release/Known Issues|Known Issues and Testing]].
