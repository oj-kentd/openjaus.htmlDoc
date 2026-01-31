---
title: QueryJointOperationalParameters
---

# Message: QueryJointOperationalParameters

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `F290h` |

## Description

This message is query the per-joint operational parameters.  The presence vector is used to indicate which fields are desired in the corresponding report message; however, this request may not be honored if the underlying implementation does not support those fields.

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
<td>PresenceVector</td>
<td>Unsigned Byte</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>See Report Joint Operational Parameters for bitwise interpretation of the PV.<br>
</td>
</tr>
</tbody></table>

