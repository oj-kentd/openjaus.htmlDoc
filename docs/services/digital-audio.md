---
title: DigitalAudio
---

# DigitalAudio

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:DigitalAudio` |

## Description

The Digital Audio Service provides a means of configuring a digital audio stream, often from a microphone or other source.  Note that the transport of the digitized audio stream itself is not covered by this service, and may use existing audio networking standards such as RTSP.

## Message Set

| ID | Message |
| --- | --- |
| `DABEh` | [QueryDigitalAudioCapabilities](/messages/query-digital-audio-capabilities-dabe) |
| `DACEh` | [QueryDigitalAudioConfiguration](/messages/query-digital-audio-configuration-dace) |
| `DAEEh` | [ReportDigitalAudioCapabilities](/messages/report-digital-audio-capabilities-daee) |
| `DAFEh` | [ReportDigitalAudioConfiguration](/messages/report-digital-audio-configuration-dafe) |
| `DAAEh` | [SetDigitalAudioConfiguration](/messages/set-digital-audio-configuration-daae) |
| `DADEh` | [SetDigitalAudioConfigurationResponse](/messages/set-digital-audio-configuration-response-dade) |

## State Machine Diagram

![DigitalAudio State Machine Diagram](/smDiagrams/DigitalAudio.png)

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
<td align="center" rowspan="3">B</td>
<td rowspan="3">DigitalAudioControlledLoop</td>
<td><a href="/messages/set-digital-audio-configuration-daae
">SetDigitalAudioConfiguration</a></td>
<td><code>isControllingClient &amp;&amp; ( isValidCommand &amp;&amp; isValidSensor )</code></td>
<td>sendSetDigitalAudioConfigurationResponseSuccess
, setConfiguration
</td>
</tr>
<tr>
<td><a href="/messages/set-digital-audio-configuration-daae
">SetDigitalAudioConfiguration</a></td>
<td><code>isControllingClient &amp;&amp; !isValidSensor</code></td>
<td>sendSetDigitalAudioConfigurationResponseSensorNotFound
</td>
</tr>
<tr>
<td><a href="/messages/set-digital-audio-configuration-daae
">SetDigitalAudioConfiguration</a></td>
<td><code>isControllingClient &amp;&amp; !isValidCommand</code></td>
<td>sendSetDigitalAudioConfigurationResponseUnsupported
</td>
</tr><tr>
<td align="center" rowspan="2">A</td>
<td rowspan="2">DigitalAudioDefaultLoop</td>
<td><a href="/messages/query-digital-audio-capabilities-dabe
">QueryDigitalAudioCapabilities</a></td>
<td><code></code></td>
<td><a href="/messages/report-digital-audio-capabilities-daee
">sendReportDigitalAudioCapabilities</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-digital-audio-configuration-dace
">QueryDigitalAudioConfiguration</a></td>
<td><code></code></td>
<td><a href="/messages/report-digital-audio-configuration-dafe
">sendReportDigitalAudioConfiguration</a>
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
<td>sendReportDigitalAudioCapabilities</td>
<td>Send Action
</td>
<td>Send a ReportDigitalAudioCapabilities message to querying client
<br>
<i>Output Message:</i> <a href="/messages/report-digital-audio-capabilities-daee
">ReportDigitalAudioCapabilities
</a></td>
</tr><tr>
<td>sendReportDigitalAudioConfiguration</td>
<td>Send Action
</td>
<td>Send a ReportDigitalAudioConfiguration message to querying client
<br>
<i>Output Message:</i> <a href="/messages/report-digital-audio-configuration-dafe
">ReportDigitalAudioConfiguration
</a></td>
</tr><tr>
<td>sendSetDigitalAudioConfigurationResponseSensorNotFound</td>
<td></td>
<td>
</td>
</tr><tr>
<td>sendSetDigitalAudioConfigurationResponseSuccess</td>
<td></td>
<td>
</td>
</tr><tr>
<td>sendSetDigitalAudioConfigurationResponseUnsupported</td>
<td></td>
<td>
</td>
</tr><tr>
<td>setConfiguration</td>
<td></td>
<td>Changes the current configuration for the given sensors
</td>
</tr></tbody></table>

