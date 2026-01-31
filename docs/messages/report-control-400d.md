---
title: ReportControl
---

# Message: ReportControl

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `400Dh` |

## Description

This message is used to report the current state of control of this service.  If the service is in the Controlled state, this message reports the ID of the controlling component. The ID fields shall be set to zero (0) if this service is in the NotControlled state.

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
<td>SubsystemID</td>
<td>Unsigned Short</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>
</td>
</tr>
<tr>
<td align="center">2</td>
<td>NodeID</td>
<td>Unsigned Byte</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>
</td>
</tr>
<tr>
<td align="center">3</td>
<td>ComponentID</td>
<td>Unsigned Byte</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>
</td>
</tr>
<tr>
<td align="center">4</td>
<td>AuthorityCode</td>
<td>Unsigned Byte</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>
</td>
</tr>
</tbody></table>

