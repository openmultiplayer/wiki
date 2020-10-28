---
id: LimitPlayerMarkerRadius
title: LimitPlayerMarkerRadius
description: Set the player marker radius.
tags: ["player"]
---

import T from '../../../src/components/templates.js'

<T.VersionWarn version='SA-MP 0.3a' />

## Description

Set the player marker radius.

| Name                | Description                          |
| ------------------- | ------------------------------------ |
| Float:marker_radius | The radius that markers will show at |

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    LimitPlayerMarkerRadius(100.0);
}
```

## Related Functions

- [ShowPlayerMarkers](ShowPlayerMarkers.md): Decide if the server should show markers on the radar.
- [SetPlayerMarkerForPlayer](SetPlayerMarkerForPlayer.md): Set a player's marker.
- [LimitGlobalChatRadius](LimitGlobalChatRadius.md): Limit the distance between players needed to see their chat.
