---
title: SetStillImageSensorConfiguration
---

# Message: SetStillImageSensorConfiguration

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `0807h` |

## Description

This message is used to set the configuration of the still image sensor associated with the service. Configuration is based off of each sensor�s capabilities as described in the Report Still Image Sensor Capabilities message. This message shall cause the receiving service to reply to the sender with a Confirm Sensor Configuration message. If the configuration specified is invalid for a given sensor ID, the confirm message shall contain an Still Image Error Record for the given Sensor ID however other, valid, configurations specified shall be set (if they exist).

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
<td><a href="#requestidrec">RequestIdRec</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>false</i></td>
<td></td>
</tr>
<tr>
<td align="center">2</td>
<td><a href="#stillimagesensorconfigurationlist">StillImageSensorConfigurationList</a></td>
<td>
List
</td>
<td></td>
<td align="center"><i>false</i></td>
<td>
</td>
</tr>
</tbody></table>

