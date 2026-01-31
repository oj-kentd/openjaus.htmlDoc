---
title: SetCurrentPose
---

# Message: SetCurrentPose

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `F003h` |

## Description

Sends a request to set the current pose.  A locally unique ID should be assigned to each SetCurrentState message sent to match up to a corresponding ReportTransitionCompleted message.

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
<td>Unique identifier associated with the SetCurrentPose request.<br>
</td>
</tr>
<tr>
<td align="center">2</td>
<td>PoseID</td>
<td>Unsigned Byte</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>The ID of the pose to transition to.<br>
</td>
</tr>
</tbody></table>

