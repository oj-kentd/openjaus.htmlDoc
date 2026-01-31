---
title: QueryLocalWaypoint
---

# Message: QueryLocalWaypoint

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `240Dh` |

## Description

This message shall cause the receiving component to reply to the requestor with a ID 440Dh: ReportLocalWaypoint message. Field #1 specifies the fields to be returned in the Report Local Waypoint message.

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
<td>QueryPresenceVector</td>
<td>Unsigned Byte</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>
</td>
</tr>
</tbody></table>

