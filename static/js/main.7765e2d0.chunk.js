(this.webpackJsonpwhatsapp=this.webpackJsonpwhatsapp||[]).push([[0],{104:function(e,t,c){},105:function(e,t,c){},106:function(e,t,c){},113:function(e,t,c){},114:function(e,t,c){},115:function(e,t,c){},116:function(e,t,c){},117:function(e,t,c){},118:function(e,t,c){},120:function(e,t,c){"use strict";c.r(t);var s=c(6),a=c(81),n=c.n(a),i=(c(104),c(105),c(13)),r=(c(106),c(88)),j=c.n(r),l=c(60),b=c(84),d=c(46),o=c(43),u=c(86),h=Object(b.a)({apiKey:"AIzaSyDvW1pN05l0NjtI6hQnjQ9HEc2WKjldQ4o",authDomain:"whatsapp-42f87.firebaseapp.com",databaseURL:"https://whatsapp-42f87-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"whatsapp-42f87",storageBucket:"whatsapp-42f87.appspot.com",messagingSenderId:"380825201484",appId:"1:380825201484:web:fddcb323be6cb6841e3de9"}),O=(Object(u.a)(h),Object(d.c)()),m=(new d.a,Object(o.a)()),x=c(5);var p=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),r=Object(i.a)(n,2),b=r[0],u=r[1],h=Object(s.useState)(""),p=Object(i.a)(h,2),f=p[0],v=p[1],g=Object(s.useState)(""),N=Object(i.a)(g,2),y=N[0],_=N[1],S=Object(s.useState)(""),w=Object(i.a)(S,2),C=w[0],I=w[1],P=Object(s.useState)(""),k=Object(i.a)(P,2),E=k[0],F=k[1],L=Object(s.useState)(""),T=Object(i.a)(L,2),D=T[0],R=T[1],B=Object(s.useState)(""),U=Object(i.a)(B,2),H=U[0],W=U[1],A=Object(s.useState)(!1),M=Object(i.a)(A,2),Q=M[0],z=M[1],J=document.getElementById("error");console.log("errelement "+J);var K=Object(l.useHistory)();return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"signup",children:Object(x.jsxs)("div",{className:"signup-cntr",children:[Object(x.jsx)("div",{className:"close-cntr",children:Object(x.jsx)(j.a,{className:"close-icon"})}),Object(x.jsx)("div",{className:"signup-header",children:Object(x.jsx)("h1",{children:"Sign Up"})}),Object(x.jsxs)("div",{className:"signup-body",children:[c?Object(x.jsx)("div",{className:"signup-input signup-err",children:Object(x.jsx)("p",{id:"error",children:b})}):null,Object(x.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""==f||""==y||""==C||""==E||""==D||""==H?(a(!0),u("Please fill all the fields")):E!==D?(a(!0),u("Password and Confirm Password doesn't match")):E.length<6?(a(!0),u("Password must be atleast 6 characters long")):Q?C.includes("@")&&C.includes(".com")?Object(d.b)(O,C,E).then((function(e){var t;console.log("userCredential "+e),Object(o.e)(Object(o.d)(m,"users/"+(t=C,t.split("@")[0])),{fName:f,lName:y,Email:C,Bday:H}).then((function(){console.log("user created")})).catch((function(e){console.log("error during pushing data to database"+e)})),Object(d.e)(O,C,E).then((function(e){K.push("/inbox")})).catch((function(e){a(!0),u(e.message)}))})).catch((function(e){a(!0),u(e.message)})):(a(!0),u("Please enter a valid email")):(a(!0),u("Please accept the terms and conditions"))},children:[Object(x.jsxs)("div",{className:"signup-input",children:[Object(x.jsx)("label",{children:"First Name"}),Object(x.jsx)("input",{type:"text",placeholder:"First Name",value:f,onChange:function(e){return v(e.target.value)}})]}),Object(x.jsxs)("div",{className:"signup-input",children:[Object(x.jsx)("label",{children:"Last Name"}),Object(x.jsx)("input",{type:"text",placeholder:"Last Name",value:y,onChange:function(e){return _(e.target.value)}})]}),Object(x.jsxs)("div",{className:"signup-input",children:[Object(x.jsx)("label",{children:"Email"}),Object(x.jsx)("input",{type:"text",placeholder:"Email",value:C,onChange:function(e){return I(e.target.value)}})]}),Object(x.jsxs)("div",{className:"signup-input",children:[Object(x.jsx)("label",{children:"Password"}),Object(x.jsx)("input",{type:"password",placeholder:"Password",value:E,onChange:function(e){return F(e.target.value)}})]}),Object(x.jsxs)("div",{className:"signup-input",children:[Object(x.jsx)("label",{children:"Confirm Password"}),Object(x.jsx)("input",{type:"password",placeholder:"Confirm Password",value:D,onChange:function(e){return R(e.target.value)}})]}),Object(x.jsxs)("div",{className:"signup-input",children:[Object(x.jsx)("label",{children:"Birthday"}),Object(x.jsx)("input",{type:"date",placeholder:"Birthday",value:H,onChange:function(e){return W(e.target.value)}})]}),Object(x.jsx)("div",{className:"signup-input",children:Object(x.jsxs)("label",{children:[Object(x.jsx)("input",{type:"checkbox",value:Q,onChange:function(e){return z(e.target.value)}}),Object(x.jsx)("span",{children:"I agree to the Terms of Service and Privacy Policy"})]})}),Object(x.jsx)("div",{className:"signup-input",children:Object(x.jsx)("button",{type:"submit",children:"Sign Up"})})]})]})]})})})},f=c(137);c(113);var v=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),r=Object(i.a)(n,2),j=r[0],b=r[1],o=Object(s.useState)(!1),u=Object(i.a)(o,2),h=u[0],m=u[1],p=Object(l.useHistory)();return Object(x.jsx)("div",{className:"login-cntr",children:Object(x.jsxs)("div",{className:"login-form",children:[Object(x.jsx)("div",{className:"login-form-header",children:Object(x.jsx)("h1",{children:"Login"})}),Object(x.jsxs)("div",{className:"login-form-body",children:[h?Object(x.jsx)("div",{className:"login-form-body-input login-form-err",children:Object(x.jsx)("p",{className:"err"})}):null,Object(x.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=c,s=j;Object(d.e)(O,t,s).then((function(e){p.push("/inbox")})).catch((function(e){m(!0),document.getElementsByClassName("err")[0].innerHTML=e.message}))},children:[Object(x.jsx)("div",{className:"login-form-body-input",children:Object(x.jsx)("input",{type:"text",value:c,onChange:function(e){return a(e.target.value)},placeholder:"Username"})}),Object(x.jsx)("div",{className:"login-form-body-input",children:Object(x.jsx)("input",{type:"password",value:j,onChange:function(e){return b(e.target.value)},placeholder:"Password"})}),Object(x.jsx)("div",{className:"login-form-body-input btn-cntr",children:Object(x.jsx)("button",{id:"btn3",type:"submit",children:"Login"})}),Object(x.jsxs)("div",{className:"link login-form-body-input",children:["Forgot your password? Click",Object(x.jsx)(f.a,{className:"link1",to:"/forgotpassword",children:" here "}),"to reset."]})]})]})]})})},g=(c(114),c.p+"static/media/WhatsApp.svg.fc98389a.png");var N=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(!1),r=Object(i.a)(n,2),j=r[0],l=r[1];return Object(x.jsxs)(x.Fragment,{children:[c?Object(x.jsx)(p,{}):null,j?Object(x.jsx)(v,{}):null,Object(x.jsx)("div",{className:"cntr",children:Object(x.jsxs)("div",{className:"signup-container",children:[Object(x.jsx)("img",{src:g,className:"logo",alt:"logo"}),Object(x.jsx)("h3",{children:"Continue to whatsapp"}),Object(x.jsxs)("div",{className:"btn-cntr",children:[Object(x.jsx)("button",{className:"btn btn2",onClick:function(){a(!c)},children:"Sign up"}),Object(x.jsx)("button",{className:"btn1 btn",onClick:function(){l(!j)},children:"Login"})]})]})})]})},y=c(72),_=c(20),S=(c(115),c(63)),w=c.n(S),C=c(91),I=c.n(C),P=c(62),k=c.n(P),E=c(139),F=c(136),L=c(92),T=c.n(L),D=c(94),R=c.n(D);var B=function(e){var t=e.senderName,c=(e.recieverName,e.mesg),s=e.time,a=e.isSender;return Object(x.jsx)(x.Fragment,{children:a?Object(x.jsxs)("p",{className:"chat__reciever chat__message",children:[Object(x.jsx)("span",{className:"chat__name",children:t}),c,Object(x.jsx)("span",{className:"chat__timestamp",children:new Date(s).toUTCString()})]}):Object(x.jsxs)("p",{className:"chat__message",children:[Object(x.jsx)("span",{className:"chat__name",children:t}),c,Object(x.jsx)("span",{className:"chat__timestamp",children:new Date(s).toUTCString()})]})})},U=(c(116),c(93)),H=c.n(U);var W=function(e){var t=e.Id,c=e.chatName,a=e.userId,n=e.currName,r=Object(s.useState)([]),j=Object(i.a)(r,2),l=j[0],b=j[1],d=Object(s.useState)(""),u=Object(i.a)(d,2),h=u[0],O=u[1];return Object(s.useEffect)((function(){var e=Object(o.d)(m,"users/".concat(a,"/friends/").concat(t,"/chats/")),c=[];Object(o.b)(e,(function(e){e.forEach((function(e){c.push(e.val())}))})),b(c)}),[t,a]),Object(x.jsxs)("div",{className:"chat",children:[Object(x.jsxs)("div",{className:"chat__header",children:[Object(x.jsx)(E.a,{}),Object(x.jsxs)("div",{className:"chat__headerInfo",children:[Object(x.jsx)("h3",{children:c}),Object(x.jsx)("p",{children:"last seen at ..."})]}),Object(x.jsxs)("div",{className:"chat__headerRight",children:[Object(x.jsx)(F.a,{children:Object(x.jsx)(k.a,{})}),Object(x.jsx)(F.a,{children:Object(x.jsx)(I.a,{})}),Object(x.jsx)(F.a,{children:Object(x.jsx)(w.a,{})})]})]}),Object(x.jsx)("div",{className:"chat__body",children:l.map((function(e){return console.log(e.message),null==e?null:Object(x.jsx)(B,{recieverName:n,senderName:c,mesg:e.message,time:e.time,isSender:e.sender===a})}))}),Object(x.jsxs)("div",{className:"chat__footer",children:[Object(x.jsx)(F.a,{children:Object(x.jsx)(T.a,{})}),Object(x.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),h.trim()){var c=Object(o.d)(m,"users/".concat(a,"/friends/").concat(t,"/chats/")),s=Object(o.d)(m,"users/".concat(t,"/friends/").concat(a,"/chats/")),n={message:h,sender:a,time:Date.now()};Object(o.c)(c,n),Object(o.c)(s,n)}O("")},children:[Object(x.jsx)("input",{placeholder:"Type a message",type:"text",value:h,onChange:function(e){return O(e.target.value)}}),Object(x.jsx)("button",{type:"submit",children:Object(x.jsx)(F.a,{className:"btnn",children:Object(x.jsx)(H.a,{})})})]}),Object(x.jsx)(F.a,{children:Object(x.jsx)(R.a,{})})]})]})};c(117);var A=c(95),M=c.n(A),Q=c(96),z=c.n(Q),J=function(){var e=Object(s.useState)("unknown"),t=Object(i.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)([]),r=Object(i.a)(n,2),j=r[0],l=r[1],b=Object(s.useState)(""),u=Object(i.a)(b,2),h=u[0],p=u[1],f=Object(s.useState)(""),v=Object(i.a)(f,2),g=v[0],N=v[1],y=Object(s.useState)(""),_=Object(i.a)(y,2),S=_[0],C=_[1],I=Object(s.useState)(""),P=Object(i.a)(I,2),L=P[0],T=P[1];Object(s.useEffect)((function(){T(Math.floor(500*Math.random()))}),[]),Object(s.useEffect)((function(){var e=Object(o.d)(m,"users/".concat(h,"/friends"));Object(o.b)(e,(function(e){var t=e.val(),c=[];for(var s in t){var a={id:s,name:t[s].Name};c.push(a)}l(c)}))}),[h]),Object(s.useEffect)((function(){}),[g]);var D=function(e){return e.split("@")[0]};return Object(d.d)(O,(function(e){if(e){var t=e.email;p(D(t));var c=Object(o.d)(m,"users/"+D(t));Object(o.b)(c,(function(e){var t=e.val();a(t.fName+" "+t.lName)}))}})),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"sidebar",children:[Object(x.jsxs)("div",{className:"sidebar__header",children:[Object(x.jsxs)("div",{className:"sidebar_headerLeft",children:[Object(x.jsx)(E.a,{src:"https://robohash.org/a28312c5f329ecdef0ec87cb823b5eb9?set=set4&bgset=&size=400x400"}),Object(x.jsx)("p",{className:"name",children:c})]}),Object(x.jsxs)("div",{className:"sidebar__headerRight",children:[Object(x.jsx)(F.a,{children:Object(x.jsx)(M.a,{})}),Object(x.jsx)(F.a,{children:Object(x.jsx)(z.a,{})}),Object(x.jsx)(F.a,{children:Object(x.jsx)(w.a,{})})]})]}),Object(x.jsx)("div",{className:"sidebar__search",children:Object(x.jsxs)("div",{className:"sidebar__searchContainer",children:[Object(x.jsx)(k.a,{}),Object(x.jsx)("input",{placeholder:"Search or start a new chat",type:"text"})]})}),Object(x.jsx)("div",{className:"sidebar__chats",children:j.map((function(e){return Object(x.jsxs)("div",{className:"sidebarChat",id:e.id,onClick:function(){N(e.id),C(e.name)},children:[Object(x.jsx)(E.a,{src:"https://avatars.dicebar.com/api/human/".concat(L,".svg")}),Object(x.jsxs)("div",{className:"sidebarChat__info",children:[Object(x.jsx)("h2",{children:e.name}),Object(x.jsx)("p",{children:"This is the last message"})]})]})}))})]}),g&&Object(x.jsx)(W,{Id:g,chatName:S,userId:D(h),currName:c})]})};c(118);var K=function(){return Object(x.jsxs)("div",{id:"message",children:[Object(x.jsx)("h2",{children:"404"}),Object(x.jsx)("h1",{children:"Page Not Found"}),Object(x.jsx)("p",{children:"The specified file was not found on this website. Please check the URL for mistakes and try again."}),Object(x.jsx)("h3",{children:"Why am I seeing this?"}),Object(x.jsxs)("p",{children:["This page was generated by the Firebase Command-Line Interface. To modify it, edit the ",Object(x.jsx)("code",{children:"404.html"})," file in your project's configured ",Object(x.jsx)("code",{children:"public"})," directory."]})]})};var q=function(){var e=Object(s.useState)(!0),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(d.d)(O,(function(e){a(!0)})),c?Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(J,{})}):Object(x.jsx)(K,{})};var G=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(y.a,{children:Object(x.jsxs)(_.Switch,{children:[Object(x.jsx)(_.Route,{exact:!0,path:"/inbox",children:Object(x.jsx)("div",{className:"app__body",children:Object(x.jsx)(q,{})})}),Object(x.jsx)(_.Route,{exact:!0,path:"/",children:Object(x.jsx)(N,{})}),Object(x.jsx)(_.Route,{exact:!0,path:"/login",children:Object(x.jsx)(v,{})}),Object(x.jsx)(_.Route,{exact:!0,path:"/signup",children:Object(x.jsx)(p,{})})]})})})};n.a.render(Object(x.jsx)(G,{}),document.getElementById("root"))}},[[120,1,2]]]);
//# sourceMappingURL=main.7765e2d0.chunk.js.map