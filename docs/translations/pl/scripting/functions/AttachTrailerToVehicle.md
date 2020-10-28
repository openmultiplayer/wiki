---
id: AttachTrailerToVehicle
title: AttachTrailerToVehicle
description: Przyczepia jeden pojazd do drugiego jako przyczepa.
tags: ["vehicle"]
---

## Opis

Przyczepia jeden pojazd do drugiego jako przyczepa.

| Nazwa     | Opis                                        |
| --------- | ------------------------------------------- |
| trailerid | ID pojazdu, który będzie ciągnięty.         |
| vehicleid | ID pojazdu, który będzie ciągnąć przyczepę. |

## Zwracane wartości

Ta funkcja zawsze zwraca 1, nawet jeśli żadne z podanych ID pojazdów nie jest prawidłowe.

## Przykłady

```c
new vehicleId = CreateVehicle(...);
new trailerId = CreateVehicle(...);

AttachTrailerToVehicle(trailerId, vehicleId);
```

## Uwagi

:::warning

Ta funkcja zadziała tylko wtedy, gdy obydwa pojazdy są widoczne dla gracza (zobacz [IsVehicleStreamedIn](IsVehicleStreamedIn)).

:::

## Powiązane funkcje

- [DetachTrailerFromVehicle](DetachTrailerFromVehicle.md): Odczepia przyczepę od pojazdu.
- [IsTrailerAttachedToVehicle](IsTrailerAttachedToVehicle.md): Sprawdza, czy przyczepa jest przyczepiona do pojazdu.
- [GetVehicleTrailer](GetVehicleTrailer.md): Podaje przyczepę ciągniętą aktualnie przez pojazd.
