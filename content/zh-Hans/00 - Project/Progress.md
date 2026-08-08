---
title: LastRecall 目前進度
tags:
  - lastrecall
  - progress
---

# LastRecall 目前進度

目前垂直切片中的 Raid 進入、撤離、死亡返回與死亡掉落回收流程皆已可正常運作。目前技術工作重點是完成最後一項背景區域生命週期回歸驗證，之後再繼續 NPC AI 與內容擴充。

## 里程碑

| 狀態 | 項目 | 目前情況 |
| --- | --- | --- |
| 已完成 | Raid 進入與 Exterior | 基礎進入流程可運作。 |
| 已完成 | 區域移動與撤離 | sector travel、extraction / evacuation 基礎流程可運作。 |
| 已完成 | 死亡返回與掉落回收 | death return、掉落恢復與防止重複生成已通過實際遊戲驗證。 |
| 已完成 | 返回主世界操作 | Raid 返回主世界後無法移動或開啟選單的回歸問題已解決。 |
| 已完成 | Encounter Phase 1 | 第一階段遭遇流程已完成。 |
| 已完成 | NPC Perception Phase 2A | NPC 感知第二階段 A 已完成。 |
| 進行中 | 背景區域生命週期 | 替換背景 Raid 區域仍有最後一項實際遊戲驗證。 |
| 尚未開始 | Phase 2B | 尚未開始。 |

## 目前重點

1. 完成背景 Raid 區域生命週期的最後回歸驗證。
2. 在基礎流程穩定後繼續 NPC AI 與內容擴充。

完整測試狀態請參閱 [[zh-Hans/30 - Release/Known Issues|已知問題與測試]]。
