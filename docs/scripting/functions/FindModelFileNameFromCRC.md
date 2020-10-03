---
id: FindModelFileNameFromCRC
title: FindModelFileNameFromCRC
description: Find an existing custom skin or simple object model file.
tags: []
---

:::warning

This function was added in SA-MP 0.3.DL R1 and will not work in earlier versions!

:::

## Description

Find an existing custom skin or simple object model file. The model files are located in models server folder by default (artpath setting).

| Name | Description |
| --- | --- |
| crc | The CRC checksum of custom model file. |
| retstr[] | An array into which to store the .dff file name, passed by reference. |
| retstr_size | The length of the string that should be stored. |

## Returns

1: The function executed successfully.

0: The function failed to execute.

## Related Functions

- [OnPlayerFinishedDownloading](../callbacks/OnPlayerFinishedDownloading): Called when a player finishes downloading custom models.
