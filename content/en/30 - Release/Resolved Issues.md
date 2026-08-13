---
title: LastRecall Resolved Issues
tags:
  - lastrecall
  - fixes
---

# LastRecall Resolved Issues

This page records only issues confirmed as fixed while playing. Items that still need checking remain in [[en/30 - Release/Known Issues|Known Issues]]. Fixes from the same day are combined, while each issue remains easy to find.

## 2026-08-13 — Raid vision, multiplayer information, and death-drop fixes

- **Areas behind walls stayed fully bright**: Areas behind walls could look as bright as directly visible space, making it unclear why a hostile enemy was concealed. Opaque walls and solid structures now lower the visual information behind them, while doors, windows, and other openings can still restore sight.
- **Solid sloped structures did not provide complete cover**: Solid slopes, including the Safe House roof, now block tactical line of sight in Raids.
- **Other players' gun and facing display was incorrect**: In multiplayer, other players now continuously display LastRecall firearms correctly, and their aim direction and left/right facing follow where they are looking.
- **Hostile players still revealed their position outside the view or behind walls**: Hostile players now follow the same Raid viewing and wall-cover rules as hostile NPCs; they return only when valid visual access is restored.
- **A concealed hostile player's health bar still revealed their position**: When a character is concealed, their body, held weapon, and health bar no longer disclose the exact position.
- **Old death drops were not replaced correctly after repeated multiplayer Raid deaths**: When a player dies again, their own previous death drops are correctly replaced. Another player's drops and ordinary ground items are unaffected.

**Status:** ✅ All items above are confirmed fixed in play; the multiplayer items were confirmed in multiplayer testing.

## 2026-08-12 — Raid map and vision fixes

- **Raid maps unavailable in some situations**: In some fresh or packaged setups, Desert Wasteland or the Gas-station Shop could fail to load correctly. Raid maps are now available reliably, and the flow from Desert Wasteland to the shop, back to the desert, and then to Base has been confirmed.
- **The first vision-mask version could prevent the mod from loading**: The initial version could cause LastRecall to become disabled while loading. The mod now loads normally, and the directional vision mask works during Raids.
- **Character facing disagreed with viewing direction**: While holding an ordinary item in a Raid, a character could appear to face away from the area being watched. Left/right facing now follows the active viewing direction.

**Status:** ✅ All items above are confirmed fixed in play.

## 2026-08-10 — Gun combat feedback fix

- **Shots could appear through nearby walls**: When firing very close to a wall, the shot or muzzle effect could appear on the other side. Shots are now blocked normally by walls.

**Status:** ✅ Confirmed fixed in play.

## 2026-08-08 — Raid return, death recovery, multiplayer, and M1911 fixes

- **Raid-return controls**: The issue that could leave players unable to move or open menus after returning to the main world is fixed and confirmed in multiplayer play.
- **Raid death recovery**: Death drops return correctly after re-entering the wasteland.
- **Duplicate recovery drops**: After all drops are recovered, extracting and opening a new Raid no longer recreates the old drops.
- **Gas-station Shop multiplayer travel**: Players can travel both ways in multiplayer; enemies, loot, extraction, and death flows remain normal after the trip.
- **M1911 held display**: Severe held-position drift and left/right flipping are fixed. The held pose may still receive later art polish.
- **Dry-fire audio repetition**: Holding fire with an empty magazine no longer plays dry-fire audio at an abnormally high rate.
- **Raid area travel**: The issue that could occur while repeatedly entering, leaving, or moving between Raid areas is fixed and confirmed in multiplayer play.

**Status:** ✅ All items above are confirmed fixed in play.

## 2026-08-06 — Enemy bullet behaviour

- **Enemy bullet speed and behaviour**: Multiplayer testing confirmed that enemy bullets now behave like player bullets.

**Status:** ✅ Confirmed fixed.

## 2026-08-05 — Fixes confirmed in multiplayer play

- **Multiplayer reloading and ammo consumption**: Players can reload normally in multiplayer, and ammo is consumed correctly.
- **Extraction-point and Gas-station Shop portal generation**: Both now generate normally in multiplayer.
- **Extraction countdown**: The countdown now displays normally.
- **Gas-station Shop entry countdown and return location**: Entry and exit countdowns work, and the return-location error is fixed.
- **Some players getting stuck when leaving the shop**: Fixed an issue that could stop some players from completing the exit from the Gas-station Shop in multiplayer.
- **Incorrect Gas-station return, lost input, and item loss**: Direct main-world returns, lost controls, lost carried items, and the extra main-world transition are fixed.
- **Repeated entry refreshing Gas-station Shop loot**: Fixed.
- **Multiplayer respawning after death**: The final-second respawn stall is fixed.
- **Normal monsters spawning in Raid worlds**: Fixed.
- **PvP status notification spam**: Fixed.
- **Different-team entry and same-team recognition**: Different teams can enter; teammates no longer hurt each other and can see names.
- **Sterile Bandage healing and interrupted medical-item use**: Both fixed.
- **Enemy patrol and getting-stuck behaviour**: Fixed.
- **Enemy bullets missing players and loot boxes not appearing after enemy deaths**: Both fixed.
- **Duplicate Reward Loot Boxes and fragmented textures**: Both fixed.
- **No Gas-station interior-loot refresh**: Fixed.
- **Dropped items returning after death**: Fixed.
- **Enemies not turning after being attacked from behind**: Fixed.
- **Recovery Broker unable to buy modded Raid items**: Fixed.

**Status:** ✅ All items above are confirmed fixed; later issues remain on the known-issues page.

## 2026-08-04 — Public testing pages created

- Created public progress, update, known-issue, and resolved-issue pages and organised project direction and unscheduled ideas.

Related: [[en/30 - Release/Known Issues|Known Issues]] · [[en/00 - Project/Updates|Update Log]]
