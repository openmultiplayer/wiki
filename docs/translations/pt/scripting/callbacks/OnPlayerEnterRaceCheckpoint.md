---
id: OnPlayerEnterRaceCheckpoint
title: OnPlayerEnterRaceCheckpoint
description: Esta callback é chamada quando um jogador entra em um checkpoint de corrida.
tags: ["player", "checkpoint", "racecheckpoint"]
---

## Descrição

Esta callback é chamada quando um jogador entra em um checkpoint de corrida.

| Nome     | Descrição                                          |
| -------- | -------------------------------------------------- |
| playerid | O ID do jogador que entrou no chekpoint de corrida |

## Retorno

Sempre é chamada primeiro em filterscripts.

## Exemplos

```c
public OnPlayerEnterRaceCheckpoint(playerid)
{
    printf("Jogador %d entrou em um checkpoint de corrida!", playerid);
    return 1;
}
```

## Notas

Esta callback também pode ser chamada por um NPC.

## Funções Relacionadas

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint.md): Cria o checkpoint para um jogador.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint.md): Desativa o atual checkpoint do jogador.
- [IsPlayerInCheckpoint](../functions/IsPlayerInRaceCheckpoint.md): Verifica se o jogador está em checkpoint.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint.md): Cria um checkpoint de corrida.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint.md): Desativa o atual checkpoint de corrida do jogador.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint.md): Verifica se o jogador está em um checkpoint de corrida.
