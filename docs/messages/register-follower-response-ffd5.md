---
title: RegisterFollowerResponse
---

# Message: RegisterFollowerResponse

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `FFD5h` |

## Description

This message is sent as a response to a register request, or may be sent asynchronously if the follower does not periodically resend a register request.  The required periodic rate is specified in the message.

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
<td>Result</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Enumeration Values:<br>
0: <i>CONNECTED</i><br>1: <i>DISCONNECTED</i><br></td>
</tr>
<tr>
<td align="center">2</td>
<td>Timeout</td>
<td>Unsigned Byte</td>
<td>units second</td>
<td align="center"><i>false</i></td>
<td>The follower must resend a Register request before the timeout elapses; otherwise, the leader may consider the follower as having disconnected.<br>
</td>
</tr>
</tbody></table>

