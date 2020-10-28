---
id: AttachCameraToPlayerObject
title: AttachCameraToPlayerObject
description: Przyczepia kamerę gracza do obiektu stworzonego tylko dla niego.
tags: ["player"]
---

import T from '../../../../../src/components/templates.js'

<T.VersionWarn version='SA-MP 0.3e' />

## Opis

Przyczepia kamerę gracza do obiektu stworzonego tylko dla niego. Gracz może poruszać swoją kamerą, gdy jest przyczepiona do obiektu. Można z tego korzystać razem z MovePlayerObject i AttachPlayerObjectToVehicle.

| Nazwa          | Opis                                                                 |
| -------------- | -------------------------------------------------------------------- |
| playerid       | ID gracza, który będzie miał przyczepioną kamerę do swojego obiektu. |
| playerobjectid | ID obiektu gracza, do którego będzie przyczepiona kamera.            |

## Zwracane wartości

Ta funkcja nie zwraca żadnych konkretnych wartości.

## Przykłady

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/attach", false))
    {
        new playerobject = CreatePlayerObject(playerid, 1245, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0);
        AttachCameraToPlayerObject(playerid, playerobject);
        SendClientMessage(playerid, 0xFFFFFFAA, "Twoja kamera jest teraz przyczepiona do obiektu.");
        return 1;
    }
    return 0;
}
```

## Uwagi

:::tip

Obiekt musi zostać utworzony, zanim spróbujemy przyczepić do niego inny obiekt.

:::

## Powiązane funkcje

- [AttachCameraToObject](AttachCameraToObject.md): Przyczepia kamerę gracza do globalnego obiektu.
- [SetPlayerCameraPos](SetPlayerCameraPos.md): Ustawia pozycję kamery gracza.
- [SetPlayerCameraLookAt](SetPlayerCameraLookAt.md): Ustawia, gdzie ma być skierowana kamera gracza.
