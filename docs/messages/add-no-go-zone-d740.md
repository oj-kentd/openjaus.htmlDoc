---
title: AddNoGoZone
---

# Message: AddNoGoZone

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `D740h` |

## Description

This message is used to request a client-specified no-go zone.  Upon acceptance by the service, the cells traversed or contained by the polygon formed by imaginary lines connecting the sequenced list of vertices shall be considered maximum cost (non-traversable).

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
<td><a href="#requestidrec">RequestIDRec</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>false</i></td>
<td></td>
</tr>
<tr>
<td align="center">2</td>
<td><a href="#vertexvar">VertexVar</a></td>
<td>Variant</td>
<td><i>varies</i></td>
<td align="center"><i>false</i></td>
<td></td>
</tr>
</tbody></table>

