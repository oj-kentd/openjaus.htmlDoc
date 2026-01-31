---
title: ReportSubsystemIDs
---

# Message: ReportSubsystemIDs

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `FB02h` |

## Description

ReportSubsystemIDs provides a mapping of allocated Subsystem ID to the MAC address of the Subsystem ID holder. The Report indicates whether the list of subsystem ID to MAC mappings includes all allocated subsystem IDs, only those allocated to OCU subsystem types, only those allocated to UGV subsystem types, or if the Report is in response to a request for the subsystem ID allocated to a specified MAC address. In the event that no subsystem ID matching the query criteria has been allocated, ReportSubsystemID will return a zero-element list (count_field = 0).

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
<td><a href="#subsystemidtyperec">SubsystemIDTypeRec</a></td>
<td>Record</td>
<td></td>
<td align="center"><i>false</i></td>
<td></td>
</tr>
<tr>
<td align="center">2</td>
<td><a href="#subsystemidslist">SubsystemIDsList</a></td>
<td>
List
</td>
<td></td>
<td align="center"><i>false</i></td>
<td>
</td>
</tr>
</tbody></table>

