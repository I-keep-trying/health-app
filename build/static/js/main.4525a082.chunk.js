(this.webpackJsonppatientor=this.webpackJsonppatientor||[]).push([[0],{431:function(e,a,t){e.exports=t(802)},802:function(e,a,t){"use strict";t.r(a);t(432),t(442);var n,l,c,r=t(0),i=t.n(r),M=t(107),o=t.n(M),N=(t(625),t(58)),u=t.n(N),s=t(35),D=t(89),m=t.n(D),E=t(106),d=t(92),g=t(820),T=t(810),j=t(93),z=t(811),I=t(94),w=t(55),y=function(e){return{type:"ADD_PATIENT",payload:e}},O={patients:{},diagnoses:{}},p=Object(r.createContext)([O,function(){return O}]),h=function(){return Object(r.useContext)(p)},L=t(816),A=t(819),C=t(813),k=t(822),x=t(821),b=t(25),v=t(812),S=t(815),f=function(e){var a=e.name,t=e.label,n=e.options;return i.a.createElement(v.a.Field,null,i.a.createElement("label",null,t),i.a.createElement(b.b,{as:"select",name:a,className:"ui dropdown"},n.map((function(e){return i.a.createElement("option",{key:e.value,value:e.value},e.label||e.value)}))))},Y=function(e){var a=e.field,t=e.label,n=e.placeholder,l=e.required;return i.a.createElement(v.a.Field,{required:l},i.a.createElement("label",null,t),i.a.createElement(b.b,Object.assign({placeholder:n},a)),i.a.createElement("div",{style:{color:"red"}},i.a.createElement(b.a,{name:a.name})))},Q=function(e){var a=e.field,t=e.label,n=e.min,l=e.max;return i.a.createElement(v.a.Field,null,i.a.createElement("label",null,t),i.a.createElement(b.b,Object.assign({},a,{type:"number",min:n,max:l})),i.a.createElement("div",{style:{color:"red"}},i.a.createElement(b.a,{name:a.name})))},U=function(e){var a=e.diagnoses,t=e.setFieldValue,n=e.setFieldTouched,l="diagnosisCodes",c=a.map((function(e){return{key:e.code,text:"".concat(e.name," (").concat(e.code,")"),value:e.code}}));return i.a.createElement(v.a.Field,null,i.a.createElement("label",null,"Diagnoses"),i.a.createElement(S.a,{fluid:!0,multiple:!0,search:!0,selection:!0,options:c,onChange:function(e,a){n(l,!0),t(l,a.value)}}),i.a.createElement(b.a,{name:l}))};!function(e){e.Male="male",e.Female="female",e.Other="other"}(n||(n={})),function(e){e[e.Healthy=0]="Healthy",e[e.LowRisk=1]="LowRisk",e[e.HighRisk=2]="HighRisk",e[e.CriticalRisk=3]="CriticalRisk"}(l||(l={})),function(e){e.HealthCheck="HealthCheck",e.OccupationalHealthcare="OccupationalHealthcare",e.Hospital="Hospital"}(c||(c={}));var B=[{value:n.Male,label:"Male"},{value:n.Female,label:"Female"},{value:n.Other,label:"Other"}],H=function(e){var a=e.onSubmit,t=e.onCancel;return i.a.createElement(b.d,{initialValues:{name:"",ssn:"",dateOfBirth:"",occupation:"",gender:n.Other},onSubmit:a,validate:function(e){var a={};return e.name||(a.name="Field is required"),e.ssn||(a.ssn="Field is required"),e.dateOfBirth||(a.dateOfBirth="Field is required"),e.occupation||(a.occupation="Field is required"),a}},(function(e){var a=e.isValid,n=e.dirty;return i.a.createElement(b.c,{className:"form ui"},i.a.createElement(b.b,{label:"Name",placeholder:"Name",name:"name",component:Y}),i.a.createElement(b.b,{label:"Social Security Number",placeholder:"SSN",name:"ssn",component:Y}),i.a.createElement(b.b,{label:"Date Of Birth",placeholder:"YYYY-MM-DD",name:"dateOfBirth",component:Y}),i.a.createElement(b.b,{label:"Occupation",placeholder:"Occupation",name:"occupation",component:Y}),i.a.createElement(f,{label:"Gender",name:"gender",options:B}),i.a.createElement(x.a,null,i.a.createElement(x.a.Column,{floated:"left",width:5},i.a.createElement(A.a,{type:"button",onClick:t,color:"red"},"Cancel")),i.a.createElement(x.a.Column,{floated:"right",width:5},i.a.createElement(A.a,{type:"submit",floated:"right",color:"green",disabled:!n||!a},"Add"))))}))},R=function(e){var a=e.modalOpen,t=e.onClose,n=e.onSubmit,l=e.error;return i.a.createElement(C.a,{open:a,onClose:t,centered:!1,closeIcon:!0},i.a.createElement(C.a.Header,null,"Add a new patient"),i.a.createElement(C.a.Content,null,l&&i.a.createElement(k.a,{inverted:!0,color:"red"},"Error: ".concat(l)),i.a.createElement(H,{onSubmit:n,onCancel:t})))},G=function(){var e=h(),a=Object(s.a)(e,2),t=a[0].patients,n=a[1],l=i.a.useState(!1),c=Object(s.a)(l,2),r=c[0],M=c[1],o=i.a.useState(),N=Object(s.a)(o,2),D=N[0],d=N[1],g=function(){M(!1),d(void 0)};return i.a.createElement("div",{className:"App"},i.a.createElement(T.a,{as:"h2",textAlign:"left"},"Patient list"),i.a.createElement(L.a,{celled:!0},i.a.createElement(L.a.Header,null,i.a.createElement(L.a.Row,null,i.a.createElement(L.a.HeaderCell,null,"Name"),i.a.createElement(L.a.HeaderCell,null,"Gender"),i.a.createElement(L.a.HeaderCell,null,"Occupation"))),i.a.createElement(L.a.Body,null,Object.values(t).map((function(e){return i.a.createElement(L.a.Row,{key:e.id},i.a.createElement(L.a.Cell,null,i.a.createElement(E.b,{to:"/patients/".concat(e.id)},e.name)),i.a.createElement(L.a.Cell,null,e.gender),i.a.createElement(L.a.Cell,null,e.occupation))})))),i.a.createElement(R,{modalOpen:r,onSubmit:function(e){var a,t;return u.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,u.a.awrap(m.a.post("".concat("/api","/patients"),e));case 3:a=l.sent,t=a.data,n(y(t)),g(),l.next=13;break;case 9:l.prev=9,l.t0=l.catch(0),console.error(l.t0.response.data),d(l.t0.response.data.error);case 13:case"end":return l.stop()}}),null,null,[[0,9]])},error:D,onClose:g}),i.a.createElement(A.a,{onClick:function(){return M(!0)}},"Add New Patient"))},F=t(823),P=t(200),Z=t(817),W=[{value:c.HealthCheck,label:"Health Check"},{value:c.Hospital,label:"Hospital"},{value:c.OccupationalHealthcare,label:"Occupational Healthcare"}],V=function(e){var a=e.onSubmit,t=e.onCancel,n=h(),l=Object(s.a)(n,1)[0].diagnoses,c={type:"HealthCheck",description:"",specialist:"",date:(new Date).toISOString().slice(0,10),healthCheckRating:0,discharge:{date:(new Date).toISOString().split("T")[0],criteria:""},employerName:"",diagnosisCodes:void 0};return i.a.createElement(b.d,{initialValues:c,onSubmit:function(e,t){try{a(e),t.resetForm()}catch(n){console.error("Add Entry form validation error",n.response.data)}},validate:function(e){var a="Field is required",t={};if(e.description||(t.description=a),e.specialist||(t.specialist=a),e.date||(t.date=a),e.type){if("HealthCheck"===e.type)(e.healthCheckRating>3||e.healthCheckRating<0)&&(t.healthCheckRating="Choose Health Check Rating between 0 to 3, 0 being Healthy to 3 being at Critical Risk");else if("Hospital"===e.type)e.discharge.date||(t.discharge={},t.discharge.date=a),e.discharge.criteria||(t.discharge={},t.discharge.criteria=a);else if("OccupationalHealthcare"===e.type){var n,l,c;if(e.employerName||(t.employerName=a),!(null===e||void 0===e?void 0:null===(n=e.sickLeave)||void 0===n?void 0:n.startDate)!==!(null===e||void 0===e?void 0:null===(l=e.sickLeave)||void 0===l?void 0:l.endDate))t.sickLeave={},(null===(c=e.sickLeave)||void 0===c?void 0:c.startDate)?t.sickLeave.endDate=a+"if Start Date is entered":t.sickLeave.startDate=a+"if End Date is entered"}}else t.type=a;return t}},(function(e){var a=e.values,n=e.isValid,c=e.dirty,r=e.setFieldValue,M=e.setFieldTouched;return i.a.createElement(b.c,{className:"form ui"},i.a.createElement(f,{name:"type",label:"Type",options:W}),i.a.createElement(b.b,{label:"Date",placeholder:"Date",name:"date",component:Y,disabled:!0}),i.a.createElement(b.b,{label:"Description",placeholder:"Description",name:"description",component:Y,required:!0}),i.a.createElement(b.b,{label:"Specialist",placeholder:"Specialist",name:"specialist",component:Y,required:!0}),i.a.createElement(U,{setFieldValue:r,setFieldTouched:M,diagnoses:Object.values(l)}),"HealthCheck"===String(a.type)?i.a.createElement(b.b,{label:"Health Check Rating",name:"healthCheckRating",value:a.healthCheckRating,component:Q,min:0,max:3,required:!0}):null,"Hospital"===String(a.type)?i.a.createElement(i.a.Fragment,null,i.a.createElement(b.b,{label:"Date of discharge",placeholder:"Date of discharge",name:"discharge.date",component:Y,required:!0}),i.a.createElement(b.b,{label:"Criteria of discharge",placeholder:"Criteria",name:"discharge.criteria",component:Y,required:!0})):null,"OccupationalHealthcare"===String(a.type)?i.a.createElement(i.a.Fragment,null,i.a.createElement(b.b,{label:"Employer Name",placeholder:"Employer Name",name:"employerName",component:Y,required:!0}),i.a.createElement(b.b,{label:"Sick Leave Start",placeholder:"Start Date",name:"sickLeave.startDate",component:Y}),i.a.createElement(b.b,{label:"Sick Leave End",placeholder:"End Date",name:"sickLeave.endDate",component:Y})):null,i.a.createElement(x.a,null,i.a.createElement(x.a.Column,{floated:"left",width:5},i.a.createElement(A.a,{type:"button",onClick:t,color:"red"},"Cancel")),i.a.createElement(x.a.Column,{floated:"right",width:5},i.a.createElement(A.a,{type:"submit",floated:"right",color:"green",disabled:!c||!n},"Add"))))}))},J=function(e){var a=e.modalOpen,t=e.onSubmit,n=e.onClose,l=e.error;return i.a.createElement(C.a,{open:a,onClose:n,centered:!1,closeIcon:!0},i.a.createElement(C.a.Header,null,"Add a new entry"),i.a.createElement(C.a.Content,null,l&&i.a.createElement(k.a,{inverted:!0,color:"red"},"Error: ".concat(l)),i.a.createElement(V,{onSubmit:t,onCancel:n})))},_=t(818),q=t(418),X=t.n(q),K=function(e){var a=e.entry;return i.a.createElement(L.a.Row,null,i.a.createElement(L.a.Cell,null,"Discharge"),i.a.createElement(L.a.Cell,{className:"word-break"},a.discharge.date,i.a.createElement("br",null),a.discharge.criteria))},$=t(825),ee=["The patient is in great shape","The patient has a low risk of getting sick","The patient has a high risk of getting sick","The patient has a diagnosed condition"],ae=function(e){var a=e.rating,t=e.showText,n=e.showRating;return i.a.createElement("div",{className:"health-bar"},n?i.a.createElement($.a,{icon:"heart",disabled:!0,rating:4-a,maxRating:4}):null,t?i.a.createElement("p",null,ee[a]):null)},te=function(e){var a=e.entry;return"HealthCheck"===a.type?i.a.createElement(L.a.Row,null,i.a.createElement(L.a.Cell,null,"Health Status Description"),i.a.createElement(L.a.Cell,{className:"word-break"},i.a.createElement(ae,{rating:a.healthCheckRating,showText:!0,showRating:!1}))):null},ne=function(e){var a=e.entry;return i.a.createElement(i.a.Fragment,null,i.a.createElement(L.a.Row,null,i.a.createElement(L.a.Cell,null," Employment"),i.a.createElement(L.a.Cell,{className:"word-break"},a.employerName)),a.sickLeave?i.a.createElement(L.a.Row,null,i.a.createElement(L.a.Cell,null," Sick Leave"),i.a.createElement(L.a.Cell,{className:"word-break"},a.sickLeave.startDate," "," <to> "," ",a.sickLeave.endDate)):i.a.createElement(i.a.Fragment,null))},le=t(422),ce=function(){var e=Object(d.f)().id,a=h(),t=Object(s.a)(a,1)[0],n=t.patients,l=t.diagnoses,c=i.a.useState(0),r=Object(s.a)(c,2),M=r[0],o=r[1],N=function(){var a,t;return(null===(a=n[e])||void 0===a?void 0:a.entries)&&0!==(null===(t=n[e].entries)||void 0===t?void 0:t.length)?n[e].entries:[]};return N().length>0?i.a.createElement(i.a.Fragment,null,N().map((function(e,a){var t,n=a===M?"active":"";return i.a.createElement(_.a,{fluid:!0,styled:!0,key:e.id},i.a.createElement(_.a.Title,{className:"title ".concat(n),onClick:function(){return function(e){o(M===e?-1:e)}(a)}},i.a.createElement(x.a,{divided:!0},i.a.createElement(x.a.Row,{columns:2},i.a.createElement(x.a.Column,{mobile:7,tablet:3,computer:3},i.a.createElement(j.a,{name:"dropdown"}),e.date),i.a.createElement(x.a.Column,null,e.type)))),i.a.createElement(X.a,{height:M===a?"auto":0},i.a.createElement(L.a,{compact:!0,definition:!0},i.a.createElement(L.a.Body,null,i.a.createElement(L.a.Row,null,i.a.createElement(L.a.Cell,null,"Description"),i.a.createElement(L.a.Cell,{className:"word-break"},e.description)),i.a.createElement(L.a.Row,null,i.a.createElement(L.a.Cell,null,"Specialist"),i.a.createElement(L.a.Cell,{className:"word-break"},e.specialist)),e.diagnosisCodes?i.a.createElement(L.a.Row,null,i.a.createElement(L.a.Cell,null,"Diagnosis"),i.a.createElement(L.a.Cell,null,i.a.createElement(Z.a,{divided:!0,verticalAlign:"middle"},null===(t=e.diagnosisCodes)||void 0===t?void 0:t.map((function(e){var a,t=Object.values(l).filter((function(a){return a.code===e})),n=Object(le.a)();return i.a.createElement(Z.a.Item,{key:n},i.a.createElement(P.a,{basic:!0,horizontal:!0,color:"teal"},e)," ",null===(a=t[0])||void 0===a?void 0:a.name)}))))):i.a.createElement(i.a.Fragment,null),"Hospital"===e.type?i.a.createElement(K,{entry:e}):"HealthCheck"===e.type?i.a.createElement(te,{entry:e}):i.a.createElement(ne,{entry:e})))),i.a.createElement(_.a.Content,{className:"content ".concat(n)}))}))):i.a.createElement(k.a,{attached:!0,placeholder:!0},i.a.createElement(F.a,{as:"h2",icon:!0},i.a.createElement(j.a,{name:"doctor"}),"No patient history has been recorded yet"))},re=function(){var e,a,t,n,l,c,M=Object(d.f)().id,o=h(),N=Object(s.a)(o,2),D=N[0].patients,E=N[1],I=i.a.useState(!1),w=Object(s.a)(I,2),O=w[0],p=w[1],L=i.a.useState(),A=Object(s.a)(L,2),C=A[0],x=A[1],b=i.a.useState("entries"),v=Object(s.a)(b,2),S=v[0],f=v[1],Y=function(){p(!1),x(void 0),f("entries")};Object(r.useEffect)((function(){!function(){var e,a,t;u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(null===(e=D[M])||void 0===e?void 0:e.entries)){n.next=4;break}return n.abrupt("return",D[M]);case 4:return n.prev=4,n.next=7,u.a.awrap(m.a.get("".concat("/api","/patients/").concat(M)));case 7:a=n.sent,t=a.data,E(y(t)),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(4),console.log(n.t0);case 15:case"end":return n.stop()}}),null,null,[[4,12]])}()}),[E,M,D]);return D[M]?i.a.createElement(T.a,null,i.a.createElement(k.a,{attached:"top"},i.a.createElement(F.a,{size:"large"},null===(e=D[M])||void 0===e?void 0:e.name,i.a.createElement(j.a,{style:{verticalAlign:"inherit"},className:"other"!==(null===(a=D[M])||void 0===a?void 0:a.gender)?"male"===(null===(t=D[M])||void 0===t?void 0:t.gender)?"mars huge icon":"venus huge icon":"other gender huge icon"})),i.a.createElement(z.a,null),i.a.createElement(P.a.Group,{size:"small"},i.a.createElement(Z.a,{size:"tiny",divided:!0,verticalAlign:"middle"},(null===(n=D[M])||void 0===n?void 0:null===(l=n.entries)||void 0===l?void 0:l.length)>0?null===(c=D[M])||void 0===c?void 0:c.entries.map((function(e){return"HealthCheck"===(null===e||void 0===e?void 0:e.type)?i.a.createElement(Z.a.Item,{key:e.id},i.a.createElement(P.a,{basic:!0,horizontal:!0},"Health Status ",e.date),i.a.createElement(ae,{key:e.id,rating:e.healthCheckRating,showText:!1,showRating:!0})):null})):i.a.createElement(i.a.Fragment,null),i.a.createElement(Z.a.Item,null,i.a.createElement(P.a,{basic:!0,horizontal:!0},"GENDER"),D[M].gender),i.a.createElement(Z.a.Item,null,i.a.createElement(P.a,{basic:!0,horizontal:!0},"SSN"),D[M].ssn),i.a.createElement(Z.a.Item,null,i.a.createElement(P.a,{basic:!0,horizontal:!0},"OCCUPATION"),D[M].occupation),i.a.createElement(Z.a.Item,null,i.a.createElement(P.a,{basic:!0,horizontal:!0},"D.O.B."),D[M].dateOfBirth," ")))),i.a.createElement(g.a,{pointing:!0,attached:"bottom",tabular:!0},i.a.createElement(g.a.Item,{name:"entries",active:"entries"===S,onClick:function(){return f("entries")}}),i.a.createElement(g.a.Item,{name:"add entry",onClick:function(){f("add entry"),p(!0)}})),i.a.createElement(J,{modalOpen:O,onSubmit:function(e){var a,t;return u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.a.awrap(m.a.post("".concat("/api","/patients/").concat(M,"/entries"),e));case 3:a=n.sent,t=a.data,E({type:"ADD_ENTRY",payload:t}),Y(),f("entries"),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.error("New Entry Error: ",n.t0);case 13:case"end":return n.stop()}}),null,null,[[0,10]])},error:C,onClose:Y})," ",i.a.createElement(ce,null),i.a.createElement(z.a,{hidden:!0})):i.a.createElement(i.a.Fragment,null)},ie=t(421),Me=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(g.a,{fixed:"bottom",className:"ui fluid three item menu"},i.a.createElement(g.a.Item,null,i.a.createElement(ie.a,{as:"a",href:"https://studies.helsinki.fi/courses/cur/hy-CUR-136379894",size:"small",src:"https://fullstackopen.com/static/uoh_centre-3689cf9983a2ebc8089c8f078a9c4769.svg"})," "),i.a.createElement(g.a.Item,null,i.a.createElement("p",null,"Made by Andrea Crego for"," ",i.a.createElement("a",{href:"https://fullstackopen.com/en"},"Full stack open 2020"))),i.a.createElement(g.a.Item,null,i.a.createElement(ie.a,{as:"a",href:"https://www.houston-inc.com/careers",centered:!0,size:"small",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjQ3cHgiIGhlaWdodD0iODJweCIgdmlld0JveD0iMCAwIDI0NyA4MiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTMuMiAoNzI2NDMpIC0gaHR0cHM6Ly9za2V0Y2hhcHAuY29tIC0tPgogICAgPHRpdGxlPmxvZ28vaG91c3RvbjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxwb2x5Z29uIGlkPSJwYXRoLTEiIHBvaW50cz0iMCAwLjAyNjcxOTI2NzMgMTM4LjIwODE2NyAwLjAyNjcxOTI2NzMgMTM4LjIwODE2NyAzNi40NjU0MzgxIDAgMzYuNDY1NDM4MSI+PC9wb2x5Z29uPgogICAgPC9kZWZzPgogICAgPGcgaWQ9ImxvZ28vaG91c3RvbiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9ImhvdXN0b25fc2ltcGxlLmVwcy1jb3B5LTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU0LjU4MTg5MywgMjMuMjYzMDQwKSI+CiAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgPGcgaWQ9IkNsaXAtMiI+PC9nPgogICAgICAgICAgICA8cGF0aCBkPSJNODIuODA1MTI5OCwxMy41MDY2NjAzIEw4Mi44MDUxMjk4LDI1LjUzNjU1MDkgTDg1Ljk5MzYyOSwyNS41MzY1NTA5IEw4NS45OTM2MjksMTMuNTA2NjYwMyBMOTAuNDA2NTQ5MywxMy41MDY2NjAzIEw5MC40MDY1NDkzLDEwLjQ0NTY3ODQgTDc4LjM3NTEwMzYsMTAuNDQ1Njc4NCBMNzguMzc1MTAzNiwxMy41MDY2NjAzIEw4Mi44MDUxMjk4LDEzLjUwNjY2MDMgWiBNOTYuNDkxMDQ5NSwxNy45NjM2ODg1IEM5Ni40OTEwNDk1LDIwLjU1OTU1NzIgOTguMzE3ODU1NywyMi43MDc5ODQyIDEwMC44ODYxNTcsMjIuNzA3OTg0MiBDMTAzLjQ1NDg4MiwyMi43MDc5ODQyIDEwNS4yNDcxOTQsMjAuNTk1NDY1NyAxMDUuMjQ3MTk0LDE4LjAxNzk3NTMgTDEwNS4yNDcxOTQsMTguMDAwMDIxMSBDMTA1LjI0NzE5NCwxNS40MDQyOTM3IDEwMy40MjA1MjksMTMuMjU1ODY2NyAxMDAuODUyMjI4LDEzLjI1NTg2NjcgQzk4LjI4MzUwMjMsMTMuMjU1ODY2NyA5Ni40OTEwNDk1LDE1LjM2ODM4NTMgOTYuNDkxMDQ5NSwxNy45NDU3MzQzIEw5Ni40OTEwNDk1LDE3Ljk2MzY4ODUgWiBNOTMuMTQ3MDQxMywxOC4wMTc5NzUzIEw5My4xNDcwNDEzLDE3Ljk4MjA2NjkgQzkzLjE0NzA0MTMsMTMuNjg1NDk1NiA5Ni40MDQ4MTI3LDEwLjE3NjkzMDYgMTAwLjg4NjE1NywxMC4xNzY5MzA2IEMxMDUuMzY3OTI1LDEwLjE3NjkzMDYgMTA4LjU5MTM0MywxMy42NDk3Mjg1IDEwOC41OTEzNDMsMTcuOTQ1NzM0MyBMMTA4LjU5MTM0MywxNy45NjM2ODg1IEMxMDguNTkxMzQzLDIyLjI2MDI1OTggMTA1LjMzMzU3MiwyNS43Njg4MjQ3IDEwMC44NTIyMjgsMjUuNzY4ODI0NyBDOTYuMzcwMzE4LDI1Ljc2ODgyNDcgOTMuMTQ3MDQxMywyMi4zMTQxMjI0IDkzLjE0NzA0MTMsMTguMDE3OTc1MyBMOTMuMTQ3MDQxMywxOC4wMTc5NzUzIFogTTcwLjQxMTkxMzcsMjIuNzk3MDQ4NSBDNjguNzU2ODc0MiwyMi43OTcwNDg1IDY3LjM3ODIxNjYsMjIuMDgxMjgzMSA2Ni4wNjg0MDcsMjAuOTcxNzk3NCBMNjQuMTcyMTg3MiwyMy4zMTY0NDg0IEM2NS45MTMxODA4LDI0LjkyNzk0NTQgNjguMTM2Njc2MiwyNS43MzMzNDA0IDcwLjM0MzA2NTYsMjUuNzMzMzQwNCBDNzMuNDgwMTA1NSwyNS43MzMzNDA0IDc1LjY2OTI0NzYsMjQuMDUwMTY4IDc1LjY2OTI0NzYsMjEuMDYxMDAzIEw3NS42NjkyNDc2LDIxLjAyNTA5NDUgQzc1LjcyMTEzMSwxOC4zOTM0NTg4IDc0LjA0ODU2MTUsMTcuMzAxNzg1OCA3MS4xMDExMDExLDE2LjQ5NTgyNTMgQzY4LjU4NDY4MzQsMTUuODMzOTIyNiA2Ny45NjM5MTk5LDE1LjUxMTMxMjIgNjcuOTYzOTE5OSwxNC41MDg5ODYyIEw2Ny45NjM5MTk5LDE0LjQ3MzA3NzggQzY3Ljk2MzkxOTksMTMuNzM4OTM0MSA2OC42MDIyMTM1LDEzLjE2NjY2MTEgNjkuODI1NjQ0OSwxMy4xNjY2NjExIEM3MS4wNDk2NDE4LDEzLjE2NjY2MTEgNzIuMzA3OTkyMSwxMy43MjA5Nzk5IDczLjYwMDgzNywxNC42NTIwNTQ1IEw3NS4yNTU1OTM4LDEyLjE0NTk1NjkgQzczLjc4OTk5MjUsMTAuOTEwNjUwMiA3MS45ODA3MTY0LDEwLjIzMDM2OTIgNjkuODYwNTYzNywxMC4yMzAzNjkyIEM2Ni44OTU3MTQ3LDEwLjIzMDM2OTIgNjQuNzc1NTYyLDEyLjAzODY1NTcgNjQuNzc1NTYyLDE0Ljc3NzU5MjYgTDY0Ljc3NTU2MiwxNC44MTMwNzY5IEM2NC43NzU1NjIsMTcuODAyNjY2MSA2Ni42NzEwNzQ5LDE4LjY0NDUzNSA2OS41ODQxODE5LDE5LjQzMjExNzMgQzcyLjAxNDY0NTYsMjAuMDc2NjMxMiA3Mi41MTQ2Nzc2LDIwLjUwNjI2MDEgNzIuNTE0Njc3NiwyMS4zNDc3MDQ5IEw3Mi41MTQ2Nzc2LDIxLjM4MzA0NzkgQzcyLjUxNDY3NzYsMjIuMjYwMjU5OCA3MS43MjIyODg4LDIyLjc5NzA0ODUgNzAuNDExOTEzNywyMi43OTcwNDg1IEw3MC40MTE5MTM3LDIyLjc5NzA0ODUgWiBNMzEuMzM2NDY5NywxNy45NjM2ODg1IEMzMS4zMzY0Njk3LDIwLjU1OTU1NzIgMzMuMTYzNywyMi43MDc5ODQyIDM1LjczMTg1OTksMjIuNzA3OTg0MiBDMzguMzAwMTYxMSwyMi43MDc5ODQyIDQwLjA5MjQ3MjYsMjAuNTk1NDY1NyA0MC4wOTI0NzI2LDE4LjAxNzk3NTMgTDQwLjA5MjQ3MjYsMTguMDAwMDIxMSBDNDAuMDkyNDcyNiwxNS40MDQyOTM3IDM4LjI2NTI0MjMsMTMuMjU1ODY2NyAzNS42OTY5NDEsMTMuMjU1ODY2NyBDMzMuMTI5MjA1MywxMy4yNTU4NjY3IDMxLjMzNjQ2OTcsMTUuMzY4Mzg1MyAzMS4zMzY0Njk3LDE3Ljk0NTczNDMgTDMxLjMzNjQ2OTcsMTcuOTYzNjg4NSBaIE0yOC4wMDk3MDg5LDE4LjAxNzk3NTMgTDI4LjAwOTcwODksMTcuOTgyMDY2OSBDMjguMDA5NzA4OSwxMy42ODU0OTU2IDMxLjI2NzQ4MDMsMTAuMTc2OTMwNiAzNS43NDg4MjQ1LDEwLjE3NjkzMDYgQzQwLjIzMDczNDIsMTAuMTc2OTMwNiA0My40MzYxOTgsMTMuNjQ5NzI4NSA0My40NTQwMTA5LDE3Ljk0NTczNDMgTDQzLjQ1NDAxMDksMTcuOTYzNjg4NSBDNDMuNDU0MDEwOSwyMi4yNjAyNTk4IDQwLjE5NjIzOTUsMjUuNzY4ODI0NyAzNS43MTQ4OTUzLDI1Ljc2ODgyNDcgQzMxLjIzMjU2MTUsMjUuNzY4ODI0NyAyOC4wMDk3MDg5LDIyLjMxNDEyMjQgMjguMDA5NzA4OSwxOC4wMTc5NzUzIEwyOC4wMDk3MDg5LDE4LjAxNzk3NTMgWiBNNTMuODMwNDE3MSwyNS43MzMzNDA0IEM1Ny43NDI4ODEyLDI1LjczMzM0MDQgNjAuMjA3ODM5NywyMy40OTU4NDkyIDYwLjIwNzgzOTcsMTguOTMwNjcxNSBMNjAuMjA3ODM5NywxMC40MjcxNTg3IEw1Ny4wMDE4MTAzLDEwLjQyNzE1ODcgTDU3LjAwMTgxMDMsMTkuMDczNzM5OCBDNTcuMDAxODEwMywyMS40NzI2Nzc2IDU1LjgxMjMwODEsMjIuNjkwMDMgNTMuODY0NzcwNCwyMi42OTAwMyBDNTEuOTE3Mzc0MSwyMi42OTAwMyA1MC43Mjc3MzA1LDIxLjQxODk1NjMgNTAuNzI3NzMwNSwxOC45NjY1OCBMNTAuNzI3NzMwNSwxMC40MjcxNTg3IEw0Ny41Mzg2NjU4LDEwLjQyNzE1ODcgTDQ3LjUzODY2NTgsMTkuMDM3ODMxMyBDNDcuNTM4NjY1OCwyMy40Nzc4OTUgNDkuOTE3OTUzLDI1LjczMzM0MDQgNTMuODMwNDE3MSwyNS43MzMzNDA0IEw1My44MzA0MTcxLDI1LjczMzM0MDQgWiBNMy4xNTQ1NywzMy4xOTgxOTQ4IEwxMzUuMDM2NjMyLDMzLjE5ODE5NDggTDEzNS4wMzY2MzIsMy4zMDI0NDQ4OCBMMy4xNTQ1NywzLjMwMjQ0NDg4IEwzLjE1NDU3LDMzLjE5ODE5NDggWiBNMCwzNi40NzM5MjA0IEwxMzguMjA4MTY3LDM2LjQ3MzkyMDQgTDEzOC4yMDgxNjcsMC4wMjY3MTkyNjczIEwwLDAuMDI2NzE5MjY3MyBMMCwzNi40NzM5MjA0IFogTTE0LjgyMzExNDMsMTkuNDg1NDE0NCBMMjAuNzE4NjAwNSwxOS40ODU0MTQ0IEwyMC43MTg2MDA1LDI1LjUzNjU1MDkgTDIzLjkwNzY2NTIsMjUuNTM2NTUwOSBMMjMuOTA3NjY1MiwxMC40NDU2Nzg0IEwyMC43MTg2MDA1LDEwLjQ0NTY3ODQgTDIwLjcxODYwMDUsMTYuNDA2MDU0MiBMMTQuODIzMTE0MywxNi40MDYwNTQyIEwxNC44MjMxMTQzLDEwLjQ0NTY3ODQgTDExLjYzNDc1NjUsMTAuNDQ1Njc4NCBMMTEuNjM0NzU2NSwyNS41MzY1NTA5IEwxNC44MjMxMTQzLDI1LjUzNjU1MDkgTDE0LjgyMzExNDMsMTkuNDg1NDE0NCBaIE0xMTUuODY0OTIyLDE1Ljk0MTUwNjUgTDEyMi44OTc2MDIsMjUuNTM2NTUwOSBMMTI1LjYyMDk4OCwyNS41MzY1NTA5IEwxMjUuNjIwOTg4LDEwLjQ0NTY3ODQgTDEyMi40NjY0MTgsMTAuNDQ1Njc4NCBMMTIyLjQ2NjQxOCwxOS43MzYyMDggTDExNS42NTgzNzcsMTAuNDQ1Njc4NCBMMTEyLjcxMDkxNywxMC40NDU2Nzg0IEwxMTIuNzEwOTE3LDI1LjUzNjU1MDkgTDExNS44NjQ5MjIsMjUuNTM2NTUwOSBMMTE1Ljg2NDkyMiwxNS45NDE1MDY1IEwxMTUuODY0OTIyLDE1Ljk0MTUwNjUgWiIgaWQ9IkZpbGwtMSIgZmlsbD0iIzAwMDEwNSIgbWFzaz0idXJsKCNtYXNrLTIpIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="}))))},oe=function(){var e=h(),a=Object(s.a)(e,2)[1];return i.a.useEffect((function(){!function(){var e,t,n,l;u.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,u.a.awrap(m.a.get("".concat("/api","/patients")));case 3:return e=c.sent,t=e.data,a({type:"SET_PATIENT_LIST",payload:t}),c.next=8,u.a.awrap(m.a.get("".concat("/api","/diagnoses")));case 8:n=c.sent,l=n.data,a({type:"SET_DIAGNOSIS_LIST",payload:l}),c.next=16;break;case 13:c.prev=13,c.t0=c.catch(0),console.error(c.t0);case 16:case"end":return c.stop()}}),null,null,[[0,13]])}()}),[a]),i.a.createElement("div",null,i.a.createElement(E.a,null,i.a.createElement(g.a,{fixed:"top",inverted:!0},i.a.createElement(T.a,{fluid:!0},i.a.createElement(g.a.Item,{header:!0},i.a.createElement(j.a,{name:"heartbeat",color:"teal",size:"large"}),i.a.createElement(E.b,{to:"/"},"Health App")),i.a.createElement(g.a.Item,{className:"right menu",as:"a",href:"https://github.com/I-keep-trying/fullstackopen-exercises/tree/master/part9/patientor-frontend-redo"},i.a.createElement(j.a,{name:"github",size:"large"})))),i.a.createElement(z.a,null),i.a.createElement(z.a,null),i.a.createElement(T.a,null,i.a.createElement(z.a,{hidden:!0}),i.a.createElement(d.c,null,i.a.createElement(d.a,{path:"/patients/:id",render:function(){return i.a.createElement(re,null)}}),i.a.createElement(d.a,{path:"/",render:function(){return i.a.createElement(G,null)}}))),i.a.createElement(T.a,{fluid:!0,className:"Footer-container"},i.a.createElement(Me,null))))};o.a.render(i.a.createElement((function(e){var a=e.reducer,t=e.children,n=Object(r.useReducer)(a,O),l=Object(s.a)(n,2),c=l[0],M=l[1];return i.a.createElement(p.Provider,{value:[c,M]},t)}),{reducer:function(e,a){switch(a.type){case"SET_PATIENT_LIST":return Object(w.a)({},e,{patients:Object(w.a)({},a.payload.reduce((function(e,a){return Object(w.a)({},e,Object(I.a)({},a.id,a))}),{}),{},e.patients)});case"SET_DIAGNOSIS_LIST":return Object(w.a)({},e,{diagnoses:Object(w.a)({},a.payload.reduce((function(e,a){return Object(w.a)({},e,Object(I.a)({},a.code,a))}),{}),{},e.diagnoses)});case"SET_PATIENT":case"ADD_PATIENT":case"ADD_ENTRY":return Object(w.a)({},e,{patients:Object(w.a)({},e.patients,Object(I.a)({},a.payload.id,a.payload))});default:return e}}},i.a.createElement(oe,null)),document.getElementById("root"))}},[[431,1,2]]]);
//# sourceMappingURL=main.4525a082.chunk.js.map