(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),u=t.n(a),r=t(14),l=t.n(r),c=t(4),o=t(2),i=function(e){var n=e.value,t=e.change;return u.a.createElement("div",null,"filter shown with",u.a.createElement("input",{value:n,onChange:t}))},m=function(e){return u.a.createElement("div",null,u.a.createElement("form",{onSubmit:e.addPerson},u.a.createElement("div",null," name: ",u.a.createElement("input",{value:e.newName,onChange:e.handleNewName})),u.a.createElement("div",null," number: ",u.a.createElement("input",{value:e.newNumber,onChange:e.handleNewNumber})),u.a.createElement("div",null,u.a.createElement("button",{type:"submit"},"add"))))},d=function(e){var n=e.listPersons,t=e.handleDeletePerson;return u.a.createElement("ul",null," ",n.map((function(e){return u.a.createElement("li",{key:e.id},"  ",e.name," ",e.number,u.a.createElement("button",{onClick:function(){return t(e)}}," delete"))})))},s=function(e){var n=e.message;return null===n?null:u.a.createElement("div",{style:{color:"green",fontSize:20,padding:10,marginBottom:10}},n)},f=function(e){var n=e.message;return null===n?null:u.a.createElement("div",{style:{color:"red",fontSize:20,padding:10,marginBottom:10}},n)},h=t(3),b=t.n(h),E="http://localhost:3001/persons",v=function(){return b.a.get(E).then((function(e){return e.data}))},p=function(e){return b.a.post(E,e).then((function(e){return e.data}))},w=function(e){return b.a.delete(E+"/"+e).then((function(e){return e.data}))},g=function(e){return b.a.put(E+"/"+e.id,e).then((function(e){return e.data}))},j=(t(37),function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],l=Object(a.useState)(""),h=Object(o.a)(l,2),b=h[0],E=h[1],j=Object(a.useState)(""),O=Object(o.a)(j,2),N=O[0],y=O[1],S=Object(a.useState)(""),P=Object(o.a)(S,2),k=P[0],C=P[1],D=Object(a.useState)(null),T=Object(o.a)(D,2),B=T[0],z=T[1],J=Object(a.useState)(null),L=Object(o.a)(J,2),x=L[0],I=L[1];Object(a.useEffect)((function(){v().then((function(e){r(e)}))}),[]);var q=t;return""!==k&&(q=t.filter((function(e){return e.name.toLowerCase().includes(k.toLowerCase())}))),u.a.createElement("div",null,u.a.createElement("h2",null,"Phonebook"),u.a.createElement(f,{message:x}),u.a.createElement(s,{message:B}),u.a.createElement(i,{value:k,change:function(e){C(e.target.value)}}),u.a.createElement("h3",null,"add a new number"),u.a.createElement(m,{addPerson:function(e){if(e.preventDefault(),t.map((function(e){return e.name})).includes(b)){if(window.confirm("".concat(b," is already added to the phonebook, \n                replace the old number with a new one?"))){var n=t.find((function(e){return e.name===b})),a=Object(c.a)(Object(c.a)({},n),{},{number:N});g(a).then((function(e){r(t.map((function(t){return t.id!==n.id?t:e}))),E(""),y(""),z("".concat(b,"'s number changed successfully")),setTimeout((function(){z(null)}),2500)})).catch((function(e){I("".concat(b," has already been removed")),r(t.filter((function(e){return e.id!==n.id}))),setTimeout((function(){I(null)}),2500)}))}}else p({name:b,number:N}).then((function(e){r(t.concat(e)),E(""),y("")})).then((function(){z("".concat(b," added successfully")),setTimeout((function(){z(null)}),2500)}))},newName:b,handleNewName:function(e){E(e.target.value)},newNumber:N,handleNewNumber:function(e){y(e.target.value)}}),u.a.createElement("h3",null,"Numbers"),u.a.createElement(d,{listPersons:q,handleDeletePerson:function(e){window.confirm("Delete ".concat(e.name,"?"))&&w(e.id).then((function(){r(t.filter((function(n){return n.id!==e.id}))),z("".concat(e.name," deleted successfully")),setTimeout((function(){z(null)}),2500)}))}}))});l.a.render(u.a.createElement(j,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c3249671.chunk.js.map