(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RmqX:function(n,t,e){"use strict";e.r(t),e.d(t,"SearchModule",function(){return P});var c=e("fXoL"),o=e("AytR"),i=e("tk/3");let r=(()=>{class n{constructor(n){this.http=n}getComments(n){return this.http.get(`${o.a.apiUrl}/comments?q=${n}`)}}return n.\u0275fac=function(t){return new(t||n)(c.Rb(i.a))},n.\u0275prov=c.Eb({token:n,factory:n.\u0275fac}),n})();var s=e("3Pt+"),a=e("ofXK");const b=["input"];function g(n,t){if(1&n){const n=c.Ob();c.Nb(0,"span",11),c.Ub("click",function(){return c.ac(n),c.Wb().clearSearch()}),c.fc(1,"\u2715"),c.Mb()}}function u(n,t){if(1&n){const n=c.Ob();c.Nb(0,"li",14),c.Ub("mousedown",function(n){return n.preventDefault()})("click",function(){c.ac(n);const t=c.Wb().$implicit;return c.Wb(2).setSearchQuery(t.name)}),c.fc(1),c.Mb()}if(2&n){const n=c.Wb().$implicit;c.yb(1),c.hc(" ",n.name," ")}}function p(n,t){if(1&n&&(c.Lb(0),c.dc(1,u,2,1,"li",13),c.Kb()),2&n){const n=t.index;c.yb(1),c.Xb("ngIf",n<=20)}}function l(n,t){if(1&n&&(c.Nb(0,"ul"),c.dc(1,p,2,1,"ng-container",12),c.Mb()),2&n){const n=c.Wb();c.yb(1),c.Xb("ngForOf",n.suggestions)}}function f(n,t){if(1&n&&(c.Nb(0,"div",16),c.Nb(1,"h1"),c.fc(2),c.Mb(),c.Nb(3,"h2"),c.fc(4),c.Mb(),c.Nb(5,"p"),c.fc(6),c.Mb(),c.Mb()),2&n){const n=c.Wb().$implicit;c.yb(2),c.gc(n.name),c.yb(2),c.gc(n.email),c.yb(2),c.gc(n.body)}}function d(n,t){if(1&n&&(c.Lb(0),c.dc(1,f,7,3,"div",15),c.Kb()),2&n){const n=t.index;c.yb(1),c.Xb("ngIf",n<=20)}}function h(n,t){if(1&n&&(c.Nb(0,"div"),c.dc(1,d,2,1,"ng-container",12),c.Mb()),2&n){const n=c.Wb();c.yb(1),c.Xb("ngForOf",n.searchData)}}function x(n,t){1&n&&(c.Nb(0,"div",17),c.fc(1,"No Data"),c.Mb())}let M=(()=>{class n{constructor(n){this.searchService=n,this.searchText="",this.searchData=[],this.isDivHidden=!1,this.suggestions=[]}ngOnInit(){}clearSearch(){this.searchText="",this.suggestions=[]}search(){this.suggestions=[],this.getComments(this.searchText,!1)}getComments(n,t){this.searchService.getComments(n).subscribe(n=>{n?t?this.suggestions=n:this.searchData=n:console.log("error")})}keyUp(n){n.target.value.length>5?this.getComments(n.target.value,!0):this.suggestions=[]}setSearchQuery(n){this.searchText=n,this.isDivHidden=!0,this.input.nativeElement.blur()}}return n.\u0275fac=function(t){return new(t||n)(c.Ib(r))},n.\u0275cmp=c.Cb({type:n,selectors:[["app-search"]],viewQuery:function(n,t){if(1&n&&c.ic(b,1),2&n){let n;c.Yb(n=c.Vb())&&(t.input=n.first)}},decls:13,vars:6,consts:[[1,"container"],[1,"search-area"],[1,"input-wrap"],["type","text","placeholder","Type here...",3,"ngModel","ngModelChange","keyup","focus","blur"],["input",""],["class","close-icon",3,"click",4,"ngIf"],[3,"disabled","click"],[4,"ngIf"],[1,"search-data"],[4,"ngIf","ngIfElse"],["elseBlock",""],[1,"close-icon",3,"click"],[4,"ngFor","ngForOf"],[3,"mousedown","click",4,"ngIf"],[3,"mousedown","click"],["class","item search-result",4,"ngIf"],[1,"item","search-result"],[1,"item","no-data"]],template:function(n,t){if(1&n&&(c.Nb(0,"div",0),c.Nb(1,"section",1),c.Nb(2,"div",2),c.Nb(3,"input",3,4),c.Ub("ngModelChange",function(n){return t.searchText=n})("keyup",function(n){return t.keyUp(n)})("focus",function(){return t.isDivHidden=!1})("blur",function(){return t.isDivHidden=!0}),c.Mb(),c.dc(5,g,2,0,"span",5),c.Nb(6,"button",6),c.Ub("click",function(){return t.search()}),c.fc(7," Search "),c.Mb(),c.dc(8,l,2,1,"ul",7),c.Mb(),c.Mb(),c.Nb(9,"section",8),c.dc(10,h,2,1,"div",9),c.dc(11,x,2,0,"ng-template",null,10,c.ec),c.Mb(),c.Mb()),2&n){const n=c.Zb(12);c.yb(3),c.Xb("ngModel",t.searchText),c.yb(2),c.Xb("ngIf",t.searchText),c.yb(1),c.Xb("disabled",t.searchText.length<3),c.yb(2),c.Xb("ngIf",!t.isDivHidden&&t.suggestions.length),c.yb(2),c.Xb("ngIf",t.searchData.length)("ngIfElse",n)}},directives:[s.a,s.c,s.d,a.i,a.h],styles:[".container[_ngcontent-%COMP%]{padding:100px;text-align:center}.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:450px;height:35px;border-radius:8px;outline:0;border:2px solid #303f9f;font-size:17px}.container[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]{display:inline;position:relative}.container[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{position:absolute;width:448px;left:0;right:0;list-style:none;padding:0;text-align:left;border-top:0;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);margin:-le -le -le 5px;height:auto;max-height:500px;overflow-y:scroll}.container[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:10px;z-index:10;background:#fff;cursor:pointer}.container[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#ccc}.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100px;text-transform:uppercase;height:30px;margin:10px;border-radius:4px;border:0;background:#303f9f;color:#fff;outline:0;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);cursor:pointer}.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled, .container[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%]{background-color:#ccc}.container[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{position:absolute;cursor:pointer;left:430px;bottom:0;font-weight:700}.container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{border:1px solid #f7f7f7;border-radius:5px;padding:40px;margin:50px 10px 8px;line-height:13px;cursor:pointer}.container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover{box-shadow:0 2px 16px 4px rgba(40,44,63,.07)}.container[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]{font-size:20px;margin-top:100px}.container[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]{text-align:left}.container[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:20px}.container[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:15px}"]}),n})();var C=e("tyNb");const m=[{path:"",component:M}];let O=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=c.Gb({type:n}),n.\u0275inj=c.Fb({imports:[[C.a.forChild(m)],C.a]}),n})(),P=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=c.Gb({type:n}),n.\u0275inj=c.Fb({providers:[r],imports:[[a.b,O,s.b]]}),n})()}}]);