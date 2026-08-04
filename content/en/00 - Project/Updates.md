---
title: LastRecall Update Log
tags:
  - lastrecall
  - changelog
---

# LastRecall Update Log

This page organizes project progress by date. Updates from the same day are combined into one entry. For live status, see [[en/00 - Project/Progress|Current Progress]].

## 2026-08-05 — Multiplayer testing and map-entry flow update

**Completed or confirmed:**

- A loading screen now appears when entering a map, making the transition clearer. PvP now turns on automatically when a player enters a raid world, and PvP-status notification spam when hosting or entering has been fixed.
- Clients can reload and ammo is deducted correctly. Team preparation, departure, Loot Box searches, existing items, and supplies now work normally.
- Players can enter the map successfully; the earlier missing-map issue did not recur in the latest test.
- Multiplayer extraction points and countdowns, the Gas-station Shop portal, and its entry and exit countdowns now work normally.
- The earlier incorrect main-world return, lost input, later item loss, and client player-data restoration stall after leaving the Gas-station Shop have been fixed.
- Sterile Bandage healing, interrupted medical-item use, and enemy patrols getting stuck on high ground or vehicles have been fixed.
- Multiplayer respawning after death, normal-monster generation in raid worlds, enemy projectile hits, loot-box generation after enemy deaths, and duplicate reward Loot Box spawns have all been confirmed fixed.

**Issues found and still to address:**

- In raids, same-team players can still damage each other and cannot see teammate names.
- Reward Loot Box textures can still fragment when entering a raid world.
- Returning from the Gas-station Shop still goes through the main world before Desert Wasteland, and repeated entry and exit can refresh interior loot.
- The merchant cannot buy modded items brought back from raids. Keeping Terra Coin totals visible during transactions is a future improvement request.
- Enemies still do not turn after being attacked from behind, and their projectiles are too slow and behave differently from player projectiles.
- Dropped items may return to the player after death; entering with another team can reset the player's team.

**Still being checked:**

- The map-entry loading screen during multiplayer.

See [[en/30 - Release/Known Issues|Known Issues and Testing]] for full details, and [[en/30 - Release/Resolved Issues|Resolved Issues]] for confirmed fixes.

## 2026-08-04 — Project notes and direction organized

- Created public-facing project pages for progress, updates, and known issues.
- Organized existing features, early construction work, and future directions; Desert Wasteland remains the highest-priority map in development.
- Organized suggestions for hideout supplies, a medical station, firearm crafting and modifications, armor appearance, rarity, and future map directions. These ideas are not yet scheduled for development.

See [[en/20 - Content/Future Ideas|Future Ideas]] for details.

## Entry format

```markdown
## YYYY-MM-DD — Update title

**Completed or confirmed:**
-

**Issues found or still to address:**
-

**Next:**
-
```
