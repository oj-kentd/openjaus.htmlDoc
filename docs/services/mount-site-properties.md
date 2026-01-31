---
title: MountSiteProperties
---

# MountSiteProperties

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:exp:aeodrs:MountSiteProperties` |

## Description

The Mount Site Properties Service provides a requesting client with a list of the mount site locations and orientations of a mount site host. The Service provides the location and orientation relative to the coordinate frame of the mount site host. These parameters define the origin of the coordinate frame for the child component which coincides with the geometric center of the mechanical interface or bolt pattern. In addition the service looks up the mount site information using the information of the Node ID. This enables each component to obtain the location and orientation of the mount site to which it is attached, which in turn enables the component to report its location (for example, this enables a Visual Sensor to report location within its Geometric Properties, and enables a Manipulator to report its location in its Manipulator Specifications). An IOP system may provide both fixed-location mount sites (such as those provided by the chassis) and dynamic-location mount sites (such as those provided on links of a manipulator). When reporting the coordinates for a dynamic-location mount site the Mount Site Properties Service must report it in the link coordinate frame to which it is statically attached as well as reporting the link index.

## Message Set

| ID | Message |
| --- | --- |
| `E701h` | [QueryMountSite](/messages/query-mount-site-e701) |
| `F701h` | [ReportMountSite](/messages/report-mount-site-f701) |

## State Machine Diagram

![MountSiteProperties State Machine Diagram](/smDiagrams/MountSiteProperties.png)

## State Transitions

<table border="1" class="jaus-table">
<tbody><tr>
<th align="left" colspan="100"><font size="+2">
<b>State Transitions</b></font></th></tr>
<tr>
<td><b>Label</b></td>
<td><b>Transition</b></td>
<td><b>Trigger</b></td>
<td><b>Conditional</b></td>
<td><b>Actions</b></td>
</tr>
<tr>
<td align="center" rowspan="1">A</td>
<td rowspan="1">MountSitePropertiesDefaultLoop</td>
<td><a href="/messages/query-mount-site-e701
">QueryMountSite</a></td>
<td><code></code></td>
<td><a href="/messages/report-mount-site-f701
">sendReportMountSite</a>
</td>
</tr></tbody></table>

## Actions

<table border="1" class="jaus-table">
<tbody><tr>
<th align="left" colspan="4"><font size="+2">
<b>Actions</b></font></th></tr>
<tr>
<td><b>Action Name</b></td>
<td><b>Type</b></td>
<td><b>Description</b></td>
</tr>
<tr>
<td>sendReportMountSite</td>
<td>Send Action
</td>
<td>Send a ReportMountSite message
<br>
<i>Output Message:</i> <a href="/messages/report-mount-site-f701
">ReportMountSite
</a></td>
</tr></tbody></table>

