---
id: GetPlayerName
title: GetPlayerName
description: Get a player's name.
tags: ["player"]
---

## คำอธิบาย

Get a player's name.

| Name     | Description                                                                                                                                     |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid | The ID of the player to get the name of.                                                                                                        |
| name[]   | An array into which to store the name, passed by reference.                                                                                     |
| len      | The length of the string that should be stored. Recommended to be MAX_PLAYER_NAME + 1. The + 1 is necessary to account for the null terminator. |

## ส่งคืน

The player's name is stored in the specified array.

## ตัวอย่าง

```c
public OnPlayerConnect(playerid)
{
    // Get the name of the player that connected and display a join message to other players

    new name[MAX_PLAYER_NAME + 1];
    GetPlayerName(playerid, name, sizeof(name));

    new string[MAX_PLAYER_NAME + 23 + 1];
    format(string, sizeof(string), "%s has joined the server.", name);
    SendClientMessageToAll(0xC4C4C4FF, string);

    return 1;
}
```

## บันทึก

:::tip

A player's name can be up to 24 characters long (as of 0.3d R2) by using SetPlayerName. This is defined in a_samp.inc as MAX_PLAYER_NAME. However, the client can only join with a nickname between 3 and 20 characters, otherwise the connection will be rejected and the player has to quit to choose a valid name.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- SetPlayerName: Set a player's name.
- GetPlayerIp: Get a player's IP.
- GetPlayerPing: Get the ping of a player.
- GetPlayerScore: Get the score of a player.
- GetPlayerVersion: Get a player's client-version.
