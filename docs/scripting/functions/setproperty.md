---
id: setproperty
title: setproperty
description: Add a new property or change an existing property.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## Description

Add a new property or change an existing property.

| Name | Description |
| --- | --- |
| id | The virtual machine to use, you should keep this zero. |
| name[] | Used in combination with value when storing integers; don't use this if you want to store a string. |
| value | The integer value to store or the property's unique ID if storing a string. Use the hash-function to calculate it from a string. |
| string[] | The value of the property, as a string. Don't use this if you want to store an integer. |

## Returns

This function does not return any specific values.

## Examples

```c
setproperty(.name = "MyInteger", .value = 42);

new value = getproperty(.name = "MyInteger");
printf("Value that was stored is: %d", value);
setproperty(0, "", 123984334, ":)");

new value[4];
getproperty(0, "", 123984334, value);
strunpack(value, value, sizeof(value)); // we need to unpack the string first
print(value);

//should print :)
setproperty(.value = 123984334, .string = ":)");

// The rest is the same as above.
```

## Related Functions

- [Getproperty](Getproperty.md): Get the value of a property.
- [Deleteproperty](Deleteproperty.md): Delete a property.
- [Existproperty](Existproperty.md): Check if a property exists.
