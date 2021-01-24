(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{17:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),s=n.n(c),r=n(9),o=n.n(r),i=(n(17),n(11)),u=n(4),l=n(5),m=n(7),b=n(6),h=n(10),j=n(2),d=n.n(j),f=(n(26),function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],name:"",number:""},t.nameInputId=d.a.generate(),t.numberInputId=d.a.generate(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.handleSubmit=function(e){var n=t.state,a=n.name,c=n.number;e.preventDefault(),console.log(t.state),t.props.onSubmit(a,c),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("header",{className:"page-header",children:Object(a.jsxs)("form",{className:"user-info-form",onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:"label",htmlFor:this.nameInputId,children:["Name",Object(a.jsx)("input",{className:"form-input",type:"text",name:"name",value:this.state.name,onChange:this.handleChange,id:this.nameInputId})]}),Object(a.jsxs)("label",{className:"label",htmlFor:this.numberInputId,children:["Number",Object(a.jsx)("input",{className:"form-input",type:"text",name:"number",value:this.state.number,onChange:this.handleChange,id:this.numberInputId})]}),Object(a.jsx)("button",{className:"submit-form-btn",type:"submit",children:"Add Contact"})]})})}}]),n}(c.Component)),p=(n(27),n(28),function(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("div",{className:"contacts-info-table",children:Object(a.jsx)("ul",{className:"list",children:e.map((function(t){var e=t.id,c=t.name,s=t.number;return Object(a.jsxs)("li",{className:"actions",children:[Object(a.jsxs)("span",{className:"listItemText",children:[c,":"]}),Object(a.jsx)("span",{className:"listItemText",children:s}),Object(a.jsx)("button",{className:"button",type:"button",onClick:function(){return n(e)},children:Object(a.jsx)("i",{className:"fa fa-trash","aria-hidden":"true"})})]},e)}))})})}),O=(n(29),function(t){var e=t.value,n=t.onChange;return Object(a.jsxs)("label",{className:"filterLabel",children:["Find contacts by name",Object(a.jsx)("input",{className:"searchInput",type:"text",value:e,onChange:n})]})}),g=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.formSubmitHandler=function(e,n){var a=t.state.contacts,c={id:d.a.generate(),name:e,number:n};a.find((function(t){return t.name===c.name}))?alert("".concat(c.name," is already in contacts.")):t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(i.a)(e))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;n!==e.contacts&&(console.log("\u041e\u0431\u043d\u043e\u0432\u0438\u043b\u0441\u044f \u043a\u043e\u043d\u0442\u0430\u043a\u0442"),localStorage.setItem("contacts",JSON.stringify(n)))}},{key:"render",value:function(){var t=this.state.filter,e=this.getContacts();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(f,{onSubmit:this.formSubmitHandler}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(O,{value:t,onChange:this.changeFilter}),Object(a.jsx)(p,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(c.Component),v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),s(t),r(t)}))};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),v()}},[[30,1,2]]]);
//# sourceMappingURL=main.74cb6966.chunk.js.map