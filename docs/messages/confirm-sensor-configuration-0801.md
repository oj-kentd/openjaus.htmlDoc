---
title: ConfirmSensorConfiguration
---

# Message: ConfirmSensorConfiguration

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `0801h` |

## Description

This message is used to notify a client component that the sensor�s configuration has been set to the values specified in the corresponding set message with Request ID matching the value of field 1 of this message. If the specified sensor configuration is deemed valid, the SensorIdRec is returned with the matching SensorID of the sensor for which the configuration was set. If the specified configuration is invalid, one of the ErrorRec  types shall be returned (depending on the source message) with an error code and description of the configuration setting which was deemed invalid.

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
<td><a href="#requestidrec">RequestIdRec</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>false</i></td>
<td></td>
</tr>
<tr>
<td align="center">2</td>
<td><a href="#confirmsensorlist">ConfirmSensorList</a></td>
<td>
List
</td>
<td></td>
<td align="center"><i>false</i></td>
<td>
</td>
</tr>
</tbody></table>

