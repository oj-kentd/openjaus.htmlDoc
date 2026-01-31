---
title: ReportStillImageData
---

# Message: ReportStillImageData

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `4814h` |

## Description

This message is used to report the most recent still image that was taken by the sensor. The timestamp defines the time at which the collected data was valid. The image data is defined with respect to either the sensor coordinate system or a specified coordinate system.

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
<td><a href="#stillimagedatalist">StillImageDataList</a></td>
<td>
List
</td>
<td></td>
<td align="center"><i>false</i></td>
<td>
</td>
</tr>
</tbody></table>

