---
title: DigitalAudioAnnunciator
---

# DigitalAudioAnnunciator

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:DigitalAudioAnnunciator` |

## Description

The Digital Audio Annunciator Service extends the Digital Audio Service to allow a client to specify an RTSP stream as an audio source. The service is expected to connect, decode, and play the specified stream, presumably over one or more speakers. The Digital Audio Capabilities message can be used to determine what codecs the implementation supports. Playback volume is specified by the sensitivity value of the parent Digital Audio Service.

## Message Set

| ID | Message |
| --- | --- |
| `DA8Eh` | [QueryDigitalAudioStreamSource](/messages/query-digital-audio-stream-source-da8e) |
| `DA9Eh` | [ReportDigitalAudioStreamSource](/messages/report-digital-audio-stream-source-da9e) |
| `DA7Eh` | [SetDigitalAudioStreamSource](/messages/set-digital-audio-stream-source-da7e) |

## State Machine Diagram

![DigitalAudioAnnunciator State Machine Diagram](/smDiagrams/DigitalAudioAnnunciator.png)

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
<td rowspan="1">DigitalAudioAnnunciatorControlledLoop</td>
<td><a href="/messages/set-digital-audio-stream-source-da7e
">SetDigitalAudioStreamSource</a></td>
<td><code>isControllingClient</code></td>
<td>playStream
</td>
</tr><tr>
<td align="center" rowspan="1">A</td>
<td rowspan="1">DigitalAudioAnnunciatorDefaultLoop</td>
<td><a href="/messages/query-digital-audio-stream-source-da8e
">QueryDigitalAudioStreamSource</a></td>
<td><code></code></td>
<td><a href="/messages/report-digital-audio-stream-source-da9e
">sendReportDigitalAudioStreamSource</a>
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
<td>playStream</td>
<td></td>
<td>Begin playback of the specified stream with the given repeat behavior.
</td>
</tr><tr>
<td>sendReportDigitalAudioStreamSource</td>
<td>Send Action
</td>
<td>Send a ReportDigitalAudioStreamSource message to querying client
<br>
<i>Output Message:</i> <a href="/messages/report-digital-audio-stream-source-da9e
">ReportDigitalAudioStreamSource
</a></td>
</tr></tbody></table>

