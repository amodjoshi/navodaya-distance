"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9196],{9196:(f,u,o)=>{o.r(u),o.d(u,{Tab2PageModule:()=>v});var a=o(7479),d=o(6895),g=o(4719),m=o(581),r=o(8564),e=o(6738),h=o(452);const p=[{path:"",component:(()=>{class n{constructor(t,l){this.router=t,this._sp=l,this.t_val=!1}onChange(t){console.log(`Toggled - ${JSON.stringify(t.target.checked)}`),console.log(`${this.t_val}`),this.t_val&&this.router.navigate(["../tabs/tab1"])}onSeverityChange(t){const l=parseInt(t.target.value);console.log(`Knobbed - ${l}}`),this._sp.save({sev:l})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(r.F0),e.Y36(h.m))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-tab2"]],decls:15,vars:7,consts:[[3,"translucent"],[3,"fullscreen"],[3,"ngModel","ngModelChange","ionChange"],[3,"ticks","snaps","min","max","ionChange"],["size","small","slot","start","name","paper-plane"],["size","small","slot","end","name","rocket"]],template:function(t,l){1&t&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3," Settings "),e.qZA()()(),e.TgZ(4,"ion-content",1)(5,"ion-item")(6,"ion-label"),e._uU(7,"Start"),e.qZA(),e.TgZ(8,"ion-toggle",2),e.NdJ("ngModelChange",function(i){return l.t_val=i})("ionChange",function(i){return l.onChange(i)}),e.qZA()(),e.TgZ(9,"ion-item")(10,"ion-label"),e._uU(11," Severity "),e.qZA(),e.TgZ(12,"ion-range",3),e.NdJ("ionChange",function(i){return l.onSeverityChange(i)}),e._UZ(13,"ion-icon",4)(14,"ion-icon",5),e.qZA()()()),2&t&&(e.Q6J("translucent",!0),e.xp6(4),e.Q6J("fullscreen",!0),e.xp6(4),e.Q6J("ngModel",l.t_val),e.xp6(4),e.Q6J("ticks",!0)("snaps",!0)("min",0)("max",2))},dependencies:[a.W2,a.Gu,a.gu,a.Ie,a.Q$,a.I_,a.ho,a.sr,a.wd,a.w,a.QI,g.JJ,g.On]}),n})()}];let T=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[r.Bz.forChild(p),r.Bz]}),n})(),v=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[a.Pc,d.ez,g.u5,m.e,T]}),n})()}}]);