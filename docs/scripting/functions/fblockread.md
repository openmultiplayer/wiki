---
id: fblockread
title: fblockread
description: This function allows you to read data from a file, without encoding and line terminators.
tags: []
---

import T from '../../../src/components/templates.js'

<T.LowercaseNote />

## Description

This function allows you to read data from a file, without encoding and line terminators

| Name                 | Description                           |
| -------------------- | ------------------------------------- |
| handle               | File handle to use, opened by fopen() |
| buffer               | The buffer to save the read data in.  |
| size = sizeof buffer | The number of cells to read.          |

## Returns

The number of cells read. Zero, if the file end has been reached.

## Examples

```c
// Define "some_enum"
enum _:some_enum
{
    some_data1,
    some_data2[20],
    Float:some_data3
}

// Declare "some_data"
new some_data[some_enum];

// ...

// Open "file.bin" in "read only" mode
new File:handle = fopen("file.bin", io_write)

    // Declare "file_len"
    file_len;

// Check, if "file.bin" is open
if (handle)
{
    // Success

    // Get the file length of "file.bin"
    file_len = flength(handle);

    // If file is equally large than the array
    if (file_len == (some_enum*4))
    {
        // Success

        // Read from "file.bin" into "some_data"
        fblockread(handle, some_data);
    }
    else
    {
        // Error
        print("\"file.bin\" is not compatible with the array.");
    }

    // Close "file.bin"
    fclose(handle);
}
else
{
    // Error
    print("Failed to open \"file.bin\".");
}
```

## Notes

:::warning

Using an invalid handle will crash your server! Get a valid handle by using fopen or ftemp.

:::

## Related Functions
