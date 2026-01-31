---
title: QueryPath
---

# Message: QueryPath

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `DEF1h` |

## Description

This message is used to query a path.  If the specified PathType is not       supported, as given in the ReportPathReporterCapabilities message, no response will be generated.        If multiple constraints are specified, the service will return the path data based on the most       stringent constraints, i.e. the smallest number of data points.

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
Bit 0: TargetResolution<br>
Bit 1: MaximumPoints<br>
Bit 2: MaximumDistance<br>
Bit 3: MaximumTime<br>
</td>
</tr><tr>
<td align="center">2</td>
<td>PathType</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>Enumeration for desired path type.<br><br>
Enumeration Values:<br>
0: <i>HistoricalGlobalPath</i><br>1: <i>HistoricalLocalPath</i><br>2: <i>PlannedGlobalPath</i><br>3: <i>PlannedLocalPath</i><br></td>
</tr>
<tr>
<td align="center">3</td>
<td>TargetResolution</td>
<td>Scaled Integer<br>
Integer Size: Unsigned Short</td>
<td>units meter</td>
<td align="center"><i>true</i></td>
<td>The desired distance between reported path points.<br><br>
Real Lower Limit: 0.0<br>
Real Upper Limit: 10000.0<br>
</td>
</tr>
<tr>
<td align="center">4</td>
<td>MaximumPoints</td>
<td>Unsigned Short</td>
<td>units one</td>
<td align="center"><i>true</i></td>
<td>The maximum number of elements for the list of points to be returned.<br>
</td>
</tr>
<tr>
<td align="center">5</td>
<td>MaximumDistance</td>
<td>Unsigned Integer</td>
<td>units meter</td>
<td align="center"><i>true</i></td>
<td>The maximum planned distance for the list of points to be returned<br>
</td>
</tr>
<tr>
<td align="center">6</td>
<td>MaximumTime</td>
<td>Unsigned Integer</td>
<td>units second</td>
<td align="center"><i>true</i></td>
<td>The maximum planned time for the list of points to be returned.<br>
</td>
</tr>
</tbody></table>

