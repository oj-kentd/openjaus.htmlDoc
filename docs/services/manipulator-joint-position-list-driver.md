---
title: ManipulatorJointPositionListDriver
---

# ManipulatorJointPositionListDriver

| Property | Value |
| --- | --- |
| **Version** | 2.0 |
| **URN** | `urn:jaus:jss:manipulator:ManipulatorJointPositionListDriver` |

## Description

The function of the Joint Position List Driver is to perform closed-loop joint position control through a sequence of targets. The sequence of targets is specified by one or more SetElement messages, as defined by the List Manager Service.  To ensure backward compatibility with 1.0 implementations of this service, it is recommended that this service be co-located on the same component as a Manipulator Specification Service and a Manipulator Joint Motion Profile Service.

## Message Set

| ID | Message |
| --- | --- |
| `2608h` | [QueryCommandedJointPosition](/messages/query-commanded-joint-position-2608) |
| `4608h` | [ReportCommandedJointPosition](/messages/report-commanded-joint-position-4608) |

## State Machine Diagram

![ManipulatorJointPositionListDriver State Machine Diagram](/smDiagrams/ManipulatorJointPositionListDriver.png)

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
<td rowspan="1">JointPositionListDriverDefaultLoop</td>
<td><a href="/messages/report-commanded-joint-position-4608
">ReportCommandedJointPosition</a></td>
<td><code>targetExists</code></td>
<td><a href="/messages/report-commanded-joint-position-4608
">sendReportCommandedJointPosition</a>
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
</tr></tbody></table>

