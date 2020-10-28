---
id: GetPlayerIp
title: GetPlayerIp
description: Get the specified player's IP address and store it in a string.
tags: ["player"]
---

## คำอธิบาย

Get the specified player's IP address and store it in a string.

| Name     | Description                                                          |
| -------- | -------------------------------------------------------------------- |
| playerid | The ID of the player to get the IP address of.                       |
| ip[]     | The string to store the player's IP address in, passed by reference. |
| len      | The maximum length of the IP address (recommended 16).               |

## ส่งคืน

The player's IP address is stored in the specified array.

## ตัวอย่าง

```c
public OnPlayerConnect(playerid)
{
    new plrIP[16];
    GetPlayerIp(playerid, plrIP, sizeof(plrIP));
    if (!strcmp(plrIP, "127.0.0.1"))
    {
        SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to your server, master :)");
    }
    return 1;
}
```

## บันทึก

:::tip

PAWN is case-sensitive. GetPlayerIP will not work. This function does not work when used in OnPlayerDisconnect because the player is already disconnected. It will return an invalid IP (255.255.255.255). Save players' IPs under OnPlayerConnect if they need to be used under OnPlayerDisconnect.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [NetStats_GetIpPort](../functions/NetStats_GetIpPort): Get a player's IP and port.
- [GetPlayerName](../functions/GetPlayerName): Get a player's name.
- [GetPlayerPing](../functions/GetPlayerPing): Get the ping of a player.
- [GetPlayerVersion](../functions/GetPlayerVerion): Get a player's client-version.
- [OnIncomingConnection](../callbacks/OnIncomingConnection): Called when a player is attempting to connect to the server.
- [OnPlayerConnect](../callbacks/OnPlayerConnect): Called when a player connects to the server.
- [OnPlayerDisconnect](../callbacks/OnPlayerDisconnect): Called when a player leaves the server.
