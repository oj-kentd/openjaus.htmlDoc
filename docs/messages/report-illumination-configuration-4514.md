---
title: ReportIlluminationConfiguration
---

# Message: ReportIlluminationConfiguration

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `4514h` |

## Description

Reports current illumination state

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
<td>IlluminationTypes</td>
<td>BitField<br>
Integer Size: Unsigned Integer</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>For each illuminator supported by the service, the corresponding bit shall be set to the high (on, 1) value.<br><br>
0: <i>Headlights</i><br>
1: <i>LeftTurnSignal</i><br>
2: <i>RightTurnSignal</i><br>
3: <i>RunningLights</i><br>
4: <i>BrakeLights</i><br>
5: <i>BackupLights</i><br>
6: <i>VisibleLightSource</i><br>
7: <i>IRLightSource</i><br>
8: <i>VariableLight1</i><br>
9: <i>VariableLight2</i><br>
10: <i>VariableLight3</i><br>
11: <i>VariableLight4</i><br>
12: <i>HighBeams</i><br>
13: <i>ParkingLights</i><br>
14: <i>FogLights</i><br>
15: <i>HazardLights</i><br>
</td>
</tr>
</tbody></table>

