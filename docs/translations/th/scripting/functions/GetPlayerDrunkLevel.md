---
id: GetPlayerDrunkLevel
title: GetPlayerDrunkLevel
description: Checks the player's level of drunkenness.
tags: ["player"]
---

:::warning

This function was added in SA-MP 0.3a and will not work in earlier versions!

:::

## คำอธิบาย

Checks the player's level of drunkenness. If the level is less than 2000, the player is sober. The player's level of drunkness goes down slowly automatically (26 levels per second) but will always reach 2000 at the end (in 0.3b it will stop at zero). The higher drunkenness levels affect the player's camera, and the car driving handling. The level of drunkenness increases when the player drinks from a bottle (You can use SetPlayerSpecialAction to give them bottles).

| Name     | Description                                            |
| -------- | ------------------------------------------------------ |
| playerid | The player you want to check the drunkenness level of. |

## ส่งคืน

An integer with the level of drunkenness of the player.

## ตัวอย่าง

```c
public OnPlayerStateChange(playerid, oldstate, newstate)
{
    if (newstate == PLAYER_STATE_DRIVER && GetPlayerDrunkLevel(playerid) > 1999)
    {
        SendClientMessage(playerid,0xFFFFFFFF,"Don't drink and drive!");
        RemovePlayerFromVehicle(playerid);
    }
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [SetPlayerDrunkLevel](../functions/SetPlayerDrunkLevel): Set a player's drunk level.
