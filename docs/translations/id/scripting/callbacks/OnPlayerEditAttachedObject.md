---
id: OnPlayerEditAttachedObject
title: OnPlayerEditAttachedObject
description: Callback ini dipanggil saat pemain mengakhiri mode penyuntingan objek yang dilampirkan.
tags: ["player"]
---

:::warning

Callback ini telah ditambahkan dalam SA-MP 0.3e dan tidak bekerja pada versi dibawahnya atau sebelumnya!

:::

## Deskripsi

Callback ini dipanggil saat pemain mengakhiri mode penyuntingan objek yang dilampirkan.

| Name           | Description                                                         |
| -------------- | --------------------------------------------------------------------|
| playerid       | ID dari pemain yang melakukan pengeditan objek                      |
| response       | 0 jika mereka membatalkan (ESC) or 1 jika mereka menekan save icon. |
| modelid        | Model dari penautan object yang di edit                             |
| boneid         | Tulang dari penautan object yang di edit                            |
| Float:fOffsetX | Offset X untuk obyek yang di sunting                                |
| Float:fOffsetY | Offset Y untuk obyek yang di sunting                                |
| Float:fOffsetZ | Offset Z obyek yang di sunting                                      |
| Float:fRotX    | Rotasi X untuk untuk obyek yang di sunting                          |
| Float:fRotY    | Rotasi Y untuk obyek yang di sunting                                |
| Float:fRotZ    | Rotasi Z untuk obyek yang di sunting                                |
| Float:fScaleX  | Skala X untuk obyek yang di sunting                                 |
| Float:fScaleY  | Skala Y untuk obyek yang di sunting                                 |
| Float:fScaleZ  | Skala Z untuk obyek yang di sunting                                 |

## Returns

1 - Akan melarang filterscript lain untuk menerima callback ini.

0 - Mengindikasikan bahwa callback ini akan diteruskan ke filtercript lain.

Selalu terpanggil pertama di filterscripts.
## Contoh

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

// Data harus disimpan kedalam array disaat penautan obyek.

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

## Catatan

:::warning

Pengeditan harus dibuang jika tanggapan adalah '0' (dibatalkan). Ini harus dilakukan dengan menyimpan offset dll dalam array SEBELUM menggunakan EditAttachedObject.

:::

## Fungsi Terkait

- [EditAttachedObject](../functions/EditAttachedObject.md): Edit penautan object.
- [SetPlayerAttachedObject](../functions/SetPlayerAttachedObject.md): penautan object kepada pemain
