---
title: LastRecall Current Progress
tags:
  - lastrecall
  - progress
---

# LastRecall Current Progress

Desert Wasteland is LastRecall's first major Raid and the core of the current vertical slice. The current focus is stabilising that Raid loop, continuing map-content development, and completing final runtime verification for the background Raid sector lifecycle.

## Current milestones

| Status | Feature                                 | Current state                                                                                                                                                    |
| ------ | --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ✅     | Player hideout                          | Works normally.                                                                                                                                                  |
| ✅     | Raid entry, Exterior, and sector travel | The basic flow is working.                                                                                                                                       |
| ✅     | Extraction and death return             | Extraction / evacuation and death return are working.                                                                                                            |
| ✅     | Death-drop recovery                     | Recovery and duplicate-generation prevention have passed runtime regression testing.                                                                             |
| ✅     | Raid return controls                    | The inability to move or open menus after returning to the main world is fixed and passed Host-and-player regression testing.                                    |
| ✅     | Gas-station Shop                        | It now works as an independent indoor area; Host and remote-client round trips passed multiplayer testing. Scenes, exploration, and art will continue to expand. |
| ✅     | Basic merchant flow                     | The Recovery Broker can handle modded items brought back from raids; contents and prices still need balancing.                                                   |
| ✅     | Encounter Phase 1                       | Complete.                                                                                                                                                        |
| ✅     | NPC Perception Phase 2A                 | Complete.                                                                                                                                                        |
| 🛠     | Background Raid sector lifecycle        | An edge case in replacement background sectors has an implemented fix and is awaiting final runtime verification.                                                |
| 🔵     | NPC Perception Phase 2B                 | Not started.                                                                                                                                                     |
| 🛠     | Desert Wasteland content                | Map, enemies, loot, atmosphere, and exploration content are still in early development and expansion.                                                            |
| 🛠     | Firearms and audio                      | The M1911 basic in-game flow is verified; held-pose art, mixing, attachments, lineup, and balance remain in refinement.                                          |
| ✅     | Supplies and medical items              | Sterile Bandage healing and abnormal interruption of medical-item use are fixed and have passed multiplayer testing.                                             |

## Current priorities

1. Complete final regression verification for the background Raid sector lifecycle.
2. Continue building Desert Wasteland's map, enemies, loot, and atmosphere.
3. Continue NPC AI and content expansion after the core Raid is stable, while balancing firearms, loot, and merchant prices.

For unscheduled ideas, see [[en/20 - Content/Future Ideas|Future Ideas]]. For full testing status, see [[en/30 - Release/Known Issues|Known Issues and Testing]].
