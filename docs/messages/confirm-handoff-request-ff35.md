---
title: ConfirmHandoffRequest
---

# Message: ConfirmHandoffRequest

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `FF35h` |

## Description

Confirms that action has been taken on a handoff request.  The action is either GRANTED, meaning the request for handoff was granted and the requesting client has control; DENIED, meaning the current controlling client rejected the request for handoff; TIMEOUT, meaning the current controller did not respond within a set amount of time; NOT_AVAILABLE, meaning handoff is not available, QUEUED, meaning the handoff request was queued and pending, or DEFERRED, meaning the current controller is not prepared to make a decision on the request.

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
<td>ID</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Enumeration Values:<br>
0...255: <i>Null_Id</i><br></td>
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
0: <i>GRANTED</i><br>1: <i>NOT_AVAILABLE</i><br>2: <i>TIMEOUT</i><br>3: <i>DENIED</i><br>4: <i>QUEUED</i><br>5: <i>DEFERRED</i><br>6: <i>INSUFFICIENT_AUTHORITY</i><br></td>
</tr>
</tbody></table>

