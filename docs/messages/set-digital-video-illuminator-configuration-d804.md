---
title: SetDigitalVideoIlluminatorConfiguration
---

# Message: SetDigitalVideoIlluminatorConfiguration

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `D804h` |

## Description

This message enables an AEODRSDigitalVideo client to set the illuminationMode of the Illuminator specified by illuminatorID, and to specify a list of sensors (by sensor ID) associated with the Illuminator. A zero-length SensorList is sent to remove any illuminator-sensor associations.

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
<td><a href="#sensorlist">SensorList</a></td>
<td>
List
</td>
<td></td>
<td align="center"><i>false</i></td>
<td>
</td>
</tr>
</tbody></table>

