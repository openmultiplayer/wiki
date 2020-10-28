---
id: AddSimpleModel
title: AddSimpleModel
description: Dodaje do pobrania nowy obiekt.
tags: []
---

import T from '../../../../../src/components/templates.js'

<T.VersionWarn version='SA-MP 0.3.DL R1' />

## Opis

Dodaje nowy niestandardowy obiekt do pobrania. Pliki modelu będą przechowywane w ścieżce Dokumenty\GTA San Andreas User Files\SAMP\cache w katalogu nazwanym adresem IP oraz portem serwera, z nazwami w formie sum kontrolnych CRC.

| Nazwa        | Opis                                                                                                                |
| ------------ | ------------------------------------------------------------------------------------------------------------------- |
| virtualworld | ID wirtualnego świata, w którym obiekt będzie dostępny. Użyj -1, aby był dostępny we wszystkich światach.           |
| baseid       | Bazowe ID obiektu do użycia (oryginalny obiekt, który zostanie wykorzystany, gdy pobieranie się nie uda).           |
| newid        | Nowe ID obiektu z zakresu od -1000 do -30000 (29000 slotów), używane później w CreateObject lub CreatePlayerObject. |
| dffname      | Nazwa pliku .dff z kolizjami modelu, znajdującego się domyślnie w serwerowym katalogu models (ustawienie artpath).  |
| txdname      | Nazwa pliku .txd z teksturami modelu, znajdującego się domyślnie w serwerowym katalogu models (ustawienie artpath). |

## Zwracane wartości

1: Funkcja wykonała się prawidłowo.

0: Funkcja nie wykonała się prawidłowo.

## Przykłady

```c
public OnGameModeInit()
{
    AddSimpleModel(-1, 19379, -2000, "wallzzz.dff", "wallzzz.txd");
    return 1;
}
```

```c
AddSimpleModel(-1, 19379, -2000, "wallzzz.dff", "wallzzz.txd");
```

## Uwagi

:::tip

`useartwork` musi być włączone w ustawieniach serwera, aby ta funkcja działała. Jeżeli ustawiony jest konkretny wirtualny świat, to gracz pobierze obiekty w momencie wejścia do niego.

:::

:::warning

Aktualnie nie ma żadnych restrykcji co do wywoływania tej funkcji, ale miej na uwadze, że jeżeli nie wywołasz jej w OnFilterScriptInit/OnGameModeInit, to gracze, którzy są już na serwerze, mogą nie mieć pobranych obiektów.

:::

## Powiązane funkcje

- [OnPlayerFinishedDownloading](../callbacks/OnPlayerFinishedDownloading.md): Wywoływane, kiedy gracz skończy pobierać niestandardowe modele.
