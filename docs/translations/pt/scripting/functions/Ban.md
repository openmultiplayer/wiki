---
id: Ban
title: Ban
description: Bane um jogador que está atualmente no servidor. Eles não poderão mais entrar no servidor. A proibição será baseada em IP e será salva no arquivo samp.ban no diretório raiz do servidor. O BanEx pode ser usado para justificar o banimento. Os banimentos de IP podem ser adicionados ou removidos usando os comandos RCON banip e unbanip (SendRconCommand).
tags: []
---

## Descrição

Bane um jogador que está atualmente no servidor. Ele não poderá mais entrar no servidor. A proibição será baseada em IP e será salva no arquivo samp.ban no diretório raiz do servidor. O BanEx pode ser usado para justificar o banimento. Os banimentos de IP podem ser adicionados ou removidos usando os comandos RCON banip e unbanip (SendRconCommand).

| Nome        | Descrição                                   |
| ----------- | ------------------------------------------- |
| playerid    | O ID do jogador a ser banido.               |

## Retorno

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if(strcmp(cmdtext, "/banme", true) == 0)
    {
        // Bane o jogador que executar este comando.
        Ban(playerid);
        return 1;
    }
}
// Para exibir uma mensagem (por exemplo, motivo) para o jogador antes que a conexão seja fechada
// você tem que usar um cronômetro para criar um atraso. Esse atraso precisa ser de apenas alguns milissegundos,
// mas este exemplo usa um segundo inteiro apenas por garantia.

forward DelayedBan(playerid);
public DelayedBan(playerid)
{
    Ban(playerid);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if(strcmp(cmdtext, "/banme", true) == 0)
    {
        // Bane o jogador que executar este comando.

        // Primeiro, manda a ele uma mensagem.
        SendClientMessage(playerid, 0xFF0000FF, "You have been banned!");

        // Bane-os um segundo depois da execução do comando por um cronômetro.
        SetTimerEx("DelayedBan", 1000, false, "d", playerid);
        return 1;
    }
    return 0;
}
```

## Notas

:::warning

A partir do SA-MP 0.3x, qualquer ação realizada diretamente antes de Ban() (como enviar uma mensagem com SendClientMessage) não chegará ao jogador. Um cronômetro deve ser usado para atrasar o banimento.

:::

## Funções Relacionadas

- [BanEx](../functions/BanEx.md): Bane um jogador com uma razão específica.
- [Kick](../functions/Kick.md): Expulsa um jogador do servidor.
