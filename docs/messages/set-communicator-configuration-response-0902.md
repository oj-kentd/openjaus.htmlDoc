---
title: SetCommunicatorConfigurationResponse
---

# Message: SetCommunicatorConfigurationResponse

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `0902h` |

## Description

The Set Communicator Configuration Response message is sent as a notification back to a client on the status of the SetCommunicatorConfiguration message.

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
<td>Result</td>
<td>BitField<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
0: <i>TransmittedStatusInvalid</i><br>
1: <i>ModeInvalid</i><br>
2: <i>ChannelInvalid</i><br>
3: <i>PowerLevelInvalid</i><br>
4: <i>ModulationInvalid</i><br>
5: <i>BandwidthInvalid</i><br>
6: <i>EncryptionModeInvalid</i><br>
7: <i>OtherFailure</i><br>
</td>
</tr>
</tbody></table>

