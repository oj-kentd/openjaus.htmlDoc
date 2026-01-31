---
title: ReportEventTimeout
---

# Message: ReportEventTimeout

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `41F2h` |

## Description

This message is used to report the timeout period of the service.

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
<td>units minute</td>
<td align="center"><i>false</i></td>
<td>Clients must re-create or update an event to prevent being rejected when the timeout expires.  A value of zero indicates this feature is disabled.<br>
</td>
</tr>
</tbody></table>

