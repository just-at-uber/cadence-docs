(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{399:function(t,e,a){"use strict";a.r(e);var s=a(8),n=Object(s.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h1",{attrs:{id:"batch-job"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#batch-job"}},[this._v("#")]),this._v(" Batch job")]),this._v(" "),e("p",[this._v("A lot of batch jobs are not pure data manipulation programs. For those, the existing big data frameworks are the best fit.\nBut if processing a record requires external API calls that might fail and potentially take a long time, Cadence might be preferable.")]),this._v(" "),e("p",[this._v("One of our internal Uber customer uses Cadence for end of month statement generation. Each statement requires calls to multiple\nmicroservices and some statements can be really large. Cadence was chosen because it provides hard guarantees around durability of the financial data and seamlessly deals with long running operations, retries, and intermittent failures.")])])}),[],!1,null,null,null);e.default=n.exports}}]);