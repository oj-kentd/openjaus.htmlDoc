---
title: ReportMassProperties
---

# Message: ReportMassProperties

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `FC40h` |

## Description

ReportMassProperties returns a list of mass properties. Each sequence in the list includes an identifying index for the coordinate system and a mass records in that coordinate system. Each mass record provides the mass and center of mass location for an element. Most components will consist of only one such element; others, such as a Manipulator, will be represented by a group of elements, so that the changing configuration of the Manipulator can be represented (and its center of mass determined).

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
<td><a href="#masspropertylist">MassPropertyList</a></td>
<td>
List
</td>
<td></td>
<td align="center"><i>false</i></td>
<td>
</td>
</tr>
</tbody></table>

