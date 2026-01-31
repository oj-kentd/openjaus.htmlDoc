---
title: SetIntelligentVehicleConfiguration
---

# Message: SetIntelligentVehicleConfiguration

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `DDD4h` |

## Description

This message is used to turn on/off intelligent vehicle capabilities. Note that this message may be ignored if an unsupported capability is specified.  Clients are advised to first send a Query Capabilities message to determine the supported functions before making modifications to the configuration.

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
Bit 0: ObstacleAvoidanceStopRec<br>
Bit 1: ObstacleAvoidanceDeviateRec<br>
Bit 2: ForwardCollisionWarningRec<br>
Bit 3: LaneDepatureWarningRec<br>
Bit 4: PedestrianDetectionWarningRec<br>
Bit 5: BackupWarningRec<br>
Bit 6: CollisionMitigationBrakingRec<br>
Bit 7: BackupAssistRec<br>
Bit 8: LaneKeepingAssistRec<br>
Bit 9: AdaptiveCruiseControlRec<br>
Bit 10: AutomatedParkingRec<br>
</td>
</tr>
<tr>
<td align="center">2</td>
<td><a href="#intelligentvehiclerec">IntelligentVehicleRec</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>false</i></td>
<td></td>
</tr>
<tr>
<td align="center">3</td>
<td><a href="#obstacleavoidancestoprec">ObstacleAvoidanceStopRec</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>true</i></td>
<td></td>
</tr>
<tr>
<td align="center">4</td>
<td><a href="#obstacleavoidancedeviaterec">ObstacleAvoidanceDeviateRec</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>true</i></td>
<td></td>
</tr>
<tr>
<td align="center">5</td>
<td><a href="#forwardcollisionwarningrec">ForwardCollisionWarningRec</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>true</i></td>
<td></td>
</tr>
<tr>
<td align="center">6</td>
<td><a href="#lanedepaturewarningrec">LaneDepatureWarningRec</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>true</i></td>
<td></td>
</tr>
<tr>
<td align="center">7</td>
<td><a href="#pedestriandetectionwarningrec">PedestrianDetectionWarningRec</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>true</i></td>
<td></td>
</tr>
<tr>
<td align="center">8</td>
<td><a href="#backupwarningrec">BackupWarningRec</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>true</i></td>
<td></td>
</tr>
<tr>
<td align="center">9</td>
<td><a href="#collisionmitigationbrakingrec">CollisionMitigationBrakingRec</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>true</i></td>
<td></td>
</tr>
<tr>
<td align="center">10</td>
<td><a href="#backupassistrec">BackupAssistRec</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>true</i></td>
<td></td>
</tr>
<tr>
<td align="center">11</td>
<td><a href="#lanekeepingassistrec">LaneKeepingAssistRec</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>true</i></td>
<td></td>
</tr>
<tr>
<td align="center">12</td>
<td><a href="#adaptivecruisecontrolrec">AdaptiveCruiseControlRec</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>true</i></td>
<td></td>
</tr>
<tr>
<td align="center">13</td>
<td><a href="#automatedparkingrec">AutomatedParkingRec</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>true</i></td>
<td></td>
</tr>
</tbody></table>

