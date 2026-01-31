---
title: UpdateEvent
---

# Message: UpdateEvent

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `01F1h` |

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
<td>
</td>
</tr>
<tr>
<td align="center">2</td>
<td>EventType</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>The kind of Event.<br><br>
Enumeration Values:<br>
0: <i>Periodic</i><br>1: <i>Every Change</i><br></td>
</tr>
<tr>
<td align="center">3</td>
<td>RequestedPeriodicRate</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units hertz</td>
<td align="center"><i>false</i></td>
<td>Must be specified for periodic event, and set to 0 for every change <br><br>
Real Lower Limit: 0.0<br>
Real Upper Limit: 1092.0<br>
</td>
</tr>
<tr>
<td align="center">4</td>
<td>EventID</td>
<td>Unsigned Byte</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>Unique identifier of existing event to update<br>
</td>
</tr>
<tr>
<td align="center">5</td>
<td>QueryMessage</td>
<td>JAUS Message Blob<br>
Count Field: Unsigned Integer</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>This field contains an encapsulated JAUS message.
<br><br>The JAUS Query message  to be used by the receiving component to generate the report message(s)</td>
</tr>
</tbody></table>

