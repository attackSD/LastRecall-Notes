---
title: LastRecall Current Progress
tags:
  - lastrecall
  - progress
---

# LastRecall Current Progress

## Current focus

**Desert Wasteland** is the main Raid map. The basic Raid flow is now ready to support hands-on content work, so a simple early layout is being used to test whether a complete outing feels good: prepare at Base, depart, explore, fight, loot, extract, and return to Base.

## Feature overview

| Status | Area                                 | Current state                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------ | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ✅     | Base and departure                   | The hideout, party preparation, and departure work normally. The map-selection screen and teleporter material still need polish.                                                                                                                                                                                                                                                                                                                                                                                              |
| ✅     | Raid map and travel                  | Improved an issue that could prevent Raid maps from loading correctly in some situations. Desert Wasteland, the Gas-station Shop, and travelling, returning, and extracting between areas now work normally.                                                                                                                                                                                                                                                                                                                  |
| ✅     | Raid vision and tactical information | Raids currently use a 135-degree total viewing range as a prototype value. Areas outside the main view are softened and darkened while terrain remains readable. Hostile NPCs and players must be inside the viewing direction and unobstructed by walls to be seen clearly; when hidden, their body, weapon, and health bar do not reveal their exact position. Footsteps give a rough sense of nearby activity, direction, and distance. These limits apply only in Raids; the main world keeps normal Terraria visibility. |
| ✅     | Extraction and death                 | Extraction points, countdowns, respawning, death-drop recovery, and returning to Base work normally.                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ✅     | Multiplayer and teams                | Different teams can enter a Raid together. Other players' LastRecall guns, aim direction, and left/right facing display correctly. Teammates do not damage each other and can see teammate names; teammates currently remain normally visible.                                                                                                                                                                                                                                                                                |
| ✅     | Enemies                              | Basic encounters, awareness, ranged attacks, and enemy drops are in place. Enemy strength, numbers, and encounter density still need to match the rhythm of a Raid.                                                                                                                                                                                                                                                                                                                                                           |
| 🛠     | Loot and supplies                    | Loot Boxes can be searched and reveal items gradually. Search sounds, box contents, and reward balance still need work.                                                                                                                                                                                                                                                                                                                                                                                                       |
| 🛠     | Trading and information              | Eligible Raid goods can be sold to the Recovery Broker for Terra Coin, then exchanged for available firearms, ammunition, and attachments. Players can see their Terra Coin total while trading; stock, prices, and interface details still need work.                                                                                                                                                                                                                                                                        |
| 🛠     | Firearms and combat feel             | M1911, plus AK-47 and MP5 with temporary artwork, can all fire and reload normally. Hits, finishing shots, muzzle effects, dry fire, and close-wall firing have all been confirmed in multiplayer. Final art, more attachments, gun sound content, balance, and special weapon handling still need work.                                                                                                                                                                                                                      |
| ✅     | Healing and language                 | Health does not naturally regenerate during a Raid, and medical items take time to apply. Sterile Bandages and other medical items work normally; in-game Traditional/Simplified Chinese switching is complete.                                                                                                                                                                                                                                                                                                               |
| 🛠     | Loadout storage                      | Before leaving, players choose which equipment to take into a Raid. Backpack items left behind are retained and can be recovered from the player's recovery container after returning to Base. This is still a temporary way to handle stored equipment.                                                                                                                                                                                                                                                                      |

## Current priorities

1. Use simple Desert Wasteland and Gas-station Shop layouts to test the full Raid flow, including indoor and outdoor sightlines, doors, windows, corners, cover, blind areas, and enemy, loot, and extraction placement.
2. Tune map size, travel distance, exploration rhythm, combat spacing, footstep cues, risk, and reward so one Raid feels complete.
3. Alongside map work, continue firearm art, audio, attachments, and balance, including gunshot sounds for underground areas and tunnels.

## Next directions

- Make enemy spawns and extraction points easier to tune for each map, including multiple extraction points.
- Expand the Gas-station Shop's scenes, exploration content, and art.
- Add a firearm modification bench in Base so players can install attachments and see the weapon change.

For unplanned ideas, see [[en/20 - Content/Future Ideas|Future Ideas]].

For current issues, see [[en/30 - Release/Known Issues|Known Issues]].
