(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(e,t,a){e.exports={feedback:"Feedback_feedback__3erwK",statList:"Feedback_statList__2YUoK",statItem:"Feedback_statItem__3LyPo",button:"Feedback_button__2Do4L",messages:"Feedback_messages__3rfjS"}},14:function(e,t,a){},15:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),s=a(4),r=a.n(s),i=(a(14),a(15),a(5)),l=a(6),o=a(7),b=a(9),j=a(8),d=a(1),u=a.n(d),h=a(0),m=function(e){var t=e.onLeaveFeedback,a=e.options;return Object(h.jsx)(h.Fragment,{children:Object.keys(a).map((function(e){return Object(h.jsx)("button",{className:u.a.button,name:e,type:"button",onClick:t,children:e},e)}))})},O=function(e){var t=e.good,a=e.neutral,c=e.bad,n=e.total,s=e.positivePercentage;return Object(h.jsxs)("ul",{className:u.a.statList,children:[Object(h.jsxs)("li",{className:u.a.statItem,children:[Object(h.jsx)("span",{className:u.a.label,children:"Good: "}),Object(h.jsx)("span",{className:"count",children:t})]}),Object(h.jsxs)("li",{className:u.a.statItem,children:[Object(h.jsx)("span",{className:u.a.label,children:"Neutral: "}),Object(h.jsx)("span",{className:u.a.count,children:a})]}),Object(h.jsxs)("li",{className:u.a.statItem,children:[Object(h.jsx)("span",{className:u.a.label,children:"Bad: "}),Object(h.jsx)("span",{className:u.a.count,children:c})]}),Object(h.jsxs)("li",{className:u.a.statItem,children:[Object(h.jsx)("span",{className:u.a.label,children:"Total: "}),Object(h.jsx)("span",{className:u.a.count,children:n})]}),Object(h.jsxs)("li",{className:u.a.statItem,children:[Object(h.jsx)("span",{className:u.a.label,children:"Positive feedback: "}),Object(h.jsx)("span",{className:u.a.count,children:s})]})]})},f=function(e){var t=e.title,a=e.children;return Object(h.jsxs)("section",{children:[Object(h.jsx)("h2",{className:u.a.title,children:t}),a]})},x=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("p",{className:u.a.messages,children:"No feedback given"})})},p=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){e.setState((function(e){return Object(i.a)({},t.target.name,e[t.target.name]+1)}))},e.countTotalFeedback=function(){var t=0;return Object.values(e.state).forEach((function(e){return t+=e})),t},e.positivePercentage=function(){var t=e.countTotalFeedback();return 0===t?0:Math.round(100*e.state.good/t)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.countTotalFeedback(),t=this.positivePercentage(),a=this.state,c=a.good,n=a.neutral,s=a.bad;return Object(h.jsxs)("div",{className:u.a.feedback,children:[Object(h.jsx)(f,{title:"Please leave feedback",children:Object(h.jsx)(m,{options:this.state,onLeaveFeedback:this.onLeaveFeedback})}),0===e?Object(h.jsx)(x,{}):Object(h.jsx)(f,{title:"Statistics",children:Object(h.jsx)(O,{good:c,neutral:n,bad:s,total:e,positivePercentage:t})})]})}}]),a}(n.a.Component);var v=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(p,{title:"Please leave feedback"})})},g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};a(17);r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),g()}},[[18,1,2]]]);
//# sourceMappingURL=main.34b2f88a.chunk.js.map