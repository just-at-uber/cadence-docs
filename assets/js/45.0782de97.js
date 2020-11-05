(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{429:function(t,e,a){"use strict";a.r(e);var n=a(8),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"creating-workflows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-workflows"}},[t._v("#")]),t._v(" Creating workflows")]),t._v(" "),a("p",[t._v("The "),a("Term",{attrs:{term:"workflow"}}),t._v(" is the implementation of the coordination logic. The Cadence programming framework\n(aka client library) allows you to write the "),a("Term",{attrs:{term:"workflow"}}),t._v(" coordination logic as simple procedural code\nthat uses standard Go data modeling. The client library takes care of the communication between\nthe "),a("Term",{attrs:{term:"worker"}}),t._v(" service and the Cadence service, and ensures state persistence between "),a("Term",{attrs:{term:"event",show:"events"}}),t._v(" even in\ncase of "),a("Term",{attrs:{term:"worker"}}),t._v(" failures. Furthermore, any particular execution is not tied to a particular "),a("Term",{attrs:{term:"worker"}}),t._v("\nmachine. Different steps of the coordination logic can end up executing on different "),a("Term",{attrs:{term:"worker"}}),t._v("\ninstances, with the framework ensuring that the necessary state is recreated on the "),a("Term",{attrs:{term:"worker"}}),t._v(" executing\nthe step.")],1),t._v(" "),a("p",[t._v("However, in order to facilitate this operational model, both the Cadence programming framework and\nthe managed service impose some requirements and restrictions on the implementation of the\ncoordination logic. The details of these requirements and restrictions are described in the\n"),a("strong",[t._v("Implementation")]),t._v(" section below.")]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",[t._v("The sample code below shows a simple implementation of a "),a("Term",{attrs:{term:"workflow"}}),t._v(" that executes one "),a("Term",{attrs:{term:"activity"}}),t._v(". The\n"),a("Term",{attrs:{term:"workflow"}}),t._v(" also passes the sole parameter it receives as part of its initialization as a parameter\nto the "),a("Term",{attrs:{term:"activity"}}),t._v(".")],1),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" sample\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"go.uber.org/cadence/workflow"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Register")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SimpleWorkflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SimpleWorkflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ao "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ActivityOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        TaskList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("               "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sampleTaskList"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        ScheduleToCloseTimeout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        ScheduleToStartTimeout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        StartToCloseTimeout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        HeartbeatTimeout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("       time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        WaitForCancellation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    ctx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithActivityOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    future "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ExecuteActivity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SimpleActivity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" future"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" err\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetLogger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Done"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" zap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"result"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"declaration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#declaration"}},[t._v("#")]),t._v(" Declaration")]),t._v(" "),a("p",[t._v("In the Cadence programing model, a "),a("Term",{attrs:{term:"workflow"}}),t._v(" is implemented with a function. The function declaration\nspecifies the parameters the "),a("Term",{attrs:{term:"workflow"}}),t._v(" accepts as well as any values it might return.")],1),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SimpleWorkflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v("\n")])])]),a("p",[t._v("Let’s deconstruct the declaration above:")]),t._v(" "),a("ul",[a("li",[t._v("The first parameter to the function is "),a("strong",[t._v("ctx workflow.Context")]),t._v(". This is a required parameter for\nall "),a("Term",{attrs:{term:"workflow"}}),t._v(" functions and is used by the Cadence client library to pass execution context.\nVirtually all the client library functions that are callable from the "),a("Term",{attrs:{term:"workflow"}}),t._v(" functions require\nthis "),a("strong",[t._v("ctx")]),t._v(" parameter. This "),a("strong",[t._v("context")]),t._v(" parameter is the same concept as the standard\n"),a("strong",[t._v("context.Context")]),t._v(" provided by Go. The only difference between "),a("strong",[t._v("workflow.Context")]),t._v(" and\n"),a("strong",[t._v("context.Context")]),t._v(" is that the "),a("strong",[t._v("Done()")]),t._v(" function in "),a("strong",[t._v("workflow.Context")]),t._v(" returns\n"),a("strong",[t._v("workflow.Channel")]),t._v(" instead the standard go "),a("strong",[t._v("chan")]),t._v(".")],1),t._v(" "),a("li",[t._v("The second parameter, "),a("strong",[t._v("string")]),t._v(", is a custom "),a("Term",{attrs:{term:"workflow"}}),t._v(" parameter that can be used to pass data\ninto the "),a("Term",{attrs:{term:"workflow"}}),t._v(" on start. A "),a("Term",{attrs:{term:"workflow"}}),t._v(" can have one or more such parameters. All parameters to a\n"),a("Term",{attrs:{term:"workflow"}}),t._v(" function must be serializable, which essentially means that params can’t be channels,\nfunctions, variadic, or unsafe pointers.")],1),t._v(" "),a("li",[t._v("Since it only declares error as the return value, this means that the "),a("Term",{attrs:{term:"workflow"}}),t._v(" does not return a\nvalue. The "),a("strong",[t._v("error")]),t._v(" return value is used to indicate an error was encountered during execution\nand the "),a("Term",{attrs:{term:"workflow"}}),t._v(" should be terminated.")],1)]),t._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),a("p",[t._v("In order to support the synchronous and sequential programming model for the "),a("Term",{attrs:{term:"workflow"}}),t._v("\nimplementation, there are certain restrictions and requirements on how the "),a("Term",{attrs:{term:"workflow"}}),t._v(" implementation\nmust behave in order to guarantee correctness. The requirements are that:")],1),t._v(" "),a("ul",[a("li",[t._v("Execution must be deterministic")]),t._v(" "),a("li",[t._v("Execution must be idempotent")])]),t._v(" "),a("p",[t._v("A straightforward way to think about these requirements is that the "),a("Term",{attrs:{term:"workflow"}}),t._v(" code is as follows:")],1),t._v(" "),a("ul",[a("li",[a("Term",{attrs:{term:"workflow",show:"Workflow"}}),t._v(" code can only read and manipulate local state or state received as return values from\nCadence client library functions.")],1),t._v(" "),a("li",[a("Term",{attrs:{term:"workflow",show:"Workflow"}}),t._v(" code should not affect changes in external systems other than through invocation\nof "),a("Term",{attrs:{term:"activity",show:"activities"}}),t._v(".")],1),t._v(" "),a("li",[a("Term",{attrs:{term:"workflow",show:"Workflow"}}),t._v(" code should interact with "),a("strong",[t._v("time")]),t._v(" only through the functions provided by the Cadence\nclient library (i.e. "),a("strong",[t._v("workflow.Now()")]),t._v(", "),a("strong",[t._v("workflow.Sleep()")]),t._v(").")],1),t._v(" "),a("li",[a("Term",{attrs:{term:"workflow",show:"Workflow"}}),t._v(" code should not create and interact with goroutines directly, it should instead use the\nfunctions provided by the Cadence client library (i.e., "),a("strong",[t._v("workflow.Go()")]),t._v(" instead of "),a("strong",[t._v("go")]),t._v(",\n"),a("strong",[t._v("workflow.Channel")]),t._v(" instead of "),a("strong",[t._v("chan")]),t._v(", "),a("strong",[t._v("workflow.Selector")]),t._v(" instead of "),a("strong",[t._v("select")]),t._v(").")],1),t._v(" "),a("li",[a("Term",{attrs:{term:"workflow",show:"Workflow"}}),t._v(" code should do all logging via the logger provided by the Cadence client library\n(i.e., "),a("strong",[t._v("workflow.GetLogger()")]),t._v(").")],1),t._v(" "),a("li",[a("Term",{attrs:{term:"workflow",show:"Workflow"}}),t._v(" code should not iterate over maps using range because the order of map iteration is randomized.")],1)]),t._v(" "),a("p",[t._v("Now that we have laid the ground rules, we can take a look at some of the special functions and types\nused for writing Cadence "),a("Term",{attrs:{term:"workflow",show:"workflows"}}),t._v(" and how to implement some common patterns.")],1),t._v(" "),a("h3",{attrs:{id:"special-cadence-client-library-functions-and-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#special-cadence-client-library-functions-and-types"}},[t._v("#")]),t._v(" Special Cadence client library functions and types")]),t._v(" "),a("p",[t._v("The Cadence client library provides a number of functions and types as alternatives to some native\nGo functions and types. Usage of these replacement functions/types is necessary in order to ensure\nthat the "),a("Term",{attrs:{term:"workflow"}}),t._v(" code execution is deterministic and repeatable within an execution context.")],1),t._v(" "),a("p",[t._v("Coroutine related constructs:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("workflow.Go")]),t._v(" : This is a replacement for the the "),a("strong",[t._v("go")]),t._v(" statement.")]),t._v(" "),a("li",[a("strong",[t._v("workflow.Channel")]),t._v(" : This is a replacement for the native "),a("strong",[t._v("chan")]),t._v(" type. Cadence provides\nsupport for both buffered and unbuffered channels.")]),t._v(" "),a("li",[a("strong",[t._v("workflow.Selector")]),t._v(" : This is a replacement for the "),a("strong",[t._v("select")]),t._v(" statement.")])]),t._v(" "),a("p",[t._v("Time related functions:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("workflow.Now()")]),t._v(" : This is a replacement for "),a("strong",[t._v("time.Now()")]),t._v(".")]),t._v(" "),a("li",[a("strong",[t._v("workflow.Sleep()")]),t._v(" : This is a replacement for "),a("strong",[t._v("time.Sleep()")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"failing-a-workflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#failing-a-workflow"}},[t._v("#")]),t._v(" Failing a workflow")]),t._v(" "),a("p",[t._v("To mark a "),a("Term",{attrs:{term:"workflow"}}),t._v(" as failed, all that needs to happen is for the "),a("Term",{attrs:{term:"workflow"}}),t._v(" function to return an\nerror via the "),a("strong",[t._v("err")]),t._v(" return value.")],1),t._v(" "),a("h2",{attrs:{id:"registration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#registration"}},[t._v("#")]),t._v(" Registration")]),t._v(" "),a("p",[t._v("For some client code to be able to invoke a "),a("Term",{attrs:{term:"workflow"}}),t._v(" type, the "),a("Term",{attrs:{term:"worker"}}),t._v(" process needs to be aware of\nall the implementations it has access to. A "),a("Term",{attrs:{term:"workflow"}}),t._v(" is registered with the following call:")],1),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Register")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SimpleWorkflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("This call essentially creates an in-memory mapping inside the "),a("Term",{attrs:{term:"worker"}}),t._v(" process between the fully\nqualified function name and the implementation. It is safe to call this registration method from\nan "),a("strong",[t._v("init()")]),t._v(" function. If the "),a("Term",{attrs:{term:"worker"}}),t._v(" receives "),a("Term",{attrs:{term:"task",show:"tasks"}}),t._v(" for a "),a("Term",{attrs:{term:"workflow"}}),t._v(" type it does not know, it will\nfail that "),a("Term",{attrs:{term:"task"}}),t._v(". However, the failure of the "),a("Term",{attrs:{term:"task"}}),t._v(" will not cause the entire "),a("Term",{attrs:{term:"workflow"}}),t._v(" to fail.")],1)])}),[],!1,null,null,null);e.default=s.exports}}]);