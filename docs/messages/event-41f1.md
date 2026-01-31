---
title: Event
---

# Message: Event

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `41F1h` |

## Description

The Event message is sent when an event is triggered.  It includes the Event ID and a sequence number to allow the client to keep track of event processing.

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
<td>EventID</td>
<td>Unsigned Byte</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>Unique identifier of the enclosed event<br>
</td>
</tr>
<tr>
<td align="center">2</td>
<td>SequenceNumber</td>
<td>Unsigned Byte</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>Sequential count of the number of times this event has been issued<br>
</td>
</tr>
<tr>
<td align="center">3</td>
<td>ReportMessage</td>
<td>JAUS Message Blob<br>
Count Field: Unsigned Integer</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>This field contains an encapsulated JAUS message.
</td>
</tr>
</tbody></table>

