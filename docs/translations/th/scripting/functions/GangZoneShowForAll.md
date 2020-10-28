---
id: GangZoneShowForAll
title: GangZoneShowForAll
description: Shows a gangzone with the desired color to all players.
tags: ["gangzone"]
---

## คำอธิบาย

Shows a gangzone with the desired color to all players.

| Name  | Description                                                                                               |
| ----- | --------------------------------------------------------------------------------------------------------- |
| zone  | The ID of the gangzone to show (returned by GangZoneCreate).                                              |
| color | The color to show the gang zone, as an integer or hex in RGBA color format. Alpha transparency supported. |

## ส่งคืน

1: The function executed successfully. The gang zone was shown for all players.

0: The function failed to execute. The gangzone does not exist.

## ตัวอย่าง

```c
new gGangzone;

public OnGameModeInit()
{
    gGangzone = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    if (IsPlayerAdmin(playerid))
    {
        GangZoneShowForAll(gGangzone, COLOR_RED);
    }
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [GangZoneCreate](../functions/GangZoneCreate): Create a gangzone.
- [GangZoneDestroy](../functions/GangZoneDestroy): Destroy a gangzone.
- [GangZoneShowForPlayer](../functions/GangZoneShowForPlayer): Show a gangzone for a player.
- [GangZoneHideForPlayer](../functions/GangZoneHideForPlayer): Hide a gangzone for a player.
- [GangZoneHideForAll](../functions/GangZoneHideForAll): Hide a gangzone for all players.
- [GangZoneFlashForPlayer](../functions/GangZoneFlashForPlayer): Make a gangzone flash for a player.
- [GangZoneFlashForAll](../functions/GangZoneFlashForAll): Make a gangzone flash for all players.
- [GangZoneStopFlashForPlayer](../functions/GangZoneStopFlashForPlayer): Stop a gangzone flashing for a player.
- [GangZoneStopFlashForAll](../functions/GangZoneStopFlashForAll): Stop a gangzone flashing for all players.
