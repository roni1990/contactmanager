(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,a,t){e.exports=t(66)},66:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(29),c=t.n(o),l=t(6),s=t(7),i=t(9),m=t(8),u=t(10),p=t(68),h=t(70),d=t(69),f=t(67),b=function(e){var a=e.title;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"#",className:"navbar-brand"},a),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.a,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"}),"Inicio")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.a,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"}),"Agregar")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.a,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-info"}),"Acerca"))))))};b.defaultProps={title:"Mi Grandiosa Agenda"};var E=b,v=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"Contactame"),r.a.createElement("p",{className:"lead"},"Simple App, para administrar contactos"),r.a.createElement("p",{className:"text-seconday"},"Version App 1.0"))},g=t(13),y=t.n(g),C=t(14),N=t(32),O=t(19),j=t(12),k=t.n(j),w=r.a.createContext(),S=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(O.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==a.payload})});case"ADD_CONTACT":return Object(O.a)({},e,{contacts:[a.payload].concat(Object(N.a)(e.contacts))});default:return e}},A=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){return t.setState(function(a){return S(a,e)})}},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(C.a)(y.a.mark(function e(){var a;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("https://jsonplaceholder.typicode.com/users");case 2:a=e.sent,this.setState({contacts:a.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(w.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),T=w.Consumer,x=(t(62),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},t.onDeleteClick=function(e,a){k.a.delete("https://jsonplaceholder.typicode.com/users/".concat(e)).then(function(t){return a({type:"DELETE_CONTACT",payload:e})})},t.onShowClick=function(e){var a=t.state.showContactInfo;console.log(" Click"),t.setState({showContactInfo:!a})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props.info,t=a.name,n=a.phone,o=a.email,c=a.id,l=this.state.showContactInfo;return r.a.createElement(T,null,function(a){var s=a.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,t,r.a.createElement("i",{style:{cursor:"pointer"},onClick:e.onShowClick,className:"fas fa-sort-down"}),r.a.createElement("i",{className:"fas fa-times",onClick:e.onDeleteClick.bind(e,c,s),style:{cursor:"pointer",float:"right",color:"red"}}),r.a.createElement(f.a,{to:"contact/edit/".concat(c)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{float:"right",cursor:"pointer",color:"#000",marginRight:"1em"}}))),l?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email : ",o),r.a.createElement("li",{className:"list-group-item"},"Telefono : ",n)):null)})}}]),a}(n.Component)),D=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).deleteContact=function(e){var a=t.state.contacts.filter(function(a){return a.id!==e});t.setState({contacts:a})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(T,null,function(a){var t=a.contacts;return console.log(" Value ",a),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},"Lista de Contactos"),t.map(function(a,t){return r.a.createElement(x,{key:a.id,info:a,deleteClickHandler:e.deleteContact.bind(e,a.id)})}))})}}]),a}(n.Component),I=t(11),q=t(15),R=t.n(q),L=t(30),_=t.n(L),M=function(e){var a=e.label,t=e.name,n=e.value,o=e.placeholder,c=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{type:c,name:t,className:_()("form-control form-control-lg",{"is-invalid":s}),placeholder:o,value:n,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};M.defaultProps={type:"text"};var P=M,B=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onSubmit=function(e,a){a.preventDefault();var n=t.state,r=n.name,o=n.email,c=n.phone;""!==r?""!==o?""!==c?(e({type:"ADD_CONTACT",payload:{id:R()(),name:r,email:o,phone:c}}),t.setState({name:"",email:"",phone:""}),t.props.history.push("/")):t.setState({errors:{phone:"N\xfamero Telefonico es Requerido"}}):t.setState({errors:{email:"Correo Electronico es Requerido"}}):t.setState({errors:{name:"Nombre es Requerido"}})},t.onChange=function(e){return t.setState(Object(I.a)({},e.target.name,e.target.value))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,o=a.phone,c=a.errors;return r.a.createElement(T,null,function(a){var l=a.dispatch;return r.a.createElement("article",{className:"card mb-3"},r.a.createElement("header",{className:"card-header"},"Agregar Contacto"),r.a.createElement("aside",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(P,{label:"Nombre",name:"name",value:t,type:"text",placeholder:"Ingresa Nombre",onChange:e.onChange,error:c.name}),r.a.createElement(P,{label:"Correo Electronico",name:"email",value:n,type:"email",placeholder:"Ingresa Correo Electronico",onChange:e.onChange,error:c.email}),r.a.createElement(P,{label:"N\xfamero Telefonico",name:"phone",value:o,type:"tel",placeholder:"Ingresa N\xfamero Telefonico",onChange:e.onChange,error:c.phone}),r.a.createElement("input",{type:"submit",value:"Agregar Contacto",className:"btn btn-light btn-block"}))))})}}]),a}(n.Component),F=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onSubmit=function(e,a){a.preventDefault();var n=t.state,r=n.name,o=n.email,c=n.phone;if(""!==r)if(""!==o)if(""!==c){R()();t.setState({name:"",email:"",phone:""}),t.props.history.push("/")}else t.setState({errors:{phone:"N\xfamero Telefonico es Requerido"}});else t.setState({errors:{email:"Correo Electronico es Requerido"}});else t.setState({errors:{name:"Nombre es Requerido"}})},t.onChange=function(e){return t.setState(Object(I.a)({},e.target.name,e.target.value))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(C.a)(y.a.mark(function e(){var a,t;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,k.a.get("https://jsonplaceholder.typicode.com/users/".concat(a));case 3:t=e.sent,this.setState({name:t.data.name,email:t.data.email,phone:t.data.phone}),console.log(" User",t.data);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,o=a.phone,c=a.errors;return r.a.createElement(T,null,function(a){var l=a.dispatch;return r.a.createElement("article",{className:"card mb-3"},r.a.createElement("header",{className:"card-header"},"Editar Contacto"),r.a.createElement("aside",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(P,{label:"Nombre",name:"name",value:t,type:"text",placeholder:"Ingresa Nombre",onChange:e.onChange,error:c.name}),r.a.createElement(P,{label:"Correo Electronico",name:"email",value:n,type:"email",placeholder:"Ingresa Correo Electronico",onChange:e.onChange,error:c.email}),r.a.createElement(P,{label:"N\xfamero Telefonico",name:"phone",value:o,type:"tel",placeholder:"Ingresa N\xfamero Telefonico",onChange:e.onChange,error:c.phone}),r.a.createElement("input",{type:"submit",value:"Editar Contacto",className:"btn btn-light btn-block"}))))})}}]),a}(n.Component),J=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"404 p\xe1gina no encontrada"),r.a.createElement("p",{className:"lead"},"Lo sentimos la pagina que buscas no existe"))},V=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(A,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(E,{title:"Agenda App"}),r.a.createElement("div",{className:"container"},r.a.createElement(h.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:D}),r.a.createElement(d.a,{exact:!0,path:"/contact/add",component:B}),r.a.createElement(d.a,{exact:!0,path:"/contact/edit/:id",component:F}),r.a.createElement(d.a,{exact:!0,path:"/about",component:v}),r.a.createElement(d.a,{component:J}))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(V,null),document.getElementById("app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.42471484.chunk.js.map