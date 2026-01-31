---
title: ReportPanTiltManipulatorHost
---

# Message: ReportPanTiltManipulatorHost

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `F29Bh` |

## Description

This message is used to report the host if this manipulator is mounted on another.

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
<td>ParentID</td>
<td>BitField<br>
Integer Size: Unsigned Integer</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>JAUS identifier on which this manipulator is mounted.  A value of zero (0) means this manipulator is independent of any others.<br><br>
[0, 7] : <i>ComponentID</i> (range: 0 ... 255)<br>[8, 15] : <i>NodeID</i> (range: 0 ... 255)<br>[16, 31] : <i>SubsystemID</i> (range: 0 ... 65535)<br></td>
</tr>
<tr>
<td align="center">2</td>
<td>ParentJoint</td>
<td>Unsigned Byte</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>The joint number defining a coordinate frame on which this manipulator is mounted.  A value of zero (0) means this manipulator is independent of any others.<br>
</td>
</tr>
</tbody></table>

