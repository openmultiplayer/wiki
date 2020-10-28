---
id: OnActorStreamOut
title: OnActorStreamOut
description: This callback is called when an actor is streamed out by a player's client.
tags: []
---

import T from '../../../src/components/templates.js'

<T.VersionWarn name='callback' version='SA-MP 0.3.7' />

## Description

This callback is called when an actor is streamed out by a player's client.

| Name        | Description                                                    |
| ----------- | -------------------------------------------------------------- |
| actorid     | The ID of the actor that has been streamed out for the player. |
| forplayerid | The ID of the player that streamed the actor out.              |

## Returns

It is always called first in filterscripts.

## Examples

```c
public OnActorStreamOut(actorid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Actor %d is now streamed out for you.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notes

<T.TipNPCCallbacks />

## Related Functions
