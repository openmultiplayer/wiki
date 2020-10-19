---
id: GetPlayerFacingAngle
title: GetPlayerFacingAngle
description: Obtém o ângulo Z para qual o jogador está voltado (olhando).
tags: []
---

## Descrição

Obtém o ângulo Z para qual o jogador está voltado (olhando).

| Nome         | Descrição                                                                 |
| ------------ | ------------------------------------------------------------------------- |
| playerid     | O ID do jogador para obter o ângulo Z.                                    |
| &Float: ang  | A váriavel float para armazenar o ângulo, passada por referência.         |

## Retorno

1: A função foi executada com sucesso.

0: Falha ao executar a função. Isso significa que o jogador não existe.

O ângulo Z do jogador é armazenado na variável float especificada.

## Exemplos

```c
new Float:Angle, string[26];
GetPlayerFacingAngle(playerid, Angle);
format(string, sizeof(string), "O ângulo para qual você está voltado é: %0.2f", Angle);
SendClientMessage(playerid, 0xFFFFFFFF, string);
```

## Notas

:::tip

Os ângulos retornados quando dentro de um veículo raramente são corretos. Para obter o ângulo Z correto dentro de um veículo, use GetVehicleZAngle.

:::

:::warning

Os ângulos são invertidos no GTA: SA; 90 graus seria o leste no mundo real, mas no GTA: SA 90 graus seria na verdade o oeste. Norte e Sul ainda são 0/360 e 180. Para converter isso, basta fazer 360 - ângulo.

:::

## Funções Relacionadas

- [GetVehicleZAngle](GetVehicleZAngle.md): Obtém o ângulo Z atual de um veículo.
- [SetPlayerFacingAngle](SetPlayerFacingAngle.md): Define o ângulo Z para qual um jogador está voltado.
