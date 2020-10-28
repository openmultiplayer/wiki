---
id: DisableNameTagLOS
title: DisableNameTagLOS
description: Disables the nametag Line-Of-Sight checking so that players can see nametags through objects.
tags: []
---

import T from '../../../src/components/templates.js'

<T.VersionWarn version='SA-MP 0.3a' />

## Description

Disables the nametag Line-Of-Sight checking so that players can see nametags through objects.

## Examples

```c
public OnGameModeInit()
{
    DisableNameTagLOS();
    return 1;
}
```

## Notes

:::warning

This can not be reversed until the server restarts.

:::

## Related Functions

- [ShowNameTags](ShowNameTags.md): Set nametags on or off.
- [ShowPlayerNameTagForPlayer](ShowPlayerNameTagForPlayer.md): Show or hide a nametag for a certain player.
