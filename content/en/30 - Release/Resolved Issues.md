---
title: LastRecall Resolved Issues
tags:
  - lastrecall
  - fixes
---

# LastRecall Resolved Issues

This page records only issues confirmed as fixed in actual play. Items still awaiting verification remain in [[en/30 - Release/Known Issues|Known Issues and Testing]]. Fixes from the same day are combined into one entry.

## 2026-08-08 — Multiplayer and M1911 fixes

- **Multiplayer Gas-station Shop loading stall**: Host and remote-client entry and return both passed actual multiplayer testing; players no longer become stuck on the loading screen.
- **Round-trip regression checks**: In the Gas-station Shop and Desert Wasteland round-trip test at that time, existing NPC and loot states remained normal, and normal extraction and raid death/return flows passed. A later Host test found a separate possible loss-of-control issue after returning to the main world, now listed as a current blocker.
- **M1911 held display**: Severe held-position drift and left/right flip problems are fixed. The weapon now follows the player's facing direction reliably; its held pose may receive later art polish.
- **Dry-fire audio repetition**: Holding the fire button with an empty magazine no longer plays dry-fire audio at an abnormally high rate. It now follows the normal weapon-use rhythm.

**Confirmation:** M1911 custom gunshot audio has been confirmed to play correctly in actual gameplay; later work will focus on mixing and listening polish.

**Status:** ✅ All fixes and confirmation results above passed actual gameplay testing.

## 2026-08-05 — Fixes confirmed in multiplayer testing

- **Client reloading and ammo consumption**: Clients previously could not reload, or ammo was not deducted after reloading. A follow-up multiplayer test confirmed that both now work correctly.
- **Multiplayer extraction-point and Gas-station Shop portal generation**: Neither appeared in earlier multiplayer testing. A follow-up test confirmed both now generate normally.
- **Extraction countdown**: No countdown was shown during extraction. A follow-up multiplayer test confirmed that the countdown now displays normally.
- **Gas-station Shop entry countdown and earlier return location**: The entry countdown did not display and players returned to the wrong location. A follow-up test confirmed that entry and exit countdowns work and the earlier return-location issue is fixed.
- **Clients stuck restoring player data after leaving the Gas-station Shop**: Clients could previously fail to complete the exit from the shop. A follow-up multiplayer test confirmed the issue is fixed.
- **Incorrect Gas-station return, lost input, and item loss**: Players could return directly to the main world, lose controls, and then lose carried items after entering again. A follow-up multiplayer test confirmed these issues are fixed. The extra transition through the main world was also confirmed fixed in later testing.
- **Entry and exit refreshing Gas-station Shop loot**: Repeated entry and exit previously refreshed interior loot. A follow-up multiplayer test confirmed the issue is fixed.
- **Multiplayer respawning after death**: The respawn countdown previously stuck on its final second. A follow-up multiplayer test confirmed that players can now respawn normally.
- **Normal monsters spawning in raid worlds**: Normal monsters previously appeared in raid worlds. A follow-up test confirmed the issue is fixed.
- **PvP status notification spam**: Hosting or entering a raid could flood the screen with PvP-enabled or disabled notices. A follow-up multiplayer test confirmed the issue is fixed.
- **Different-team entry and same-team recognition**: Players from different teams could not enter raids normally; same-team players could damage each other and could not see names. A follow-up multiplayer test confirmed that different teams can enter, and same-team players are now recognised correctly.
- **Sterile Bandage healing and interrupted medical-item use**: Sterile Bandages did not restore health and medical items could be interrupted immediately. A follow-up test confirmed both issues are fixed.
- **Enemy patrol and getting-stuck behaviour**: Enemies tended to remain on high ground or get stuck on vehicles instead of patrolling normally. A follow-up test confirmed the issue is fixed. The lack of a turn reaction after an attack from behind remains tracked.
- **Enemy projectile hits and loot-box generation after enemy deaths**: Enemy ranged attacks could not hit, and no loot box appeared after an enemy died. A follow-up test confirmed both issues are fixed.
- **Duplicate Reward Loot Boxes and fragmented textures**: Entering a map could create duplicate Reward Loot Boxes and show fragmented textures. A follow-up test confirmed that boxes no longer duplicate and their textures display correctly.
- **Extra Gas-station Shop return transition and no interior-loot refresh**: Returning passed through the main world and interior loot did not refresh. A follow-up multiplayer test confirmed both issues are fixed.
- **Dropped items returning after death**: Items that should have remained in the raid could return to the player. A follow-up multiplayer test confirmed the issue is fixed.
- **Enemies not turning after being attacked from behind**: Enemies could keep facing the same direction after an attack. A follow-up multiplayer test confirmed they now turn normally.
- **Recovery Broker unable to buy modded raid items**: The merchant could not buy the relevant items. A follow-up multiplayer test confirmed it can now do so normally.

**Status:** ✅ All items above are confirmed fixed; later issues remain on the known-issues page.

## 2026-08-06 — Enemy projectile behaviour

- **Issue:** Enemy projectile speed and behaviour differed from player projectiles.
- **Verification:** Multiplayer testing confirmed that enemy projectiles now behave like player projectiles.
- **Status:** ✅ Confirmed fixed.

## Entry format

```markdown
## YYYY-MM-DD — Confirmed fixes

- **Issue name**: Issue and verification result.

**Status:** ✅ Confirmed fixed.
```

Related: [[en/30 - Release/Known Issues|Known Issues and Testing]] · [[en/00 - Project/Updates|Update Log]]
