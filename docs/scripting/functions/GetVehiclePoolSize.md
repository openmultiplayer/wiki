---
id: GetVehiclePoolSize
title: GetVehiclePoolSize
description: Gets the highest vehicleid currently in use on the server.
tags: ["vehicle"]
---

import T from '../../../src/components/templates.js'

<T.VersionWarn version='SA-MP 0.3.7' />

## Description

Gets the highest vehicleid currently in use on the server.

## Examples

```c
RepairAllVehicles()
{
    // vehicleids start at 1
    for(new i = 1, j = GetVehiclePoolSize(); i <= j; i++)
    {
        RepairVehicle(i);
    }
}
```

## Related Functions

- [GetPlayerPoolSize](GetPlayerPoolSize.md): Gets the highest playerid connected to the server.
