---
title: LastRecall Resolved Issues
tags:
  - lastrecall
  - fixes
---

# LastRecall Resolved Issues

This page records only issues confirmed as fixed in actual play; items still awaiting verification remain in [[en/30 - Release/Known Issues|Known Issues and Testing]]. Fixes from the same day are combined into one entry.

## 2026-08-08 — Raid return, death recovery, and multiplayer flow

- **Raid return controls:** Fixed the issue that could leave players unable to move or open menus after returning to the main world; Host-and-player regression testing passed.
- **Raid death recovery:** Fixed the issue where death drops could fail to reappear when entering the Raid again; recovery testing passed.
- **Duplicate recovery drops:** After all drops were collected, the player extracted and opened a new Raid, and the old drops did not appear again; duplication-prevention regression testing passed.
- **Gas-station Shop multiplayer travel:** Host and remote-client round trips passed multiplayer testing, with NPC, loot, extraction, and death flows remaining normal.
- **M1911 held display and audio:** Held-position drift, left/right flipping, and abnormally rapid dry-fire repetition are fixed; custom gunshot audio was confirmed in actual gameplay.

**Status:** All items above are confirmed fixed through actual gameplay testing.

## 2026-08-06 — Enemy projectile behaviour

- **Enemy projectiles:** Speed and behaviour were adjusted to match player projectiles and confirmed in multiplayer testing.

## 2026-08-05 — Multiplayer flow and content fixes

- Client reloading and ammo consumption, extraction points and countdowns, Gas-station Shop entry and exit countdowns, return locations, and client exit stalls were fixed.
- Incorrect Gas-station returns, lost input, item loss, repeated-loot refreshes, and the extra main-world transition were fixed.
- Respawning after death, dropped items, normal-monster spawning, enemy hits, post-death Loot Boxes, duplicate boxes, and fragmented textures were fixed.
- PvP notification spam, team recognition, Sterile Bandage healing, medical-item interruption, enemy patrol and turn behaviour, and Recovery Broker purchases of modded items were fixed.

**Status:** The items above are confirmed fixed.

## 2026-08-04 — Public testing pages created

- Created public progress, update, known-issue, and resolved-issue pages and organised project direction and unscheduled ideas.

Related: [[en/30 - Release/Known Issues|Known Issues and Testing]] · [[en/00 - Project/Updates|Update Log]].
