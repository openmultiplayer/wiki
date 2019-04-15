---
title: OnPlayerPause
description: This callback is called when a player has paused their game.
tags: ["player"]
---

# OnPlayerPause

<TagLinks />

## Description

This callback is called when a player has paused their game.

| Name     | Description                        |
| -------- | ---------------------------------- |
| playerid | The ID of the player that paused their game. |

## Examples

```c
public OnPlayerPause(playerid)
{
    new string[30], PlayerName[MAX_PLAYER_NAME];
	  GetPlayerName(playerid, PlayerName, sizeof(PlayerName));
    format(string, sizeof(string), "%s is pausing his game!", PlayerName);
    SendClientMessageToAll(playerid, COLOR_WHITE, string);
    return 1;
}
```

## Related Functions

- OnPlayerResume: Callback is called when detects a player resuming his game.
- IsPlayerPaused: Function is called to detect if player is paused or not.
