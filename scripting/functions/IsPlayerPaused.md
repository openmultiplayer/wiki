---
title: IsPlayerPaused
description: Detect if player is pausing.
tags: []
---

# IsPlayerPaused

<TagLinks />

## Description

Detect if player is pausing.

| Name     | Description                  |
| -------- | ---------------------------- |
| playerid | The ID of the player who was detected pausing. |

## Returns

This function returns true [1] if the player is paused.

## Examples
```
CMD:pm(playerid, params[])
{
  new player2, msg[128], string[128];
  if(IsPlayerPaused(playerid)) return SendClientMessage(playerid, -1, "This player you're trying to message is AFK.");
  if(sscanf(params, "us[80]", player2, msg)) return SendClientMessage(playerid, -1, "/pm [playerid or name] [message]");
  
  format(string, sizeof(string), "(( PM from %s [%d]: %s ))", NameRP(playerid), playerid, msg);
  SendClientMessage(player2, -1, string);
  
  format(string, sizeof(string), "(( PM sent to %s [%d]: %s ))", NameRP(player2), player2, msg);
  SendClientMessage(playerid, -1, string);
}
```

## Related Functions

- OnPlayerPause: Callback is called when detects a player pausing his game.
- OnPlayerResume: Callback is called when detects a player resuming his game.
