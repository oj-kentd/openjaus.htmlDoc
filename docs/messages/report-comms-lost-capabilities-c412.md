---
title: ReportCommsLostCapabilities
---

# Message: ReportCommsLostCapabilities

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `C412h` |

## Description

This message is used to report which behaviors are supported on a comms-lost event.

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
<td>SupportedBehaviors</td>
<td>BitField<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
0: <i>Stop</i><br>
1: <i>ContinueMission</i><br>
2: <i>MoveToPos</i><br>
3: <i>Retrotraverse</i><br>
</td>
</tr>
</tbody></table>

