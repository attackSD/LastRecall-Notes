---
title: LastRecall Update Log
tags:
  - lastrecall
  - changelog
---

# LastRecall Update Log

This page keeps dated project summaries and confirmed completed work only. For live status, see [[en/00 - Project/Progress|Current Progress]].

## 2026-08-05 — Follow-up multiplayer test

**Passed:**

- Multiplayer extraction points now generate.
- The Gas-station Shop portal now generates.
- Duplicate reward Loot Box spawns and broken reward Loot Box textures have been fixed.

**Issues found:**

- Neither Gas-station Shop entry nor extraction currently shows a countdown.
- Players who return from the Gas-station Shop return to the main spawn instead of beside the shop.
- Clients may lose all input after returning from the Gas-station Shop.
- A client leaving the Gas-station Shop can become stuck while player data is being restored.
- Normal monsters still appear in raid worlds.
- Medical supplies may have no effect, or can be interrupted immediately when used.
- After a player dies and returns to the main world, their dropped items can return to them.
- Entering with another team can reset the player's team.

See [[en/30 - Release/Known Issues|Known Issues and Testing]] for the current list.

## 2026-08-05 — Multiplayer test

**Passed:**

- Clients can reload and ammo is deducted correctly.
- Players can enter the map successfully; the earlier missing-map issue did not recur in this test.

**Issue found:**

- Players could not respawn after death; the countdown stuck on its final second.

Confirmed fixes are kept in [[en/30 - Release/Resolved Issues|Resolved Issues]].

## 2026-08-04 — New feature ideas organized

- Organized suggestions for hideout supplies, a medical station, firearm crafting and modifications, armor appearance, rarity, and future map directions.
- Every item remains an unscheduled idea; none has been committed for development.

See [[en/20 - Content/Future Ideas|Future Ideas]] for details.

## 2026-08-04 — Project status organized

- Organized currently available features, early construction work, known issues, and future directions.
- Confirmed that Desert Wasteland is the highest-priority map in development.
- Created public-facing pages for progress and issues.

## 2026-08-04 — Project update pages created

- Created public LastRecall project-update pages with a simplified structure.

## Entry format

```markdown
## YYYY-MM-DD — Update title

- Completed work:
- Player-visible change:
- Verification result:
- Next:
```
