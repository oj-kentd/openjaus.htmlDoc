---
title: ReportStabilityControlCapabilities
---

# Message: ReportStabilityControlCapabilities

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `D7CBh` |

## Description

This message is used to report the capabilities for driver-assist functions. The precise implementation of each function is beyond the scope of this service definition.

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
<td>StabilityControlStatus</td>
<td>BitField<br>
Integer Size: Unsigned Short</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>Bit field representing the supported driver-assist functionality of the vehicle. A value of one (1) means the function is supported.  A value of zero (0) means the function is not supported, or may not be toggled on/off.<br><br>
0: <i>AntilockBrakeSystem</i><br>
1: <i>TractionControl</i><br>
2: <i>ElectronicStabilityControl</i><br>
3: <i>DifferentialLock</i><br>
4: <i>FrontSuspensionLock</i><br>
5: <i>RearSuspensionLock</i><br>
6: <i>ActivePitchoverControl</i><br>
7: <i>ActiveRolloverControl</i><br>
[8, 11] : <i>ReservedForFutureUse</i> (range: 0 ... 15)<br>12: <i>UserDefinedCapability1</i><br>
13: <i>UserDefinedCapability2</i><br>
14: <i>UserDefinedCapability3</i><br>
15: <i>UserDefinedCapability4</i><br>
</td>
</tr>
</tbody></table>

