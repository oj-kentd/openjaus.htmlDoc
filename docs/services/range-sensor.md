---
title: RangeSensor
---

# RangeSensor

| Property | Value |
| --- | --- |
| **Version** | 1.0 |
| **URN** | `urn:jaus:jss:environmentSensing:RangeSensor` |

## Description

The function of the Range Sensor Service is to provide information from proximity sensors. This service will output the location of various Data Points with a certain measure of accuracy. A given Range Sensor service may be comprised of one to many actual physical sensors or technologies. Each sub-sensor can be assigned (by the developer) a unique Sensor ID. When appropriate, the reserved Sensor ID of 0 may be used to refer to all sensors attached to a given Range Sensor Service. The Data Points are measured in the sensor�s native coordinate system and are expressed in terms of range, bearing and inclination. Range is the distance, in meters, along the line from the origin of the sensor�s native coordinate system (sensor�s origin) to the specified point. Bearing is the angle, in radians, that the line from the sensor�s origin to the specified point makes about the sensor�s z-axis in the right handed sense (Figure 2). Inclination is the the angle, in radians, that the line from the sensor origin to the specified point makes about the sensor�s y-axis in the right handed sense (Figure 2).  Each data point has an optional ID parameter. This parameter is provided for those sensor technologies which may assign and/or track entities based on unique ID values; however, such tracking capabilities are not required for a compliant Range Sensor Service. The behavior of the data point ID is not specified, i.e. IDs may repeat in a given report and IDs may persist from one report to another. No semantic value should be placed on the ID values in a generalized way. Data Point ID behavior should be derived from the underlying sensor or algorithm technology and is mearly provided to be used in those situations where mutiple parties can agree upon the behavior and semantics of the ID values. Data from the range sensor can be reported in both a compressed and uncompressed format, different query and report messages are provided for each exchange and the kind of data compression supported by the service is reported in the Report Range Sensor Capabilities message. Requests for unsupported data compression algorithms will result in the generation of a Report Sensor Error message indicating an unsupported compression request. The range sensor can express the bearing, inclination and range terms with respect to either its native coordinate system or the vehicle coordinate system if coordinate transforms are supported. The Query Sensor Geometric Properties message can be used to determine the geometric relationship between the sensor and the vehicle coordinate system. Three possible coordinate responses are possible: (a) the service does not know the sensor�s position, (b) the sensor coordinate system is fixed with respect to the vehicle and (c) the sensor is attached to some manipulator. These cases are supported by the Report Sensor Geometric Properties message and are described therein.

## Message Set

| ID | Message |
| --- | --- |
| `2801h` | [QueryRangeSensorCapabilities](/messages/query-range-sensor-capabilities-2801) |
| `2804h` | [QueryRangeSensorCompressedData](/messages/query-range-sensor-compressed-data-2804) |
| `2802h` | [QueryRangeSensorConfiguration](/messages/query-range-sensor-configuration-2802) |
| `2803h` | [QueryRangeSensorData](/messages/query-range-sensor-data-2803) |
| `2805h` | [QuerySensorGeometricProperties](/messages/query-sensor-geometric-properties-2805) |
| `4801h` | [ReportRangeSensorCapabilities](/messages/report-range-sensor-capabilities-4801) |
| `4804h` | [ReportRangeSensorCompressedData](/messages/report-range-sensor-compressed-data-4804) |
| `4802h` | [ReportRangeSensorConfiguration](/messages/report-range-sensor-configuration-4802) |
| `4803h` | [ReportRangeSensorData](/messages/report-range-sensor-data-4803) |
| `4805h` | [ReportRangeSensorGeometricProperties](/messages/report-range-sensor-geometric-properties-4805) |
| `0802h` | [SetRangeSensorConfiguration](/messages/set-range-sensor-configuration-0802) |

## State Machine Diagram

![RangeSensor State Machine Diagram](/smDiagrams/RangeSensor.png)

## State Transitions

