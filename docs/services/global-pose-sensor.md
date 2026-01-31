---
title: GlobalPoseSensor
---

# GlobalPoseSensor

| Property | Value |
| --- | --- |
| **Version** | 1.0 |
| **URN** | `urn:jaus:jss:mobility:GlobalPoseSensor` |

## Description

The function of the Global Pose Sensor is to determine the global position and orientation of the platform. The Report Global Pose message provides the position and orientation of the platform. The position of the platform is given in latitude, longitude, and elevation, in accordance with the WGS 84 standard.  Platform orientation is as defined in Section 4 of the JAUS Mobility Service Set Specification.

## Message Set

| ID | Message |
| --- | --- |
| `2412h` | [QueryGeomagneticProperty](/messages/query-geomagnetic-property-2412) |
| `2402h` | [QueryGlobalPose](/messages/query-global-pose-2402) |
| `4412h` | [ReportGeomagneticProperty](/messages/report-geomagnetic-property-4412) |
| `4402h` | [ReportGlobalPose](/messages/report-global-pose-4402) |
| `0412h` | [SetGeomagneticProperty](/messages/set-geomagnetic-property-0412) |
| `0402h` | [SetGlobalPose](/messages/set-global-pose-0402) |

## State Machine Diagram

![GlobalPoseSensor State Machine Diagram](/smDiagrams/GlobalPoseSensor.png)

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
<td align="center" rowspan="2">B</td>
<td rowspan="2">GposControlledLoop</td>
<td><a href="/messages/set-global-pose-0402
">SetGlobalPose</a></td>
<td><code>isControllingClient</code></td>
<td>updateGlobalPose
</td>
</tr>
<tr>
<td><a href="/messages/set-geomagnetic-property-0412
">SetGeomagneticProperty</a></td>
<td><code>isControllingClient</code></td>
<td>updateGeomagneticProperty
</td>
</tr><tr>
<td align="center" rowspan="2">A</td>
<td rowspan="2">GposDefaultLoop</td>
<td><a href="/messages/query-global-pose-2402
">QueryGlobalPose</a></td>
<td><code></code></td>
<td><a href="/messages/report-global-pose-4402
">sendReportGlobalPose</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-geomagnetic-property-2412
">QueryGeomagneticProperty</a></td>
<td><code></code></td>
<td><a href="/messages/report-geomagnetic-property-4412
">sendReportGeomagneticProperty</a>
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
<td>sendReportGeomagneticProperty</td>
<td>Send Action
</td>
<td>
<i>Output Message:</i> <a href="/messages/report-geomagnetic-property-4412
">ReportGeomagneticProperty
</a></td>
</tr><tr>
<td>sendReportGlobalPose</td>
<td>Send Action
</td>
<td>Send Report Global Pose message to the component that sent the query.
<br>
<i>Output Message:</i> <a href="/messages/report-global-pose-4402
">ReportGlobalPose
</a></td>
</tr><tr>
<td>updateGeomagneticProperty</td>
<td></td>
<td>
</td>
</tr><tr>
<td>updateGlobalPose</td>
<td></td>
<td>
</td>
</tr></tbody></table>

