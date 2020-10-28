---
id: GetPlayerLastShotVectors
title: GetPlayerLastShotVectors
description: Retrieves the start and end (hit) position of the last bullet a player fired.
tags: ["player"]
---

:::warning

This function was added in SA-MP 0.3z and will not work in earlier versions!

:::

## คำอธิบาย

Retrieves the start and end (hit) position of the last bullet a player fired.

| Name            | Description                                                                             |
| --------------- | --------------------------------------------------------------------------------------- |
| playerid        | The ID of the player to get the last bullet shot information of.                        |
| &Float:fOriginX | A float variable in which to save the X coordinate of where the bullet originated from. |
| &Float:fOriginY | A float variable in which to save the Y coordinate of where the bullet originated from. |
| &Float:fOriginZ | A float variable in which to save the Z coordinate of where the bullet originated from. |
| &Float:fHitPosX | A float variable in which to save the X coordinate of where the bullet hit.             |
| &Float:fHitPosY | A float variable in which to save the Y coordinate of where the bullet hit.             |
| &Float:fHitPosY | A float variable in which to save the Z coordinate of where the bullet hit.             |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. The player specified does not exist.

The position of the last bullet is stored in the specified variables.

## ตัวอย่าง

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/lastshot", true) == 0)
    {
        new lsString[128],
            Float:fOriginX, Float:fOriginY, Float:fOriginZ,
            Float:fHitPosX, Float:fHitPosY, Float:fHitPosZ;

        GetPlayerLastShotVectors(playerid, fOriginX, fOriginY, fOriginZ, fHitPosX, fHitPosY, fHitPosZ);
        format(lsString, 128, "Last Shot Information: Origin: %f, %f, %f. Hit position: %f, %f, %f", fOriginX, fOriginY, fOriginZ, fHitPosX, fHitPosY, fHitPosZ);
        SendClientMessage(playerid, -1, lsString);
        return 1;
    }
    return 0;
}
```

## บันทึก

:::warning

This function will only work when lag compensation is enabled. If the player hit nothing, the hit positions will be 0. This means you can't currently calculate how far a bullet travels through open air.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- GetPlayerWeaponData: Find out information about weapons a player has.
- GetPlayerWeapon: Check what weapon a player is currently holding.
- VectorSize: Get the length (norm) of a vector.
- OnPlayerWeaponShot: Called when a player fires a weapon.
