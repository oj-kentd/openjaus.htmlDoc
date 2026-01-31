---
title: QueryRangeSensorCompressedData
---

# Message: QueryRangeSensorCompressedData

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `2804h` |

## Description

This message shall cause the receiving service to reply to the requestor with a Report Range Sensor Compressed Data message. A logical AND shall be performed on the requested presence vector and that representing the available fields from the responder. The resulting message shall contain the fields indicated by the result of this logical AND operation. The third field specifies which coordinate system the data should be reported in, either the sensor�s native coordinate system or, if supported, a coordinate system specified by a Set Specified Sensor Coordinate System message. The fourth field specifies the data compression algorithm. Three compression algorithms are supported: DEFLATE, bzip2 and LZMA.

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
<td><a href="#queryrangesensorcompresseddatalist">QueryRangeSensorCompressedDataList</a></td>
<td>
List
</td>
<td></td>
<td align="center"><i>false</i></td>
<td>
</td>
</tr>
</tbody></table>

