---
title: ManipulatorJointVelocityDriver
---

# ManipulatorJointVelocityDriver

| Property | Value |
| --- | --- |
| **Version** | 2.0 |
| **URN** | `urn:jaus:jss:manipulator:ManipulatorJointVelocityDriver` |

## Description

The function of the Joint Velocity Driver is to perform closed-loop joint velocity control.  The input is the desired instantaneous joint velocities.  It is assumed that the manipulator begins motion immediately after receiving the "SET JOINT VELOCITY" message. To ensure backward compatibility with 1.0 implementations of this service, it is recommended that this service be co-located on the same component as a Manipulator Specification Service and a Manipulator Joint Motion Profile Service.

## Message Set

| ID | Message |
| --- | --- |
| `2611h` | [QueryCommandedJointVelocity](/messages/query-commanded-joint-velocity-2611) |
| `4611h` | [ReportCommandedJointVelocity](/messages/report-commanded-joint-velocity-4611) |
| `0603h` | [SetJointVelocity](/messages/set-joint-velocity-0603) |

## State Machine Diagram

![ManipulatorJointVelocityDriver State Machine Diagram](/smDiagrams/ManipulatorJointVelocityDriver.png)

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
<td rowspan="1">ManipulatorJointVelocityDriverDefaultLoop</td>
<td><a href="/messages/query-commanded-joint-velocity-2611
">QueryCommandedJointVelocity</a></td>
<td><code></code></td>
<td><a href="/messages/report-commanded-joint-velocity-4611
">sendReportCommandedJointVelocity</a>
</td>
</tr><tr>
<td align="center" rowspan="1">B</td>
<td rowspan="1">ManipulatorJointVelocityDriverReadyLoop</td>
<td><a href="/messages/set-joint-velocity-0603
">SetJointVelocity</a></td>
<td><code>isControllingClient &amp;&amp; motionProfileExists</code></td>
<td>setJointVelocity
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
<td>sendReportCommandedJointVelocity</td>
<td>Send Action
</td>
<td>Send a Report Commanded joint velocities message
<br>
<i>Output Message:</i> <a href="/messages/report-commanded-joint-velocity-4611
">ReportCommandedJointVelocity
</a></td>
</tr><tr>
<td>setJointVelocity</td>
<td></td>
<td>Set the desired velocities for the individual joints of the manipulator
</td>
</tr><tr>
<td>stopMotion</td>
<td>Exit Action
</td>
<td>
</td>
</tr></tbody></table>

