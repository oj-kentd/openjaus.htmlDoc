---
title: ReportShape
---

# Message: ReportShape

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `FC42h` |

## Description

This message provides a list of shapes defining the bounding volume of the component. Each shape is represented in the list as a type, parameters, a location, and an orientation defined by a quaternion. The location and orientation records define the coordinate frame transform of the shape with origin coinciding with the geometric center of the shape. The coordinate frame index identifies the parent coordinate frame for the shape. An untransformed cylinder grows in length along the Y axis of its respective coordinate frame.

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
<td><a href="#shapelist">ShapeList</a></td>
<td>
List
</td>
<td></td>
<td align="center"><i>false</i></td>
<td>
</td>
</tr>
</tbody></table>

