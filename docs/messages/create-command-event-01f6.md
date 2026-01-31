---
title: CreateCommandEvent
---

# Message: CreateCommandEvent

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `01F6h` |

## Description

This message is used to set up a command event.   Field 1 is a local request ID that the event provider returns in the Confirm or Reject message.  Field 2 is the maximum allowed execution time; any command not completed within its specified duration is considered a failure.  Field 3 contains the size of the Command message that is to specify the command to be executed.  Field 4 contains the encoded command message (including its two byte header).

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
<td>RequestID</td>
<td>Unsigned Byte</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>ID of the event maintenance request (Create, Update, or Cancel)<br>
</td>
</tr>
<tr>
<td align="center">2</td>
<td>MaximumAllowedDuration</td>
<td>Unsigned Integer</td>
<td>units second</td>
<td align="center"><i>false</i></td>
<td>Any commands not executed within the maximum allowed time are considered a failure.<br>
</td>
</tr>
<tr>
<td align="center">3</td>
<td>CommandMessage</td>
<td>JAUS Message Blob<br>
Count Field: Unsigned Integer</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>This field contains an encapsulated JAUS message.
</td>
</tr>
</tbody></table>

