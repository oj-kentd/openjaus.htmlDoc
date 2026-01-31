---
title: SetGeomagneticProperty
---

# Message: SetGeomagneticProperty

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `0412h` |

## Description

This message is used to set the location specific magnetic variation for adjusting the GPS heading.

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
<td>MagneticVariation</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units radians</td>
<td align="center"><i>false</i></td>
<td>
Real Lower Limit: -3.141592653589793<br>
Real Upper Limit: 3.141592653589793<br>
</td>
</tr>
</tbody></table>

