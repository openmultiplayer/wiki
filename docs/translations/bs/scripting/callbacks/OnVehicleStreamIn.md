---
id: OnVehicleStreamIn
title: OnVehicleStreamIn
description: Pozvan kada se vozilo pojavi u igračevom klijentu.
tags: ["vehicle"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Pozvan kada se vozilo pojavi u igračevom klijentu.

| Ime         | Deskripcija                                      |
| ----------- | ------------------------------------------------ |
| vehicleid   | ID vozila koje se pojavilo u igračevom klijentu. |
| forplayerid | ID igrača u čijem se klijentu pojavilo vozilo.   |

## Returns

Uvijek je pozvan prvo u filterskriptama.

## Primjeri

```c
public OnVehicleStreamIn(vehicleid, forplayerid)
{
    new string[32];
    format(string, sizeof(string), "Sada mozes da vidis vozilo %d.", vehicleid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Zabilješke

:::tip

Ovaj callback pozvat će i NPC.

:::

## Srodne Funkcije
