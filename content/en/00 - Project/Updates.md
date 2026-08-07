---
title: LastRecall Update Log
tags:
  - lastrecall
  - changelog
---

# LastRecall Update Log

This page organizes project progress by date. Updates from the same day are combined into one entry. For live status, see [[en/00 - Project/Progress|Current Progress]].

## 2026-08-08 — Multiplayer Gas-station Shop and M1911 testing update

**Completed or confirmed:**

- Multiplayer Host and remote-client travel in both directions at the Gas-station Shop has been fixed and passed actual testing.
- Existing NPCs, loot, normal extraction, and raid death/return flows all remained normal after travel between the Gas-station Shop and Desert Wasteland.
- M1911 severe held-position drift and left/right flip issues are fixed.
- M1911 custom gunshot audio has been confirmed to play correctly in actual gameplay; later work will focus on mixing and listening polish.
- Holding the fire button with an empty magazine no longer causes dry-fire audio to repeat at an abnormally high rate. It now follows the normal weapon-use rhythm.

**Issues found or still to address:**

- Preparing a Desert Wasteland raid map in multiplayer can occasionally fail to load, preventing that raid from starting normally. This is under investigation.
- After evacuating from a raid back to the main world, a severe issue was found that can rarely leave the player completely unable to act. One reproduction occurred while a raid chest was still open; whether the two are related has not been confirmed.
- M1911 held pose and gunshot listening feel may receive later polish, but are not current blockers.

**Investigation and fix progress:**

- A further stability issue was located when a raid map is started again: an earlier leftover state can affect the next startup. An adjustment has been added and awaits actual multiplayer play verification.

## 2026-08-07 — Crosshair system and firearm production continue

- Added a crosshair system: each firearm has its own default aiming crosshair, and modifications can change it.
- Gunshot audio, weapon models, and attachments are being built and adjusted in parallel.

## 2026-08-06 — Enemy projectile fix and firearm overhaul in progress

- Enemy projectiles now behave like player projectiles.
- Confirmed in multiplayer testing.
- The firearm overhaul has begun: all previous firearms were removed, and firearm audio and assets are being reworked.
- The modification system is now live, with M1911, Pistol Ammo, a suppressor, and an extended magazine integrated. Attachments affect weapon appearance and some performance values; in-game and multiplayer verification remains.
- Gunshot audio now accounts for open areas, interiors, underground spaces, and tunnels, and distinguishes dry fire and suppressed shots. Listening tests and balance work remain.
- Recoil settings are now being introduced for firearms and attachments; numerical balance is not finished.

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
