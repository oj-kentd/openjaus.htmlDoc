---
title: RemoveNoGoZone
---

# Message: RemoveNoGoZone

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `D741h` |

## Description

This message is used to remove the specified no-go zone from the cost map.  Once removed, the cells shall return to their normal values, or to an uncertain (zero confidence) state.

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
<td>ZoneID</td>
<td>Unsigned Short</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>ID of the zone to be reported.  If the specified value is zero (0), all zones will be reported.<br>
</td>
</tr>
</tbody></table>

