---
title: ExtendedPrimitivePanTilt
---

# ExtendedPrimitivePanTilt

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:ExtendedPrimitivePanTilt` |

## Description

The Extended Primitive Pan Tilt Service provides a mechanism for reporting additional per-joint status information not supported by the existing SAE JAUS services.  In addition, a query/report pair is added to allow for the specification of a pan/tilt unit mounted on another manipulator. The base is therefore defined as the coordinate frame for the specific joint on the host manipulator given by a JAUS ID. Note that when mounted on a host manipulator, the ReportPanTiltSpecificationsRec as reported by the Report Pan Tilt Specifications messages shall be interpreted as the coordinate transformation from the joint number on the host manipulator, rather than from the vehicle coordinate frame.

## Message Set

| ID | Message |
| --- | --- |
| `F29Ah` | [QueryPanTiltHostManipulator](/messages/query-pan-tilt-host-manipulator-f29a) |
| `F298h` | [QueryPanTiltOperationalParameters](/messages/query-pan-tilt-operational-parameters-f298) |
| `F29Bh` | [ReportPanTiltManipulatorHost](/messages/report-pan-tilt-manipulator-host-f29b) |
| `F299h` | [ReportPanTiltOperationalParameters](/messages/report-pan-tilt-operational-parameters-f299) |

## State Machine Diagram

![ExtendedPrimitivePanTilt State Machine Diagram](/smDiagrams/ExtendedPrimitivePanTilt.png)

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
<td rowspan="2">ExtendedPrimitivePanTiltDefaultLoop</td>
<td><a href="/messages/query-pan-tilt-operational-parameters-f298
">QueryPanTiltOperationalParameters</a></td>
<td><code></code></td>
<td><a href="/messages/report-pan-tilt-operational-parameters-f299
">sendReportPanTiltOperationalParameters</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-pan-tilt-host-manipulator-f29a
">QueryPanTiltHostManipulator</a></td>
<td><code></code></td>
<td><a href="/messages/report-pan-tilt-manipulator-host-f29b
">sendReportPanTiltHostManipulator</a>
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
<td>sendReportPanTiltHostManipulator</td>
<td>Send Action
</td>
<td>Send a Report Host Manipulator message
<br>
<i>Output Message:</i> <a href="/messages/report-pan-tilt-manipulator-host-f29b
">ReportPanTiltManipulatorHost
</a></td>
</tr><tr>
<td>sendReportPanTiltOperationalParameters</td>
<td>Send Action
</td>
<td>Send a Report Joint Operational Parameters message
<br>
<i>Output Message:</i> <a href="/messages/report-pan-tilt-operational-parameters-f299
">ReportPanTiltOperationalParameters
</a></td>
</tr></tbody></table>

