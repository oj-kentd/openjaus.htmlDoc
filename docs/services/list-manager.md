---
title: ListManager
---

# ListManager

| Property | Value |
| --- | --- |
| **Version** | 1.0 |
| **URN** | `urn:jaus:jss:mobility:ListManager` |

## Description

The List Manager Service permits operations on a single ordered sequence of connected elements. It supports operations to add, replace or delete elements from the list, as well as querying the entire list or individual elements. Elements within the list are uniquely identified by the Element UID. The Element UID is used as an identifier only, and the value of the UID does not imply a sequence or order. When a new element is added to the list, the previous (parent) and next (child) elements are specified to denote sequencing, similar to a doubly linked list. Circular lists can be created when the last element in the list specifies the first element as a child. A list is considered valid when the following conditions are met: 1) A list must contain exactly one head element which is defined as having a previous (parent) identifier of zero (0). 2) For non-circular lists, the list must contain exactly one tail element which is defined as having a next (child) identifier of zero (0). 3) Each element must reference existing previous (parent) and next (child) elements, or zero. 4) Elements cannot be orphaned. An orphan is defined as an element that is not connected in any way to the other elements in the list. 5) The previous (parent) and next(child) reference for each element cannot point to itself. The list manager service is designed to be inherited, and is trivial on its own. Derived services should redefine isElementSupported condition as shown by example in the Global Waypoint List Driver.

## Message Set

| ID | Message |
| --- | --- |
| `041Ch` | [ConfirmElementRequest](/messages/confirm-element-request-041c) |
| `041Bh` | [DeleteElement](/messages/delete-element-041b) |
| `241Ah` | [QueryElement](/messages/query-element-241a) |
| `241Ch` | [QueryElementCount](/messages/query-element-count-241c) |
| `241Bh` | [QueryElementList](/messages/query-element-list-241b) |
| `041Dh` | [RejectElementRequest](/messages/reject-element-request-041d) |
| `441Ah` | [ReportElement](/messages/report-element-441a) |
| `441Ch` | [ReportElementCount](/messages/report-element-count-441c) |
| `441Bh` | [ReportElementList](/messages/report-element-list-441b) |
| `041Ah` | [SetElement](/messages/set-element-041a) |

## State Machine Diagram

![ListManager State Machine Diagram](/smDiagrams/ListManager.png)

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
<td align="center" rowspan="5">B</td>
<td rowspan="5">ListManagerControlledLoop</td>
<td><a href="/messages/set-element-041a
">SetElement</a></td>
<td><code>( isElementSupported &amp;&amp; isValidElementRequest ) &amp;&amp; isControllingClient</code></td>
<td><a href="/messages/confirm-element-request-041c
">sendConfirmElementRequest</a>
, setElement
</td>
</tr>
<tr>
<td><a href="/messages/set-element-041a
">SetElement</a></td>
<td><code>isControllingClient &amp;&amp; !isValidElementRequest</code></td>
<td><a href="/messages/reject-element-request-041d
">sendRejectElementRequest</a>
</td>
</tr>
<tr>
<td><a href="/messages/set-element-041a
">SetElement</a></td>
<td><code>!isElementSupported &amp;&amp; isControllingClient</code></td>
<td><a href="/messages/reject-element-request-041d
">sendRejectElementRequest</a>
</td>
</tr>
<tr>
<td><a href="/messages/delete-element-041b
">DeleteElement</a></td>
<td><code>elementExists &amp;&amp; isControllingClient</code></td>
<td>deleteElement
, <a href="/messages/confirm-element-request-041c
">sendConfirmElementRequest</a>
</td>
</tr>
<tr>
<td><a href="/messages/delete-element-041b
">DeleteElement</a></td>
<td><code>isControllingClient &amp;&amp; !elementExists</code></td>
<td><a href="/messages/reject-element-request-041d
">sendRejectElementRequest</a>
</td>
</tr><tr>
<td align="center" rowspan="3">A</td>
<td rowspan="3">ListManagerDefaultLoop</td>
<td><a href="/messages/query-element-241a
">QueryElement</a></td>
<td><code>elementExists</code></td>
<td><a href="/messages/report-element-441a
">sendReportElement</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-element-list-241b
">QueryElementList</a></td>
<td><code></code></td>
<td><a href="/messages/report-element-list-441b
">sendReportElementList</a>
</td>
</tr>
<tr>
<td><a href="/messages/query-element-count-241c
">QueryElementCount</a></td>
<td><code></code></td>
<td><a href="/messages/report-element-count-441c
">sendReportElementCount</a>
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
<td>deleteElement</td>
<td></td>
<td>Remove the specified element(s) from the list. The service should modify the NextUID of the previous element and/or the Previous UID of the next element to reflect the updated sequence.
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
<td>sendReportElement</td>
<td>Send Action
</td>
<td>Send a Report Element message with the requested element.
<br>
<i>Output Message:</i> <a href="/messages/report-element-441a
">ReportElement
</a></td>
</tr><tr>
<td>sendReportElementCount</td>
<td>Send Action
</td>
<td>
<i>Output Message:</i> <a href="/messages/report-element-count-441c
">ReportElementCount
</a></td>
</tr><tr>
<td>sendReportElementList</td>
<td>Send Action
</td>
<td>
<i>Output Message:</i> <a href="/messages/report-element-list-441b
">ReportElementList
</a></td>
</tr><tr>
<td>setElement</td>
<td></td>
<td>Store the element(s) in the list with sequence specified by the previous and next element IDs. If this action represents an insert or append into an existing list, the service should modify the NextUID of the previous element and/or the Previous UID of the next element to reflect the updated sequence.
</td>
</tr></tbody></table>

