---
id: OnActorStreamIn
title: OnActorStreamIn
description: This callback is called when an actor is streamed in by a player's client.
tags: []
---

import T from '../../../src/components/templates.js'

<T.VersionWarn name='callback' version='SA-MP 0.3.7' />

## Description

This callback is called when an actor is streamed in by a player's client.

| Name        | Description                                                   |
| ----------- | ------------------------------------------------------------- |
| actorid     | The ID of the actor that has been streamed in for the player. |
| forplayerid | The ID of the player that streamed the actor in.              |

## Returns

It is always called first in filterscripts.

## Examples

```c
public OnActorStreamIn(actorid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Actor %d is now streamed in for you.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notes

<T.TipNPCCallbacks />

## Related Functions
