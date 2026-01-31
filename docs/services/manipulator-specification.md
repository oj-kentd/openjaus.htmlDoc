---
title: ManipulatorSpecification
---

# ManipulatorSpecification

| Property | Value |
| --- | --- |
| **Version** | 2.0 |
| **URN** | `urn:jaus:jss:manipulator:ManipulatorSpecificationService` |

## Description

This service is used to describe a manipulator arm.  When queried, the service will reply with a description of the manipulator's specification parameters, axes range of motion, and axes velocity limits.  The notations used to describe these data are documented in many popular text books on robotics and were previously presented in Section 3. The mechanism specification parameters as reported by the Report Manipulator Specifications Message consist of the number of joints, the type of each joint (either revolute or prismatic), the link description parameters for each link (link length and twist angle as shown in Figure 2), the constant joint parameter value (offset for a revolute joint (see Figure 3), and joint angle for a prismatic joint (see Figure 4)).  The minimum and maximum allowable value for each joint and the maximum velocity for each joint follow this information.

## Message Set

| ID | Message |
| --- | --- |
| `2600h` | [QueryManipulatorSpecifications](/messages/query-manipulator-specifications-2600) |
| `4600h` | [ReportManipulatorSpecifications](/messages/report-manipulator-specifications-4600) |

## State Machine Diagram

![ManipulatorSpecification State Machine Diagram](/smDiagrams/ManipulatorSpecification.png)

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
<td rowspan="1">ManipulatorSpecificationDefaultLoop</td>
<td><a href="/messages/query-manipulator-specifications-2600
">QueryManipulatorSpecifications</a></td>
<td><code></code></td>
<td><a href="/messages/report-manipulator-specifications-4600
">sendReportManipulatorSpecifications</a>
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
<td>sendReportManipulatorSpecifications</td>
<td>Send Action
</td>
<td>Send a Report Manipulator Specs message
<br>
<i>Output Message:</i> <a href="/messages/report-manipulator-specifications-4600
">ReportManipulatorSpecifications
</a></td>
</tr></tbody></table>

