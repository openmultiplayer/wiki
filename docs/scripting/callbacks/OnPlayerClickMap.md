---
id: OnPlayerClickMap
title: OnPlayerClickMap
description: OnPlayerClickMap is called when a player places a target/waypoint on the pause menu map (by right-clicking).
tags: ["player"]
---

:::warning

This callback was added in SA-MP 0.3d and will not work in earlier versions!

:::

## Description

OnPlayerClickMap is called when a player places a target/waypoint on the pause menu map (by right-clicking).

| Name | Description |
| --- | --- |
| playerid | The ID of the player that placed a target/waypoint |
| Float:fX | The X float coordinate where the player clicked |
| Float:fY | The Y float coordinate where the player clicked |
| Float:fZ | The Z float coordinate where the player clicked (inaccurate - see note below) |

## Returns

1 - Will prevent other filterscripts from receiving this callback.

0 - Indicates that this callback will be passed to the next filterscript.

It is always called first in gamemode.

## Examples

```c
public OnPlayerClickMap(playerid, Float:fX, Float:fY, Float:fZ)
{
    SetPlayerPosFindZ(playerid, fX, fY, fZ);
    return 1;
}
```

## Notes

:::tip

The Z value returned will be 0 (invalid) if it is far away from the player; use the MapAndreas plugin to get a more accurate Z coordinate.

:::

## Related Functions
