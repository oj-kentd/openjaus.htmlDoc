---
title: ManipulatorJointPositionDriver
---

# ManipulatorJointPositionDriver

| Property | Value |
| --- | --- |
| **Version** | 2.0 |
| **URN** | `urn:jaus:jss:manipulator:ManipulatorJointPositionDriver` |

## Description

The function of the Joint Position Driver is to perform closed-loop joint position control.  A single target is provided via the Set Joint Position message.  The target remains unchanged until a new Set Joint Position message is received.  To ensure backward compatibility with 1.0 implementations of this service, it is recommended that this service be co-located on the same component as a Manipulator Specification Service and a Manipulator Joint Motion Profile Service.

## Message Set

| ID | Message |
| --- | --- |
| `2608h` | [QueryCommandedJointPosition](/messages/query-commanded-joint-position-2608) |
| `4608h` | [ReportCommandedJointPosition](/messages/report-commanded-joint-position-4608) |
| `0602h` | [SetJointPosition](/messages/set-joint-position-0602) |

## State Machine Diagram

![ManipulatorJointPositionDriver State Machine Diagram](/smDiagrams/ManipulatorJointPositionDriver.png)

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
<td align="center" rowspan="1">A</td>
<td rowspan="1">ManipulatorJointPositionDriverDefaultLoop</td>
<td><a href="/messages/query-commanded-joint-position-2608
">QueryCommandedJointPosition</a></td>
<td><code></code></td>
<td><a href="/messages/report-commanded-joint-position-4608
">sendReportCommandedJointPosition</a>
</td>
</tr><tr>
<td align="center" rowspan="1">B</td>
<td rowspan="1">ManipulatorJointPositionDriverReadyLoop</td>
<td><a href="/messages/set-joint-position-0602
">SetJointPosition</a></td>
<td><code>isControllingClient &amp;&amp; motionProfileExists</code></td>
<td>setJointPosition
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
<td>sendReportCommandedJointPosition</td>
<td>Send Action
</td>
<td>Send a Report Commanded Joint Positions message
<br>
<i>Output Message:</i> <a href="/messages/report-commanded-joint-position-4608
">ReportCommandedJointPosition
</a></td>
</tr><tr>
<td>setJointPosition</td>
<td></td>
<td>Set the desired joint values for the manipulator.
</td>
</tr><tr>
<td>stopMotion</td>
<td>Exit Action
</td>
<td>
</td>
</tr></tbody></table>

