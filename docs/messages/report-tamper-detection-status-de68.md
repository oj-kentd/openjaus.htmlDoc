---
title: ReportTamperDetectionStatus
---

# Message: ReportTamperDetectionStatus

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `DE68h` |

## Description

This message is used to report the current status of anti-tamper detection.  Detected activities are continuously reported until cleared by a SetTamperDetectionStatus message.

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
<td>CurrentState</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Enumeration Values:<br>
0: <i>Disabled</i><br>1: <i>Enabled</i><br>2: <i>AlwaysEnabled</i><br></td>
</tr>
<tr>
<td align="center">2</td>
<td>TamperStatus</td>
<td>BitField<br>
Integer Size: Unsigned Short</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>Current results of tamper detection<br><br>
0: <i>NetworkInstrusion</i><br>
1: <i>PhysicalHardwareTamper</i><br>
2: <i>ElectricalTamper</i><br>
3: <i>Other</i><br>
</td>
</tr>
<tr>
<td align="center">3</td>
<td>Description</td>
<td>VariableLengthString<br>
Count Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
</td>
</tr>
</tbody></table>

