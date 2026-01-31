---
title: SetWiperStatus
---

# Message: SetWiperStatus

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `D7C2h` |

## Description

This message is used to query the current status of the wipers.

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
<td>WiperStatus</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Enumeration Values:<br>
0: <i>Off</i><br>1: <i>OneShotActive</i><br>2: <i>LowPeriodic</i><br>3: <i>MediumPeriodic</i><br>4: <i>HighPeriodic</i><br>5: <i>LowInterval</i><br>6: <i>MediumInterval</i><br>7: <i>HighInterval</i><br></td>
</tr>
</tbody></table>

