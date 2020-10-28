---
id: SetPVarFloat
title: SetPVarFloat
description: Set a float player variable's value.
tags: ["pvar"]
---

## Description

Set a float player variable's value.

| Name        | Description                                             |
| ----------- | ------------------------------------------------------- |
| playerid    | The ID of the player whose player variable will be set. |
| varname     | The name of the player variable.                        |
| float_value | The float you want to save in the player variable.      |

## Returns

1: The function was executed successfully.

0: The function failed to execute. Either the player specified is not connected, or the variable name is null or over 40 characters.

## Examples

```c
forward SavePos(playerid);
public SavePos(playerid)
{
    new
        Float: x, Float: y, Float: z;

    GetPlayerPos(playerid, x, y, z); // Get the players position
    SetPVarFloat(playerid, "xpos", x); // Save the float into a player variable
    SetPVarFloat(playerid, "ypos", y); // Save the float into a player variable
    SetPVarFloat(playerid, "zpos", z); // Save the float into a player variable
    return 1;
}
```

## Notes

:::tip

Variables aren't reset until after OnPlayerDisconnect is called, so the values are still accessible in OnPlayerDisconnect.

:::

## Related Functions

- [SetPVarInt](SetPVarInt.md): Set an integer for a player variable.
- [GetPVarInt](GetPVarInt.md): Get the previously set integer from a player variable.
- [SetPVarString](SetPVarString.md): Set a string for a player variable.
- [GetPVarString](GetPVarString.md): Get the previously set string from a player variable.
- [GetPVarFloat](GetPVarFloat.md): Get the previously set float from a player variable.
- [DeletePVar](DeletePVar.md): Delete a player variable.
