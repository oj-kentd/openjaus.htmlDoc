---
title: ConfirmEventRequest
---

# Message: ConfirmEventRequest

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `01F3h` |

## Description

The Confirm Event message is used to confirm an Event has been created/updated/or cancelled.  Field 1 represents the Request ID from the Create, Update, or Cancel message that initiated this message.  The Request ID�s scope is local to the requesting client only.  Field 2, Event ID, is a globally unique ID that is established by the service when the event is created. Field 3 is used to specify the closest rate that the service can provide if it cannot match the requested rate.

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
<td>EventID</td>
<td>Unsigned Byte</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>Unique identifier of existing event to be removed<br>
</td>
</tr>
<tr>
<td align="center">3</td>
<td>ConfirmedPeriodicRate</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units hertz</td>
<td align="center"><i>false</i></td>
<td>Must be specified for periodic event, and set to 0 for every change <br><br>
Real Lower Limit: 0.0<br>
Real Upper Limit: 1092.0<br>
</td>
</tr>
</tbody></table>

