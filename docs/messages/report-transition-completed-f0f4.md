---
title: ReportTransitionCompleted
---

# Message: ReportTransitionCompleted

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `F0F4h` |

## Description

This message is sent to notify a client when a transition is completed, or when a transition cannot be completed, with the reason why.  This message shall be sent immediately back to the client upon receiving a request to transition to an invalid (or non-existing) pose given the current pose, otherwise, it shall be sent upon successfully arriving in a new pose.  If the return status is TRANSITION_FAILED_ORIGINAL_POSE_RESTORED, it means that the original pose (before the transition started) is the current pose.

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
<td>Unique identifier associated with a SetCurrentPose request.<br>
</td>
</tr>
<tr>
<td align="center">2</td>
<td>TransitionStatus</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Enumeration Values:<br>
0: <i>TRANSITION_COMPLETED</i><br>1: <i>INVALID_TRANSITION</i><br>2: <i>UNRECOGNIZED_POSE</i><br>3: <i>TRANSITION_FAILED</i><br>4: <i>TRANSITION_FAILED_ORIGINAL_POSE_RESTORED</i><br>5: <i>TRANSITION_TIMED_OUT</i><br></td>
</tr>
</tbody></table>

