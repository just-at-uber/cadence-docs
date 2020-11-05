(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{437:function(t,e,n){"use strict";n.r(e);var s=n(8),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"side-effect"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#side-effect"}},[t._v("#")]),t._v(" Side effect")]),t._v(" "),n("p",[n("code",[t._v("workflow.SideEffect")]),t._v(" is useful for short, nondeterministic code snippets, such as getting a random\nvalue or generating a UUID. It executes the provided function once and records its result into the\n"),n("Term",{attrs:{term:"workflow"}}),t._v(" history. "),n("code",[t._v("workflow.SideEffect")]),t._v(' does not re-execute upon replay, but instead returns the\nrecorded result. It can be seen as an "inline" '),n("Term",{attrs:{term:"activity"}}),t._v(". Something to note about "),n("code",[t._v("workflow.SideEffect")]),t._v("\nis that, unlike the Cadence guarantee of at-most-once execution for "),n("Term",{attrs:{term:"activity",show:"activities"}}),t._v(", there is no such\nguarantee with "),n("code",[t._v("workflow.SideEffect")]),t._v(". Under certain failure conditions, "),n("code",[t._v("workflow.SideEffect")]),t._v(" can\nend up executing a function more than once.")],1),t._v(" "),n("p",[t._v("The only way to fail "),n("code",[t._v("SideEffect")]),t._v(" is to panic, which causes a "),n("Term",{attrs:{term:"decision_task"}}),t._v(" failure. After the\ntimeout, Cadence reschedules and then re-executes the "),n("Term",{attrs:{term:"decision_task"}}),t._v(", giving "),n("code",[t._v("SideEffect")]),t._v(" another chance\nto succeed. Do not return any data from "),n("code",[t._v("SideEffect")]),t._v(" other than through its recorded return value.")],1),t._v(" "),n("p",[t._v("The following sample demonstrates how to use "),n("code",[t._v("SideEffect")]),t._v(":")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[t._v("encodedRandom "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SideEffect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx cadence"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" rand"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Intn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" random "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\nencodedRandom"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("random"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" random "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);