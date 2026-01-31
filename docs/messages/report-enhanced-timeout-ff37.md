---
title: ReportEnhancedTimeout
---

# Message: ReportEnhancedTimeout

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `FF37h` |

## Description

Sent in response to a Query Enhanced Timeout message.  The enhanced timeout is the amount of time that must pass from when a client first requests a handoff and when a client must re-assert its desire for the handoff.

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
<td>Clients must re-request handoff to prevent being denied handoff request when the timeout expires. A value of zero indicates this feature is disabled.<br>
</td>
</tr>
</tbody></table>

