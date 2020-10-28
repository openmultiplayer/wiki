---
id: OnPlayerGiveDamageActor
title: OnPlayerGiveDamageActor
description: Ovaj callback je pozvan kada igrač nanese povredu aktoru.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Ovaj callback je pozvan kada igrač nanese povredu aktoru.

| Ime             | Deskripcija                                                |
| --------------- | ---------------------------------------------------------- |
| playerid        | ID igrača koji zadaje povredu.                             |
| damaged_actorid | ID aktora koji je primio povredu.                          |
| amount          | Količina healtha i armora kojeg je izgubi damaged_actorid. |
| weaponid        | Razlog zbog kojeg je zadobio povredu.                      |
| bodypart        | Dio tijela koji je udaren.                                 |

## Returns

1 - Spriječiti će da druge filterskripte primaju ovaj callback.

0 - Označava da će ovaj callback biti proslijeđen narednoj filterskripti.

Uvijek je pozvana prva u filterskripti.

## Primjeri

```c
public OnPlayerGiveDamageActor(playerid, damaged_actorid, Float: amount, weaponid, bodypart)
{
    new string[128], attacker[MAX_PLAYER_NAME];
    new weaponname[24];
    GetPlayerName(playerid, attacker, sizeof (attacker));
    GetWeaponName(weaponid, weaponname, sizeof (weaponname));

    format(string, sizeof(string), "%s has made %.0f damage to actor id %d, weapon: %s", attacker, amount, damaged_actorid, weaponname);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Zabilješke

:::tip

Ova funkcije nije pozvana ako je aktor postavljen na "neranjiv" (invulnerable) (ŠTO JE PO DEFAULTU). Pogledaj `SetActorInvulnerable`.

:::

## Srodne Funkcije

- [CreateActor](../functions/CreateActor.md): Kreiraj aktora (statični NPC).
- [SetActorInvulnerable](../functions/SetActorInvulnerable.md): Postavi aktorovu neranjivost.
- [SetActorHealth](../functions/SetActorHealth.md): Postavi health aktoru.
- [GetActorHealth](../functions/GetActorHealth.md): Dobij količinu healtha aktora.
- [IsActorInvulnerable](../functions/IsActorInvulnerable.md): Provjeri da li je igrač neranjiv.
- [IsValidActor](../functions/IsValidActor.md): Provjeri da li je ID aktora validan.
- [OnActorStreamOut](OnActorStreamOut.md): Poziva se kada se aktor pojavi u igračevom klijentu.
- [OnPlayerStreamIn](OnPlayerStreamIn.md): Poziva se kada se aktor prestane prikazivati na igračevom klijentu.
