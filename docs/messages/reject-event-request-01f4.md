---
title: RejectEventRequest
---

# Message: RejectEventRequest

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `01F4h` |

## Description

The Reject Event Request message is used to reject an Event creation, update or cancellation.  Field 2 represents the Request ID from the Create, Update, or Cancel message that initiated this message.  The Request ID�s scope is local to the requesting client only.

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
<td>Presence Vector</td>
<td>Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Bit 0: ResponseCode<br>
Bit 1: ErrorMessage<br>
</td>
</tr><tr>
<td align="center">2</td>
<td>RequestID</td>
<td>Unsigned Byte</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>ID of the event maintenance request (Create, Update, or Cancel)<br>
</td>
</tr>
<tr>
<td align="center">3</td>
<td>ResponseCode</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>true</i></td>
<td>Enumerated reason the event maintenance request was rejected.<br><br>
Enumeration Values:<br>
1: <i>Periodic events not supported</i><br>2: <i>Change based events not supported</i><br>3: <i>Connection refused</i><br>4: <i>Invalid event setup</i><br>5: <i>Message not supported</i><br>6: <i>Invalid event ID for update event request</i><br></td>
</tr>
<tr>
<td align="center">4</td>
<td>ErrorMessage</td>
<td>FixedLengthString<br>
[size: 80 bytes]
</td>
<td>one</td>
<td align="center"><i>true</i></td>
<td>String for additional information<br>
</td>
</tr>
</tbody></table>

