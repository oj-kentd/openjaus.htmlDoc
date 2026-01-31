---
title: CommandEvent
---

# Message: CommandEvent

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `41F6h` |

## Description

The CommandEvent message is sent when a command specified by a previous Create Command Event message has completed or expired.  It includes the Event ID and command result.

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
<td>Unique identifier of the event<br>
</td>
</tr>
<tr>
<td align="center">2</td>
<td>CommandResult</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Enumeration Values:<br>
0: <i>SUCCESSFUL</i><br>1: <i>UNSUCCESSFUL</i><br></td>
</tr>
</tbody></table>

