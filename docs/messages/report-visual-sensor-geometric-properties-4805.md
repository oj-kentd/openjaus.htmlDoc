---
title: ReportVisualSensorGeometricProperties
---

# Message: ReportVisualSensorGeometricProperties

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `4805h` |

## Description

This message is used to report information about the geometric properties of a sensor with respect to the vehicle. Three possible use cases are supported: 1.The sensor has no knowledge of its geometric properties. 2.The sensor is rigidly mounted to the vehicle and the position and orientation with respect to the vehicle coordinate system is known. In this case the position and orientation of the sensor is defined by a position vector (x, y, z) and unit quaternion (d; a, b, c) which specifies the axis and angle of rotation used to establish the orientation of the sensor coordinate system with respect to the vehicle coordinate system. 3.The sensor is mounted to a manipulator in which the JAUS ID, joint number and the sensor offset are described. In this case the position and orientation of the sensor is defined by a position vector (x, y, z) and unit quaternion (d; a, b, c) which specifies the axis and angle of rotation used to establish the orientation of the sensor coordinate system with respect to the link coordinate system.

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
<td><a href="#geometricpropertieslist">GeometricPropertiesList</a></td>
<td>
List
</td>
<td></td>
<td align="center"><i>false</i></td>
<td>
</td>
</tr>
</tbody></table>

