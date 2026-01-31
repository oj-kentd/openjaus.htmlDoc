---
title: ReportGlobalPathSegment
---

# Message: ReportGlobalPathSegment

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `440Fh` |

## Description

This message is used to provide the receiver the values of the current path segment. The message data and mapping of the presence vector of this message are identical to ID 040Fh: SetGlobalPathSegment.

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
<td>Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Bit 0: P1Altitude<br>
Bit 1: P2Altitude<br>
Bit 2: PathTolerance<br>
</td>
</tr>
<tr>
<td align="center">2</td>
<td>P1Latitude</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units degrees</td>
<td align="center"><i>false</i></td>
<td>
Real Lower Limit: -90.0<br>
Real Upper Limit: 90.0<br>
</td>
</tr>
<tr>
<td align="center">3</td>
<td>P1Longitude</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units degrees</td>
<td align="center"><i>false</i></td>
<td>
Real Lower Limit: -180.0<br>
Real Upper Limit: 180.0<br>
</td>
</tr>
<tr>
<td align="center">4</td>
<td>P1Altitude</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units meter</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: -10000.0<br>
Real Upper Limit: 35000.0<br>
</td>
</tr>
<tr>
<td align="center">5</td>
<td>P2Latitude</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units degrees</td>
<td align="center"><i>false</i></td>
<td>
Real Lower Limit: -90.0<br>
Real Upper Limit: 90.0<br>
</td>
</tr>
<tr>
<td align="center">6</td>
<td>P2Longitude</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units degrees</td>
<td align="center"><i>false</i></td>
<td>
Real Lower Limit: -180.0<br>
Real Upper Limit: 180.0<br>
</td>
</tr>
<tr>
<td align="center">7</td>
<td>P2Altitude</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units meter</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: -10000.0<br>
Real Upper Limit: 35000.0<br>
</td>
</tr>
<tr>
<td align="center">8</td>
<td>WeightingFactor</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units one</td>
<td align="center"><i>false</i></td>
<td>Where 0 is a straight line.<br><br>
Real Lower Limit: 0.0<br>
Real Upper Limit: 500.0<br>
</td>
</tr>
<tr>
<td align="center">9</td>
<td>PathTolerance</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units one</td>
<td align="center"><i>true</i></td>
<td>A value of 0 is used for infinite tolerance.<br><br>
Real Lower Limit: 0.0<br>
Real Upper Limit: 100000.0<br>
</td>
</tr>
</tbody></table>

