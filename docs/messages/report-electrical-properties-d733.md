---
title: ReportElectricalProperties
---

# Message: ReportElectricalProperties

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `D733h` |

## Description

This message is used to report the electrical properties of the node.

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
Bit 0: NominalVoltage<br>
Bit 1: CurrentVoltage<br>
Bit 2: NominalAmperage<br>
Bit 3: MaximumAmperage<br>
Bit 4: CurrentAmperage<br>
</td>
</tr><tr>
<td align="center">2</td>
<td>NominalVoltage</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units volt</td>
<td align="center"><i>true</i></td>
<td>Nominal voltage expected by the node<br><br>
Real Lower Limit: 0.0<br>
Real Upper Limit: 600.0<br>
</td>
</tr>
<tr>
<td align="center">3</td>
<td>CurrentVoltage</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units volt</td>
<td align="center"><i>true</i></td>
<td>Current voltage experienced by the node<br><br>
Real Lower Limit: 0.0<br>
Real Upper Limit: 600.0<br>
</td>
</tr>
<tr>
<td align="center">4</td>
<td>NominalAmperage</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units ampere</td>
<td align="center"><i>true</i></td>
<td>Average current draw by the node<br><br>
Real Lower Limit: 0.0<br>
Real Upper Limit: 10.0<br>
</td>
</tr>
<tr>
<td align="center">5</td>
<td>MaximumAmperage</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units ampere</td>
<td align="center"><i>true</i></td>
<td>Maximum possible current by the node<br><br>
Real Lower Limit: 0.0<br>
Real Upper Limit: 10.0<br>
</td>
</tr>
<tr>
<td align="center">6</td>
<td>CurrentAmperage</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units ampere</td>
<td align="center"><i>true</i></td>
<td>Current amperage drawn by the node<br><br>
Real Lower Limit: 0.0<br>
Real Upper Limit: 10.0<br>
</td>
</tr>
</tbody></table>

