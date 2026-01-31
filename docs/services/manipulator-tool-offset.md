---
title: ManipulatorToolOffset
---

# ManipulatorToolOffset

| Property | Value |
| --- | --- |
| **Version** | 2.0 |
| **URN** | `urn:jaus:jss:manipulator:ManipulatorToolOffsetService` |

## Description

The function of the Manipulator Tool Offset Service is to configure the position offset of any tool attached to the manipulator flange.

## Message Set

| ID | Message |
| --- | --- |
| `2604h` | [QueryToolOffset](/messages/query-tool-offset-2604) |
| `4604h` | [ReportToolOffset](/messages/report-tool-offset-4604) |
| `0604h` | [SetToolOffset](/messages/set-tool-offset-0604) |

## State Machine Diagram

![ManipulatorToolOffset State Machine Diagram](/smDiagrams/ManipulatorToolOffset.png)

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
<td align="center" rowspan="1">B</td>
<td rowspan="1">ManipulatorToolOffsetControlledLoop</td>
<td><a href="/messages/set-tool-offset-0604
">SetToolOffset</a></td>
<td><code>isControllingClient</code></td>
<td>setToolOffset
</td>
</tr><tr>
<td align="center" rowspan="1">A</td>
<td rowspan="1">ManipulatorToolOffsetDefaultLoop</td>
<td><a href="/messages/query-tool-offset-2604
">QueryToolOffset</a></td>
<td><code></code></td>
<td><a href="/messages/report-tool-offset-4604
">sendReportToolOffset</a>
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
<td>sendReportToolOffset</td>
<td>Send Action
</td>
<td>Send a report tool offset message
<br>
<i>Output Message:</i> <a href="/messages/report-tool-offset-4604
">ReportToolOffset
</a></td>
</tr><tr>
<td>setToolOffset</td>
<td></td>
<td>Set the location of the tool tip as measured in the end effector coordinate system.
</td>
</tr></tbody></table>

