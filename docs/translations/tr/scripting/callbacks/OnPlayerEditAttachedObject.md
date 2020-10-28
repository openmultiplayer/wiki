---
id: OnPlayerEditAttachedObject
title: OnPlayerEditAttachedObject
description: Bu callback oyuncu üzerine takılan objenin düzenlemesini bitirdiğinde çağrılır.
tags: ["player"]
---

:::warning

Bu callback SA-MP 0.3e sürümünde eklendi ve önceki sürümlerde çalıştırılamaz.

:::

## Açıklama

Bu callback oyuncu üzerine takılan objenin düzenlemesini bitirdiğinde çağrılır.

| Ad             | Açıklama                                                          |
| -------------- | ----------------------------------------------------------------- |
| playerid       | Düzenlemeyi bitiren oyuncunun id'si.                              |
| response       | Eğer iptal ettiyse 0, kaydet tuşuna bastıysa 1 değerini döndürür. |
| modelid        | model id'si.                                                      |
| boneid         | objenin takıldığı kemik numarası.                                 |
| Float:fOffsetX | Editlenen objenin X offset'i.                                     |
| Float:fOffsetY | Editlenen objenin Y offset'i.                                     |
| Float:fOffsetZ | Editlenen objenin Z offset'i.                                     |
| Float:fRotX    | Editlenen objenin X açısı.                                        |
| Float:fRotY    | Editlenen objenin Y açısı.                                        |
| Float:fRotZ    | Editlenen objenin Z açısı.                                        |
| Float:fScaleX  | Editlenen objenin X skalası.                                      |
| Float:fScaleY  | Editlenen objenin Y skalası.                                      |
| Float:fScaleZ  | Editlenen objenin Z skalası.                                      |

## Dönence

1 - Diğer filterscriptlerde çağrılmasını engeller.

0 - Diğer filterscriptlerde çağrılması için pas geçilir.

Her zaman öncelikle filterscriptlerde çağrılır.

## Örnekler

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

// Veriler bir arrayde tutulmalıdır.

public OnPlayerEditAttachedObject(playerid, response, index, modelid, boneid, Float:fOffsetX, Float:fOffsetY, Float:fOffsetZ, Float:fRotX, Float:fRotY, Float:fRotZ, Float:fScaleX, Float:fScaleY, Float:fScaleZ)
{
    if (response)
    {
        SendClientMessage(playerid, COLOR_GREEN, "Obje başarıyla düzenlendi ve kaydedildi.");

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
        SendClientMessage(playerid, COLOR_RED, "Obje kayıt edilmedi.");

        new i = index;
        SetPlayerAttachedObject(playerid, index, modelid, boneid, ao[playerid][i][ao_x], ao[playerid][i][ao_y], ao[playerid][i][ao_z], ao[playerid][i][ao_rx], ao[playerid][i][ao_ry], ao[playerid][i][ao_rz], ao[playerid][i][ao_sx], ao[playerid][i][ao_sy], ao[playerid][i][ao_sz]);
    }
    return 1;
}
```

## Notlar

:::warning

Eğer 'response' parametresi 0 (iptal) gelirse objeyi eski haline döndürmek gerekir. Bunun için EditAttachedObject kullanmadan önce verileri bir arraye kayıt edin.

:::

## Bağlantılı Fonksiyonlar

- [EditAttachedObject](../functions/EditAttachedObject.md): Üzerine takılan objeyi düzenleme.
- [SetPlayerAttachedObject](../functions/SetPlayerAttachedObject.md): Oyuncunun üzerine obje takma.
