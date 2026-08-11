---
title: LastRecall Update Log
tags:
  - lastrecall
  - changelog
---

# LastRecall Update Log

This page organises project progress by date; updates from the same day are combined into one entry. For live status, see [[en/00 - Project/Progress|Current Progress]].

## 2026-08-11 — Basic play checks for three firearms

- M1911's held-pose adjustment was checked in play: left/right facing, muzzle effects, and close-wall firing all work normally.
- Added an AK-47 with temporary artwork. Automatic fire, reloading, hits, and close-wall firing all work normally.
- Added an MP5 with temporary artwork. Its automatic fire, 30-round magazine, reloading, hits, and close-wall firing also work normally.
- M1911, AK-47, and MP5 show that handguns, rifles, and SMGs can all use the current basic controls. Future ordinary firearms can focus on their own art, sounds, balance, and feel.
- AK-47 and MP5 still use temporary artwork; their final appearance, held positions, audio, and attachment alignment are not decided yet.
- Firearms with different handling, such as shotguns, pump actions, and tube magazines, remain future work.
- Basic firearm controls are stable for now. The main focus is shifting to building and playing through a complete Desert Wasteland Raid; firearm art, sound, balance, and attachments will continue to be polished later.

## 2026-08-10 — Gun combat feedback continues

- M1911 hits now have clearer blood and visual reactions, with flesh-impact audio added; shots hitting enemies and shots hitting walls are clearly distinguished.
- Fixed a close-wall firing issue that could place a bullet beyond the wall; bullets are now blocked normally by walls.
- Added and tuned muzzle flash, sparks, smoke, and a brief lighting effect to make the firing-to-hit feedback loop clearer.
- We are still checking whether other players consistently see muzzle flash and smoke in multiplayer; the two-player check is not complete yet.
- Refined the M1911 dry-fire sound to be shorter and clearer; we will keep checking whether it is easy to recognise in multiplayer.
- Added an initial finishing-shot effect so the final shot looks clearer than an ordinary hit; we still need to see whether players naturally notice it during normal combat.

## 2026-08-09 — Gun combat feel and hit feedback

- The playable core of the M1911 as the first firearm continues to be integrated: held display, aiming, recoil, semi-automatic fire, reloading, and attachments remain in refinement.
- Started connecting the M1911's firing, hit, and defeat feedback against enemies. Blood marks and a brief visual reaction when an enemy is hit were confirmed in play.
- This is visual hit feedback; advanced enemy movement and combat reactions are separate work, and what other multiplayer players see still needs confirmation.
- Later work will add impact audio, muzzle and defeat feedback. Different gunshot sounds for different spaces and terrain remain planned, not complete.

## 2026-08-08 — Raid, Gas-station Shop, and M1911 update

**Completed or confirmed:**

- Players can travel both ways between the open wasteland and Gas-station Shop in multiplayer. Existing enemy and loot states remain normal after travel, along with normal extraction and Raid death/return flows.
- The problem where a player could not move or open the menu after returning from a Raid is resolved and confirmed in multiplayer play.
- Raid death drops return correctly after re-entering the wasteland. After all drops are recovered, extracting, and starting a new Raid, the old drops do not appear again.
- The problem that could affect a replacement background Raid area is fixed and confirmed in multiplayer play.
- Severe M1911 held-position drift and left/right flipping are fixed; custom M1911 gunshot audio was confirmed to play in actual gameplay.
- Dry-fire audio no longer repeats at an abnormally high rate and now follows the normal weapon-use cadence.

**Still to complete:**

- M1911 held-pose art, gunshot mixing, the firearm lineup, loot, and prices remain in refinement.

## 2026-08-07 — Crosshair system and firearm production continue

- Added a crosshair system so firearms and modification states can use different default aiming crosshairs.
- Gunshot audio, weapon models, and attachments continue to be built and adjusted together.

## 2026-08-06 — Enemy projectile fix and firearm overhaul

- Enemy bullets were changed to behave like player bullets, with multiplayer testing confirming normal results.
- The firearm overhaul began: previous firearms were removed, while audio and weapon assets are being rebuilt.
- The modification system is now available. M1911, Pistol Ammo, a suppressor, and an extended magazine were added; attachments affect weapon appearance and some performance.
- Gunshot audio work added dry-fire, suppressed-shot, and mechanical feedback. Different gunshot sounds for open areas, interiors, underground spaces, and tunnels remain planned; recoil settings are also being introduced for firearms and attachments, while sound feel and balance continue to be tuned.

## 2026-08-05 — Multiplayer play and map entry

**Completed or confirmed:**

- Added a loading screen for map entry and enabled PvP automatically in Raid worlds. PvP status-message spam at server start and map entry was fixed.
- In-game Traditional Chinese and Simplified Chinese switching is complete.
- Players on different teams can enter a Raid; teammates no longer damage one another and can see teammate names.
- Players can reload normally and ammunition is consumed correctly. Party preparation and departure, chest searching, and the current item/supply flow were confirmed working.
- Players can enter the map successfully; the earlier disappearing-map issue did not recur in recent testing.
- Multiplayer extraction points and countdowns, the Gas-station Shop portal, and countdowns when entering and leaving the Gas-station Shop are working normally.
- Incorrect returns to the main world, lost input, item loss after re-entry, and players getting stuck while returning were fixed. Repeated travel no longer refreshes the Gas-station Shop's internal loot.
- The extra main-world transition when returning from the Gas-station Shop, and the issue where its internal loot did not refresh as intended, were fixed.
- Sterile Bandage failing to heal, medical-item interruption, and enemy patrols getting stuck on high ground or vehicles were fixed.
- Multiplayer death respawn, death drops returning to the player, normal monsters appearing in Raid worlds, enemy shots failing to hit players, missing post-death loot boxes, duplicated reward boxes, and fragmented reward-box textures were all confirmed fixed.
- Enemies failing to turn after being attacked from behind, and the Recovery Broker being unable to buy modded items brought back from a Raid, were fixed.

**Found during this round / follow-up work:**

- Keeping the currency visible as `Terra Coin: amount` during trades remains a planned improvement.
- Enemy bullet behaviour still needed to be aligned with player bullets at this point.

**Continued checking:**

- Multiplayer behaviour of the map-entry loading screen.

For live status, see [[en/30 - Release/Known Issues|Known Issues]]; confirmed fixes are listed in [[en/30 - Release/Resolved Issues|Resolved Issues]].

## 2026-08-04 — Project notes and direction organised

- Created public-facing progress, update, known-issue, and resolved-issue pages.
- Organised existing features, early construction work, and future directions; Desert Wasteland was confirmed as the current priority map.
- Organised suggestions for hideout supplies, a medical station, firearm crafting and modifications, armour appearance, rarity, and future map directions. These items were not yet scheduled.

See [[en/20 - Content/Future Ideas|Future Ideas]].
