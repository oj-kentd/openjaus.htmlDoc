---
title: ControlDigitalAudioSensorStream
---

# Message: ControlDigitalAudioSensorStream

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `DE04h` |

## Description

The AEODRS-specific message provides control over the sensor data stream to the Client. Following sensor and stream configuration, a client must explicityly start the sensor stream (StreamStart) to initiate the stream.  The stream may be stopped and resumed (StreamStop, with subsequent StreamStart), or terminated (StreamTerminate)

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
<td><a href="#annunciatoridrec">AnnunciatorIdRec</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>false</i></td>
<td></td>
</tr>
<tr>
<td align="center">2</td>
<td><a href="#streamcontrolrec">StreamControlRec</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>false</i></td>
<td></td>
</tr>
</tbody></table>

