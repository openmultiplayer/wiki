---
title: OnPlayerResume
description: This callback is called when a player has resumed his/her game.
tags: ["player"]
---

# OnPlayerSpawn

<TagLinks />

## Description

This callback is called when a player has resumed his/her game.

| Name     | Description                        |
| -------- | ---------------------------------- |
| playerid | The ID of the player that spawned. |
| time | The time of the player that paused in milliseconds. |

## Examples

```c
public OnPlayerResume(playerid, time)
{
    new string[48];
    format(string, sizeof(string), "You've been paused for %i milliseconds.", time);
    SendClientMessage(playerid, COLOR_WHITE, string);
    return 1;
}
```

## Related Functions

- OnPlayerPause: Callback is called when player is pausing his game.
- IsPlayerPaused: Function is called to detect if player is paused or not.
