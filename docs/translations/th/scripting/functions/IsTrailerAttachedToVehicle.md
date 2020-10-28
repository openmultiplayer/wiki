---
id: IsTrailerAttachedToVehicle
title: IsTrailerAttachedToVehicle
description: Checks if a vehicle has a trailer attached to it.
tags: ["vehicle"]
---

## คำอธิบาย

Checks if a vehicle has a trailer attached to it. Use GetVehicleTrailer to get the vehicle ID of the trailer (if any).

| Name      | Description                                  |
| --------- | -------------------------------------------- |
| vehicleid | The ID of the vehicle to check for trailers. |

## ส่งคืน

1: The vehicle has a trailer attached.

0: The vehicle does not have a trailer attached.

## ตัวอย่าง

```c
if (IsTrailerAttachedToVehicle(vehicleid))
{
    printf("Vehicle %i has a trailer!", vehicleid);
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [GetVehicleTrailer](../../scripting/functions/GetVehicleTrailer.md): Check what trailer a vehicle is pulling.
- [AttachTrailerToVehicle](../../scripting/functions/AttachTrailerToVehicle.md): Attach a trailer to a vehicle.
- [DetachTrailerFromVehicle](../../scripting/functions/DetachTrailerFromVehicle.md): Detach a trailer from a vehicle.
