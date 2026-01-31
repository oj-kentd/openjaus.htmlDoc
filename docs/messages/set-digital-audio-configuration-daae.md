---
title: SetDigitalAudioConfiguration
---

# Message: SetDigitalAudioConfiguration

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `DAAEh` |

## Description

This message is used to set the current configuration for one or more audio sensors.  Each Set message contains a local request ID; this ID is returned by the corresponding SetDigitalAudioConfigurationResponse message and may be used by the client to coordinate requests and responses.

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
<td><a href="#requestidrec">RequestIDRec</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>false</i></td>
<td></td>
</tr>
<tr>
<td align="center">2</td>
<td><a href="#digitalaudioconfigurationlist">DigitalAudioConfigurationList</a></td>
<td>
List
</td>
<td></td>
<td align="center"><i>false</i></td>
<td>
</td>
</tr>
</tbody></table>

