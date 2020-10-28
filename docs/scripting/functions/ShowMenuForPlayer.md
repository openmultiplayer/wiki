---
id: ShowMenuForPlayer
title: ShowMenuForPlayer
description: Shows a previously created menu for a player.
tags: ["player", "menu"]
---

## Description

Shows a previously created menu for a player.

| Name     | Description                                          |
| -------- | ---------------------------------------------------- |
| menuid   | The ID of the menu to show. Returned by CreateMenu.  |
| playerid | The ID of the player to whom the menu will be shown. |

## Returns

1: The function executed successfully.

0: The function failed to execute. Menu and/or player doesn't exist.

## Examples

```c
new Menu:gPlayerTeleport;

public OnGameModeInit()
{
    gPlayerTeleport = CreateMenu(...);
    return 1;
}

if (strcmp(cmdtext, "/tele", true) == 0)
{
    ShowMenuForPlayer(gPlayerTeleport, playerid);
    return 1;
}
```

## Notes

:::tip

Crashes the both server and player if an invalid menu ID given.

:::

## Related Functions

- [CreateMenu](CreateMenu.md): Create a menu.
- [AddMenuItem](AddMenuItem.md): Adds an item to a specified menu.
- [SetMenuColumnHeader](SetMenuColumnHeader.md): Set the header for one of the columns in a menu.
- [DestroyMenu](DestroyMenu.md): Destroy a menu.
- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow.md): Called when a player selected a row in a menu.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu.md): Called when a player exits a menu.
