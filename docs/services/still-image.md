---
title: StillImage
---

# StillImage

| Property | Value |
| --- | --- |
| **Version** | 1.0 |
| **URN** | `urn:jaus:jss:environmentSensing:StillImage` |

## Description

This service provides access to the capabilities and configuration of a camera, allowing the controlling component to set the camera to a particular operational profile and to obtain images from the camera.  While this service reports each image individually, the Events service can be used to automatically report images at a specified rate thereby simulating video (such as is typically done to create an MJPEG video stream).

## Message Set

| ID | Message |
| --- | --- |
| `2814h` | [QueryStillImageData](/messages/query-still-image-data-2814) |
| `2812h` | [QueryStillImageSensorCapabilities](/messages/query-still-image-sensor-capabilities-2812) |
| `2813h` | [QueryStillImageSensorConfiguration](/messages/query-still-image-sensor-configuration-2813) |
| `4814h` | [ReportStillImageData](/messages/report-still-image-data-4814) |
| `4812h` | [ReportStillImageSensorCapabilities](/messages/report-still-image-sensor-capabilities-4812) |
| `4813h` | [ReportStillImageSensorConfiguration](/messages/report-still-image-sensor-configuration-4813) |
| `0807h` | [SetStillImageSensorConfiguration](/messages/set-still-image-sensor-configuration-0807) |

## State Machine Diagram

![StillImage State Machine Diagram](/smDiagrams/StillImage.png)

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
<td rowspan="1">StillImageControlledLoop</td>
<td><a href="/messages/set-still-image-sensor-configuration-0807
">SetStillImageSensorConfiguration</a></td>
<td><code>isControllingClient</code></td>
<td><a href="/messages/confirm-sensor-configuration-0801
">sendConfirmSensorConfiguration</a>
, updateStillImageSensorConfiguration
</td>
</tr><tr>
<td align="center" rowspan="4">A</td>
<td rowspan="4">StillImageDefaultLoop</td>
<td><a href="/messages/query-still-image-sensor-capabilities-2812
">QueryStillImageSensorCapabilities</a></td>
<td><code></code></td>
<td><a href="/messages/report-still-image-sensor-capabilities-4812
">sendReportStillImageSensorCapabilities</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-still-image-sensor-configuration-2813
">QueryStillImageSensorConfiguration</a></td>
<td><code></code></td>
<td><a href="/messages/report-still-image-sensor-configuration-4813
">sendReportStillImageSensorConfiguration</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-still-image-data-2814
">QueryStillImageData</a></td>
<td><code>isCoordinateTransformSupported</code></td>
<td><a href="/messages/report-still-image-data-4814
">sendReportStillImageData</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-still-image-data-2814
">QueryStillImageData</a></td>
<td><code>!isCoordinateTransformSupported</code></td>
<td><a href="/messages/report-still-image-data-4814
">sendReportStillImageDataInNativeSystem</a>
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
<td>
<i>Output Message:</i> <a href="/messages/confirm-sensor-configuration-0801
">ConfirmSensorConfiguration
</a></td>
</tr><tr>
<td>sendReportStillImageData</td>
<td>Send Action
</td>
<td>Send a ReportStillImageData message in requested coordinate system
<br>
<i>Output Message:</i> <a href="/messages/report-still-image-data-4814
">ReportStillImageData
</a></td>
</tr><tr>
<td>sendReportStillImageDataInNativeSystem</td>
<td>Send Action
</td>
<td>Send a ReportStillImageData message in native coordinate system
<br>
<i>Output Message:</i> <a href="/messages/report-still-image-data-4814
">ReportStillImageData
</a></td>
</tr><tr>
<td>sendReportStillImageSensorCapabilities</td>
<td>Send Action
</td>
<td>Send a ReportStillImageSensorCapabilities message
<br>
<i>Output Message:</i> <a href="/messages/report-still-image-sensor-capabilities-4812
">ReportStillImageSensorCapabilities
</a></td>
</tr><tr>
<td>sendReportStillImageSensorConfiguration</td>
<td>Send Action
</td>
<td>Send a ReportStillImageSensorConfiguration message
<br>
<i>Output Message:</i> <a href="/messages/report-still-image-sensor-configuration-4813
">ReportStillImageSensorConfiguration
</a></td>
</tr><tr>
<td>updateStillImageSensorConfiguration</td>
<td></td>
<td>Update the sensor user controllable configuration parameters according to the ones specified.
</td>
</tr></tbody></table>

