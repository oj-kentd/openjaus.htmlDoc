---
title: SetDigitalAudioConfigurationResponse
---

# Message: SetDigitalAudioConfigurationResponse

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `DADEh` |

## Description

This message is sent as a response to a SetDigitalAudioConfiguration message.  Each Set message contains a local request ID; this ID is returned by the corresponding response message and may be used by the client to coordinate requests and responses.

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
<td>RequestID</td>
<td>Unsigned Byte</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>Local Request ID specified by the client<br>
</td>
</tr>
<tr>
<td align="center">2</td>
<td>ResponseCode</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Enumeration Values:<br>
0: <i>SUCCESS</i><br>1: <i>ONE_OR_MORE_SENSOR_IDS_NOT_FOUND</i><br>2: <i>UNSUPPORTED_CONFIGURATION</i><br>3: <i>OTHER_ERROR</i><br></td>
</tr>
</tbody></table>

