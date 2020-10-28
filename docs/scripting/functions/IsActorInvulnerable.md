---
id: IsActorInvulnerable
title: IsActorInvulnerable
description: Check if an actor is invulnerable.
tags: []
---

import T from '../../../src/components/templates.js'

<T.VersionWarn version='SA-MP 0.3.7' />

## Description

Check if an actor is invulnerable.

| Name    | Description                   |
| ------- | ----------------------------- |
| actorid | The ID of the actor to check. |

## Returns

1: The actor is invulnerable.

0: The actor is vulnerable.

## Examples

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Actor as a salesperson in Ammunation.
    if (IsActorInvulnerable(gMyActor))
    {
        print("Actor is invulnerable.");
    }
    else
    {
        print("Actor is vulnerable.");
    }
    return 1;
}
```

## Related Functions

- [CreateActor](CreateActor.md): Create an actor (static NPC).
- [SetActorInvulnerable](SetActorInvulnerable.md): Set actor invulnerable.
- [SetActorHealth](SetActorHealth.md): Set the health of an actor.