<table border="1" class="jaus-table">
<tbody><tr>
<th align="left" colspan="100"><font size="+2">
<b>State Transitions</b></font></th></tr>
<tr>
<td><b>Label</b></td>
<td><b>Transition</b></td>
<td><b>Trigger</b></td>
<td><b>Conditional</b></td>
<td><b>Actions</b></td>
</tr>
<tr>
<td align="center" rowspan="1">B</td>
<td rowspan="1">RangeSensorControlledLoop</td>
<td><a href="/messages/set-range-sensor-configuration-0802
">SetRangeSensorConfiguration</a></td>
<td><code>isControllingClient</code></td>
<td><a href="/messages/confirm-sensor-configuration-0801
">sendConfirmSensorConfiguration</a>
, updateRangeSensorConfiguration
</td>
</tr><tr>
<td align="center" rowspan="7">A</td>
<td rowspan="7">RangeSensorDefaultLoop</td>
<td><a href="/messages/query-range-sensor-capabilities-2801
">QueryRangeSensorCapabilities</a></td>
<td><code></code></td>
<td><a href="/messages/report-range-sensor-capabilities-4801
">sendReportRangeSensorCapabilities</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-range-sensor-configuration-2802
">QueryRangeSensorConfiguration</a></td>
<td><code></code></td>
<td><a href="/messages/report-range-sensor-configuration-4802
">sendReportRangeSensorConfiguration</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-sensor-geometric-properties-2805
">QuerySensorGeometricProperties</a></td>
<td><code></code></td>
<td><a href="/messages/report-range-sensor-geometric-properties-4805
">sendReportRangeSensorGeometricProperties</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-range-sensor-data-2803
">QueryRangeSensorData</a></td>
<td><code>isCoordinateTransformSupported</code></td>
<td><a href="/messages/report-range-sensor-data-4803
">sendReportRangeSensorData</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-range-sensor-data-2803
">QueryRangeSensorData</a></td>
<td><code>!isCoordinateTransformSupported</code></td>
<td><a href="/messages/report-range-sensor-data-4803
">sendReportRangeSensorDataInNativeSystem</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-range-sensor-compressed-data-2804
">QueryRangeSensorCompressedData</a></td>
<td><code>isCoordinateTransformSupported</code></td>
<td><a href="/messages/report-range-sensor-compressed-data-4804
">sendReportRangeSensorCompressedData</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-range-sensor-compressed-data-2804
">QueryRangeSensorCompressedData</a></td>
<td><code>!isCoordinateTransformSupported</code></td>
<td><a href="/messages/report-range-sensor-compressed-data-4804
">sendReportRangeSensorCompressedDataInNativeSystem</a>
</td>
</tr></tbody></table>

## Actions

<table border="1" class="jaus-table">
<tbody><tr>
<th align="left" colspan="4"><font size="+2">
<b>Actions</b></font></th></tr>
<tr>
<td><b>Action Name</b></td>
<td><b>Type</b></td>
<td><b>Description</b></td>
</tr>
<tr>
<td>sendConfirmSensorConfiguration</td>
<td>Send Action
</td>
<td>Send ConfirmSensorConfiguration message to the component
<br>
<i>Output Message:</i> <a href="/messages/confirm-sensor-configuration-0801
">ConfirmSensorConfiguration
</a></td>
</tr><tr>
<td>sendReportRangeSensorCapabilities</td>
<td>Send Action
</td>
<td>Send a Report Range Sensor Capabilities message
<br>
<i>Output Message:</i> <a href="/messages/report-range-sensor-capabilities-4801
">ReportRangeSensorCapabilities
</a></td>
</tr><tr>
<td>sendReportRangeSensorCompressedData</td>
<td>Send Action
</td>
<td>Send a ReportRangeSensorCompressedData message in native coordinate system
<br>
<i>Output Message:</i> <a href="/messages/report-range-sensor-compressed-data-4804
">ReportRangeSensorCompressedData
</a></td>
</tr><tr>
<td>sendReportRangeSensorCompressedDataInNativeSystem</td>
<td>Send Action
</td>
<td>Send a ReportRangeSensorCompressedData message using the requested coordinate system
<br>
<i>Output Message:</i> <a href="/messages/report-range-sensor-compressed-data-4804
">ReportRangeSensorCompressedData
</a></td>
</tr><tr>
<td>sendReportRangeSensorConfiguration</td>
<td>Send Action
</td>
<td>Send a ReportRangeSensorConfiguration message
<br>
<i>Output Message:</i> <a href="/messages/report-range-sensor-configuration-4802
">ReportRangeSensorConfiguration
</a></td>
</tr><tr>
<td>sendReportRangeSensorData</td>
<td>Send Action
</td>
<td>Send a ReportRangeSensorData message in native coordinate system
<br>
<i>Output Message:</i> <a href="/messages/report-range-sensor-data-4803
">ReportRangeSensorData
</a></td>
</tr><tr>
<td>sendReportRangeSensorDataInNativeSystem</td>
<td>Send Action
</td>
<td>Send a ReportRangeSensorData message in the native coordinate system
<br>
<i>Output Message:</i> <a href="/messages/report-range-sensor-data-4803
">ReportRangeSensorData
</a></td>
</tr><tr>
<td>sendReportRangeSensorGeometricProperties</td>
<td>Send Action
</td>
<td>Send a ReportRangeSensorGeometricProperties message
<br>
<i>Output Message:</i> <a href="/messages/report-range-sensor-geometric-properties-4805
">ReportRangeSensorGeometricProperties
</a></td>
</tr><tr>
<td>updateRangeSensorConfiguration</td>
<td></td>
<td>Update the sensor user controllable configuration parameters according to the ones specified.
</td>
</tr></tbody></table>

