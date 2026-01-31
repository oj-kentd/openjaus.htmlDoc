---
title: PlatformState
---

# PlatformState

| Property | Value |
| --- | --- |
| **Version** | 1.1 |
| **URN** | `urn:jaus:jss:iop:PlatformState` |

## Description

The Platform State Service manages the state of a platform by issuing commands to and monitoring the JSS Core Management service residing on all component on-board the platform.  It is expected that there is no more than one Platform State Service per platform.

## Internal Events

| ID | Event |
| --- | --- |
| `8D18h` | [EmergencyEvent](/messages/emergency-event-8d18) |
| `8D19h` | [InitializationCompleteEvent](/messages/initialization-complete-event-8d19) |
| `8D1Ah` | [InternalFailureEvent](/messages/internal-failure-event-8d1a) |
| `8D1Bh` | [RecoverEmergencyEvent](/messages/recover-emergency-event-8d1b) |
| `8D1Ch` | [RenderUselessEvent](/messages/render-useless-event-8d1c) |
| `8D1Dh` | [ResetEvent](/messages/reset-event-8d1d) |
| `8D1Eh` | [ShutdownEvent](/messages/shutdown-event-8d1e) |

## Message Set

| ID | Message |
| --- | --- |
| `FF27h` | [ConfirmPlatformStateRequest](/messages/confirm-platform-state-request-ff27) |
| `FF26h` | [QueryPlatformState](/messages/query-platform-state-ff26) |
| `FF28h` | [ReportPlatformState](/messages/report-platform-state-ff28) |
| `FF25h` | [SetPlatformState](/messages/set-platform-state-ff25) |

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
<td rowspan="1">EmergencyToInitialize</td>
<td><a href="/messages/reset-event-8d1d
">ResetEvent</a></td>
<td><code></code></td>
<td>sendConfirmPlatformStateRequestTransitioning
, transitionPlatformState
</td>
</tr><tr>
<td align="center" rowspan="1">B</td>
<td rowspan="1">EmergencyToOperational</td>
<td><a href="/messages/recover-emergency-event-8d1b
">RecoverEmergencyEvent</a></td>
<td><code></code></td>
<td>sendConfirmPlatformStateRequestTransitioning
, transitionPlatformState
</td>
</tr><tr>
<td align="center" rowspan="1">C</td>
<td rowspan="1">EmergencyToRenderUseless</td>
<td><a href="/messages/render-useless-event-8d1c
">RenderUselessEvent</a></td>
<td><code></code></td>
<td>sendConfirmPlatformStateRequestTransitioning
, transitionPlatformState
</td>
</tr><tr>
<td align="center" rowspan="1">D</td>
<td rowspan="1">EmergencyToShutdown</td>
<td><a href="/messages/shutdown-event-8d1e
">ShutdownEvent</a></td>
<td><code></code></td>
<td>sendConfirmPlatformStateRequestTransitioning
, transitionPlatformState
</td>
</tr><tr>
<td align="center" rowspan="1">E</td>
<td rowspan="1">EmergencyToSystemAbort</td>
<td><a href="/messages/internal-failure-event-8d1a
">InternalFailureEvent</a></td>
<td><code></code></td>
<td>transitionPlatformState
</td>
</tr><tr>
<td align="center" rowspan="1">F</td>
<td rowspan="1">InitializeToSystemAbort</td>
<td><a href="/messages/internal-failure-event-8d1a
">InternalFailureEvent</a></td>
<td><code></code></td>
<td>transitionPlatformState
</td>
</tr><tr>
<td align="center" rowspan="1">H</td>
<td rowspan="1">OperationalToEmergency</td>
<td><a href="/messages/emergency-event-8d18
">EmergencyEvent</a></td>
<td><code></code></td>
<td>sendConfirmPlatformStateRequestTransitioning
, transitionPlatformState
</td>
</tr><tr>
<td align="center" rowspan="1">I</td>
<td rowspan="1">OperationalToInitialize</td>
<td><a href="/messages/reset-event-8d1d
">ResetEvent</a></td>
<td><code></code></td>
<td>sendConfirmPlatformStateRequestTransitioning
, transitionPlatformState
</td>
</tr><tr>
<td align="center" rowspan="1">J</td>
<td rowspan="1">OperationalToRenderUseless</td>
<td><a href="/messages/render-useless-event-8d1c
">RenderUselessEvent</a></td>
<td><code></code></td>
<td>sendConfirmPlatformStateRequestTransitioning
, transitionPlatformState
</td>
</tr><tr>
<td align="center" rowspan="1">K</td>
<td rowspan="1">OperationalToShutdown</td>
<td><a href="/messages/shutdown-event-8d1e
">ShutdownEvent</a></td>
<td><code></code></td>
<td>sendConfirmPlatformStateRequestTransitioning
, transitionPlatformState
</td>
</tr><tr>
<td align="center" rowspan="1">L</td>
<td rowspan="1">OperationalToSystemAbort</td>
<td><a href="/messages/internal-failure-event-8d1a
">InternalFailureEvent</a></td>
<td><code></code></td>
<td>transitionPlatformState
</td>
</tr><tr>
<td align="center" rowspan="1">M</td>
<td rowspan="1">PlatformStateAccessControlDefaultLoop</td>
<td><a href="/messages/query-platform-state-ff26
">QueryPlatformState</a></td>
<td><code></code></td>
<td><a href="/messages/report-platform-state-ff28
">sendReportPlatformState</a>
</td>
</tr><tr>
<td align="center" rowspan="5">N</td>
<td rowspan="5">PlatformStateControlledLoop</td>
<td><a href="/messages/set-platform-state-ff25
">SetPlatformState</a></td>
<td><code>isControllingClient &amp;&amp; setToInitialize</code></td>
<td>storeRequester
, triggerReset
</td>
</tr>
<tr>
<td><a href="/messages/set-platform-state-ff25
">SetPlatformState</a></td>
<td><code>isControllingClient &amp;&amp; setToEmergency</code></td>
<td>storeRequester
, triggerEmergency
</td>
</tr>
<tr>
<td><a href="/messages/set-platform-state-ff25
">SetPlatformState</a></td>
<td><code>isControllingClient &amp;&amp; setToShutdown</code></td>
<td>storeRequester
, triggerShutdown
</td>
</tr>
<tr>
<td><a href="/messages/set-platform-state-ff25
">SetPlatformState</a></td>
<td><code>isControllingClient &amp;&amp; setToRenderUseless</code></td>
<td>storeRequester
, triggerRenderUseless
</td>
</tr>
<tr>
<td><a href="/messages/set-platform-state-ff25
">SetPlatformState</a></td>
<td><code>isControllingClient &amp;&amp; setToOperational</code></td>
<td>storeRequester
, triggerRecoverEmergency
</td>
</tr><tr>
<td align="center" rowspan="5">O</td>
<td rowspan="5">PlatformStateFSMDefaultLoop</td>
<td><a href="/messages/reset-event-8d1d
">ResetEvent</a></td>
<td><code></code></td>
<td>sendConfirmPlatformStateRequestInvalidState
</td>
</tr>
<tr>
<td><a href="/messages/emergency-event-8d18
">EmergencyEvent</a></td>
<td><code></code></td>
<td>sendConfirmPlatformStateRequestInvalidState
</td>
</tr>
<tr>
<td><a href="/messages/recover-emergency-event-8d1b
">RecoverEmergencyEvent</a></td>
<td><code></code></td>
<td>sendConfirmPlatformStateRequestInvalidState
</td>
</tr>
<tr>
<td><a href="/messages/shutdown-event-8d1e
">ShutdownEvent</a></td>
<td><code></code></td>
<td>sendConfirmPlatformStateRequestInvalidState
</td>
</tr>
<tr>
<td><a href="/messages/render-useless-event-8d1c
">RenderUselessEvent</a></td>
<td><code></code></td>
<td>sendConfirmPlatformStateRequestInvalidState
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
<td>sendConfirmPlatformStateRequestInvalidState</td>
<td></td>
<td>Send a Confirm Platform State Request message with a response code of InvalidState.
</td>
</tr><tr>
<td>sendConfirmPlatformStateRequestTransitioning</td>
<td></td>
<td>Send a Confirm Platform State Request message with a response code of Transitioning.
</td>
</tr><tr>
<td>sendReportPlatformState</td>
<td>Send Action
</td>
<td>Sends a ReportPlatformState to the requesting client.
<br>
<i>Output Message:</i> <a href="/messages/report-platform-state-ff28
">ReportPlatformState
</a></td>
</tr><tr>
<td>storeRequester</td>
<td></td>
<td>Store the JAUS ID for the client requesting a state transition.
</td>
</tr><tr>
<td>transitionPlatformState</td>
<td></td>
<td>Sends messages to effect the state transition.
</td>
</tr><tr>
<td>triggerEmergency</td>
<td></td>
<td>Trigger an 'Emergency' Internal Event.
</td>
</tr><tr>
<td>triggerRecoverEmergency</td>
<td></td>
<td>Trigger a 'Recover Emergency' Internal Event.
</td>
</tr><tr>
<td>triggerRenderUseless</td>
<td></td>
<td>Trigger a 'Render_Useless' Internal Event.
</td>
</tr><tr>
<td>triggerReset</td>
<td></td>
<td>Trigger a 'Reset' Internal Event.
</td>
</tr><tr>
<td>triggerShutdown</td>
<td></td>
<td>Trigger a 'Shutdown' Internal Event.
</td>
</tr></tbody></table>

