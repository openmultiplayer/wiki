---
id: OnPlayerLeaveRaceCheckpoint
title: OnPlayerLeaveRaceCheckpoint
description: This callback is called when a player leaves the race checkpoint.
tags: ["player", "checkpoint", "racecheckpoint"]
---

## คำอธิบาย

This callback is called when a player leaves the race checkpoint.

| Name     | Description                                         |
| -------- | --------------------------------------------------- |
| playerid | The ID of the player that left the race checkpoint. |

## ส่งคืน

มันถูกเรียกในฟิลเตอร์สคริปต์ก่อนเสมอ

## ตัวอย่าง

```c
public OnPlayerLeaveRaceCheckpoint(playerid)
{
    printf("Player %d left a race checkpoint!", playerid);
    return 1;
}
```

## บันทึก

:::tip

NPC สามารถเรียก Callback นี้ได้

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [SetPlayerCheckpoint](../../scripting/functions/SetPlayerCheckpoint.md): Create a checkpoint for a player.
- [DisablePlayerCheckpoint](../../scripting/functions/DisablePlayerCheckpoint.md): Disable the player's current checkpoint.
- [IsPlayerInCheckpoint](../../scripting/functions/IsPlayerInRaceCheckpoint.md): Check if a player is in a checkpoint.
- [SetPlayerRaceCheckpoint](../../scripting/functions/SetPlayerRaceCheckpoint.md): Create a race checkpoint for a player.
- [DisablePlayerRaceCheckpoint](../../scripting/functions/DisablePlayerRaceCheckpoint.md): Disable the player's current race checkpoint.
- [IsPlayerInRaceCheckpoint](../../scripting/functions/IsPlayerInRaceCheckpoint.md): Check if a player is in a race checkpoint.
