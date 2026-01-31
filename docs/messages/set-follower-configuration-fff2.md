---
title: SetFollowerConfiguration
---

# Message: SetFollowerConfiguration

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `FFF2h` |

## Description

This message sets the configuration for the follower.  The leader is specified by an optional JAUS identifier that refers to a Global Pose Sensor Service hosted by the leader; if this JAUS identifier is not specified, the leader is assumed to be known a priory by the service.  The optional offset values specify the follow behavior such that MinimumFollowDistance and MaximumFollowDistance represents the safe operating range along the path and LagTime represents the delay, in seconds, that the follower should maintain from the leader.  Additional values allow for more complex convoy configurations and are defined with respect to the path of the lead vehicle;  the LateralOffset refers to the distance from the path in the ground plane, while VerticalOffset refers to the heigh above or below the path measured tangentially to the ground plane.  Alternatively, the VerticalOffset value can be an absolute measure of the desired altitude with respect to Mean Sea Level (MSL), the Ground Level (AGL), or the Sea Floor (ASL).  When not explicitly specified in the message, the offset values are assumed to be equal to the relative position of the follower with respect to the leader at the time the SetFollowerState('START') is received.  Any specified offset values that cannot be satisfied due to physical constraints, such as Z-offset in a ground system or orientation in a fixed wing aircraft, shall be ignored.  This message may also contain optional maximum error values for each offset dimension.  When the follower error exceeds these bounds, the follower should stop and may also stop the lead vehicle if the appropriate flag is set in the ErrorBehavior bitfield.  If the ALLOW_LEADER_OVERRIDE bit is set, the follower may attempt to slow down or speed up the lead vehicle prior to exceeding the error bounds.  If the error values are not specified in the message, they are assumed to be infinite.

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
Bit 0: Leader_ID<br>
Bit 1: ErrorBehavior<br>
Bit 2: LagTime<br>
Bit 3: MinimumFollowDistance<br>
Bit 4: MaximumFollowDistance<br>
Bit 5: LateralOffset<br>
Bit 6: MaxLateralError<br>
Bit 7: VerticalOffset<br>
Bit 8: MaxVerticalError<br>
Bit 9: VerticalOffsetType<br>
Bit 10: Roll<br>
Bit 11: Max_Roll_Error<br>
Bit 12: Pitch<br>
Bit 13: Max_Pitch_Error<br>
Bit 14: Heading<br>
Bit 15: Max_Heading_Error<br>
</td>
</tr><tr>
<td align="center">2</td>
<td>Leader_ID</td>
<td>BitField<br>
Integer Size: Unsigned Integer</td>
<td>one</td>
<td align="center"><i>true</i></td>
<td>
[0, 7] : <i>ComponentID</i> (range: 1 ... 254)<br>[8, 15] : <i>NodeID</i> (range: 1 ... 254)<br>[16, 31] : <i>SubsystemID</i> (range: 1 ... 65534)<br></td>
</tr>
<tr>
<td align="center">3</td>
<td>ErrorBehavior</td>
<td>BitField<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>true</i></td>
<td>
[0, 0] : <i>STOP_LEADER</i> (range: 0 ... 1)<br>[1, 1] : <i>ALLOW_LEADER_OVERRIDE</i> (range: 0 ... 1)<br></td>
</tr>
<tr>
<td align="center">4</td>
<td>LagTime</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units second</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: 0.0<br>
Real Upper Limit: 3600.0<br>
</td>
</tr>
<tr>
<td align="center">5</td>
<td>MinimumFollowDistance</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units meter</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: 0.0<br>
Real Upper Limit: 100000.0<br>
</td>
</tr>
<tr>
<td align="center">6</td>
<td>MaximumFollowDistance</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units meter</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: 0.0<br>
Real Upper Limit: 100000.0<br>
</td>
</tr>
<tr>
<td align="center">7</td>
<td>LateralOffset</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units meter</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: -100000.0<br>
Real Upper Limit: 100000.0<br>
</td>
</tr>
<tr>
<td align="center">8</td>
<td>MaxLateralError</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units meter</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: 0.0<br>
Real Upper Limit: 100000.0<br>
</td>
</tr>
<tr>
<td align="center">9</td>
<td>VerticalOffset</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units meter</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: -100000.0<br>
Real Upper Limit: 100000.0<br>
</td>
</tr>
<tr>
<td align="center">10</td>
<td>MaxVerticalError</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Integer</td>
<td>units meter</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: 0.0<br>
Real Upper Limit: 100000.0<br>
</td>
</tr>
<tr>
<td align="center">11</td>
<td>VerticalOffsetType</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>true</i></td>
<td>
Enumeration Values:<br>
0: <i>DEPTH_MSL</i><br>1: <i>DEPTH_AGL</i><br>2: <i>DEPTH_ASF</i><br>3: <i>RELATIVE_DEPTH</i><br></td>
</tr>
<tr>
<td align="center">12</td>
<td>Roll</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units radians</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: -3.141592653589793<br>
Real Upper Limit: 3.141592653589793<br>
</td>
</tr>
<tr>
<td align="center">13</td>
<td>Max_Roll_Error</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units radians</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: 0.0<br>
Real Upper Limit: 6.283185307179586<br>
</td>
</tr>
<tr>
<td align="center">14</td>
<td>Pitch</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units radians</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: -3.141592653589793<br>
Real Upper Limit: 3.141592653589793<br>
</td>
</tr>
<tr>
<td align="center">15</td>
<td>Max_Pitch_Error</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units radians</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: 0.0<br>
Real Upper Limit: 6.283185307179586<br>
</td>
</tr>
<tr>
<td align="center">16</td>
<td>Heading</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units radians</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: -3.141592653589793<br>
Real Upper Limit: 3.141592653589793<br>
</td>
</tr>
<tr>
<td align="center">17</td>
<td>Max_Heading_Error</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units radians</td>
<td align="center"><i>true</i></td>
<td>
Real Lower Limit: 0.0<br>
Real Upper Limit: 6.283185307179586<br>
</td>
</tr>
</tbody></table>

