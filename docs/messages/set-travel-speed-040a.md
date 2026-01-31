---
title: SetTravelSpeed
---

# Message: SetTravelSpeed

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `040Ah` |

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
<td>Speed</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units meters per second</td>
<td align="center"><i>false</i></td>
<td>
Real Lower Limit: 0.0<br>
Real Upper Limit: 327.67<br>
</td>
</tr>
</tbody></table>

