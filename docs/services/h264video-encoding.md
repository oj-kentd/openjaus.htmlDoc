---
title: H264VideoEncoding
---

# H264VideoEncoding

| Property | Value |
| --- | --- |
| **Version** | 1.0 |
| **URN** | `urn:jaus:jss:iop:H264VideoEncoding` |

## Description

The H264 Video Encoding Service provides a mechanism for querying and configuring the H264 encoding of one or more video sensors

## Message Set

| ID | Message |
| --- | --- |
| `EB91h` | [QueryH264VideoEncodingCapabilities](/messages/query-h264video-encoding-capabilities-eb91) |
| `EB92h` | [QueryH264VideoEncodingConfiguration](/messages/query-h264video-encoding-configuration-eb92) |
| `EB93h` | [ReportH264VideoEncodingCapabilities](/messages/report-h264video-encoding-capabilities-eb93) |
| `EB94h` | [ReportH264VideoEncodingConfiguration](/messages/report-h264video-encoding-configuration-eb94) |
| `EB90h` | [SetH264VideoEncodingConfiguration](/messages/set-h264video-encoding-configuration-eb90) |

## State Machine Diagram

![H264VideoEncoding State Machine Diagram](/smDiagrams/H264VideoEncoding.png)

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
<td rowspan="1">H264VideoEncodingControlledLoop</td>
<td><a href="/messages/set-h264video-encoding-configuration-eb90
">SetH264VideoEncodingConfiguration</a></td>
<td><code>isControllingClient &amp;&amp; isSupportedCommand</code></td>
<td>setH264VideoEncodingConfig
</td>
</tr><tr>
<td align="center" rowspan="2">A</td>
<td rowspan="2">H264VideoEncodingDefaultLoop</td>
<td><a href="/messages/query-h264video-encoding-capabilities-eb91
">QueryH264VideoEncodingCapabilities</a></td>
<td><code></code></td>
<td><a href="/messages/report-h264video-encoding-capabilities-eb93
">sendReportH264VideoEncodingCapabilities</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-h264video-encoding-configuration-eb92
">QueryH264VideoEncodingConfiguration</a></td>
<td><code></code></td>
<td><a href="/messages/report-h264video-encoding-configuration-eb94
">sendReportH264VideoEncodingConfiguration</a>
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
<td>sendReportH264VideoEncodingCapabilities</td>
<td>Send Action
</td>
<td>Send a ReportH264VideoEncodingCapabilities message to the original requestor
<br>
<i>Output Message:</i> <a href="/messages/report-h264video-encoding-capabilities-eb93
">ReportH264VideoEncodingCapabilities
</a></td>
</tr><tr>
<td>sendReportH264VideoEncodingConfiguration</td>
<td>Send Action
</td>
<td>Send a ReportH264VideoEncodingConfiguration message to the original requestor
<br>
<i>Output Message:</i> <a href="/messages/report-h264video-encoding-configuration-eb94
">ReportH264VideoEncodingConfiguration
</a></td>
</tr><tr>
<td>setH264VideoEncodingConfig</td>
<td></td>
<td>Update the H264 encoding configuration with the specified values
</td>
</tr></tbody></table>

