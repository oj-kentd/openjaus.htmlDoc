---
title: ReportWiperCapabilities
---

# Message: ReportWiperCapabilities

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `D7C3h` |

## Description

This message is used to report the capabilities for the wipers/cleaners.  Periodic settings have no delay between activations, but the speed of activation can be controlled through the low/medium/high setting.  The interval settings have a delay between each activation, where low/medium/high corresponds to the length of that delay such that LowInterval activates less frequently than HighInterval.  OneShot mode means the wiper/clean activates one time only with no periodicity.  The service may optional report the time duration (period) of each setting, as measured from the beginning of one wipe to the beginning of the next.  For interval settings, the delay may also be reported, measured as the end of one wipe to the beginning of the next.

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
<td>Presence Vector</td>
<td>Unsigned Short</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Bit 0: LowPeriod<br>
Bit 1: MediumPeriod<br>
Bit 2: HighPeriod<br>
Bit 3: LowIntervalPeriod<br>
Bit 4: MediumIntervalPeriod<br>
Bit 5: HighIntervalPeriod<br>
Bit 6: LowIntervalDelay<br>
Bit 7: MediumIntervalDelay<br>
Bit 8: HighIntervalDelay<br>
</td>
</tr><tr>
<td align="center">2</td>
<td>WiperCapabilities</td>
<td>BitField<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>Bit field representing the underlying hardware capabilities.  A value of one (1) means the capability is supported.<br><br>
0: <i>OneShot</i><br>
1: <i>LowPeriodic</i><br>
2: <i>MediumPeriodic</i><br>
3: <i>HighPeriodic</i><br>
4: <i>LowInterval</i><br>
5: <i>MediumInterval</i><br>
6: <i>HighInterval</i><br>
</td>
</tr>
<tr>
<td align="center">3</td>
<td>LowPeriod</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Byte</td>
<td>units second</td>
<td align="center"><i>true</i></td>
<td>Time duration (period) of the LowPeriodic setting, in seconds.<br><br>
Real Lower Limit: 0.0<br>
Real Upper Limit: 25.5<br>
</td>
</tr>
<tr>
<td align="center">4</td>
<td>MediumPeriod</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Byte</td>
<td>units second</td>
<td align="center"><i>true</i></td>
<td>Time duration (period) of the MediumPeriodic setting, in seconds.<br><br>
Real Lower Limit: 0.0<br>
Real Upper Limit: 25.5<br>
</td>
</tr>
<tr>
<td align="center">5</td>
<td>HighPeriod</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Byte</td>
<td>units second</td>
<td align="center"><i>true</i></td>
<td>Time duration (period) of the HighPeriodic setting, in seconds.<br><br>
Real Lower Limit: 0.0<br>
Real Upper Limit: 25.5<br>
</td>
</tr>
<tr>
<td align="center">6</td>
<td>LowIntervalPeriod</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Byte</td>
<td>units second</td>
<td align="center"><i>true</i></td>
<td>Total time duration (period) of the LowInterval setting, in seconds.<br><br>
Real Lower Limit: 0.0<br>
Real Upper Limit: 25.5<br>
</td>
</tr>
<tr>
<td align="center">7</td>
<td>MediumIntervalPeriod</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Byte</td>
<td>units second</td>
<td align="center"><i>true</i></td>
<td>Total time duration (period) of the MediumInterval setting, in seconds.<br><br>
Real Lower Limit: 0.0<br>
Real Upper Limit: 25.5<br>
</td>
</tr>
<tr>
<td align="center">8</td>
<td>HighIntervalPeriod</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Byte</td>
<td>units second</td>
<td align="center"><i>true</i></td>
<td>Total time duration (period) of the HighInterval setting, in seconds.<br><br>
Real Lower Limit: 0.0<br>
Real Upper Limit: 25.5<br>
</td>
</tr>
<tr>
<td align="center">9</td>
<td>LowIntervalDelay</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Byte</td>
<td>units second</td>
<td align="center"><i>true</i></td>
<td>Time delay between wipes in the LowInterval setting, in seconds.<br><br>
Real Lower Limit: 0.0<br>
Real Upper Limit: 25.5<br>
</td>
</tr>
<tr>
<td align="center">10</td>
<td>MediumIntervalDelay</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Byte</td>
<td>units second</td>
<td align="center"><i>true</i></td>
<td>Time delay between wipes in the MediumInterval setting, in seconds.<br><br>
Real Lower Limit: 0.0<br>
Real Upper Limit: 25.5<br>
</td>
</tr>
<tr>
<td align="center">11</td>
<td>HighIntervalDelay</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Byte</td>
<td>units second</td>
<td align="center"><i>true</i></td>
<td>Time delay between wipes in the HighInterval setting, in seconds.<br><br>
Real Lower Limit: 0.0<br>
Real Upper Limit: 25.5<br>
</td>
</tr>
</tbody></table>

