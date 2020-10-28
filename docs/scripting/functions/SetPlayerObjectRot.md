---
id: SetPlayerObjectRot
title: SetPlayerObjectRot
description: Set the rotation of an object on the X, Y and Z axis.
tags: ["player"]
---

## Description

Set the rotation of an object on the X, Y and Z axis.

| Name       | Description                                         |
| ---------- | --------------------------------------------------- |
| playerid   | The ID of the player whose player-object to rotate. |
| objectid   | The ID of the player-object to rotate.              |
| Float:RotX | The X rotation to set.                              |
| Float:RotY | The Y rotation to set.                              |
| Float:RotZ | The Z rotation to set.                              |

## Returns

1: The function executed successfully.

0: The function failed to execute.

## Examples

```c
SetPlayerObjectRot(playerid, objectid, RotX, RotY, RotZ);
```

## Notes

:::tip

To smoothly rotate an object, see [MovePlayerObject](MovePlayerObject).

:::

## Related Functions

- [CreatePlayerObject](CreatePlayerObject.md): Create an object for only one player.
- [DestroyPlayerObject](DestroyPlayerObject.md): Destroy a player object.
- [IsValidPlayerObject](IsValidPlayerObject.md): Checks if a certain player object is vaild.
- [MovePlayerObject](MovePlayerObject.md): Move a player object.
- [StopPlayerObject](StopPlayerObject.md): Stop a player object from moving.
- [SetPlayerObjectPos](SetPlayerObjectPos.md): Set the position of a player object.
- [GetPlayerObjectPos](GetPlayerObjectPos.md): Locate a player object.
- [GetPlayerObjectRot](GetPlayerObjectRot.md): Check the rotation of a player object.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer.md): Attach a player object to a player.
- [CreateObject](CreateObject.md): Create an object.
- [DestroyObject](DestroyObject.md): Destroy an object.
- [IsValidObject](IsValidObject.md): Checks if a certain object is vaild.
- [MoveObject](MoveObject.md): Move an object.
- [StopObject](StopObject.md): Stop an object from moving.
- [SetObjectPos](SetObjectPos.md): Set the position of an object.
- [SetObjectRot](SetObjectRot.md): Set the rotation of an object.
- [GetObjectPos](GetObjectPos.md): Locate an object.
- [GetObjectRot](GetObjectRot.md): Check the rotation of an object.
- [AttachObjectToPlayer](AttachObjectToPlayer.md): Attach an object to a player.
