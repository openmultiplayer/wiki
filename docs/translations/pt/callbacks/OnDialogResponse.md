---
id: OnDialogResponse
title: OnDialogResponse
description: Esta callback é chamada quando um jogador responde a uma dialog mostrada usando ShowPlayerDialog ao clicar em um botão, pressione ENTER/ESC ou de um clique duplo em um item da lista. (se estiver usando style list).
tags: []
---

:::warning

Esta callback foi adicionada no SA-MP 0.3a e não funcionará em versões anteriores!

:::

## Descrição

Esta callback é chamada quando um jogador responde a uma dialog mostrada usando ShowPlayerDialog ao clicar em um botão, pressione ENTER/ESC ou de um clique duplo em um item da lista. (se estiver usando style list).

| Parâmetro   | Descrição                                                                                                                                |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| playerid    | O ID do jogador que respondeu a dialog.                                                                                                  |
| dialogid    | O ID da dialog que foi respondida, conforme definido no ShowPlayerDialog.                                                                |
| response    | 1 para o botão esquerdo e 0 para o botão direito (se for apenas um botão, sempre será 1)                                                 |
| listitem    | O ID do item da lista selecionado pelo jogador (inicia 0) (apenas se estiver usando style list, caso contrário, será -1).                |
| inputtext[] | O texto inserido no campo pelo jogador ou texto do item da lista que foi selecionado.                                                    |

## Return

É sempre chamado primeiro nos filterscripts, por isso, return 1 impede que as outras filterscripts o vejam.

## Exemplos

```c
// Defina o ID da dialog para que possamos lidar com as respostas
#define DIALOG_REGRAS 1

// Em algum comando
ShowPlayerDialog(playerid, DIALOG_RULES, DIALOG_STYLE_MSGBOX, "Regras do Server", "- Sem Cheat\n- Sem Spam\n- Respeite os Admins\n\nVocê concorda com as regras?", "Sim", "Não");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if(dialogid == DIALOG_RULES)
    {
        if(response) // Se clicarem em 'Sim' ou se pressionarem ENTER
        {
            SendClientMessage(playerid, COLOR_GREEN, "Obrigado por concordar com as regras do servidor!");
        }
        else // Pressionando ESC ou Cancel
        {
            Kick(playerid);
        }
        return 1; // Encontrando o dialog, retorna-se 1 para que os outros não sejam processados, Assim como OnPlayerCommandText.
    }

    return 0; // DEVE-SE retornar 0 aqui! Como em OnPlayerCommandText.
}
#define DIALOG_LOGIN 2

// Em algum comando
ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Por Favor digite sua senha:", "Logar", "Cancelar");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if(dialogid == DIALOG_LOGIN)
    {
        if(!response) // Pressionando ESC ou Cancel
        {
            Kick(playerid);
        }
        else // Pressionando ENTER ou clicando no botão 'Logar'
        {
            if(CheckPassword(playerid, inputtext))
            {
                SendClientMessage(playerid, COLOR_RED, "Agora você está logado!");
            }
            else
            {
                SendClientMessage(playerid, COLOR_RED, "FALHA NO LOGIN.");

                // Retorna a dialog de Login
                ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Por Favor digite sua senha:", "Logar", "Cancelar");
            }
        }
        return 1; // Encontrando a dialog, retorna-se 1 para que os outros não sejam processados, Assim como OnPlayerCommandText.
    }

    return 0; // DEVE-SE retornar 0 aqui! Como em OnPlayerCommandText.
}
#define DIALOG_WEAPONS 3

// Em um comando
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Armas", "Desert Eagle\nAK-47\nCombat Shotgun", "Selecionar", "Fechar");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if(dialogid == DIALOG_WEAPONS)
    {
        if(response) // Se clicar em 'Selecionar' ou dar clique duplo na arma
        {
            // Dê a eles a arma
            switch(listitem)
            {
                case 0: GivePlayerWeapon(playerid, WEAPON_DEAGLE, 14); // Entrega uma Deagle
                case 1: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // Entra uma AK-47
                case 2: GivePlayerWeapon(playerid, WEAPON_SHOTGSPA, 28); // Entrega uma Combat Shotgun
            }
        }
        return 1; // Encontrando a dialog, retorna-se 1 para que os outros não sejam processados, Assim como OnPlayerCommandText.
    }

    return 0; // DEVE-SE retornar 0 aqui! Como em OnPlayerCommandText.
}
#define DIALOG_WEAPONS 3

// Em um comando
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Armas",
"Weapon\tAmmo\tPrice\n\
M4\t120\t500\n\
MP5\t90\t350\n\
AK-47\t120\t400",
"Selecionar", "Fechar");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if(dialogid == DIALOG_WEAPONS)
    {
        if(response) // Se clicar em 'Selecionar' ou dar clique duplo na arma
        {
            // Devolve uma arma
            switch(listitem)
            {
                case 0: GivePlayerWeapon(playerid, WEAPON_M4, 120); // Entrega uma M4
                case 1: GivePlayerWeapon(playerid, WEAPON_MP5, 90); // Entrega uma MP5
                case 2: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // Entrega uma AK-47
            }
        }
        return 1; // Encontrando a dialog, retorna-se 1 para que os outros não sejam processados, Assim como OnPlayerCommandText.
    }

    return 0; // DEVE-SE retornar 0 aqui! Como em OnPlayerCommandText.
}
```

## Notas

:::tip

Parâmetros podem conter diferentes valores, baseados no estilo da dialog ([clique para mais exemplos](../resources/dialogstyles.md)).

:::

:::tip

É apropriado usar diferentes dialogids, se você tiver muitos.

:::

:::warning

Uma dialog de jogador não é escondido ao reiniciar o gamemode, ocasionando em uma mensagem "Warning: PlayerDialogResponse PlayerId: 0 dialog ID doesn't match last sent dialog ID" se um jogador responder a dialog após o reinício.

:::

## Funções Relacionadas 

- [ShowPlayerDialog](../functions/ShowPlayerDialog.md): Show a dialog to a player.
