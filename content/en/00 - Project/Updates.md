---
title: LastRecall Update Log
tags:
  - lastrecall
  - changelog
---

# LastRecall Update Log

This page organizes project progress by date. Updates from the same day are combined into one entry. For live status, see [[en/00 - Project/Progress|Current Progress]].

## 2026-08-06 — Enemy projectile behaviour fixed

- Enemy projectiles now behave like player projectiles.
- Confirmed in multiplayer testing.

## 2026-08-05 — Multiplayer testing and map-entry flow update

**Completed or confirmed:**

- A loading screen now appears when entering a map, making the transition clearer. PvP now turns on automatically when a player enters a raid world, and PvP-status notification spam when hosting or entering has been fixed.
- Switching between Traditional and Simplified Chinese is now available in-game.
- Players from different teams can now enter raids. Same-team players no longer damage each other and can see teammate names.
- Clients can reload and ammo is deducted correctly. Team preparation, departure, Loot Box searches, existing items, and supplies now work normally.
- Players can enter the map successfully; the earlier missing-map issue did not recur in the latest test.
- Multiplayer extraction points and countdowns, the Gas-station Shop portal, and its entry and exit countdowns now work normally.
- The earlier incorrect main-world return, lost input, later item loss, and client player-data restoration stall after leaving the Gas-station Shop have been fixed. Repeated entry and exit no longer refreshes interior loot.
- The extra main-world transition on returning from the Gas-station Shop and its lack of interior-loot refresh have been fixed.
- Sterile Bandage healing, interrupted medical-item use, and enemy patrols getting stuck on high ground or vehicles have been fixed.
- Multiplayer respawning after death, dropped items returning after death, normal-monster generation in raid worlds, enemy projectile hits, loot-box generation after enemy deaths, duplicate reward Loot Box spawns, and fragmented Reward Loot Box textures have all been confirmed fixed.
- Enemies not turning after attacks from behind and the Recovery Broker being unable to buy modded raid items have been fixed.

**Issues found and still to address:**

- A text-only, always-visible “Terra Coin: amount” display during merchant transactions is a requested improvement.
- Enemy projectiles need to behave like player projectiles.

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
