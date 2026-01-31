---
title: QueryCostMap2D
---

# Message: QueryCostMap2D

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `D738h` |

## Description

This message is used to query for cost map data.  An optional maximum map size may be specified to limit the amount of data returned.  If no values are specified, the service may still return a subset of the cost map stored internally, with emphasis on the immediate vicinity of the platform.  An optional map center and orientation may be specified.  If the map center lies outside the bounds of the known cost map, the data returned should reflect the unknown (zero confidence) elements.  If the map center is specified in an unsupported coordinate frame, or the map center is not specified, the returned map should be based on the current vehicle location.

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
Bit 0: QueryCostMap2DRec<br>
Bit 1: QueryCostMap2DCenterVar<br>
</td>
</tr>
<tr>
<td align="center">2</td>
<td><a href="#querycostmap2drec">QueryCostMap2DRec</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>true</i></td>
<td></td>
</tr>
<tr>
<td align="center">3</td>
<td><a href="#querycostmap2dcentervar">QueryCostMap2DCenterVar</a></td>
<td>Variant</td>
<td><i>varies</i></td>
<td align="center"><i>true</i></td>
<td></td>
</tr>
</tbody></table>

