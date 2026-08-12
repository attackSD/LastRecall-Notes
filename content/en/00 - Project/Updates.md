---
title: LastRecall Update Log
tags:
  - lastrecall
  - changelog
---

# LastRecall Update Log

This page organises project progress by date; updates from the same day are combined into one entry. For live status, see [[en/00 - Project/Progress|Current Progress]].

## 2026-08-12 — Raid vision, map reliability, and content work

- Fixed an issue that could prevent Raid maps from loading correctly in some situations, improving their reliability in both development and packaged versions. Desert Wasteland, the Gas-station Shop, travelling between areas, and extraction have all been confirmed to work normally.
- Raids now have a viewing direction based on the current 135-degree prototype value, a soft directional vision mask, and real-cover checks. Enemies are only shown clearly when they are in the player's view and not hidden by a wall. These information limits apply only in Raids; the main world keeps normal visibility.
- Enemy footsteps now give a rough sense of nearby activity, direction, and distance, allowing players to notice a blind area through sound before turning to check it. In Raids, the character also faces the active viewing direction so the presentation does not disagree with where the player is looking.
- The vision-mask edge was softened after play feedback. The basic Raid flow is now ready to support hands-on content work, and the focus is shifting toward simple Desert Wasteland and Gas-station Shop layouts that test indoor and outdoor travel, sightlines, combat, exploration, loot, enemy placement, and extraction rhythm. Final art and the full content are still in development.

See [[en/30 - Release/Resolved Issues|Resolved Issues]] for the confirmed fixes.

## 2026-08-11 — Basic play checks for three firearms

- M1911's held-pose adjustment was checked in play: left/right facing, muzzle effects, and close-wall firing all work normally.
- Added an AK-47 with temporary artwork. Automatic fire, reloading, hits, and close-wall firing all work normally.
- Added an MP5 with temporary artwork. Its automatic fire, 30-round magazine, reloading, hits, and close-wall firing also work normally.
- M1911, AK-47, and MP5 show that handguns, rifles, and SMGs can all use the current basic controls. Future ordinary firearms can focus on their own art, sounds, balance, and feel.
- AK-47 and MP5 still use temporary artwork; their final appearance, held positions, audio, and attachment alignment are not decided yet.
- Firearms with different handling, such as shotguns, pump actions, and tube magazines, remain future work.
- Basic firearm controls are stable for now. The main focus is shifting to building and playing through a complete Desert Wasteland Raid; firearm art, sound, balance, and attachments will continue to be polished later.
- A new two-player firearm test confirmed that both players see muzzle flash and smoke correctly, without missing or duplicate effects. Dry fire and close-wall firing also behaved normally.
- Dry-fire audio, the difference between open-area and indoor gunshots, and finishing-shot feedback were all easy to recognise in normal play.

## 2026-08-10 — Gun combat feedback continues

- M1911 hit reactions, impact sounds, and muzzle effects continued to improve, making each shot feel clearer from firing to impact.
- Improved close-wall firing so shots are blocked normally by walls.
- We are still checking whether other players consistently see muzzle flash and smoke in multiplayer; the two-player check is not complete yet.
- Refined the M1911 dry-fire sound to be shorter and clearer; we will keep checking whether it is easy to recognise in multiplayer.
- Added an initial finishing-shot effect so the final shot looks clearer than an ordinary hit; we still need to see whether players naturally notice it during normal combat.

## 2026-08-09 — Gun combat feel and hit feedback

- The playable core of the M1911 as the first firearm continues to be integrated: held display, aiming, recoil, semi-automatic fire, reloading, and attachments remain in refinement.
- Started connecting the M1911's firing, hit, and defeat feedback against enemies. Blood marks and a brief visual reaction when an enemy is hit were confirmed in play.
- This is visual hit feedback; advanced enemy movement and combat reactions are separate work, and what other multiplayer players see still needs confirmation.
- Later work will add impact audio, muzzle and defeat feedback. Different gunshot sounds for different spaces and terrain remain planned, not complete.

## 2026-08-08 — Raid, Gas-station Shop, and M1911 update

- Completed a multiplayer stability pass for Raid returns, death-drop recovery, Gas-station Shop travel, and moving between Raid areas.
- Improved M1911 held display and dry-fire audio; the current M1911 gunshot is also working in game.
- M1911 held-pose art and audio mixing, as well as the firearm lineup, loot, and trading, will continue to be refined.

See [[en/30 - Release/Resolved Issues|Resolved Issues]] for each fix.

## 2026-08-07 — Crosshair system and firearm production continue

- Added a crosshair system so firearms and modification states can use different default aiming crosshairs.
- Gunshot audio, weapon models, and attachments continue to be built and adjusted together.

## 2026-08-06 — Enemy projectile fix and firearm overhaul

- Enemy bullets were changed to behave like player bullets, with multiplayer testing confirming normal results.
- The firearm overhaul began: previous firearms were removed, while audio and weapon assets are being rebuilt.
- The modification system is now available. M1911, Pistol Ammo, a suppressor, and an extended magazine were added; attachments affect weapon appearance and some performance.
- Gunshot audio work added dry-fire, suppressed-shot, and mechanical feedback. Different gunshot sounds for open areas, interiors, underground spaces, and tunnels remain planned; recoil settings are also being introduced for firearms and attachments, while sound feel and balance continue to be tuned.

## 2026-08-05 — Multiplayer play and map entry

- Completed a multiplayer Raid-flow improvement pass covering map entry, team play, reloading, looting, extraction, and returning after death.
- Travel to and from the Gas-station Shop became more reliable, while loading screens and countdowns make map changes easier to follow.
- Healing, enemies, Reward Loot Boxes, and the merchant all improved in the same round. In-game Traditional/Simplified Chinese switching was also completed.
- Many different player-facing problems were found and fixed during this work; see [[en/30 - Release/Resolved Issues|Resolved Issues]] for the detailed list.

## 2026-08-04 — Project notes and direction organised

- Created public-facing progress, update, known-issue, and resolved-issue pages.
- Organised existing features, early construction work, and future directions; Desert Wasteland was confirmed as the current priority map.
- Organised suggestions for hideout supplies, a medical station, firearm crafting and modifications, armour appearance, rarity, and future map directions. These items were not yet scheduled.

See [[en/20 - Content/Future Ideas|Future Ideas]].
