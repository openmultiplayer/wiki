---
id: OnActorStreamIn
заголовок: OnActorStreamIn
описание: Этот callback вызывается, когда актер появляется в поле стрима клиента игрока.
тэги: []
---

import T from '../../../src/components/templates.js'

<T.VersionWarn name='callback' version='SA-MP 0.3.7' />

## Описание

Этот callback вызывается, когда актер появляется в поле стрима клиента игрока.

| Имя         | Описание                                                      |
| ----------- | ------------------------------------------------------------- |
| actorid     | Идентификатор актера, который находится в зоне стрима игрока. |
| forplayerid | Идентификатор игрока, для которого появляется актер.          |

## Возвращает

Этот callback всегда вызывается первым из filterscripts.

## Примеры

```c
public OnActorStreamIn(actorid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Актер %d сейчас находится в зоне Вашего стрима.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Заметки

:::tip

Этот callback также может быть вызван NPC.

:::

## Связанные функции
