---
title: SetDigitalVideoIlluminator
---

# Message: SetDigitalVideoIlluminator

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `D801h` |

## Description

This message commands a level of illumination output and supports beamwidth control for the device associated with he specified illuminatorID

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
<td>IlluminatorID</td>
<td>Unsigned Short</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>identifies an illumination device supported by the service. Zero is not a valid value.<br>
</td>
</tr>
<tr>
<td align="center">2</td>
<td>Level</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units percent</td>
<td align="center"><i>false</i></td>
<td>Units: Percent.<br><br>
Real Lower Limit: 0.0<br>
Real Upper Limit: 100.0<br>
</td>
</tr>
<tr>
<td align="center">3</td>
<td>Beamwidth</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units degrees</td>
<td align="center"><i>false</i></td>
<td>Scaled Integer, Horizontal Field of illumination, degrees<br><br>
Real Lower Limit: 0.0<br>
Real Upper Limit: 360.0<br>
</td>
</tr>
</tbody></table>

