---
title: ReportGlobalWaypointStatus
---

# Message: ReportGlobalWaypointStatus

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `F22Bh` |

## Description

This message is used to report the status of the global waypoint execution.

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
<td>SuspendedTime</td>
<td>Unsigned Short</td>
<td>units second</td>
<td align="center"><i>false</i></td>
<td>Amount of time the vehicle has been suspended at the current waypoint<br>
</td>
</tr>
<tr>
<td align="center">2</td>
<td>WaypointStatus</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>
Enumeration Values:<br>
0: <i>NoPlan</i><br>1: <i>PlanLoaded</i><br>2: <i>Executing</i><br>3: <i>Paused</i><br>4: <i>TimedWait</i><br>5: <i>Complete</i><br>6: <i>Fault</i><br>7: <i>NonSpecificFault</i><br>8: <i>VehicleUnresponsive</i><br>9: <i>OutsideCorridor</i><br>10: <i>InvalidSensorData</i><br>11: <i>NoPlanFault</i><br>12: <i>InvalidPlan</i><br>13: <i>NoPathAvailable</i><br></td>
</tr>
</tbody></table>

