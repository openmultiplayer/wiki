---
id: OnPlayerConnect
title: OnPlayerConnect
description: Esta callback é chamda quando um jogador conecta no servidor.
tags: ["player"]
---

## Descrição

Esta callback é chamda quando um jogador conecta no servidor.

| Nome     | Descrição                     |
| -------- | ----------------------------- |
| playerid | O ID do jogador que conectou. |

## Retorno

1 - Irá previnir que outro filterscript receba esta callback.

0 - Indica que esta callback será passada para o próximo filterscript.

Sempre é chamada primeiro em filterscripts.

## Exemplos

```c
public OnPlayerConnect(playerid)
{
    new
        string[64],
        playerName[MAX_PLAYER_NAME];

    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);
    format(string, sizeof string, "%s entrou no servidor!", playerName);
    SendClientMessageToAll(0xFFFFFFAA, string);
    return 1;
}
```

## Notas

:::tip

Esta callback também pode ser chamada por um NPC.

:::

## Funções Relacionadas
