---
title: SetMilitaryIlluminationMode
---

# Message: SetMilitaryIlluminationMode

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `B514h` |

## Description

This message sets the military illumination mode.

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
<td>Blackout_mode</td>
<td>Enumeration<br>
Integer Size: Unsigned Byte</td>
<td>one</td>
<td align="center"><i>false</i></td>
<td>When this enumeration is ON the following is the interpretation of the illuminationRec ::illumination bit_field in the parent service is the following: Bit 0: ConvoyDrivingLamp Bit 1: ConvoyLampSelect Bit 2: FrontBlackOutMarkerLamp Bit 3: RearBlackOutMarkerLamp Bit 4: BlackoutBrakeLamp Bit 5: BlackoutWorkLamp Bit 6: NightVisionIlluminator Bit 7-10: VariableDashLighting Bits 11-31 reserved When this enumeration is ON the following is the interpretation of the illuminatorTypes ::types bit_field in the parent service is the following: Bit 0: ConvoyDrivingLamp Bit 1: ConvoyLampSelect Bit 2: FrontBlackOutMarkerLamp Bit 3: RearBlackOutMarkerLamp Bit 4: BlackoutBrakeLamp Bit 5: BlackoutWorkLamp Bit 6: NightVisionIlluminator Bit 7: Dash lighting Bits 8-31 reserved<br><br>
Enumeration Values:<br>
0: <i>OFF</i><br>1: <i>ON</i><br></td>
</tr>
</tbody></table>

