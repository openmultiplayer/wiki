---
id: SetPlayerObjectMaterial
title: SetPlayerObjectMaterial
description: Replace the texture of a player-object with the texture from another model in the game.
tags: ["player"]
---

:::warning

This function was added in SA-MP 0.3e and will not work in earlier versions!

:::

## คำอธิบาย

Replace the texture of a player-object with the texture from another model in the game.

| Name          | Description                                                                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| playerid      | The ID of the player the object is associated to.                                                                                                |
| objectid      | The ID of the object to replace the texture of                                                                                                   |
| materialindex | The material index on the object to change (0 to 15)                                                                                             |
| modelid       | The modelid on which replacement texture is located. Use 0 for alpha. Use -1 to change the material color without altering the existing texture. |
| txdname       | The name of the txd file which contains the replacement texture (use "none" if not required)                                                     |
| texturename   | The name of the texture to use as the replacement (use "none" if not required)                                                                   |
| materialcolor | The object color to set, as an integer or hex in ARGB format. Using 0 keeps the existing material color.                                         |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext,"/objmat",true))
    {
        new Float:X, Float:Y, Float:Z;
        new myobject;
        GetPlayerPos(playerid, X, Y, Z);
        myobject = CreatePlayerObject(playerid, 19371, X, Y, Z+0.5, 0.0, 0.0, 0.0, 300.0);
        SetPlayerObjectMaterial(playerid, myobject, 0, 19341, "egg_texts", "easter_egg01", 0xFFFFFFFF);
        // Replaces the texture of our player-object with the texture of model 19341
        return 1;
    }
    return 0;
}
```

## บันทึก

:::tip

Vertex lightning of the object will disappear if material color is changed.

:::

:::warning

You MUST use ARGB color format, not RGBA like used in client messages etc.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- SetObjectMaterial: Replace the texture of an object with the texture from another model in the game.
- Ultimate Creator by Nexius
- Texture Studio by [uL]Pottus
- Fusez's Map Editor by RedFusion
- Map Editor I by adri1
