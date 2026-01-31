---
title: StartRetrotraverse
---

# Message: StartRetrotraverse

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `DC50h` |

## Description

This message is used to begin a retrotraverse operation.

## Message Format

<table border="1" class="jaus-table">
<tbody><tr>
<th align="left" colspan="6"><font size="+2">
<b>Message Format</b></font></th>
</tr>
<tr>
<td align="center"><b>Field #</b></td>
<td><b>Field</b></td>
<td><b>Type</b></td>
<td><b>Units</b></td>
<td align="center"><b>Optional</b></td>
<td><b>Interpretation</b></td>
</tr>
<tr>
<td align="center">1</td>
<td>Presence Vector</td>
<td>Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Bit 0: GlobalWaypointRec<br>
</td>
</tr>
<tr>
<td align="center">2</td>
<td><a href="#retrotraverseactionrec">RetrotraverseActionRec</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>false</i></td>
<td></td>
</tr>
<tr>
<td align="center">3</td>
<td><a href="#globalwaypointrec">GlobalWaypointRec</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>true</i></td>
<td></td>
</tr>
</tbody></table>

