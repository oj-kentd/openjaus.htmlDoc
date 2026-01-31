---
title: SetIlluminationState
---

# Message: SetIlluminationState

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `0513h` |

## Description

Sets illumination state

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
<td>Illumination</td>
<td>BitField<br>
Integer Size: Unsigned Integer</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>When a bit is set to the high (on, 1) value the service shall turn the light ON. Variable-power illumination settings may support up to four power levels.<br><br>
0: <i>Headlights</i><br>
1: <i>LeftTurnSignal</i><br>
2: <i>RightTurnSignal</i><br>
3: <i>RunningLights</i><br>
4: <i>BrakeLights</i><br>
5: <i>BackupLights</i><br>
6: <i>VisibleLightSource</i><br>
7: <i>IRLightSource</i><br>
[8, 11] : <i>VariableLight1</i> (range: 0 ... 15)<br>[12, 15] : <i>VariableLight2</i> (range: 0 ... 15)<br>[16, 19] : <i>VariableLight3</i> (range: 0 ... 15)<br>[20, 23] : <i>VariableLight4</i> (range: 0 ... 15)<br>24: <i>HighBeams</i><br>
25: <i>ParkingLights</i><br>
26: <i>FogLights</i><br>
27: <i>HazardLights</i><br>
</td>
</tr>
</tbody></table>

