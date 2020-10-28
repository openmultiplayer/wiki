---
id: GangZoneCreate
title: GangZoneCreate
description: Create a gangzone (colored radar area).
tags: ["gangzone"]
---

## คำอธิบาย

Create a gangzone (colored radar area).

| Name | Description                                          |
| ---- | ---------------------------------------------------- |
| minx | The X coordinate for the west side of the gangzone.  |
| miny | The Y coordinate for the south side of the gangzone. |
| maxx | The X coordinate for the east side of the gangzone.  |
| maxy | The Y coordinate for the north side of the gangzone. |

## ส่งคืน

The ID of the created zone, returns -1 if not created

## ตัวอย่าง

```c
new gangzone;
gangzone = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);
```

```
            MinY
             v
      MinX > *-------------
             |            |
             |  gangzone  |
             |   center   |
             |            |
             -------------* < MaxX
                          ^
                          MaxY
```

## บันทึก

:::tip

This function merely CREATES the gangzone, you must use GangZoneShowForPlayer or GangZoneShowForAll to show it.

:::

:::warning

There is a limit of 1024 gangzones. Putting the parameters in the wrong order results in glitchy behavior.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [GangZoneDestroy](../functions/GangZoneDestroy): Destroy a gangzone.
- [GangZoneShowForPlayer](../functions/GangZoneShowForPlayer): Show a gangzone for a player.
- [GangZoneShowForAll](../functions/GangZoneShowForAll): Show a gangzone for all players.
- [GangZoneHideForPlayer](../functions/GangZoneHideForPlayer): Hide a gangzone for a player.
- [GangZoneHideForAll](../functions/GangZoneHideForAll): Hide a gangzone for all players.
- [GangZoneFlashForPlayer](../functions/GangZoneFlashForPlayer): Make a gangzone flash for a player.
- [GangZoneFlashForAll](../functions/GangZoneFlashForAll): Make a gangzone flash for all players.
- [GangZoneStopFlashForPlayer](../functions/GangZoneStopFlashForPlayer): Stop a gangzone flashing for a player.
- [GangZoneStopFlashForAll](../functions/GangZoneStopFlashForAll): Stop a gangzone flashing for all players.
