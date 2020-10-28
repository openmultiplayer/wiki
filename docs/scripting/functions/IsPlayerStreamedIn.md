---
id: IsPlayerStreamedIn
title: IsPlayerStreamedIn
description: Checks if a player is streamed in another player's client.
tags: ["player"]
---

import T from '../../../src/components/templates.js'

<T.VersionWarn version='SA-MP 0.3a' />

## Description

Checks if a player is streamed in another player's client.

| Name        | Description                                                   |
| ----------- | ------------------------------------------------------------- |
| playerid    | The ID of the player to check is streamed in.                 |
| forplayerid | The ID of the player to check if playerid is streamed in for. |

## Returns

1: The player is streamed in.

0: The player is not streamed in.

## Examples

```c
if (IsPlayerStreamedIn(playerid, 0))
{
	SendClientMessage(playerid, -1, "ID 0 can see you.");
}
```

## Notes

:::tip

Players stream out if they are more than 150 meters away (see server.cfg - stream_distance)

:::

:::warning

Players aren't streamed in on their own client, so if playerid is the same as forplayerid it will return false!

:::

## Related Functions

- [IsActorStreamedIn](IsActorStreamedIn.md): Checks if an actor is streamed in for a player.
- [IsVehicleStreamedIn](IsVehicleStreamedIn.md): Checks if a vehicle is streamed in for a player.
- [OnPlayerStreamIn](../callbacks/OnPlayerStreamIn.md): Called when a player streams in for another player.
- [OnPlayerStreamOut](../callbacks/OnPlayerStreamOut.md): Called when a player streams out for another player.
- [OnVehicleStreamIn](../callbacks/OnVehicleStreamIn.md): Called when a vehicle streams in for a player.
- [OnVehicleStreamOut](../callbacks/OnVehicleStreamOut.md): Called when a vehicle streams out for a player.
