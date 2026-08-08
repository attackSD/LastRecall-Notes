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

- Host and remote-client round trips between the Exterior and Gas-station Shop passed multiplayer testing. Existing NPC and loot states remained normal after travel, and normal extraction plus Raid death/return flows also passed regression checks.
- The Raid-to-main-world control regression, where a player could not move or open the menu after returning, is resolved and passed Host-and-player regression testing.
- Raid death drops return correctly after re-entering the Exterior. After all drops are recovered, extracting, and starting a new Raid, the old drops do not appear again.
- Severe M1911 held-position drift and left/right flipping are fixed; custom M1911 gunshot audio was confirmed to play in actual gameplay.
- Dry-fire audio no longer repeats at an abnormally high rate and now follows the normal weapon-use cadence.

**Still to complete:**

- An edge case in the replacement background Raid sector lifecycle has an implemented fix but still awaits final runtime verification.
- M1911 held-pose art, gunshot mixing, the firearm lineup, loot, and prices remain in refinement.

## 2026-08-07 — Crosshair system and firearm production continue

- Added a crosshair system so firearms and modification states can use different default aiming crosshairs.
- Gunshot audio, weapon models, and attachments continue to be built and adjusted together.

## 2026-08-06 — Enemy projectile fix and firearm overhaul

- Enemy projectiles were changed to behave like player projectiles, with multiplayer testing confirming normal results.
- The firearm overhaul began: previous firearms were removed, while audio and weapon assets are being rebuilt.
- The modification system is now available. M1911, Pistol Ammo, a suppressor, and an extended magazine were added; attachments affect weapon appearance and some performance.
- Gunshot audio now distinguishes open areas, interiors, underground spaces, and tunnels, as well as dry fire and suppressed shots. Recoil settings are also being introduced for firearms and attachments; sound feel and balance are still being tuned.

## 2026-08-05 — Multiplayer testing and map-entry flow

**Completed or confirmed:**

- Added a loading screen for map entry and enabled PvP automatically in Raid worlds. PvP status-message spam at server start and map entry was fixed.
- In-game Traditional Chinese and Simplified Chinese switching is complete.
- Players on different teams can enter a Raid; teammates no longer damage one another and can see teammate names.
- Clients can reload normally and ammunition is consumed correctly. Party preparation and departure, chest searching, and the current item/supply flow were confirmed working.
- Players can enter the map successfully; the earlier disappearing-map issue did not recur in recent testing.
- Multiplayer extraction points and countdowns, the Gas-station Shop portal, and countdowns when entering and leaving the Gas-station Shop are working normally.
- Incorrect returns to the main world, lost input, item loss after re-entry, and client restoration stalls were fixed. Repeated travel no longer refreshes the Gas-station Shop's internal loot.
- The extra main-world transition when returning from the Gas-station Shop, and the issue where its internal loot did not refresh as intended, were fixed.
- Sterile Bandage failing to heal, medical-item interruption, and enemy patrols getting stuck on high ground or vehicles were fixed.
- Multiplayer death respawn, death drops returning to the player, normal monsters appearing in Raid worlds, enemy shots failing to hit players, missing post-death loot boxes, duplicated reward boxes, and fragmented reward-box textures were all confirmed fixed.
- Enemies failing to turn after being attacked from behind, and the Recovery Broker being unable to buy modded items brought back from a Raid, were fixed.

**Found during this round / follow-up work:**

- Keeping the currency visible as `Terra Coin: amount` during trades remains a planned improvement.
- Enemy projectile behaviour still needed to be aligned with player projectiles at this point.

**Continued checking:**

- Multiplayer behaviour of the map-entry loading screen.

For live status, see [[en/30 - Release/Known Issues|Known Issues and Testing]]; confirmed fixes are listed in [[en/30 - Release/Resolved Issues|Resolved Issues]].

## 2026-08-04 — Project notes and direction organised

- Created public-facing progress, update, known-issue, and resolved-issue pages.
- Organised existing features, early construction work, and future directions; Desert Wasteland was confirmed as the current priority map.
- Organised suggestions for hideout supplies, a medical station, firearm crafting and modifications, armour appearance, rarity, and future map directions. These items were not yet scheduled.

See [[en/20 - Content/Future Ideas|Future Ideas]].
