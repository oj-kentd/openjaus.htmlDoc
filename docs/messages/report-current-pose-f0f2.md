---
title: ReportCurrentPose
---

# Message: ReportCurrentPose

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `F0F2h` |

## Description

Reports the current pose.  The driver may either be in a pose, or in the process of transitioning between poses, or unknown/unavailable, indicating the pose is not known at the time of the query.

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
<td><a href="#reportcurrentposevar">ReportCurrentPoseVar</a></td>
<td>Variant</td>
<td><i>varies</i></td>
<td align="center"><i>false</i></td>
<td></td>
</tr>
</tbody></table>

