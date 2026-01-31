---
title: ReportRangeSensorData
---

# Message: ReportRangeSensorData

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `4803h` |

## Description

This message is sent by a receiving component upon receipt of a Query Range Sensor Data message. This message reports a list of detected data points for a given time. The RangeSensorDataSeq is used to report the data from a given sensor along with meta data such as sensor ID and timestamp. The timestamp defines the time at which the collected data was valid. Data points are defined by range, bearing and inclination with respect to either the native coordinate system or the vehicle coordinate system. Data is only reported for sensors which are in the active state. If data is queried for a sensor which is not active, the RangeSensorDataErrorRec is returned for that sensor ID report.

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
<td><a href="#rangesensordatalist">RangeSensorDataList</a></td>
<td>
List
</td>
<td></td>
<td align="center"><i>false</i></td>
<td>
</td>
</tr>
</tbody></table>

