---
id: SetDeathDropAmount
title: SetDeathDropAmount
description: .
tags: []
---

## Description

.

| Name   | Description |
| ------ | ----------- |
| amount |             |

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    SetDeathDropAmount(5000);

    // MORE CODE

    return 1;
}
```

## Notes

:::warning

This function does not work in the current SA:MP version!

:::

## Related Functions

- [CreatePickup](CreatePickup.md): Create a pickup.
- [GivePlayerMoney](GivePlayerMoney.md): Give a player money.
- [OnPlayerDeath](../callbacks/OnPlayerDeath.md): Called when a player dies.
