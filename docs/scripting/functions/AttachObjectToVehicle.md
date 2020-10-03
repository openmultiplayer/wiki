---
id: AttachObjectToVehicle
title: AttachObjectToVehicle
description: Attach an object to a vehicle.
tags: ["vehicle"]
---

:::warning

This function was added in SA-MP 0.3c and will not work in earlier versions!

:::

## Description

Attach an object to a vehicle.

| Name | Description |
| --- | --- |
| objectid | The ID of the object to attach to the vehicle. Note that this is an object ID, not a model ID. The object must be CreateObject created first. |
| vehicleid | The ID of the vehicle to attach the object to. |
| Float:OffsetX | The X axis offset from the vehicle to attach the object to. |
| Float:OffsetY | The Y axis offset from the vehicle to attach the object to. |
| Float:OffsetZ | The Z axis offset from the vehicle to attach the object to. |
| Float:RotX | The X rotation offset for the object. |
| Float:RotY | The Y rotation offset for the object. |
| Float:RotZ | The Z rotation offset for the object. |

## Returns

This function does not return any specific values.

## Examples

```c
new objectid = CreateObject(...);
new vehicleid = GetPlayerVehicleID(playerid);
AttachObjectToVehicle(objectid, vehicleid, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0);
```

## Notes

:::tip

The object must be created first.

:::

:::warning

When the vehicle is destroyed or respawned, the attached objects won't be destroyed with it; they will remain stationary at the position the vehicle disappeared and be reattached to the next vehicle to claim the vehicle ID that the objects were attached to.

:::

## Related Functions

- [AttachObjectToPlayer](AttachObjectToPlayer.md): Attach an object to a player.
- [AttachObjectToObject](AttachObjectToObject.md): Attach an object to an object.
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
- [CreatePlayerObject](CreatePlayerObject.md): Create an object for only one player.
- [DestroyPlayerObject](DestroyPlayerObject.md): Destroy a player object.
- [IsValidPlayerObject](IsValidPlayerObject.md): Checks if a certain player object is vaild.
- [MovePlayerObject](MovePlayerObject.md): Move a player object.
- [StopPlayerObject](StopPlayerObject.md): Stop a player object from moving.
- [SetPlayerObjectPos](SetPlayerObjectPos.md): Set the position of a player object.
- [SetPlayerObjectRot](SetPlayerObjectRot.md): Set the rotation of a player object.
- [GetPlayerObjectPos](GetPlayerObjectPos.md): Locate a player object.
- [GetPlayerObjectRot](GetPlayerObjectRot.md): Check the rotation of a player object.
