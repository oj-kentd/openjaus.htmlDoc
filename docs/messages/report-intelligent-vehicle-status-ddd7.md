---
title: ReportIntelligentVehicleStatus
---

# Message: ReportIntelligentVehicleStatus

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `DDD7h` |

## Description

This message is used to report the status for intelligent vehicle functions.

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
<td>BehaviorStatus</td>
<td>BitField<br>
Integer Size: Unsigned Long</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>Bit field representing the supported intelligent vehicle behaviors<br><br>
[0, 1] : ObstacleAvoidanceBehavior<br>
<table border="0" cellpadding="0" cellspacing="0">
<tbody><tr><td></td><td>0: <i>Normal</i></td></tr><tr><td></td><td>1: <i>Stopped</i></td></tr><tr><td></td><td>2: <i>Deviating</i></td></tr></tbody></table>
2: <i>PitchoverLimit</i><br>
3: <i>PitchoverWarning</i><br>
4: <i>RolloverLimit</i><br>
5: <i>RolloverWarning</i><br>
6: <i>AntilockBrakeSystem</i><br>
7: <i>TractionControl</i><br>
8: <i>DifferentialLock</i><br>
9: <i>FrontSuspensionLock</i><br>
10: <i>RearSuspensionLock</i><br>
11: <i>ActivePitchoverControl</i><br>
12: <i>ActiveRolloverControl</i><br>
13: <i>ForwardCollisionWarning</i><br>
14: <i>BlindSpotMonitoring</i><br>
15: <i>LaneDepartureWarning</i><br>
16: <i>PedestrianDetectionWarning</i><br>
17: <i>BackupWarning</i><br>
18: <i>CollisionMitigationBraking</i><br>
19: <i>CrossTrafficAssist</i><br>
20: <i>CrossTrafficWarning</i><br>
21: <i>BackupAssist</i><br>
22: <i>LaneChangeAssist</i><br>
23: <i>LaneKeepingAssist</i><br>
24: <i>AdaptiveCruiseControl</i><br>
25: <i>EmergencyBrakingAssist</i><br>
26: <i>HillHoldControl</i><br>
27: <i>HillDescentControl</i><br>
28: <i>AutomaticLaneCentering</i><br>
29: <i>AutomatedParking</i><br>
30: <i>DriverAttentionWarning</i><br>
31: <i>HeadwayWarning</i><br>
[32, 49] : <i>ReservedForIOP</i> (range: 0 ... 262144)<br>[50, 63] : <i>ReservedForProgramSpecificUse</i> (range: 0 ... 16384)<br></td>
</tr>
</tbody></table>

