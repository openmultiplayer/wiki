---
id: TogglePlayerControllable
title: TogglePlayerControllable
description: Toggles whether a player can control their character or not.
tags: ["player"]
---

## คำอธิบาย

Toggles whether a player can control their character or not. The player will also be unable to move their camera.

| Name     | Description                                                 |
| -------- | ----------------------------------------------------------- |
| playerid | The ID of the player to toggle the controllability of       |
| toggle   | 0 to make them uncontrollable, 1 to make them controllable. |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. The player specified does not exist.

## ตัวอย่าง

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
     // Freezes a player when they types /freezeme
     if (strcmp(cmdtext, "/freezeme", true) == 0)
     {
          TogglePlayerControllable(playerid,0);
          return 1;
     }
     // Unfreezes a player when they types /unfreezeme
     if (strcmp(cmdtext, "/unfreezeme", true) == 0)
     {
          TogglePlayerControllable(playerid,1);
          return 1;
     }
     return 0;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน
