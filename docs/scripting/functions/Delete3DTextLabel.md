---
id: Delete3DTextLabel
title: Delete3DTextLabel
description: Delete a 3D text label (created with Create3DTextLabel).
tags: ["3dtextlabel"]
---

import T from '../../../src/components/templates.js'

<T.VersionWarn version='SA-MP 0.3a' />

## Description

Delete a 3D text label (created with Create3DTextLabel).

| Name      | Description                            |
| --------- | -------------------------------------- |
| Text3D:id | The ID of the 3D text label to delete. |

## Returns

1 if the 3D text label was deleted, otherwise 0.

## Examples

```c
new Text3D:gMyLabel;

gMyLabel = Create3DTextLabel(...);

Delete3DTextLabel(gMyLabel);
```

## Related Functions

- [Create3DTextLabel](Create3DTextLabel.md): Create a 3D text label.
- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer.md): Attach a 3D text label to a player.
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle.md): Attach a 3D text label to a vehicle.
- [Update3DTextLabelText](Update3DTextLabelText.md): Change the text of a 3D text label.
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel.md): Create A 3D text label for one player.
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel.md): Delete a player's 3D text label.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText.md): Change the text of a player's 3D text label.
