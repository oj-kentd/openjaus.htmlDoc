---
title: LocalPathSegmentDriver
---

# LocalPathSegmentDriver

| Property | Value |
| --- | --- |
| **Version** | 1.0 |
| **URN** | `urn:jaus:jss:mobility:LocalPathSegmentDriver` |

## Description

The function of the Local Path Segment Driver is to perform closed loop control of position and velocity along a path where the path is defined in a generic manner. The Local Path Segment Driver differs from the Waypoint Drivers in that the exact path between is strictly defined. A path segment will be defined by specifying the three-dimensional coordinates of three points, P0, P1, and P2 together with one scalar weighting value w1 as documented in the JAUS Mobility Service Set Specification.

## Message Set

| ID | Message |
| --- | --- |
| `2410h` | [QueryLocalPathSegment](/messages/query-local-path-segment-2410) |
| `4410h` | [ReportLocalPathSegment](/messages/report-local-path-segment-4410) |
| `0410h` | [SetLocalPathSegment](/messages/set-local-path-segment-0410) |

## State Machine Diagram

![LocalPathSegmentDriver State Machine Diagram](/smDiagrams/LocalPathSegmentDriver.png)

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
<td rowspan="3">LpsdControlledLoop</td>
<td><a href="/messages/set-element-041a
">SetElement</a></td>
<td><code>isControllingClient &amp;&amp; ( isValidLpsdElementRequest &amp;&amp; isLpsdElementSupported )</code></td>
<td><a href="/messages/confirm-element-request-041c
">sendConfirmElementRequest</a>
, setLpsdElement
</td>
</tr>
<tr>
<td><a href="/messages/set-element-041a
">SetElement</a></td>
<td><code>isControllingClient &amp;&amp; !isValidLpsdElementRequest</code></td>
<td><a href="/messages/reject-element-request-041d
">sendRejectElementRequest</a>
</td>
</tr>
<tr>
<td><a href="/messages/set-element-041a
">SetElement</a></td>
<td><code>isControllingClient &amp;&amp; !isLpsdElementSupported</code></td>
<td><a href="/messages/reject-element-request-041d
">sendRejectElementRequest</a>
</td>
</tr><tr>
<td align="center" rowspan="3">A</td>
<td rowspan="3">LpsdDefaultLoop</td>
<td><a href="/messages/query-travel-speed-240a
">QueryTravelSpeed</a></td>
<td><code></code></td>
<td><a href="/messages/report-travel-speed-440a
">sendReportTravelSpeed</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-local-path-segment-2410
">QueryLocalPathSegment</a></td>
<td><code>lpsdSegmentExists</code></td>
<td><a href="/messages/report-local-path-segment-4410
">sendReportLocalPathSegment</a>
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
<td rowspan="2">LpsdReadyLoop</td>
<td><a href="/messages/execute-list-041e
">ExecuteList</a></td>
<td><code>isControllingClient &amp;&amp; lpsdElementExists</code></td>
<td>executeLocalPathSegmentList
</td>
</tr>
<tr>
<td><a href="/messages/execute-list-041e
">ExecuteList</a></td>
<td><code>isControllingClient &amp;&amp; !lpsdElementSpecified</code></td>
<td>modifyLpsdTravelSpeed
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
<td>executeLocalPathSegmentList</td>
<td></td>
<td>
</td>
</tr><tr>
<td>modifyLpsdTravelSpeed</td>
<td></td>
<td>
</td>
</tr><tr>
<td>resetLpsdTravelSpeed</td>
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
<td>sendReportLocalPathSegment</td>
<td>Send Action
</td>
<td>
<i>Output Message:</i> <a href="/messages/report-local-path-segment-4410
">ReportLocalPathSegment
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
<td>setLpsdElement</td>
<td></td>
<td>
</td>
</tr></tbody></table>

