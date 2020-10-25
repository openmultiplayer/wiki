---
id: OnPlayerEditAttachedObject
title: OnPlayerEditAttachedObject
description: Callback ini dipanggil saat pemain mengakhiri mode edisi objek yang dilampirkan.
tags: ["player"]
---

:::warning

Callback ini di tambahkan pada SA-MP 0.3e dan tidak akan berguna pada versi sebelumnya!

:::

## Description

Callback ini terpanggil ketika pemain selesai melakukan edit penautan object.

| Name           | Description                                                         |
| -------------- | --------------------------------------------------------------------|
| playerid       | ID dari pemain dimana ia menyelesaikan edit                         |
| response       | 0 jika mereka membatalkan (ESC) or 1 jika mereka menekan save icon. |
| modelid        | Model dari penautan object yang di edit                             |
| boneid         | Tulang dari penautan object yang di edit                            |
| Float:fOffsetX | Offset X untuk penautan object yang di edit                         |
| Float:fOffsetY | Offset Y untuk penautan object yang di edit                         |
| Float:fOffsetZ | Offset Z untuk penautan object yang di edit                         |
| Float:fRotX    | Rotasi X untuk penautan object yang di edit                         |
| Float:fRotY    | Rotasi Y untuk penautan object yang di edit                         |
| Float:fRotZ    | Rotasi Z untuk penautan object yang di edit                         |
| Float:fScaleX  | Skala X untuk penautan object yang di edit                          |
| Float:fScaleY  | Skala Y untuk penautan object yang di edit                          |
| Float:fScaleZ  | Skala Z penautan object yang di edit                                |

## Returns

1 - Akan mencegah skrip lain menerima panggilan balik ini.

0 - Menunjukkan bahwa panggilan balik ini akan diteruskan ke skrip berikutnya.

Ini akan selalu terpanggil pertama di filterscripts.

## Examples

```c
enum attached_object_data
{
    Float:ao_x,
    Float:ao_y,
    Float:ao_z,
    Float:ao_rx,
    Float:ao_ry,
    Float:ao_rz,
    Float:ao_sx,
    Float:ao_sy,
    Float:ao_sz
}

new ao[MAX_PLAYERS][MAX_PLAYER_ATTACHED_OBJECTS][attached_object_data];

// Data harus disimpan dalam array di atas saat penautan objects terpasang.

public OnPlayerEditAttachedObject(playerid, response, index, modelid, boneid, Float:fOffsetX, Float:fOffsetY, Float:fOffsetZ, Float:fRotX, Float:fRotY, Float:fRotZ, Float:fScaleX, Float:fScaleY, Float:fScaleZ)
{
    if (response)
    {
        SendClientMessage(playerid, COLOR_GREEN, "penautan object tersimpan.");

        ao[playerid][index][ao_x] = fOffsetX;
        ao[playerid][index][ao_y] = fOffsetY;
        ao[playerid][index][ao_z] = fOffsetZ;
        ao[playerid][index][ao_rx] = fRotX;
        ao[playerid][index][ao_ry] = fRotY;
        ao[playerid][index][ao_rz] = fRotZ;
        ao[playerid][index][ao_sx] = fScaleX;
        ao[playerid][index][ao_sy] = fScaleY;
        ao[playerid][index][ao_sz] = fScaleZ;
    }
    else
    {
        SendClientMessage(playerid, COLOR_RED, "Pengeditan objek tidak disimpan.");

        new i = index;
        SetPlayerAttachedObject(playerid, index, modelid, boneid, ao[playerid][i][ao_x], ao[playerid][i][ao_y], ao[playerid][i][ao_z], ao[playerid][i][ao_rx], ao[playerid][i][ao_ry], ao[playerid][i][ao_rz], ao[playerid][i][ao_sx], ao[playerid][i][ao_sy], ao[playerid][i][ao_sz]);
    }
    return 1;
}
```

## Notes

:::warning

Pengeditan harus dibuang jika tanggapan adalah '0' (dibatalkan). Ini harus dilakukan dengan menyimpan offset dll dalam array SEBELUM menggunakan EditAttachedObject.

:::

## Related Functions

- [EditAttachedObject](../functions/EditAttachedObject.md): Edit penautan object.
- [SetPlayerAttachedObject](../functions/SetPlayerAttachedObject.md): penautan object kepada pemain
