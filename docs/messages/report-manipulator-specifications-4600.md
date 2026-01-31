---
title: ReportManipulatorSpecifications
---

# Message: ReportManipulatorSpecifications

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `4600h` |

## Description

This message provides the specifications of the manipulator including the number of joints, the link length and twist angle of each link, the joint offset (for revolute joints) or joint angle (for prismatic joints), the minimum and maximum value for each joint, and the minimum and maximum speed for each joint.

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
<td>Presence Vector</td>
<td>Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Bit 0: ManipulatorCoordinateSystemRec<br>
</td>
</tr>
<tr>
<td align="center">2</td>
<td><a href="#manipulatorcoordinatesystemrec">ManipulatorCoordinateSystemRec</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>true</i></td>
<td></td>
</tr>
<tr>
<td align="center">3</td>
<td><a href="#firstjointparameters">FirstJointParameters</a></td>
<td>Variant</td>
<td><i>varies</i></td>
<td align="center"><i>false</i></td>
<td></td>
</tr>
<tr>
<td align="center">4</td>
<td><a href="#jointspecificationlist">JointSpecificationList</a></td>
<td>
List
</td>
<td></td>
<td align="center"><i>false</i></td>
<td>
</td>
</tr>
<tr>
<td align="center">5</td>
<td><a href="#jointnameslist">JointNamesList</a></td>
<td>
List
</td>
<td></td>
<td align="center"><i>false</i></td>
<td>
</td>
</tr>
</tbody></table>

