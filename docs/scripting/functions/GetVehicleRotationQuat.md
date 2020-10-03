---
id: GetVehicleRotationQuat
title: GetVehicleRotationQuat
description: Returns a vehicle's rotation on all axes as a quaternion.
tags: ["vehicle"]
---

:::warning

This function was added in SA-MP 0.3b and will not work in earlier versions!

:::

## Description

Returns a vehicle's rotation on all axes as a quaternion.

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle to get the rotation of. |
| &Float:w | A float variable in which to store the first quaternion angle, passed by reference. |
| &Float:x | A float variable in which to store the second quaternion angle, passed by reference. |
| &Float:y | A float variable in which to store the third quaternion angle, passed by reference. |
| &Float:z | A float variable in which to store the fourth quaternion angle, passed by reference. |

## Returns

1: The function was executed successfully.

0: The function failed to execute. This means the vehicle specified does not exist.

The vehicle's rotation is stored in the specified variables.

## Notes

:::tip

There is no 'set' variation of this function; you can not SET a vehicle's rotation (apart from the Z angle) This function may return incorrect values for unoccupied vehicles. The reason is that the third row of the vehicle's internal rotation matrix gets corrupted if it gets updated while unoccupied.

:::

## Related Functions

- [GetVehicleZAngle](GetVehicleZAngle.md): Check the current angle of a vehicle.
- [GetVehicleRotation](GetVehicleRotation.md): Get the rotation of a vehicle on the XYZ axis.
