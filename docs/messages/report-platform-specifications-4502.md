---
title: ReportPlatformSpecifications
---

# Message: ReportPlatformSpecifications

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `4502h` |

## Description

Sends PlatformSpecifications data

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
<td><a href="#platformspecifics">PlatformSpecifics</a></td>
<td>Variant</td>
<td><i>varies</i></td>
<td align="center"><i>false</i></td>
<td></td>
</tr>
<tr>
<td align="center">2</td>
<td><a href="#platforminertial">PlatformInertial</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>false</i></td>
<td>General platform specs</td>
</tr>
<tr>
<td align="center">3</td>
<td><a href="#platformspec">PlatformSpec</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>false</i></td>
<td></td>
</tr>
</tbody></table>

