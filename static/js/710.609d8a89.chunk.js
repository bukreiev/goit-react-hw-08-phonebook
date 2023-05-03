"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[710],{9710:function(e,n,t){t.r(n),t.d(n,{default:function(){return V}});var a=t(9439),o=t(2791);function s(){var e=(0,o.useState)(""),n=(0,a.Z)(e,2),t=n[0],s=n[1],r=(0,o.useState)(""),i=(0,a.Z)(r,2),l=i[0],c=i[1],d=(0,o.useId)(),u=(0,o.useState)(!1),m=(0,a.Z)(u,2),h=m[0],x=m[1];return{name:t,setName:s,number:l,setNumber:c,id:d,openModal:h,setOpenModal:x,handleInputChange:function(e){var n=e.target,t=n.name,a=n.value;"name"===t?s(a):"number"===t&&c(a)},resetForm:function(){s(""),c("")}}}var r=t(9860),i=t(4554),l=t(9218),c=t(3543),d=t(1413);function u(){var e=(0,o.useState)({open:!1,message:""}),n=(0,a.Z)(e,2),t=n[0],s=n[1];return{open:t.open,message:t.message,setMessage:function(e){return s((function(n){return{open:!0,message:e}}))},handleClose:function(e,n){"clickaway"!==n&&s((function(e){return(0,d.Z)((0,d.Z)({},e),{},{open:!1})}))}}}var m=t(2419),h=t(6400),x=t(3329);function p(){var e=s(),n=e.name,t=e.number,d=e.id,p=e.handleInputChange,g=e.resetForm,f=u(),Z=f.open,j=f.message,b=f.setMessage,C=f.handleClose,v=(0,h.bC)().data,y=(0,h.wf)(),k=(0,a.Z)(y,2),w=k[0],P=k[1],M=P.isLoading,S=P.isSuccess,F=P.reset;(0,o.useEffect)((function(){S&&""!==n&&(b("".concat(n," is successfully added to Contacts List!")),g(),F())}),[S,n,g,b,F]);var N=function(e){return e.preventDefault(),null!==v&&void 0!==v&&v.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))?b("".concat(n," is already in Contacts List!")):""===n&&""===t?b("Please enter values into Name and Number fields!"):void w({name:n,number:t})};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(i.Z,{component:"form",autoComplete:"on",onSubmit:N,sx:{display:"flex",justifyContent:"center",flexDirection:{xs:"column",md:"row"},gap:{xs:"10px",md:"20px"},alignItems:{xs:"normal",md:"flex-end"},marginBottom:"30px"},children:[(0,x.jsx)(l.Z,{autoFocus:!0,margin:"dense",id:d+"name",label:"Full Name",name:"name",type:"text",variant:"standard",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"John Smith",onChange:p,value:n}),(0,x.jsx)(l.Z,{margin:"dense",id:d+"number",label:"Phone Number",name:"number",type:"tel",variant:"standard",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"050-123-23-23",onChange:p,value:t}),(0,x.jsx)(r.Z,{sx:{display:{xs:"none",md:"flex"}},startIcon:(0,x.jsx)(m.Z,{}),type:"submit",onClick:N,name:"submit_button",variant:"contained",loading:M,children:"Add contact"}),(0,x.jsx)(r.Z,{sx:{display:{xs:"block",md:"none"},lineHeight:"0"},type:"submit",onClick:N,name:"Add Contact","aria-label":"Add Contact",variant:"contained",loading:M,children:(0,x.jsx)(m.Z,{})})]}),(0,x.jsx)(c.Z,{autoHideDuration:3e3,open:Z,onClose:C,message:j})]})}var g=t(5048),f=t(105),Z=t(9281),j=t(5527),b=t(9836),C=t(6890),v=t(5855),y=t(3382),k=t(3418),w=t(493),P=t(4852),M=t(9900),S=t(2199),F=t(4518),N=t(6088),L=t(7247),A=t(1286),I=t(4942),z=t(8745),E=t(618),D=t(6934),_=(0,D.ZP)(z.Z)((function(e){var n,t=e.theme;return n={},(0,I.Z)(n,"&.".concat(E.Z.head),{backgroundColor:t.palette.primary.dark,color:t.palette.common.white}),(0,I.Z)(n,"&.".concat(E.Z.body),{fontSize:14}),n})),O=(0,D.ZP)(v.Z)((function(e){return{"&:nth-of-type(odd)":{backgroundColor:e.theme.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}})),B=t(5289),W=t(5661),q=t(9157),H=t(7123);function J(e){var n=e.contactObj,t=e.openModal,i=e.setOpenModal,d=s(),m=d.name,p=d.setName,g=d.number,f=d.setNumber,Z=d.id,j=d.handleInputChange,b=d.resetForm,C=(0,h.bC)().data,v=u(),y=v.open,k=v.message,w=v.setMessage,P=v.handleClose,M=(0,h.zP)(),S=(0,a.Z)(M,2),N=S[0],L=S[1],I=L.isLoading,z=L.isSuccess,E=L.reset;(0,o.useEffect)((function(){p(n.name),f(n.number),console.log(n)}),[n,p,f]),(0,o.useEffect)((function(){z&&""!==m&&(w("Contact ".concat(m," information is successfully changed!")),b(),E(),i(!1))}),[z,m,b,w,i,E]);var D=function(e){return"edit"!==e.target.name?(i(!1),void b()):m.toLowerCase()===n.name.toLowerCase()&&g===n.number?w("Please make changes to contactObj ".concat(m," information or press Cancel to exit Edit Contact dialog.")):null!==C&&void 0!==C&&C.find((function(e){return e.name.toLowerCase()===m.toLowerCase()}))?w("".concat(m," is already in Contacts List!")):""===m&&""===g?w("Please enter values into Name and Number fields!"):void N({id:n.id,name:m,number:g})};return(0,x.jsxs)(x.Fragment,{children:[m&&(0,x.jsxs)(B.Z,{open:t,onClose:D,children:[(0,x.jsx)(W.Z,{children:"Contact Information"}),(0,x.jsxs)(q.Z,{children:[(0,x.jsx)(l.Z,{autoFocus:!0,margin:"dense",id:Z+"name",label:"Full Name",name:"name",type:"text",fullWidth:!0,variant:"standard",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"John Smith",onChange:j,value:m}),(0,x.jsx)(l.Z,{margin:"dense",id:Z+"number",label:"Phone Number",name:"number",type:"tel",fullWidth:!0,variant:"standard",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"050-123-23-23",onChange:j,value:g})]}),(0,x.jsxs)(H.Z,{children:[(0,x.jsx)(r.Z,{startIcon:(0,x.jsx)(A.Z,{}),onClick:D,name:"edit",variant:"contained",loading:I,children:"Edit"}),(0,x.jsx)(F.Z,{onClick:D,variant:"contained",children:"Cancel"})]})]}),(0,x.jsx)(c.Z,{autoHideDuration:1e3,open:y,onClose:P,message:k})]})}var $=t(890);function R(e){var n=e.contact,t=e.handleEdit,o=e.handleDelete,s=(0,h.W1)(),i=(0,a.Z)(s,2)[1].isLoading;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(z.Z,{component:"th",scope:"row",children:(0,x.jsx)($.Z,{children:n.name})}),(0,x.jsx)(z.Z,{children:(0,x.jsx)($.Z,{children:n.number})}),(0,x.jsx)(z.Z,{align:"right",children:(0,x.jsxs)(S.Z,{variant:"contained","aria-label":"edit/delete contact button group",children:[(0,x.jsx)(F.Z,{startIcon:(0,x.jsx)(A.Z,{}),onClick:function(){return t(n)},variant:"outlined",children:"Edit"}),(0,x.jsx)(r.Z,{startIcon:(0,x.jsx)(L.Z,{}),onClick:function(){return o(n.id,n.name)},variant:"contained",loading:i,children:"Delete"})]})})]})}function G(){var e=(0,o.useState)(0),n=(0,a.Z)(e,2),t=n[0],l=n[1],d=(0,o.useState)(1),m=(0,a.Z)(d,2),p=m[0],I=m[1],z=(0,o.useState)(10),E=(0,a.Z)(z,2),D=E[0],B=E[1],W=(0,o.useState)({}),q=(0,a.Z)(W,2),H=q[0],$=q[1],G=(0,o.useState)(""),K=(0,a.Z)(G,2),Q=K[0],T=K[1],U=(0,g.v9)(f.S),V=(0,h.bC)().data,X=(void 0===V?[]:V).filter((function(e){return e.name.toLowerCase().includes(U.toLowerCase())})).sort((function(e,n){return e.name.localeCompare(n.name)}));console.log(X);var Y=u(),ee=Y.open,ne=Y.message,te=Y.setMessage,ae=Y.handleClose,oe=s(),se=oe.openModal,re=oe.setOpenModal,ie=(0,h.W1)(),le=(0,a.Z)(ie,2),ce=le[0],de=le[1],ue=de.isLoading,me=de.isSuccess,he=de.reset;(0,o.useEffect)((function(){me&&""!==Q&&(te("Contact ".concat(Q," is successfully deleted!")),T(""),he())}),[me,te,he,T,Q]);var xe=function(e){$(e),re(!0)},pe=function(e,n){ce(e),T(n),t>Math.floor(X.length/D)-1?l(0):p>Math.floor(X.length/10)&&I(Math.floor(X.length/10))};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(Z.Z,{component:j.Z,sx:{display:{xs:"none",md:"block"}},children:(0,x.jsxs)(b.Z,{sx:{minWidth:480},"aria-label":"contacts table",size:"small",children:[(0,x.jsx)(C.Z,{children:(0,x.jsxs)(v.Z,{children:[(0,x.jsx)(_,{children:"Full Name"}),(0,x.jsx)(_,{children:"Phone Number"}),(0,x.jsx)(_,{align:"right",children:"Edit/Delete Contact"})]})}),(0,x.jsx)(y.Z,{children:X.map((function(e){return(0,x.jsx)(O,{children:(0,x.jsx)(R,{contact:e,handleEdit:xe,handleDelete:pe})},e.id)}))})]})}),(0,x.jsx)(k.Z,{rowsPerPageOptions:[5,10,25,50],component:"div",count:X.length,rowsPerPage:D,page:t,onPageChange:function(e,n){l(n)},onRowsPerPageChange:function(e){B(parseInt(e.target.value,10)),l(0)},sx:{display:{xs:"none",md:"block"}}}),(0,x.jsx)(w.Z,{sx:{display:{xs:"block",md:"none"}},children:X.map((function(e){return(0,x.jsxs)(P.ZP,{children:[(0,x.jsxs)(M.Z,{children:[e.name,": ",e.number]}),(0,x.jsxs)(S.Z,{variant:"contained","aria-label":"edit/delete contact button group",children:[(0,x.jsx)(F.Z,{onClick:function(){return xe(e)},variant:"outlined","aria-label":"Edit Contact",children:(0,x.jsx)(A.Z,{})}),(0,x.jsx)(r.Z,{onClick:function(){return pe(e.id,e.name)},variant:"contained",loading:ue,"aria-label":"Delete Contact",children:(0,x.jsx)(L.Z,{})})]})]},e.id)}))}),(0,x.jsx)(i.Z,{my:2,sx:{display:{xs:"flex",md:"none"},justifyContent:"center"},children:(0,x.jsx)(N.Z,{count:Math.ceil(X.length/10),page:p,onChange:function(e,n){I(n)}})}),(0,x.jsx)(c.Z,{autoHideDuration:1e3,open:ee,onClose:ae,message:ne}),(0,x.jsx)(J,{contactObj:H,openModal:se,setOpenModal:re})]})}var K=t(1634),Q=t(5095),T=t.n(Q);function U(){var e=(0,g.v9)(f.S),n=(0,g.I0)(),t=T()((function(e){return n((0,K.M)(e))}),350);return(0,x.jsxs)(i.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px",textAlign:"center",marginBottom:"15px"},children:[(0,x.jsx)($.Z,{children:"Find contact by name"}),(0,x.jsx)(l.Z,{variant:"standard",type:"text",name:"filter","aria-label":"Contacts Filter",role:"textbox",onChange:function(e){t(e.target.value)},value:e})]})}function V(){return(0,x.jsxs)(i.Z,{children:[(0,x.jsx)($.Z,{variant:"h4",component:"h1",align:"center",gutterBottom:!0,mt:2,children:"Phonebook Contacts"}),(0,x.jsx)(p,{}),(0,x.jsx)(U,{}),(0,x.jsx)(G,{})]})}}}]);
//# sourceMappingURL=710.609d8a89.chunk.js.map