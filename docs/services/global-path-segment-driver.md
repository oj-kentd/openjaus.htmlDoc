---
title: GlobalPathSegmentDriver
---

# GlobalPathSegmentDriver

| Property | Value |
| --- | --- |
| **Version** | 1.0 |
| **URN** | `urn:jaus:jss:mobility:GlobalPathSegmentDriver` |

## Description

The function of the Global Path Segment Driver is to perform closed loop control of position and velocity along a path where the path is defined in a generic manner. The Global Path Segment Driver differs from the Waypoint Drivers in that the exact path between waypoints is strictly defined. A path segment will be defined by specifying the three-dimensional coordinates of three points, P0, P1, and P2 together with one scalar weighting value w1 as documented in the JAUS Mobility Service Set Specification.

## Message Set

| ID | Message |
| --- | --- |
| `240Fh` | [QueryGlobalPathSegment](/messages/query-global-path-segment-240f) |
| `440Fh` | [ReportGlobalPathSegment](/messages/report-global-path-segment-440f) |
| `040Fh` | [SetGlobalPathSegment](/messages/set-global-path-segment-040f) |

## State Machine Diagram

![GlobalPathSegmentDriver State Machine Diagram](/smDiagrams/GlobalPathSegmentDriver.png)

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
<td align="center" rowspan="3">B</td>
<td rowspan="3">GpsdControlledLoop</td>
<td><a href="/messages/set-element-041a
">SetElement</a></td>
<td><code>isControllingClient &amp;&amp; ( isValidGpsdElementRequest &amp;&amp; isGpsdElementSupported )</code></td>
<td><a href="/messages/confirm-element-request-041c
">sendConfirmElementRequest</a>
, setGpsdElement
</td>
</tr>
<tr>
<td><a href="/messages/set-element-041a
">SetElement</a></td>
<td><code>isControllingClient &amp;&amp; !isValidGpsdElementRequest</code></td>
<td><a href="/messages/reject-element-request-041d
">sendRejectElementRequest</a>
</td>
</tr>
<tr>
<td><a href="/messages/set-element-041a
">SetElement</a></td>
<td><code>isControllingClient &amp;&amp; !isGpsdElementSupported</code></td>
<td><a href="/messages/reject-element-request-041d
">sendRejectElementRequest</a>
</td>
</tr><tr>
<td align="center" rowspan="3">A</td>
<td rowspan="3">GpsdDefaultLoop</td>
<td><a href="/messages/query-travel-speed-240a
">QueryTravelSpeed</a></td>
<td><code></code></td>
<td><a href="/messages/report-travel-speed-440a
">sendReportTravelSpeed</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-global-path-segment-240f
">QueryGlobalPathSegment</a></td>
<td><code>gpsdSegmentExists</code></td>
<td><a href="/messages/report-global-path-segment-440f
">sendReportGlobalPathSegment</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-active-element-241e
">QueryActiveElement</a></td>
<td><code></code></td>
<td><a href="/messages/report-active-element-441e
">sendReportActiveElement</a>
</td>
</tr><tr>
<td align="center" rowspan="2">C</td>
<td rowspan="2">GpsdReadyLoop</td>
<td><a href="/messages/execute-list-041e
">ExecuteList</a></td>
<td><code>isControllingClient &amp;&amp; gpsdElementExists</code></td>
<td>executeGlobalPathSegmentList
</td>
</tr>
<tr>
<td><a href="/messages/execute-list-041e
">ExecuteList</a></td>
<td><code>isControllingClient &amp;&amp; !gpsdElementSpecified</code></td>
<td>modifyGpsdTravelSpeed
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
<td>executeGlobalPathSegmentList</td>
<td></td>
<td>
</td>
</tr><tr>
<td>modifyGpsdTravelSpeed</td>
<td></td>
<td>
</td>
</tr><tr>
<td>resetGpsdTravelSpeed</td>
<td>Exit Action
</td>
<td>
</td>
</tr><tr>
<td>sendConfirmElementRequest</td>
<td>Send Action
</td>
<td>
<i>Output Message:</i> <a href="/messages/confirm-element-request-041c
">ConfirmElementRequest
</a></td>
</tr><tr>
<td>sendRejectElementRequest</td>
<td>Send Action
</td>
<td>
<i>Output Message:</i> <a href="/messages/reject-element-request-041d
">RejectElementRequest
</a></td>
</tr><tr>
<td>sendReportActiveElement</td>
<td>Send Action
</td>
<td>
<i>Output Message:</i> <a href="/messages/report-active-element-441e
">ReportActiveElement
</a></td>
</tr><tr>
<td>sendReportGlobalPathSegment</td>
<td>Send Action
</td>
<td>
<i>Output Message:</i> <a href="/messages/report-global-path-segment-440f
">ReportGlobalPathSegment
</a></td>
</tr><tr>
<td>sendReportTravelSpeed</td>
<td>Send Action
</td>
<td>
<i>Output Message:</i> <a href="/messages/report-travel-speed-440a
">ReportTravelSpeed
</a></td>
</tr><tr>
<td>setGpsdElement</td>
<td></td>
<td>
</td>
</tr></tbody></table>

