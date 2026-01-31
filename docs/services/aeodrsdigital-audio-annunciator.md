---
title: AEODRSDigitalAudioAnnunciator
---

# AEODRSDigitalAudioAnnunciator

| Property | Value |
| --- | --- |
| **Version** | 1.4 |
| **URN** | `urn:jaus:jss:exp:aeodrs:DigitalAudioAnnuciator` |

## Description

The Digital Audio Annunciator service porvides means to process a digital audio stream and support audio output of that stream at the UGV.  The Service provides a means of configuring the stream parameters (seclection of digital stream format, sample width, and bit rate) and means of reporting current stream parameters. The Digital Audio Annunciator provides a stream endpoint to the client for the Annunciator device.

## Message Set

| ID | Message |
| --- | --- |
| `FF05h` | [ConfirmAnnunciatorStream](/messages/confirm-annunciator-stream-ff05) |
| `DF05h` | [ControlAnnunciatorStream](/messages/control-annunciator-stream-df05) |
| `EF01h` | [QueryAnnunciatorCapabilities](/messages/query-annunciator-capabilities-ef01) |
| `EF02h` | [QueryAnnunciatorConfiguration](/messages/query-annunciator-configuration-ef02) |
| `EF03h` | [QueryAnnunciatorEndpoint](/messages/query-annunciator-endpoint-ef03) |
| `FF01h` | [ReportAnnunciatorCapabilities](/messages/report-annunciator-capabilities-ff01) |
| `FF02h` | [ReportAnnunciatorConfiguration](/messages/report-annunciator-configuration-ff02) |
| `FF03h` | [ReportAnnunciatorEndpoint](/messages/report-annunciator-endpoint-ff03) |
| `DF02h` | [SetAnnunciatorConfiguration](/messages/set-annunciator-configuration-df02) |

## State Machine Diagram

![AEODRSDigitalAudioAnnunciator State Machine Diagram](/smDiagrams/AEODRSDigitalAudioAnnunciator.png)

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
<td rowspan="2">AEODRSDigitalAudioAnnunciatorControlledLoop</td>
<td><a href="/messages/set-annunciator-configuration-df02
">SetAnnunciatorConfiguration</a></td>
<td><code>isControllingClient</code></td>
<td>setAnnunciatorConfigurationAction
</td>
</tr>
<tr>
<td><a href="/messages/control-annunciator-stream-df05
">ControlAnnunciatorStream</a></td>
<td><code>isControllingClient</code></td>
<td>controlAnnunciatorStreamAction
, <a href="/messages/confirm-annunciator-stream-ff05
">sendConfirmAnnunciatorStreamAction</a>
</td>
</tr><tr>
<td align="center" rowspan="3">A</td>
<td rowspan="3">AEODRSDigitalAudioAnnunciatorDefaultLoop</td>
<td><a href="/messages/query-annunciator-capabilities-ef01
">QueryAnnunciatorCapabilities</a></td>
<td><code></code></td>
<td><a href="/messages/report-annunciator-capabilities-ff01
">sendReportAnnunciatorCapabilities</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-annunciator-configuration-ef02
">QueryAnnunciatorConfiguration</a></td>
<td><code></code></td>
<td><a href="/messages/report-annunciator-configuration-ff02
">sendReportAnnunciatorConfiguration</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-annunciator-endpoint-ef03
">QueryAnnunciatorEndpoint</a></td>
<td><code></code></td>
<td><a href="/messages/report-annunciator-endpoint-ff03
">sendReportAnnunciatorEndpoint</a>
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
<td>controlAnnunciatorStreamAction</td>
<td></td>
<td>Perform stream control action specified.
</td>
</tr><tr>
<td>sendConfirmAnnunciatorStreamAction</td>
<td>Send Action
</td>
<td>Send the ConfirmAnnunciatorStream message
<br>
<i>Output Message:</i> <a href="/messages/confirm-annunciator-stream-ff05
">ConfirmAnnunciatorStream
</a></td>
</tr><tr>
<td>sendReportAnnunciatorCapabilities</td>
<td>Send Action
</td>
<td>Send ReportAnnunciatorCapabilities response to querying client
<br>
<i>Output Message:</i> <a href="/messages/report-annunciator-capabilities-ff01
">ReportAnnunciatorCapabilities
</a></td>
</tr><tr>
<td>sendReportAnnunciatorConfiguration</td>
<td>Send Action
</td>
<td>Send ReportAnnunciatorConfiguration response to querying client
<br>
<i>Output Message:</i> <a href="/messages/report-annunciator-configuration-ff02
">ReportAnnunciatorConfiguration
</a></td>
</tr><tr>
<td>sendReportAnnunciatorEndpoint</td>
<td>Send Action
</td>
<td>Send ReportAnnunciatorEndpoint response to querying client
<br>
<i>Output Message:</i> <a href="/messages/report-annunciator-endpoint-ff03
">ReportAnnunciatorEndpoint
</a></td>
</tr><tr>
<td>setAnnunciatorConfigurationAction</td>
<td></td>
<td>Set the annunciator digital audio format and format parameters as specified in the received SetAnnunciatorConfiguration message.
</td>
</tr></tbody></table>

