---
title: SetSelfCollisionAvoidancePolicyResponse
---

# Message: SetSelfCollisionAvoidancePolicyResponse

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `C525h` |

## Description

This message is sent as a response to a SetSelfCollisionAvoidancePolicy message.

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
<td>Local_ID</td>
<td>Unsigned Byte</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>A request identifier that will be returned in the response message.  This field allows the client to coordinate requests and responses.<br>
</td>
</tr>
<tr>
<td align="center">2</td>
<td>ResponseCode</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Enumeration Values:<br>
0: <i>Success</i><br>1: <i>UnsupportedBehavior</i><br></td>
</tr>
</tbody></table>

