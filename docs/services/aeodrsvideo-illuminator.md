---
title: AEODRSVideoIlluminator
---

# AEODRSVideoIlluminator

| Property | Value |
| --- | --- |
| **Version** | 1.4 |
| **URN** | `urn:jaus:jss:exp:aeodrs:AEODRSVideoIlluminator` |

## Description

The AEODRS Digital Video Service adds provisions to control Illuminators associated with video sensors. The AEODRS Video Illuminator Service provides for control of multi-mode illumination devices via the DigitalVideoIlluminator messages. This enables the service to support use of multimode illumination sources in conjunction with multimode sensors. The service enables selection of an illumination mode, setting and reading the illumination intensity, and setting and reading the illuminator beamwidth for each illumination device.

## Message Set

| ID | Message |
| --- | --- |
| `E801h` | [QueryDigitalVideoIlluminator](/messages/query-digital-video-illuminator-e801) |
| `E803h` | [QueryDigitalVideoIlluminatorCapabilities](/messages/query-digital-video-illuminator-capabilities-e803) |
| `E804h` | [QueryDigitalVideoIlluminatorConfiguration](/messages/query-digital-video-illuminator-configuration-e804) |
| `F801h` | [ReportDigitalVideoIlluminator](/messages/report-digital-video-illuminator-f801) |
| `F803h` | [ReportDigitalVideoIlluminatorCapabilities](/messages/report-digital-video-illuminator-capabilities-f803) |
| `F804h` | [ReportDigitalVideoIlluminatorConfiguration](/messages/report-digital-video-illuminator-configuration-f804) |
| `D801h` | [SetDigitalVideoIlluminator](/messages/set-digital-video-illuminator-d801) |
| `D804h` | [SetDigitalVideoIlluminatorConfiguration](/messages/set-digital-video-illuminator-configuration-d804) |

## State Machine Diagram

![AEODRSVideoIlluminator State Machine Diagram](/smDiagrams/AEODRSVideoIlluminator.png)

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
<td align="center" rowspan="2">B</td>
<td rowspan="2">AEODRSVideoIlluminatorControlledLoop</td>
<td><a href="/messages/set-digital-video-illuminator-configuration-d804
">SetDigitalVideoIlluminatorConfiguration</a></td>
<td><code></code></td>
<td>setDigitalVideoIlluminatorConfigurationAction
</td>
</tr>
<tr>
<td><a href="/messages/set-digital-video-illuminator-d801
">SetDigitalVideoIlluminator</a></td>
<td><code></code></td>
<td>setDigitalVideoIlluminatorAction
</td>
</tr><tr>
<td align="center" rowspan="3">A</td>
<td rowspan="3">AEODRSVideoIlluminatorDefaultLoop</td>
<td><a href="/messages/query-digital-video-illuminator-capabilities-e803
">QueryDigitalVideoIlluminatorCapabilities</a></td>
<td><code></code></td>
<td><a href="/messages/report-digital-video-illuminator-capabilities-f803
">sendReportDigitalVideoIlluminatorCapabilities</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-digital-video-illuminator-configuration-e804
">QueryDigitalVideoIlluminatorConfiguration</a></td>
<td><code></code></td>
<td><a href="/messages/report-digital-video-illuminator-configuration-f804
">sendReportDigitalVideoIlluminatorConfiguration</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-digital-video-illuminator-e801
">QueryDigitalVideoIlluminator</a></td>
<td><code></code></td>
<td><a href="/messages/report-digital-video-illuminator-f801
">sendReportDigitalVideoIlluminator</a>
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
<td>sendReportDigitalVideoIlluminator</td>
<td>Send Action
</td>
<td>Construct and send ReportDigitalVideoIlluminator to querying client
<br>
<i>Output Message:</i> <a href="/messages/report-digital-video-illuminator-f801
">ReportDigitalVideoIlluminator
</a></td>
</tr><tr>
<td>sendReportDigitalVideoIlluminatorCapabilities</td>
<td>Send Action
</td>
<td>Construct and send ReportDigitalVideoIlluminatorCapabilities to querying client
<br>
<i>Output Message:</i> <a href="/messages/report-digital-video-illuminator-capabilities-f803
">ReportDigitalVideoIlluminatorCapabilities
</a></td>
</tr><tr>
<td>sendReportDigitalVideoIlluminatorConfiguration</td>
<td>Send Action
</td>
<td>Construct and send ReportDigitalVideoIlluminatorConfiguration to querying client
<br>
<i>Output Message:</i> <a href="/messages/report-digital-video-illuminator-configuration-f804
">ReportDigitalVideoIlluminatorConfiguration
</a></td>
</tr><tr>
<td>setDigitalVideoIlluminatorAction</td>
<td></td>
<td>Set the illumination level and illuminator beamwidth parameters for the specified Illuminator to the values provided in the received SetDigitalVideoIlluminator message.
</td>
</tr><tr>
<td>setDigitalVideoIlluminatorConfigurationAction</td>
<td></td>
<td>Set the illumination mode parameter for the specified Illuminator to the values provided in the received SetDigitalVideoIlluminatorConfiguration message.
</td>
</tr></tbody></table>

