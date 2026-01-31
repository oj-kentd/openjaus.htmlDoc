---
title: ReportDigitalVideoIlluminatorConfiguration
---

# Message: ReportDigitalVideoIlluminatorConfiguration

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `F804h` |

## Description

This message provides a report of the current configuration of the specified illuminator.  The report is sent in response to QueryDigitalVideoIlluminatorConfiguration.  A zero-length SensorList is used to indicate that no illuminator-sensor associations exist.

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
<td><a href="#illuminatorconfigrecord">IlluminatorConfigRecord</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>false</i></td>
<td></td>
</tr>
<tr>
<td align="center">2</td>
<td><a href="#sensorslist">SensorsList</a></td>
<td>
List
</td>
<td></td>
<td align="center"><i>false</i></td>
<td>
</td>
</tr>
</tbody></table>

