---
title: ReportCommsLostStatus
---

# Message: ReportCommsLostStatus

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `C414h` |

## Description

This message is used to report the current status of the comms-lost policy.  Values are disabled (no policy is set), enabled (policy is set but not engaged), and active (policy has triggered and vehicle is executing said policy).

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
<td>CommsLostStatus</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Enumeration Values:<br>
0: <i>Disabled</i><br>1: <i>Enabled</i><br>2: <i>Active</i><br></td>
</tr>
</tbody></table>

