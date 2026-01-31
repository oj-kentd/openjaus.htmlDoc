---
title: Events
---

# Events

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:core:Events` |

## Description

This service is used to set up event notifications. Since this service does not contain any messages and data on which events can be setup, it is useful only when derived by other services that contain messages and data on which events can be defined.

## Internal Events

| ID | Event |
| --- | --- |
| `8D00h` | [ProcessEventRequest](/messages/process-event-request-8d00) |

## Message Set

| ID | Message |
| --- | --- |
| `01F2h` | [CancelEvent](/messages/cancel-event-01f2) |
| `41F6h` | [CommandEvent](/messages/command-event-41f6) |
| `01F3h` | [ConfirmEventRequest](/messages/confirm-event-request-01f3) |
| `01F6h` | [CreateCommandEvent](/messages/create-command-event-01f6) |
| `01F0h` | [CreateEvent](/messages/create-event-01f0) |
| `41F1h` | [Event](/messages/event-41f1) |
| `21F2h` | [QueryEventTimeout](/messages/query-event-timeout-21f2) |
| `21F0h` | [QueryEvents](/messages/query-events-21f0) |
| `01F4h` | [RejectEventRequest](/messages/reject-event-request-01f4) |
| `41F2h` | [ReportEventTimeout](/messages/report-event-timeout-41f2) |
| `41F0h` | [ReportEvents](/messages/report-events-41f0) |
| `01F1h` | [UpdateEvent](/messages/update-event-01f1) |

## State Machine Diagram

![Events State Machine Diagram](/smDiagrams/Events.png)

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
<td align="center" rowspan="14">A</td>
<td rowspan="14">EventsLoop</td>
<td><a href="/messages/query-events-21f0
">QueryEvents</a></td>
<td><code></code></td>
<td><a href="/messages/report-events-41f0
">sendReportEvents</a>
</td>
</tr>
<tr>
<td><a href="/messages/create-event-01f0
">CreateEvent</a></td>
<td><code>isSupported &amp;&amp; !eventExists</code></td>
<td>createEvent
, resetEventTimer
, <a href="/messages/confirm-event-request-01f3
">sendConfirmEventRequest</a>
</td>
</tr>
<tr>
<td><a href="/messages/create-event-01f0
">CreateEvent</a></td>
<td><code>isSupported &amp;&amp; eventExists</code></td>
<td>resetEventTimer
, <a href="/messages/confirm-event-request-01f3
">sendConfirmEventRequest</a>
, updateEvent
</td>
</tr>
<tr>
<td><a href="/messages/create-event-01f0
">CreateEvent</a></td>
<td><code>!isSupported</code></td>
<td><a href="/messages/reject-event-request-01f4
">sendRejectEventRequest</a>
</td>
</tr>
<tr>
<td><a href="/messages/update-event-01f1
">UpdateEvent</a></td>
<td><code>isSupported &amp;&amp; eventExists</code></td>
<td>resetEventTimer
, <a href="/messages/confirm-event-request-01f3
">sendConfirmEventRequest</a>
, updateEvent
</td>
</tr>
<tr>
<td><a href="/messages/update-event-01f1
">UpdateEvent</a></td>
<td><code>!eventExists || !isSupported</code></td>
<td><a href="/messages/reject-event-request-01f4
">sendRejectEventRequest</a>
</td>
</tr>
<tr>
<td><a href="/messages/cancel-event-01f2
">CancelEvent</a></td>
<td><code>eventExists</code></td>
<td>cancelEvent
, <a href="/messages/confirm-event-request-01f3
">sendConfirmEventRequest</a>
, stopEventTimer
</td>
</tr>
<tr>
<td><a href="/messages/cancel-event-01f2
">CancelEvent</a></td>
<td><code>!eventExists</code></td>
<td><a href="/messages/reject-event-request-01f4
">sendRejectEventRequest</a>
</td>
</tr>
<tr>
<td><a href="/messages/confirm-event-request-01f3
">ConfirmEventRequest</a></td>
<td><code></code></td>
<td>confirmEvent
</td>
</tr>
<tr>
<td><a href="/messages/reject-event-request-01f4
">RejectEventRequest</a></td>
<td><code></code></td>
<td>rejectEvent
</td>
</tr>
<tr>
<td><a href="/messages/event-41f1
">Event</a></td>
<td><code></code></td>
<td>handleIncomingEvent
</td>
</tr>
<tr>
<td><a href="/messages/report-events-41f0
">ReportEvents</a></td>
<td><code></code></td>
<td>handleReportEvents
</td>
</tr>
<tr>
<td><a href="/messages/query-event-timeout-21f2
">QueryEventTimeout</a></td>
<td><code></code></td>
<td><a href="/messages/report-event-timeout-41f2
">sendReportEventTimeout</a>
</td>
</tr>
<tr>
<td><a href="/messages/process-event-request-8d00
">ProcessEventRequest</a></td>
<td><code></code></td>
<td>processEvent
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
<td>cancelEvent</td>
<td></td>
<td>
</td>
</tr><tr>
<td>confirmEvent</td>
<td></td>
<td>
</td>
</tr><tr>
<td>createEvent</td>
<td></td>
<td>
</td>
</tr><tr>
<td>handleIncomingEvent</td>
<td></td>
<td>
</td>
</tr><tr>
<td>handleReportEvents</td>
<td></td>
<td>
</td>
</tr><tr>
<td>processEvent</td>
<td></td>
<td>
</td>
</tr><tr>
<td>rejectEvent</td>
<td></td>
<td>
</td>
</tr><tr>
<td>resetEventTimer</td>
<td></td>
<td>
</td>
</tr><tr>
<td>sendConfirmEventRequest</td>
<td>Send Action
</td>
<td>
<i>Output Message:</i> <a href="/messages/confirm-event-request-01f3
">ConfirmEventRequest
</a></td>
</tr><tr>
<td>sendRejectEventRequest</td>
<td>Send Action
</td>
<td>
<i>Output Message:</i> <a href="/messages/reject-event-request-01f4
">RejectEventRequest
</a></td>
</tr><tr>
<td>sendReportEventTimeout</td>
<td>Send Action
</td>
<td>
<i>Output Message:</i> <a href="/messages/report-event-timeout-41f2
">ReportEventTimeout
</a></td>
</tr><tr>
<td>sendReportEvents</td>
<td>Send Action
</td>
<td>
<i>Output Message:</i> <a href="/messages/report-events-41f0
">ReportEvents
</a></td>
</tr><tr>
<td>stopEventTimer</td>
<td></td>
<td>
</td>
</tr><tr>
<td>updateEvent</td>
<td></td>
<td>
</td>
</tr></tbody></table>

