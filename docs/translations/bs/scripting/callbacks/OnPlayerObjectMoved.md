---
id: OnPlayerObjectMoved
title: OnPlayerObjectMoved
description: Ovaj callback je pozvana kada player object biva premješten nakon MovePlayerObject funkcije (kada se prestane kretati).
tags: ["player"]
---

## Deskripcija

Ovaj callback je pozvana kada player object biva premješten nakon MovePlayerObject funkcije (kada se prestane kretati).

| Ime      | Deskripcija                            |
| -------- | -------------------------------------- |
| playerid | playerid ta koji je objekat dodijeljen |
| objectid | ID player objecta koji je pomjeren     |

## Returns

Uvijek je pozvana prva u filterskripti.

## Primjeri

```c
public OnPlayerObjectMoved(playerid, objectid)
{
    printf("Player object moved: objectid: %d playerid: %d", objectid, playerid);
    return 1;
}
```

## Zabilješke

:::tip

Ovaj callback pozvat će i NPC.

:::

## Related Functions

- [MovePlayerObject](../functions/MovePlayerObject.md): Pomjeri player object.
- [IsPlayerObjectMoving](../functions/IsPlayerObjectMoving.md): Provjeri da li se player object kreće.
- [StopPlayerObject](../functions/StopPlayerObject.md): Zaustavi player object od kretanja.
- [CreatePlayerObject](../functions/CreatePlayerObject.md): Kreiraj objekat za samo jednog igrača.
- [DestroyPlayerObject](../functions/DestroyPlayerObject.md): Uništi player objekat.
