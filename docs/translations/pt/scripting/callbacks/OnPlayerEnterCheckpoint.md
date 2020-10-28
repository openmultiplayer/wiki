---
id: OnPlayerEnterCheckpoint
title: OnPlayerEnterCheckpoint
description: Esta callback é chamada quando um jogador entre em um checkpoint colocado para aquele jogador.
tags: ["player", "checkpoint"]
---

## Descrição

Esta callback é chamada quando um jogador entre em um checkpoint colocado para aquele jogador.

| Nome     | Descrição                           |
| -------- | ----------------------------------- |
| playerid | O jogador que entrou no checkpoint. |

## Retorno

Sempre é chamada primeiro em filterscripts.

## Exemplos

```c
//Neste exemplo o checkpoint é criado para o jogador quando spawna,
//o qual cria um veículo e desativa o checkpoint.
public OnPlayerSpawn(playerid)
{
    SetPlayerCheckpoint(playerid, 1982.6150, -220.6680, -0.2432, 3.0);
    return 1;
}

public OnPlayerEnterCheckpoint(playerid)
{
    CreateVehicle(520, 1982.6150, -221.0145, -0.2432, 82.2873, -1, -1, 60000);
    DisablePlayerCheckpoint(playerid);
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
