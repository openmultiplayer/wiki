---
id: OnDialogResponse
title: OnDialogResponse
description: In callback vaghti player be "ShowPlayerDialog" az tarighe click bar rooye dokme ya zadane ENTER/ESC ya click bar rooye list item (agar style dialog list bashad) pasokh bedahad fara khande mishavad.
tags: []
---

:::warning
In callback dar version SA-MP 0.3a ezafe shode va dar version haye ghabl kar nemikonad !
:::

## Tozihat
In callback vaghti player be "ShowPlayerDialog" az tarighe click bar rooye dokme ya zadane ENTER/ESC ya click bar rooye list item (agar style dialog list bashad) pasokh bedahad fara khande mishavad.
| Esm         | Tozih                                                                                                                                    |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| playerid    | ID playeri ke be dialog pasokh dade.                                                                                                     |
| dialogid    | ID dialogi ke player be an pasokh dade ast, dar ShowPlayerDialog vojood darad                                                            |
| response    | 1 dar soorati ke player rooye dokme chap click kard, va 0 dar soorati ke player rooye dokme rast click kard(agar faqat dokme namayesh dade shode bashad) |
| listitem    | ID itemi ke player az list entekhab karde (az 0 shoroo mishavad) (dar soorati ke noe dialog list bashad dar gheyre in soorat -1 mibashad)|
| inputtext[] | Matni ke player dar input box neveshte ya esme item ke az list entekkhab karde                                                           |

## Return ha
In callback hamishe aval dar filterscript ha fara khande mishavad pas agar return 1 shavad mane fara khande shodan dar filterscript digar mishavad.

## Masal ha

```c
// Tarif kardane id dialog ke mikhahim ejra shavad
#define DIALOG_RULES 1

// Dar yek dastoor
ShowPlayerDialog(playerid, DIALOG_RULES, DIALOG_STYLE_MSGBOX, "Server Rules", "- No Cheating\n- No Spamming\n- Respect Admins\n\nDo you agree to these rules?", "Bale", "Kheyr");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if(dialogid == DIALOG_RULES)
    {
        if(response) // Agar bar rooye "Bale" click kard
        {
            SendClientMessage(playerid, COLOR_GREEN, "Thank you for agreeing to the server rules!");
        }
        else // Agar dokme ESC ra zad ya rooye "Kheyr" click kard
        {
            Kick(playerid);
        }
        return 1; // Ma yek dialog ra rasidegi kardim pas bayad return 1 konim, melse OnPlayerCommandText.
    }

    return 0; // Bayad inja return 0 konid, mesle OnPlayerCommandText
}
#define DIALOG_LOGIN 2

// Dar yek dastoor
ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Please enter your password:", "Login", "Cancel");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if(dialogid == DIALOG_LOGIN)
    {
        if(!response) // Agar rooye "Cancel" click kard ya dokme ESC ra zad
        {
            Kick(playerid);
        }
        else // Agar rooye dokme "Login" click kard ya dokme ENTER ra zad
        {
            if(CheckPassword(playerid, inputtext))
            {
                SendClientMessage(playerid, COLOR_RED, "Shoma vared shodid!");
            }
            else
            {
                SendClientMessage(playerid, COLOR_RED, "LOGIN FAILED.");

                // Re-show the login dialog
                ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Please enter your password:", "Login", "Cancel");
            }
        }
        return 1; // Ma yek dialog ra rasidegi kardim pas bayad return 1 konim, melse OnPlayerCommandText.
    }

    return 0; // Bayad inja return 0 konid, mesle OnPlayerCommandText
}
#define DIALOG_WEAPONS 3

// Dar yek dastoor
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Weapons", "Desert Eagle\nAK-47\nCombat Shotgun", "Select", "Close");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if(dialogid == DIALOG_WEAPONS)
    {
        if(response) // If they clicked 'Select' or double-clicked a weapon
        {
            // Give them the weapon
            switch(listitem)
            {
                case 0: GivePlayerWeapon(playerid, WEAPON_DEAGLE, 14); // Give them a desert eagle
                case 1: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // Give them an AK-47
                case 2: GivePlayerWeapon(playerid, WEAPON_SHOTGSPA, 28); // Give them a Combat Shotgun
            }
        }
        return 1; // Ma yek dialog ra rasidegi kardim pas bayad return 1 konim, melse OnPlayerCommandText.
    }

    return 0; // Bayad inja return 0 konid, mesle OnPlayerCommandText
}
#define DIALOG_WEAPONS 3

// Dar yek dastoor
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Weapons",
"Weapon\tAmmo\tPrice\n\
M4\t120\t500\n\
MP5\t90\t350\n\
AK-47\t120\t400",
"Select", "Close");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if(dialogid == DIALOG_WEAPONS)
    {
        if(response) // Agar rooye 'Select' click kard ya dokme ENTER ra zad
        {
            // Dadane aslahe be bazikon
            switch(listitem)
            {
                case 0: GivePlayerWeapon(playerid, WEAPON_M4, 120); // Give them an M4
                case 1: GivePlayerWeapon(playerid, WEAPON_MP5, 90); // Give them an MP5
                case 2: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // Give them an AK-47
            }
        }
        return 1; // Ma yek dialog ra rasidegi kardim pas bayad return 1 konim, melse OnPlayerCommandText.
    }

    return 0;// Bayad inja return 0 konid, mesle OnPlayerCommandText
}
```

## Notes

:::tip

Parameter ha mitavanand daraye mohtavaye motefaveti bashad, bar asase style e dialog

:::

:::tip

Behtar ast az dialogid haye mokhtalefi estefade konid, agar tedade an ha ziad ast

:::

:::warning

Dialog player baad az restart shodan server penhan nemishavad va agar player be dialog pasokh bedahad baes namayesh "Warning: PlayerDialogResponse PlayerId: 0 dialog ID doesn't match last sent dialog ID" dar console mishavad.

:::
