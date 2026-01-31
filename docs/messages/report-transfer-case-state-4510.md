---
title: ReportTransferCaseState
---

# Message: ReportTransferCaseState

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `4510h` |

## Description

Returns current transfer case state for Front Wheel Drive or All Wheel Drive vehicles

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
<td>TransferCaseState</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Enumeration Values:<br>
0: <i>DEFAULT</i><br>1: <i>FWD</i><br>2: <i>AUTO_4WD</i><br>3: <i>MANUAL_LOW_4WD</i><br>4: <i>MANUAL_HIGH_4WD</i><br>5: <i>LOW_AWD</i><br>6: <i>HIGH_AWD</i><br></td>
</tr>
</tbody></table>

