---
title: OnGameModeExit
description: Acest apel invers este apelat atunci când un mod de joc se termină, fie prin 'gmx', serverul fiind oprit, fie GameModeExit.
tags: []
---

## Descriere

Acest apel invers este apelat când un mod de joc se termină, fie prin „gmx”, serverul fiind oprit, fie GameModeExit.

## Exemple

```c
public OnGameModeExit()
{
    print("Gamemode ended.");
    return 1;
}
```

## Notite

:::tip

Această funcție poate fi utilizată și într-un filtercript pentru a detecta dacă gamemode-ul se modifică cu comenzi RCON cum ar fi changemode sau gmx, deoarece schimbarea modului de joc nu reîncarcă un filtercript. Când utilizați OnGameModeExit împreună cu comanda de consolă „rcon gmx” rețineți că există potențialul ca bug-urile clientului să apară. Acest apel invers NU va fi apelat dacă serverul se blochează sau procesul este eliminat prin alte mijloace, cum ar fi utilizarea comenzii Linux kill sau apăsarea butonului închidere de pe consola Windows. :::

## Funcții relatate

- [GameModeExit](../functions/GameModeExit.md): Ieșiți din modul de joc curent.
