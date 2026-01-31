---
title: ReportHandoffTimeout
---

# Message: ReportHandoffTimeout

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `FF36h` |

## Description

Sent in response to a Query Handoff Timeout message.  The handoff timeout is the amount of time that must pass from when this service first requests a handoff from the current controlling client before the requester is notified that the handoff failed due to a timeout.

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
<td>Timeout</td>
<td>Unsigned Byte</td>
<td>units second</td>
<td align="center"><i>false</i></td>
<td>Service must receive handoff confirmation from the current controller before this timeout expires. A value of zero indicates this feature is disabled.<br>
</td>
</tr>
</tbody></table>

