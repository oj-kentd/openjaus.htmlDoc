---
title: ReportEndEffectorSpecification
---

# Message: ReportEndEffectorSpecification

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `4632h` |

## Description

This message provides the specifications of a one degree of freedom end effector.

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
<td>Identifier of the manipulator on which this end effector is mounted<br><br>
[0, 7] : <i>ComponentID</i> (range: 1 ... 255)<br>[8, 15] : <i>NodeID</i> (range: 1 ... 255)<br>[16, 31] : <i>SubsystemID</i> (range: 1 ... 65535)<br></td>
</tr>
</tbody></table>

