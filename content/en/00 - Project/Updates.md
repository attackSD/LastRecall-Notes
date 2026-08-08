---
title: LastRecall Update Log
tags:
  - lastrecall
  - changelog
---

# LastRecall Update Log

This page organises project progress by date; updates from the same day are combined into one entry. For live status, see [[en/00 - Project/Progress|Current Progress]].

## 2026-08-08 — Raid, Gas-station Shop, and M1911 update

**Completed or confirmed:**

- Host and remote-client round trips at the Gas-station Shop passed multiplayer testing; NPC, loot, extraction, and death flows remained normal.
- M1911 held-position drift and left/right flipping are fixed; custom gunshot audio was confirmed in actual gameplay.
- Dry-fire audio no longer repeats at an abnormally high rate and now follows the normal weapon-use cadence.
- The Raid-to-main-world control regression is resolved and passed Host-and-player regression testing.
- Raid death recovery and the prevention of duplicate recovery drops both passed runtime regression testing.

**Still to complete:**

- An edge case in the replacement background Raid sector lifecycle has an implemented fix but still awaits final runtime verification.
- M1911 held-pose art, gunshot mixing, the firearm lineup, loot, and prices remain in refinement.

## 2026-08-07 — Crosshair system and firearm production continue

- Added a crosshair system so firearms and modification states can use different default aiming crosshairs.
- Gunshot audio, weapon models, and attachments continue to be built and adjusted together.

## 2026-08-06 — Enemy projectile fix and firearm overhaul

- Enemy projectiles were adjusted to behave like player projectiles and passed multiplayer testing.
- The firearm audio, model, and attachment overhaul began; M1911, Pistol Ammo, a suppressor, and an extended magazine are integrated.
- Environmental audio, dry fire, suppressed shots, and recoil settings continue to be tuned; numerical balance is unfinished.

## 2026-08-05 — Multiplayer testing and map-entry flow

- Loading screens, automatic raid PvP, team recognition, reloading, extraction points and countdowns, death respawn, dropped-item handling, and Gas-station Shop portals passed their relevant tests.
- Incorrect Gas-station returns, lost input, item loss, client restoration stalls, repeated-loot refreshes, and the extra main-world transition were fixed.
- Sterile Bandage healing, medical-item interruption, enemy patrol and stuck behaviour, enemy hits, loot-box generation, duplicate boxes, and fragmented textures were confirmed fixed.
- Enemy turn reactions and Recovery Broker purchases of modded raid items were fixed.

## 2026-08-04 — Project notes and direction organised

- Created public-facing progress, update, known-issue, and resolved-issue pages.
- Organised existing features, early construction work, and future directions; Desert Wasteland remains the first major Raid.
- Organised unscheduled ideas for hideout supplies, a medical station, firearm crafting and modifications, armour appearance, rarity, and future maps.

Related: [[en/30 - Release/Known Issues|Known Issues and Testing]] · [[en/30 - Release/Resolved Issues|Resolved Issues]].
