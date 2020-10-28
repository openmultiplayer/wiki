---
id: GetVehicleDamageStatus
title: GetVehicleDamageStatus
description: Retrieve the damage statuses of a vehicle.
tags: ["vehicle"]
---

import T from '../../../src/components/templates.js'

<T.VersionWarn version='SA-MP 0.3a' />

:::tip

For some useful functions for working with vehicle damage values, see [here](../resources/damagestatus.md).

:::

## Description

Retrieve the damage statuses of a vehicle.

| Name      | Description                                                        |
| --------- | ------------------------------------------------------------------ |
| vehicleid | The ID of the vehicle to get the damage statuses of.               |
| panels    | A variable to store the panel damage data in, passed by reference. |
| doors     | A variable to store the door damage data in, passed by reference.  |
| lights    | A variable to store the light damage data in, passed by reference. |
| tires     | A variable to store the tire damage data in, passed by reference.  |

## Returns

1: The function was executed successfully.

0: The function failed to execute. This means the vehicle specified does not exist.

## Examples

```c
new
	panels, doors, lights, tires;
GetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);
printf("Vehicle Status: [Panels]: %d - [Doors]: %d - [Lights]: %d - [Tires]: %d", panels, doors, lights, tires);
```

## Related Functions

- [UpdateVehicleDamageStatus](UpdateVehicleDamageStatus.md): Update the vehicle damage.
- [SetVehicleHealth](SetVehicleHealth.md): Set the health of a vehicle.
- [GetVehicleHealth](GetVehicleHealth.md): Check the health of a vehicle.
- [RepairVehicle](RepairVehicle.md): Fully repair a vehicle.
- [OnVehicleDamageStatusUpdate](../callbacks/OnVehicleDamageStatusUpdate.md): Called when a vehicle's damage state changes.
