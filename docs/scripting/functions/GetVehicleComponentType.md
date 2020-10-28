---
id: GetVehicleComponentType
title: GetVehicleComponentType
description: Find out what type of component a certain ID is.
tags: ["vehicle"]
---

import T from '../../../src/components/templates.js'

<T.VersionWarn version='SA-MP 0.3a' />

## Description

Find out what type of component a certain ID is.

| Name      | Description                |
| --------- | -------------------------- |
| component | The component ID to check. |

## Returns

The component slot ID of the specified component or -1 if the component is invalid.

## Examples

```c
public OnVehicleMod(playerid, vehicleid, componentid)
{
    new
        componentType = GetVehicleComponentType(componentid);

    if (componentType != -1)
    {
        new
            clientMessage[41];

        format(clientMessage, sizeof(clientMessage), "You have modified your vehicle on slot %i", componentType);
        SendClientMessage(playerid, 0xFFFFFFFF, clientMessage);
    }
    else
    {
        SendClientMessage(playerid, 0xFF0000FF, "The component is invalid.");
    }

    return 1;
}
```

## Related Functions

- [AddVehicleComponent](AddVehicleComponent.md): Add a component to a vehicle.
- [RemoveVehicleComponent](RemoveVehicleComponent.md): Remove a component from a vehicle.
- [GetVehicleComponentInSlot](GetVehicleComponentInSlot.md): Check what components a vehicle has.
- [OnVehicleMod](../callbacks/OnVehicleMod.md): Called when a vehicle is modded.
- [OnEnterExitModShop](../callbacks/OnEnterExitModShop.md): Called when a vehicle enters or exits a mod shop.
