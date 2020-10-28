---
id: format
title: format
description: Formats a string to include variables and other strings inside it.
tags: []
---

import T from '../../../src/components/templates.js'

<T.LowercaseNote />

## Description

Formats a string to include variables and other strings inside it.

| Name           | Description                               |
| -------------- | ----------------------------------------- |
| output[]       | The string to output the result to        |
| len            | The maximum length output can contain     |
| format[]       | The format string                         |
| {Float,\_}:... | Indefinite number of arguments of any tag |

## Returns

This function does not return any specific values.

## Examples

```c
new result[128];
new number = 42;
format(result,sizeof(result), "The number is %i.",number);  //-> The number is 42.
new string[]= "simple message";
format(result,sizeof(result), "This is a %s containing the number %i.", string, number);
// This is a simple message containing the number 42.
new string[64];
format(string,sizeof(string),"Your score is: %d",GetPlayerScore(playerid));
SendClientMessage(playerid,0xFFFFFFAA,string);
new hour, minute, second, string[32];
gettime(hour, minute, second);

format(string, sizeof(string), "The time is %02d:%02d:%02d.", hour, minute, second); // will output something like 09:45:02
SendClientMessage(playerid, -1, string);
new string[35];
format(string,sizeof(string),"43%s of my shirts are black.","%%");
SendClientMessage(playerid,0xFFFFFAA,string);
```

## Notes

:::warning

This function doesn't support packed strings.

:::

## Related Functions

- [print](print): Print a basic message to the server logs and console.
- [printf](printf): Print a formatted message into the server logs and console.
