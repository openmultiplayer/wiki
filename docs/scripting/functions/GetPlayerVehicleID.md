---
id: GetPlayerVehicleID
title: GetPlayerVehicleID
description: This function gets the ID of the vehicle the player is currently in.
tags: ["player", "vehicle"]
---

## Description

This function gets the ID of the vehicle the player is currently in. Note: NOT the model id of the vehicle. See GetVehicleModel for that.

| Name | Description |
| --- | --- |
| playerid | The ID of the player in the vehicle that you want to get the ID of |

## Returns

ID of the vehicle or 0 if not in a vehicle

## Examples

```c
//add 10x Nitro if the player is in a car. Might be called on a command.
new vehicle;
vehicle = GetPlayerVehicleID(playerid);
if(vehicle > 0)
{
    AddVehicleComponent(vehicle, 1010);
}
```

## Related Functions

- [IsPlayerInVehicle](IsPlayerInVehicle.md): Check if a player is in a certain vehicle.
- [IsPlayerInAnyVehicle](IsPlayerInAnyVehicle.md): Check if a player is in any vehicle.
- [GetPlayerVehicleSeat](GetPlayerVehicleSeat.md): Check what seat a player is in.
- [GetVehicleModel](GetVehicleModel.md): Get the model id of a vehicle.
