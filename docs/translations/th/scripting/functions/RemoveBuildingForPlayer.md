---
id: RemoveBuildingForPlayer
title: RemoveBuildingForPlayer
description: Removes a standard San Andreas model for a single player within a specified range.
tags: ["player"]
---

:::warning

This function was added in SA-MP 0.3d and will not work in earlier versions!

:::

## คำอธิบาย

Removes a standard San Andreas model for a single player within a specified range.

| Name          | Description                                                                       |
| ------------- | --------------------------------------------------------------------------------- |
| playerid      | The ID of the player to remove the objects for.                                   |
| modelid       | The model to remove.                                                              |
| Float:fX      | The X coordinate around which the objects will be removed.                        |
| Float:fY      | The Y coordinate around which the objects will be removed.                        |
| Float:fZ      | The Z coordinate around which the objects will be removed.                        |
| Float:fRadius | The radius around the specified point to remove objects with the specified model. |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
public OnPlayerConnect(playerid)
{
    // When the player connects, objects with model 615 will be removed within a
    // range of 200.0 from the point 0.0, 0.0, 0.0, which is the center of San Andreas.
    RemoveBuildingForPlayer(playerid, 615, 0.0, 0.0, 0.0, 200.0);
    return 1;
}
public OnPlayerConnect(playerid)
{
    // When the player connects, all map objects will be removed.
    RemoveBuildingForPlayer(playerid, -1, 0.0, 0.0, 0.0, 6000.0);
    return 1;
}
```

## บันทึก

:::tip

In SA-MP 0.3.7 you can use -1 for the modelid to remove all objects within the specified radius.

:::

:::warning

There appears to be a limit of around 1000 lines/objects. There is no workaround. When removing the same object for a player, they will crash. Commonly, players crash when reconnecting to the server because the server removes buildings on OnPlayerConnect.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [DestroyObject](../functions/DestroyObject.md): Destroy an object.
- [DestroyPlayerObject](../functions/DestroyPlayerObject.md): Destroy a player object.
