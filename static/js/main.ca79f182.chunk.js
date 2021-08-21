(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){},23:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(7),i=n.n(r),o=(n(23),n(16)),u=n.n(o),s=n(1),l=function(e){var t=e.children;return Object(s.jsx)("div",{className:u.a.container,children:t})},b=n(15),j=n(4),d=n(3),m=n(31),f="contact/addContact",O="contact/delete",h="filter/change",x={addContact:Object(d.b)(f,(function(e){return{payload:{id:Object(m.a)(),name:e.name,number:e.number}}})),deleteItem:Object(d.b)(O),changeFilter:Object(d.b)(h)},p=n(5),v=n.n(p);var g=Object(j.b)(null,(function(e){return{onFormSubmit:function(t){return e(x.addContact(t))}}}))((function(e){var t=e.onFormSubmit,n=Object(c.useState)(""),a=Object(b.a)(n,2),r=a[0],i=a[1],o=Object(c.useState)(""),u=Object(b.a)(o,2),l=u[0],j=u[1],d=Object(c.useRef)(Object(m.a)()),f=function(e){var t=e.target,n=t.name,c=t.value;switch(n){case"name":i(c);break;case"number":j(c);break;default:return}},O=function(){i(""),j("")};return Object(s.jsx)("div",{className:v.a.inputContainer,children:Object(s.jsxs)("form",{className:v.a.form,onSubmit:function(e){e.preventDefault(),t({name:r,number:l,contactId:d}),O()},children:[Object(s.jsxs)("label",{className:v.a.formItem,children:["Name"," ",Object(s.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,onChange:f})]}),Object(s.jsxs)("label",{className:v.a.formItem,children:["Number"," ",Object(s.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:l,onChange:f})]}),Object(s.jsx)("button",{type:"submit",className:v.a.button,children:"Add contact"})]})})})),C=n(10),N=n.n(C),y=Object(j.b)((function(e){return{value:e.contacts.filter}}),(function(e){return{onChangeFilter:function(t){return e(x.changeFilter(t.currentTarget.value))}}}))((function(e){var t=e.value,n=e.onChangeFilter;return Object(s.jsxs)("label",{className:N.a.filter,children:[Object(s.jsx)("p",{className:N.a.title,children:"Find contacts by name "}),Object(s.jsx)("input",{className:N.a.inputFilter,type:"text",value:t,onChange:n})]})})),w=n(14),k=n.n(w),F=function(e){var t=e.id,n=e.name,c=e.number,a=e.onDeleteList;return Object(s.jsxs)("li",{className:k.a.list,children:[Object(s.jsxs)("p",{children:[n,":"]}),Object(s.jsx)("p",{children:c}),Object(s.jsx)("button",{className:k.a.button,onClick:function(){return a(t)},children:"Delete"})]},t)},A=Object(j.b)((function(e){var t=e.contacts,n=t.filter;return{contacts:function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}(t.items,n)}}),(function(e){return{onDeleteList:function(t){return e(x.deleteItem(t))}}}))((function(e){var t=e.contacts,n=e.title,c=e.onDeleteList;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:n}),Object(s.jsx)("ul",{children:t.map((function(e){var t=e.id,n=e.name,a=e.number;return Object(s.jsx)(F,{name:n,number:a,onDeleteList:function(){return c(t)}},t)}))})]})}));var D=function(){return Object(s.jsxs)(l,{children:[Object(s.jsx)("h1",{children:"Phonebook"}),Object(s.jsx)(g,{}),Object(s.jsx)(y,{}),Object(s.jsx)(A,{title:"Contacts"})]})},I=n(9),L=n(17),S=n.n(L),z=n(2),J=Object(d.c)([],{"contact/addContact":function(e,t){return[].concat(Object(I.a)(e),[t.payload])},"contact/delete":function(e,t){return e.filter((function(e){return e.id!==t.payload}))}}),Z=Object(z.b)({items:J,filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case h:return c;default:return e}}}),q=[].concat(Object(I.a)(Object(d.d)()),[S.a]),B=Object(d.a)({reducer:{contacts:Z},middleware:q,devTools:!1});i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(j.a,{store:B,children:Object(s.jsx)(D,{})})}),document.getElementById("root"))},5:function(e,t,n){}},[[30,1,2]]]);
//# sourceMappingURL=main.ca79f182.chunk.js.map