---
title: ReportPathReporterCapabilities
---

# Message: ReportPathReporterCapabilities

| Property | Value |
| --- | --- |
| **Type** | Message |
| **Message ID** | `DEF2h` |

## Description

This message is used to report the capabilities for the service.        This implementation may support one or more PathTypes, and specify further limitations on the       constraints used in the QueryPath message.  For example, an implementation may specify that       it only supports a certain maximum number of points, and/or a fixed target resolution.

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
<td><a href="#pathreportercapabilitieslist">PathReporterCapabilitiesList</a></td>
<td>
List
</td>
<td></td>
<td align="center"><i>false</i></td>
<td>
</td>
</tr>
</tbody></table>

