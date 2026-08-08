---
title: LastRecall Resolved Issues
tags:
  - lastrecall
  - fixes
---

# LastRecall Resolved Issues

This page records only issues confirmed as fixed in actual play; items awaiting verification remain in [[en/30 - Release/Known Issues|Known Issues and Testing]]. Fixes from the same day are combined, while each issue remains individually searchable.

## 2026-08-08 — Raid return, death recovery, multiplayer, and M1911 fixes

- **Raid-return controls**: The issue that could leave players unable to move or open menus after returning to the main world is fixed and passed Host-and-player regression testing.
- **Raid death recovery**: Death drops return correctly after re-entering the Exterior, confirmed in actual testing.
- **Duplicate recovery drops**: After all drops are recovered, extracting and opening a new Raid no longer recreates the old drops; duplication-prevention regression testing passed.
- **Gas-station Shop multiplayer travel**: Host and remote-client round trips passed testing; NPC, loot, extraction, and death flows remained normal after travel.
- **M1911 held display**: Severe held-position drift and left/right flipping are fixed. The held pose may still receive later art polish.
- **Dry-fire audio repetition**: Holding fire with an empty magazine no longer plays dry-fire audio at an abnormally high rate.
- **M1911 custom gunshot confirmation**: Actual gameplay confirmed that normal fire uses the current M1911 custom gunshot; later work focuses on mixing and listening polish.
- **Background Raid-sector lifecycle**: The edge case involving replacement background Raid sectors is fixed and passed Host & Play runtime regression testing.

**Status:** ✅ All items above passed actual gameplay testing.

## 2026-08-06 — Enemy projectile behaviour

- **Enemy projectile speed and behaviour**: Multiplayer testing confirmed that enemy projectiles now behave like player projectiles.

**Status:** ✅ Confirmed fixed.

## 2026-08-05 — Fixes confirmed in multiplayer testing

- **Client reloading and ammo consumption**: Clients now reload normally and ammo is consumed correctly.
- **Extraction-point and Gas-station Shop portal generation**: Both now generate normally in multiplayer.
- **Extraction countdown**: The countdown now displays normally.
- **Gas-station Shop entry countdown and return location**: Entry and exit countdowns work, and the return-location error is fixed.
- **Client restoration stall when leaving the shop**: Clients can complete the exit flow normally.
- **Incorrect Gas-station return, lost input, and item loss**: Direct main-world returns, lost controls, lost carried items, and the extra main-world transition are fixed.
- **Repeated entry refreshing Gas-station Shop loot**: Fixed.
- **Multiplayer respawning after death**: The final-second respawn stall is fixed.
- **Normal monsters spawning in Raid worlds**: Fixed.
- **PvP status notification spam**: Fixed.
- **Different-team entry and same-team recognition**: Different teams can enter; teammates no longer hurt each other and can see names.
- **Sterile Bandage healing and interrupted medical-item use**: Both fixed.
- **Enemy patrol and getting-stuck behaviour**: Fixed.
- **Enemy projectile hits and loot-box generation after enemy deaths**: Both fixed.
- **Duplicate Reward Loot Boxes and fragmented textures**: Both fixed.
- **No Gas-station interior-loot refresh**: Fixed.
- **Dropped items returning after death**: Fixed.
- **Enemies not turning after being attacked from behind**: Fixed.
- **Recovery Broker unable to buy modded Raid items**: Fixed.

**Status:** ✅ All items above are confirmed fixed; later issues remain on the known-issues page.

## 2026-08-04 — Public testing pages created

- Created public progress, update, known-issue, and resolved-issue pages and organised project direction and unscheduled ideas.

Related: [[en/30 - Release/Known Issues|Known Issues and Testing]] · [[en/00 - Project/Updates|Update Log]]
