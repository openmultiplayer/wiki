---
id: RemovePlayerAttachedObject
title: RemovePlayerAttachedObject
description: Remove an attached object from a player.
tags: ["player"]
---

:::warning

This function was added in SA-MP 0.3c and will not work in earlier versions!

:::

## Description

Remove an attached object from a player.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to remove the object from. |
| index | The index of the object to remove (set with SetPlayerAttachedObject). |

## Returns

1 on success, 0 on failure.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if(!strmp(cmdtext, "/remao", true)) // Remove Attached Objects
    {
        for(new i=0; i<MAX_PLAYER_ATTACHED_OBJECTS; i++)
        {
            if(IsPlayerAttachedObjectSlotUsed(playerid, i)) RemovePlayerAttachedObject(playerid, i);
        }
        return 1;
    }
    return 0;
}
```

## Related Functions

- [SetPlayerAttachedObject](SetPlayerAttachedObject.md): Attach an object to a player
- [IsPlayerAttachedObjectSlotUsed](IsPlayerAttachedObjectSlotUsed.md): Check whether an object is attached to a player in a specified index
