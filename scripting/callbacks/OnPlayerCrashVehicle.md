---
title: OnPlayerCrashVehicle
description: This callback is called when a player crashes their vehicle.
tags: ["player"]
---

# OnPlayerCrashVehicle

<TagLinks />

## Description

This callback is called when a player crashes their vehicle.

| Name        | Description                                                   |
| ----------- | ------------------------------------------------------------- |
| playerid     | The ID of the player that crashed their vehicle. |
| vehicleid | The ID of the vehicle crashed by the player. |
| Float:damage | The number of damages done to the vehicle. |

## Returns

It is always returned true [1]

## Examples

```c
public OnPlayerCrashVehicle(playerid, vehicleid, Float:damage)
{ 
    SendClientMessage(playerid, 0xFF0000FF, "You have crashed your vehicle!");
    SendClientMessage(playerid, 0xFF0000FF, "Learn how to drive, please!");
    return 1;
}
```

## Related Functions
