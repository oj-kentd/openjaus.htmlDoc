---
title: ExtendedPrimitiveManipulator
---

# ExtendedPrimitiveManipulator

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:ExtendedPrimitiveManipulator` |

## Description

The Extended Primitive Manipulator Service provides a mechanism for reporting additional per-joint status information not supported by the existing SAE JAUS services.  In addition, a query/report pair is added to allow for the specification of a manipulator mounted on another manipulator.  The base is therefore defined as the coordinate frame for the specific joint on the host manipulator given by a JAUS ID. Note that when mounted on a host manipulator, the ManipulatorCoordinateSystemRec as reported by the Report Manipulator Specifications messages shall be interpreted as the coordinate transformation from the joint number on the host manipulator, rather than from the vehicle coordinate frame.

## Message Set

| ID | Message |
| --- | --- |
| `F292h` | [QueryHostManipulator](/messages/query-host-manipulator-f292) |
| `F290h` | [QueryJointOperationalParameters](/messages/query-joint-operational-parameters-f290) |
| `F293h` | [ReportManipulatorHost](/messages/report-manipulator-host-f293) |
| `F291h` | [ReportOperationalParameters](/messages/report-operational-parameters-f291) |

## State Machine Diagram

![ExtendedPrimitiveManipulator State Machine Diagram](/smDiagrams/ExtendedPrimitiveManipulator.png)

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
<td align="center" rowspan="2">A</td>
<td rowspan="2">ExtendedPrimitiveManipulatorDefaultLoop</td>
<td><a href="/messages/query-joint-operational-parameters-f290
">QueryJointOperationalParameters</a></td>
<td><code></code></td>
<td><a href="/messages/report-operational-parameters-f291
">sendReportJointOperationalParameters</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-host-manipulator-f292
">QueryHostManipulator</a></td>
<td><code></code></td>
<td><a href="/messages/report-manipulator-host-f293
">sendReportHostManipulator</a>
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
<td>sendReportHostManipulator</td>
<td>Send Action
</td>
<td>Send a Report Host Manipulator message
<br>
<i>Output Message:</i> <a href="/messages/report-manipulator-host-f293
">ReportManipulatorHost
</a></td>
</tr><tr>
<td>sendReportJointOperationalParameters</td>
<td>Send Action
</td>
<td>Send a Report Joint Operational Parameters message
<br>
<i>Output Message:</i> <a href="/messages/report-operational-parameters-f291
">ReportOperationalParameters
</a></td>
</tr></tbody></table>

