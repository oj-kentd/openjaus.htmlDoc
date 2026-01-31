---
title: PresetPose
---

# PresetPose

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:PresetPose` |

## Description

The Preset Pose service allows for a device or devices to be controlled by specifying transitions to specific poses.  The poses and transitions must be well defined as they provide the rules by which the Preset Pose service functions.

## Internal Events

| ID | Event |
| --- | --- |
| `8D1Fh` | [TransitionCompleted](/messages/transition-completed-8d1f) |
| `8D20h` | [TransitionFailed](/messages/transition-failed-8d20) |

## Message Set

| ID | Message |
| --- | --- |
| `F002h` | [QueryCurrentPose](/messages/query-current-pose-f002) |
| `F001h` | [QueryPresetPoseCapabilities](/messages/query-preset-pose-capabilities-f001) |
| `F005h` | [QueryPresetPoseSpecifications](/messages/query-preset-pose-specifications-f005) |
| `F0F2h` | [ReportCurrentPose](/messages/report-current-pose-f0f2) |
| `F0F1h` | [ReportPresetPoseCapabilities](/messages/report-preset-pose-capabilities-f0f1) |
| `F0F5h` | [ReportPresetPoseSpecifications](/messages/report-preset-pose-specifications-f0f5) |
| `F0F4h` | [ReportTransitionCompleted](/messages/report-transition-completed-f0f4) |
| `F003h` | [SetCurrentPose](/messages/set-current-pose-f003) |

## State Machine Diagram

![PresetPose State Machine Diagram](/smDiagrams/PresetPose.png)

## State Transitions

<table border="1" class="jaus-table">
<tbody><tr>
<th align="left" colspan="100"><font size="+2">
<b>State Transitions</b></font></th></tr>
<tr>
<td><b>Label</b></td>
<td><b>Transition</b></td>
<td><b>Trigger</b></td>
<td><b>Conditional</b></td>
<td><b>Actions</b></td>
</tr>
<tr>
<td align="center" rowspan="3">A</td>
<td rowspan="3">PresetPoseDefaultLoop</td>
<td><a href="/messages/query-preset-pose-capabilities-f001
">QueryPresetPoseCapabilities</a></td>
<td><code></code></td>
<td><a href="/messages/report-preset-pose-capabilities-f0f1
">sendReportPresetPoseCapabilities</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-preset-pose-specifications-f005
">QueryPresetPoseSpecifications</a></td>
<td><code></code></td>
<td><a href="/messages/report-preset-pose-specifications-f0f5
">sendReportPresetPoseSpecifications</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-current-pose-f002
">QueryCurrentPose</a></td>
<td><code></code></td>
<td><a href="/messages/report-current-pose-f0f2
">sendReportCurrentPose</a>
</td>
</tr><tr>
<td align="center" rowspan="5">B</td>
<td rowspan="5">PresetPoseReadyLoop</td>
<td><a href="/messages/set-current-pose-f003
">SetCurrentPose</a></td>
<td><code>isControllingClient &amp;&amp; ( !isPoseUnrecognized &amp;&amp; isTransitionValid )</code></td>
<td>setCurrentPose
</td>
</tr>
<tr>
<td><a href="/messages/set-current-pose-f003
">SetCurrentPose</a></td>
<td><code>isControllingClient &amp;&amp; !isTransitionValid</code></td>
<td>sendReportTransitionCompletedInvalidTransition
</td>
</tr>
<tr>
<td><a href="/messages/set-current-pose-f003
">SetCurrentPose</a></td>
<td><code>isControllingClient &amp;&amp; isPoseUnrecognized</code></td>
<td>sendReportTransitionCompletedUnrecognizedPose
</td>
</tr>
<tr>
<td><a href="/messages/transition-completed-8d1f
">TransitionCompleted</a></td>
<td><code></code></td>
<td>sendReportTransitionCompletedTransitionCompleted
</td>
</tr>
<tr>
<td><a href="/messages/transition-failed-8d20
">TransitionFailed</a></td>
<td><code></code></td>
<td>sendReportTransitionCompletedTransitionFailed
</td>
</tr></tbody></table>

## Actions

<table border="1" class="jaus-table">
<tbody><tr>
<th align="left" colspan="4"><font size="+2">
<b>Actions</b></font></th></tr>
<tr>
<td><b>Action Name</b></td>
<td><b>Type</b></td>
<td><b>Description</b></td>
</tr>
<tr>
<td>sendReportCurrentPose</td>
<td>Send Action
</td>
<td>Send a ReportCurrentPose message to querying client
<br>
<i>Output Message:</i> <a href="/messages/report-current-pose-f0f2
">ReportCurrentPose
</a></td>
</tr><tr>
<td>sendReportPresetPoseCapabilities</td>
<td>Send Action
</td>
<td>Send a ReportPresetPoseCapabilities message to querying client
<br>
<i>Output Message:</i> <a href="/messages/report-preset-pose-capabilities-f0f1
">ReportPresetPoseCapabilities
</a></td>
</tr><tr>
<td>sendReportPresetPoseSpecifications</td>
<td>Send Action
</td>
<td>Send a ReportPresetPoseSpecifications message to querying client
<br>
<i>Output Message:</i> <a href="/messages/report-preset-pose-specifications-f0f5
">ReportPresetPoseSpecifications
</a></td>
</tr><tr>
<td>sendReportTransitionCompletedInvalidTransition</td>
<td></td>
<td>
</td>
</tr><tr>
<td>sendReportTransitionCompletedTransitionCompleted</td>
<td></td>
<td>
</td>
</tr><tr>
<td>sendReportTransitionCompletedTransitionFailed</td>
<td></td>
<td>
</td>
</tr><tr>
<td>sendReportTransitionCompletedUnrecognizedPose</td>
<td></td>
<td>
</td>
</tr><tr>
<td>setCurrentPose</td>
<td></td>
<td>Set the current pose to that commanded.
</td>
</tr></tbody></table>

