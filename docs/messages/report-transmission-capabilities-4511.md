---
title: ReportTransmissionCapabilities
---

# Message: ReportTransmissionCapabilities

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `4511h` |

## Description

Returns a bitfield of valid gears and transfer case settings

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
<td>TransmissionBitField</td>
<td>BitField<br>
Integer Size: Unsigned Short</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>When the bit is set high, the vehicle supports the specified mode.  Otherwise, it is not supported.<br><br>
0: <i>PARK</i><br>
1: <i>NEUTRAL</i><br>
2: <i>REVERSE</i><br>
3: <i>DRIVE</i><br>
4: <i>OVERDRIVE</i><br>
5: <i>L1</i><br>
6: <i>L2</i><br>
7: <i>L3</i><br>
8: <i>L4</i><br>
9: <i>L5</i><br>
10: <i>L6</i><br>
11: <i>L7</i><br>
12: <i>L8</i><br>
13: <i>L9</i><br>
14: <i>L10</i><br>
15: <i>Reserved</i><br>
</td>
</tr>
<tr>
<td align="center">2</td>
<td>TransferCaseBitField</td>
<td>BitField<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>When the bit is set high, the vehicle supports the specified mode. Otherwise, it is not supported.<br><br>
0: <i>FWD</i><br>
1: <i>AUTO_4WD</i><br>
2: <i>MANUAL_LOW_4WD</i><br>
3: <i>MANUAL_HIGH_4WD</i><br>
4: <i>LOW_AWD</i><br>
5: <i>HIGH_AWD</i><br>
6: <i>Reserved_For_Future_Use</i><br>
7: <i>Reserved_For_User_Defined_Use</i><br>
</td>
</tr>
</tbody></table>

