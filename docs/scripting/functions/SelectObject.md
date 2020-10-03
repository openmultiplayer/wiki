---
id: SelectObject
title: SelectObject
description: Display the cursor and allow the player to select an object.
tags: []
---

:::warning

This function was added in SA-MP 0.3e and will not work in earlier versions!

:::

## Description

Display the cursor and allow the player to select an object. OnPlayerSelectObject is called when the player selects an object.


| Name | Description |
|------|-------------|
|playerid | The ID of the player that should be able to select the object|


## Returns

This function does not return any specific values.


## Examples


```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if(!strcmp(cmdtext, "/select", true))
    {
        SelectObject(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: Please select the object you'd like to edit!");
        return 1;
    }
    return 0;
}
```


## Related Functions


-  [CreateObject](../functions/CreateObject): Create an object.
-  [DestroyObject](../functions/DestroyObject): Destroy an object.
-  [MoveObject](../functions/MoveObject): Move an object.
-  [EditObject](../functions/EditObject): Edit an object.
-  [EditPlayerObject](../functions/EditPlayerObject): Edit an object.
-  [EditAttachedObject](../functions/EditAttachedObject): Edit an attached object.
-  [CancelEdit](../functions/CancelEdit): Cancel the edition of an object.
-  [OnPlayerSelectObject](../callbacks/OnPlayerSelectObject): Called when a player selected an object.
