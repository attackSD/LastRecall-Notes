---
title: LastRecall Update Log
tags:
  - lastrecall
  - changelog
---

# LastRecall Update Log

This page organises project progress by date; updates from the same day are combined into one entry. For live status, see [[en/00 - Project/Progress|Current Progress]].

## 2026-08-11 — Shared firearm foundation and new-weapon verification

- M1911's shared held pose adjustment passed actual in-game verification; facing direction, muzzle effects, and close-wall firing now behave correctly.
- Added an AK-47 placeholder and verified automatic fire, reloading, hit and muzzle effects, and close-wall firing in-game.
- Added an MP5 placeholder and verified the same basic flow, including its 30-round magazine and reloading.
- M1911, AK-47, and MP5 show that the shared ordinary-firearm flow works across a pistol, an assault rifle, and an SMG. New ordinary firearms can now focus on their own content, art, tuning, and feel instead of rebuilding the basic flow each time.
- AK-47 and MP5 are still placeholders; their final appearance, held positions, audio, and attachment alignment are not decided yet.
- Next steps include more firearm content and special weapon behaviours that need different operation, such as shotguns, pump actions, or tube magazines.
- The shared normal-firearm proof is now considered a stable milestone. The main focus is shifting from validating the foundation to building and testing a playable Desert Wasteland Raid slice; firearm work can continue later as content-level polish.

## 2026-08-10 — Gun combat feedback continues

- M1911 hits now have clearer blood and visual reactions, with flesh-impact audio added; shots hitting enemies and shots hitting walls are clearly distinguished.
- Fixed a close-wall firing issue that could place a bullet beyond the wall; bullets are now blocked normally by walls.
- Added and tuned muzzle flash, sparks, smoke, and a brief lighting effect to make the firing-to-hit feedback loop clearer.
- Multiplayer muzzle flash and smoke synchronisation has entered runtime testing; the two-player Host & Play check is not complete yet.
- Refined the M1911 dry-fire sound to be shorter and clearer; multiplayer testing will still check how easily it can be recognised.
- Added an initial lethal-hit effect so the final shot has a clearer visual difference from an ordinary hit; player readability during normal combat still needs observation.

## 2026-08-09 — Gun combat feel and hit feedback

- The playable core of the M1911 as the first firearm continues to be integrated: held display, aiming, recoil, semi-automatic fire, reloading, and attachments remain in refinement.
- Started the M1911-versus-RaidScavenger gun-combat-feel vertical slice. Blood marks and a brief visual reaction when an enemy is hit have passed Host runtime testing.
- This is visual hit feedback, not completed advanced enemy movement or combat reactions; what remote multiplayer players see still needs confirmation.
- Later work will add impact audio, muzzle and kill feedback. Environment tails for gunfire in different spaces and terrain remain planned, not complete.

## 2026-08-08 — Raid, Gas-station Shop, and M1911 update

**Completed or confirmed:**

- Host and remote-client round trips between the Exterior and Gas-station Shop passed multiplayer testing. Existing NPC and loot states remained normal after travel, and normal extraction plus Raid death/return flows also passed regression checks.
- The Raid-to-main-world control regression, where a player could not move or open the menu after returning, is resolved and passed Host-and-player regression testing.
- Raid death drops return correctly after re-entering the Exterior. After all drops are recovered, extracting, and starting a new Raid, the old drops do not appear again.
- The edge case involving replacement background Raid sectors is fixed and passed Host & Play runtime regression testing.
- Severe M1911 held-position drift and left/right flipping are fixed; custom M1911 gunshot audio was confirmed to play in actual gameplay.
- Dry-fire audio no longer repeats at an abnormally high rate and now follows the normal weapon-use cadence.

**Still to complete:**

- M1911 held-pose art, gunshot mixing, the firearm lineup, loot, and prices remain in refinement.

## 2026-08-07 — Crosshair system and firearm production continue

- Added a crosshair system so firearms and modification states can use different default aiming crosshairs.
- Gunshot audio, weapon models, and attachments continue to be built and adjusted together.

## 2026-08-06 — Enemy projectile fix and firearm overhaul

- Enemy projectiles were changed to behave like player projectiles, with multiplayer testing confirming normal results.
- The firearm overhaul began: previous firearms were removed, while audio and weapon assets are being rebuilt.
- The modification system is now available. M1911, Pistol Ammo, a suppressor, and an extended magazine were added; attachments affect weapon appearance and some performance.
- Gunshot audio work added dry-fire, suppressed-shot, and mechanical feedback layers. Environment tails for open areas, interiors, underground spaces, and tunnels remain planned; recoil settings are also being introduced for firearms and attachments, while sound feel and balance continue to be tuned.

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
