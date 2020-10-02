---
id: SetObjectRot
title: SetObjectRot
description: Set the rotation of an object on the three axes (X, Y and Z).
tags: []
---

## Description

Set the rotation of an object on the three axes (X, Y and Z).


| Name | Description |
|------|-------------|
|objectid | The ID of the object to set the rotation of.|
|Float:RotX | The X rotation.|
|Float:RotY | The Y rotation.|
|Float:RotZ | The Z rotation.|


## Returns

This function always returns 1, even if the object doesn't exist.


## Examples


```c
SetObjectRot(objectid, 45, 90, 180);
```


## Related Functions


-  [CreateObject](../functions/CreateObject): Create an object.
-  [DestroyObject](../functions/DestroyObject): Destroy an object.
-  [IsValidObject](../functions/IsValidObject): Checks if a certain object is vaild.
-  [MoveObject](../functions/MoveObject): Move an object.
-  [StopObject](../functions/StopObject): Stop an object from moving.
-  [SetObjectPos](../functions/SetObjectPos): Set the position of an object.
-  [GetObjectPos](../functions/GetObjectPos): Locate an object.
-  [GetObjectRot](../functions/GetObjectRot): Check the rotation of an object.
-  [AttachObjectToPlayer](../functions/AttachObjectToPlayer): Attach an object to a player.
-  [CreatePlayerObject](../functions/CreatePlayerObject): Create an object for only one player.
-  [DestroyPlayerObject](../functions/DestroyPlayerObject): Destroy a player object.
-  [IsValidPlayerObject](../functions/IsValidPlayerObject): Checks if a certain player object is vaild.
-  [MovePlayerObject](../functions/MovePlayerObject): Move a player object.
-  [StopPlayerObject](../functions/StopPlayerObject): Stop a player object from moving.
-  [SetPlayerObjectPos](../functions/SetPlayerObjectPos): Set the position of a player object.
-  [SetPlayerObjectRot](../functions/SetPlayerObjectRot): Set the rotation of a player object.
-  [GetPlayerObjectPos](../functions/GetPlayerObjectPos): Locate a player object.
-  [GetPlayerObjectRot](../functions/GetPlayerObjectRot): Check the rotation of a player object.
-  [AttachPlayerObjectToPlayer](../functions/AttachPlayerObjectToPlayer): Attach a player object to a player.
