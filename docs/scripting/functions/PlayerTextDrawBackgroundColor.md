---
id: PlayerTextDrawBackgroundColor
title: PlayerTextDrawBackgroundColor
description: Adjust the background color of a player-textdraw.
tags: ["player", "textdraw", "playertextdraw"]
---

:::warning

This feature (player-textdraws) was added in SA-MP 0.3e and will not work in earlier versions!

:::

## Description

Adjust the background color of a player-textdraw.

| Name | Description |
| --- | --- |
| playerid | The ID of the player whose player-textdraw to set the background color of |
| text | The ID of the player-textdraw to set the background color of |
| color | The color that the textdraw should be set to. |

## Returns

Note

If PlayerTextDrawSetOutline is used with size > 0, the outline color will match the color used in PlayerTextDrawBackgroundColor. Changing the value of color seems to alter the color used in PlayerTextDrawColor

## Examples

```c
new PlayerText:MyTextdraw;

public OnPlayerConnect(playerid)
{
    MyTextdraw = CreatePlayerTextDraw(playerid, 320.0, 425.0, "This is an example textdraw");
    PlayerTextDrawUseBox(playerid, MyTextdraw, 1);
    PlayerTextDrawBackgroundColor(playerid, MyTextdraw, 0xFFFFFFFF); // Set the background color of MyTextdraw to white
    return 1;
}
```

## Notes

:::tip

If PlayerTextDrawSetOutline is used with size > 0, the outline color will match the color used in PlayerTextDrawBackgroundColor. Changing the value of color seems to alter the color used in PlayerTextDrawColor

:::

## Related Functions

- [CreatePlayerTextDraw](CreatePlayerTextDraw.md): Create a player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy.md): Destroy a player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor.md): Set the color of the text in a player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor.md): Set the color of a player-textdraw's box.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment.md): Set the alignment of a player-textdraw.
- [PlayerTextDrawFont](PlayerTextDrawFont.md): Set the font of a player-textdraw.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize.md): Set the letter size of the text in a player-textdraw.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize.md): Set the size of a player-textdraw box (or clickable area for PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline.md): Toggle the outline on a player-textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow.md): Set the shadow on a player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional.md): Scale the text spacing in a player-textdraw to a proportional ratio.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox.md): Toggle the box on a player-textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString.md): Set the text of a player-textdraw.
- [PlayerTextDrawShow](PlayerTextDrawShow.md): Show a player-textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide.md): Hide a player-textdraw.
