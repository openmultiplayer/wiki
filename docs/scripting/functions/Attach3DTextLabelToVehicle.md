---
id: Attach3DTextLabelToVehicle
title: Attach3DTextLabelToVehicle
description: Attaches a 3D Text Label to a specific vehicle.
tags: ["vehicle", "3dtextlabel"]
---

:::warning

This function was added in SA-MP 0.3a and will not work in earlier versions!

:::

## Description

Attaches a 3D Text Label to a specific vehicle.

| Name | Description |
| --- | --- |
| Text3D:id | The 3D Text Label you want to attach. |
| vehicleid | The vehicle you want to attach the 3D Text Label to. |
| OffsetX | The Offset-X coordinate of the player vehicle (the vehicle is 0.0,0.0,0.0).. |
| OffsetY | The Offset-Y coordinate of the player vehicle (the vehicle is 0.0,0.0,0.0).. |
| OffsetZ | The Offset-Z coordinate of the player vehicle (the vehicle is 0.0,0.0,0.0).. |

## Returns

This function does not return any specific values.

## Examples

```c
new
    Text3D:vehicle3Dtext[MAX_VEHICLES], // Creating the TextLabel for later use
    vehicle_id;

public OnGameModeInit ( )
{
    vehicle_id = CreateVehicle( 510, 0.0. 0.0, 15.0, 5, 0, 120 ); // Creating the Vehicle.
    vehicle3Dtext[ vehicle_id ] = Create3DTextLabel( "Example Text", 0xFF0000AA, 0.0, 0.0, 0.0, 50.0, 0, 1 );
    Attach3DTextLabelToVehicle( vehicle3Dtext[ vehicle_id ] , vehicle_id, 0.0, 0.0, 2.0); // Attaching Text Label To Vehicle.
}
public OnGameModeExit ( )
{
    Delete3DTextLabel( vehicle3Dtext[ vehicle_id ] );
    return true;
}
```

## Related Functions

- [Create3DTextLabel](Create3DTextLabel.md): Create a 3D text label.
- [Delete3DTextLabel](Delete3DTextLabel.md): Delete a 3D text label.
- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer.md): Attach a 3D text label to a player.
- [Update3DTextLabelText](Update3DTextLabelText.md): Change the text of a 3D text label.
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel.md): Create A 3D text label for one player.
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel.md): Delete a player's 3D text label.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabel.md): Change the text of a player's 3D text label.
