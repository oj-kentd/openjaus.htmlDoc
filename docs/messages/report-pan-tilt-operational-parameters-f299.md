---
title: ReportPanTiltOperationalParameters
---

# Message: ReportPanTiltOperationalParameters

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `F299h` |

## Description

This message is used to report the per-joint operational parameters.

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
Bit 0: Joint1Temperature<br>
Bit 1: Joint1BusVoltage<br>
Bit 2: Joint1BusCurrent<br>
Bit 3: Joint1PhaseCurrent<br>
Bit 4: Joint2Temperature<br>
Bit 5: Joint2BusVoltage<br>
Bit 6: Joint2BusCurrent<br>
Bit 7: Joint2PhaseCurrent<br>
</td>
</tr><tr>
<td align="center">2</td>
<td>Joint1Temperature</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units degree celsius</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: -50.0<br>
Real Upper Limit: 150.0<br>
</td>
</tr>
<tr>
<td align="center">3</td>
<td>Joint1BusVoltage</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units volt</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: 0.0<br>
Real Upper Limit: 150.0<br>
</td>
</tr>
<tr>
<td align="center">4</td>
<td>Joint1BusCurrent</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units ampere</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: 0.0<br>
Real Upper Limit: 200.0<br>
</td>
</tr>
<tr>
<td align="center">5</td>
<td>Joint1PhaseCurrent</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units ampere</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: 0.0<br>
Real Upper Limit: 200.0<br>
</td>
</tr>
<tr>
<td align="center">6</td>
<td>Joint2Temperature</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units degree celsius</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: -50.0<br>
Real Upper Limit: 150.0<br>
</td>
</tr>
<tr>
<td align="center">7</td>
<td>Joint2BusVoltage</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units volt</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: 0.0<br>
Real Upper Limit: 150.0<br>
</td>
</tr>
<tr>
<td align="center">8</td>
<td>Joint2BusCurrent</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units ampere</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: 0.0<br>
Real Upper Limit: 200.0<br>
</td>
</tr>
<tr>
<td align="center">9</td>
<td>Joint2PhaseCurrent</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units ampere</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: 0.0<br>
Real Upper Limit: 200.0<br>
</td>
</tr>
</tbody></table>

