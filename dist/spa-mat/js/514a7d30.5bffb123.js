(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["514a7d30"],{1813:function(t,a,s){},"619a":function(t,a,s){"use strict";var e=s("817c"),i=s.n(e);i.a},"7a0c":function(t,a,s){"use strict";var e=s("1813"),i=s.n(e);i.a},"7b3d":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("q-layout",{attrs:{view:"HHH Lpr FFF"}},[s("q-layout-drawer",{staticClass:"z-top q-flex q-flex-column",attrs:{side:"left",overlay:!0},model:{value:t.mainDrawer,callback:function(a){t.mainDrawer=a},expression:"mainDrawer"}},[s("planet-express-drawer")],1),s("q-page-container",{staticClass:"q-pt-none"},[s("router-view",{staticClass:"router-view"})],1),s("q-toolbar",{staticClass:"fixed-top q-nav-toolbar",attrs:{color:"primary",overlay:!0}},[s("q-btn",{staticClass:"shadow-0",attrs:{icon:"menu",size:"1.2rem"},on:{click:function(a){t.mainDrawer=!t.mainDrawer}}}),s("img",{staticStyle:{width:"30px",height:"30px"},attrs:{src:"statics/icons/favicon_100x100.png"},on:{click:function(a){t.mainDrawer=!t.mainDrawer}}})],1)],1)},i=[];e._withStripped=!0;var r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("q-list",{staticClass:"q-flex q-flex-column"},[s("q-item",[s("q-item-side",[s("q-item-tile",{staticClass:"q-item-tile-profile-picture",attrs:{avatar:"",sparse:""},on:{click:function(a){t.$store.dispatch("toggleMainDrawer")}}},[s("img",{staticClass:"q-square-img round-borders",attrs:{src:t.$store.getters.cover()}})])],1),s("q-item-main",[s("q-item-tile",{style:{"text-transform":"capitalize"},attrs:{label:""}},[t._v(t._s(t.$store.getters.username()))]),s("q-item-tile",{attrs:{sublabel:"",size:".5rem"}},[t._v(t._s(t.$store.getters.ego(0)))])],1),s("q-item-side",[s("q-btn",{staticClass:"shadow-0",attrs:{icon:"close"},on:{click:function(a){t.mainDrawer=!t.mainDrawer}}})],1)],1),s("q-item-separator"),s("q-item",[s("q-item-side",{staticClass:"q-square-img q-br-xs",attrs:{avatar:"statics/box.png"}}),s("q-item-main",{attrs:{label:"Inventory"}})],1),s("q-item-separator"),s("q-collapsible",{attrs:{label:"Tracking",avatar:"statics/gps.png"}},[s("q-item",[s("q-item-main",{attrs:{label:"Awaiting Pickup"}})],1),s("q-item",[s("q-item-main",{attrs:{label:"Picked Up"}})],1),s("q-item",[s("q-item-main",{attrs:{label:"En Route"}})],1),s("q-item",[s("q-item-main",{attrs:{label:"Delivered"}})],1),s("q-item",[s("q-item-main",{attrs:{label:"Routes"}})],1),s("q-item",[s("q-item-main",{attrs:{label:"ETA's"}})],1),s("q-item",[s("q-item-main",{attrs:{label:"Your Pilots"}})],1),s("q-item",[s("q-item-main",{attrs:{label:"View Map"}})],1)],1),s("q-item-separator"),s("q-collapsible",{attrs:{label:"Notifications",avatar:"statics/bell.png"}},[s("q-collapsible",{attrs:{label:"Messages"}}),s("q-item",[s("q-item-main",{attrs:{label:"Picked Up"}})],1),s("q-item",[s("q-item-main",{attrs:{label:"Delivered"}})],1),s("q-item",[s("q-item-main",{attrs:{label:"ETA's"}})],1),s("q-item",[s("q-item-main",{attrs:{label:"Delays"}})],1),s("q-item",[s("q-item-main",{attrs:{label:"Discounts"}})],1),s("q-item",[s("q-item-main",{attrs:{label:"Surges"}})],1),s("q-collapsible",{attrs:{label:"New Jobs",avatar:"statics/a2b.png"}})],1),s("q-item-separator"),s("q-collapsible",{attrs:{label:"Driver Hub",avatar:"statics/van.png"}},[s("q-collapsible",{attrs:{avatar:"statics/next-stop.png",label:"Next Stop"}},[s("q-item-side"),s("q-item-main",{attrs:{label:"23 Conley St, Place Holder, 3174"}})],1),s("q-collapsible",{attrs:{avatar:"statics/route.png",label:"Current Route"}},[s("q-item",[s("q-item-main",{attrs:{label:"Stop A"}})],1),s("q-item",[s("q-item-main",{attrs:{label:"Stop B"}})],1),s("q-item",[s("q-item-main",{attrs:{label:"Stop C (break)"}})],1),s("q-item",[s("q-item-main",{attrs:{label:"Stop D"}})],1)],1),s("q-collapsible",{attrs:{avatar:"statics/routes.png",label:"All Routes"}}),s("q-item",[s("q-item-side",{attrs:{avatar:"statics/sleep.png"}}),s("q-item-main",{attrs:{label:"Rests"}}),s("q-item-side",{staticClass:"q-verified-status",attrs:{avatar:"statics/question-yellow.png"}})],1),s("q-collapsible",{attrs:{avatar:"statics/van.png",label:"Your vehicle"}}),s("q-item",[s("q-item-side",{attrs:{avatar:"statics/box.png"}}),s("q-item-main",{attrs:{label:"Current Inventory"}}),s("q-item-side",{staticClass:"q-verified-status",attrs:{avatar:"statics/question-yellow.png"}})],1),s("q-collapsible",{attrs:{label:"New Jobs",avatar:"statics/a2b.png"}}),s("current-location-nav")],1),s("q-item-separator"),s("q-collapsible",{attrs:{label:"profile",avatar:"statics/astronaut.png"}},[s("current-location-nav"),s("q-collapsible",{attrs:{label:"Identity",avatar:"statics/identification.png"}},[s("q-collapsible",{attrs:{avatar:"statics/license.png",label:"Licenses"}},[s("q-item",[s("q-item-side",{attrs:{avatar:"statics/license.png"}}),s("q-item-main",{attrs:{label:"Car License"}}),s("q-item-side",{staticClass:"q-verified-status",attrs:{avatar:"statics/wrong-thick.png"}})],1),s("q-item",[s("q-item-side",{attrs:{avatar:"statics/license.png"}}),s("q-item-main",{attrs:{label:"Truck License"}}),s("q-item-side",{staticClass:"q-verified-status",attrs:{avatar:"statics/wrong-thick.png"}})],1),s("q-item",[s("q-item-side",{attrs:{avatar:"statics/license.png"}}),s("q-item-main",{attrs:{label:"Boat License"}}),s("q-item-side",{staticClass:"q-verified-status",attrs:{avatar:"statics/wrong-thick.png"}})],1),s("q-item",[s("q-item-side",{attrs:{avatar:"statics/license.png"}}),s("q-item-main",{attrs:{label:"PWC License"}}),s("q-item-side",{staticClass:"q-verified-status",attrs:{avatar:"statics/wrong-thick.png"}})],1),s("q-item",[s("q-item-side",{attrs:{avatar:"statics/license.png"}}),s("q-item-main",{attrs:{label:"Aircraft License"}}),s("q-item-side",{staticClass:"q-verified-status",attrs:{avatar:"statics/wrong-thick.png"}})],1)],1),s("q-item",[s("q-item-side",{attrs:{avatar:"statics/birth-certificate.png"}}),s("q-item-main",{attrs:{label:"Birth Certificate"}}),s("q-item-side",{staticClass:"q-verified-status",attrs:{avatar:"statics/wrong-thick.png"}})],1),s("q-item",[s("q-item-side",{attrs:{avatar:"statics/passport.png"}}),s("q-item-main",{attrs:{label:"Passport"}}),s("q-item-side",{staticClass:"q-verified-status",attrs:{avatar:"statics/wrong-thick.png"}})],1),s("q-collapsible",{attrs:{label:"Documents",avatar:"statics/documents.png"}},[s("q-item",[s("q-item-side",{attrs:{avatar:"statics/documents.png"}}),s("q-item-main",{attrs:{label:"Utility Bill 1"}}),s("q-item-side",{staticClass:"q-verified-status",attrs:{avatar:"statics/wrong-thick.png"}})],1),s("q-item",[s("q-item-side",{attrs:{avatar:"statics/documents.png"}}),s("q-item-main",{attrs:{label:"Utility Bill 2"}}),s("q-item-side",{staticClass:"q-verified-status",attrs:{avatar:"statics/wrong-thick.png"}})],1),s("q-item",[s("q-item-side",{attrs:{avatar:"statics/documents.png"}}),s("q-item-main",{attrs:{label:"Utility Bill 3"}}),s("q-item-side",{staticClass:"q-verified-status",attrs:{avatar:"statics/wrong-thick.png"}})],1)],1),s("q-item",[s("q-item-side",{attrs:{avatar:"statics/license-plate.png"}}),s("q-item-main",{attrs:{label:"Registration"}}),s("q-item-side",{staticClass:"q-verified-status",attrs:{avatar:"statics/wrong-thick.png"}})],1),s("q-item",[s("q-item-side",{attrs:{avatar:"statics/contract.png"}}),s("q-item-main",{attrs:{label:"Insurance"}}),s("q-item-side",{staticClass:"q-verified-status",attrs:{avatar:"statics/wrong-thick.png"}})],1),s("q-item",[s("q-item-side",{attrs:{avatar:"statics/cap.png"}}),s("q-item-main",{attrs:{label:"Police Check"}}),s("q-item-side",{staticClass:"q-verified-status",attrs:{avatar:"statics/wrong-thick.png"}})],1),s("q-item",[s("q-item-side",{attrs:{avatar:"statics/group.png"}}),s("q-item-main",{attrs:{label:"Interview"}}),s("q-item-side",{staticClass:"q-verified-status",attrs:{avatar:"statics/wrong-thick.png"}})],1),s("q-collapsible",{attrs:{avatar:"statics/certificate.png",label:"Qualifications"}},[s("q-item",[s("q-item-side",{attrs:{avatar:"statics/certificate.png"}}),s("q-item-main",{attrs:{label:"Working with Children"}}),s("q-item-side",{staticClass:"q-verified-status",attrs:{avatar:"statics/wrong-thick.png"}})],1),s("q-item",[s("q-item-side",{attrs:{avatar:"statics/certificate.png"}}),s("q-item-main",{attrs:{label:"RSA"}}),s("q-item-side",{staticClass:"q-verified-status",attrs:{avatar:"statics/wrong-thick.png"}})],1)],1)],1)],1),s("q-item-separator"),s("q-collapsible",{attrs:{label:"Business Hub",avatar:"statics/store.png"}},[s("q-item",[s("q-item-side",{attrs:{avatar:"statics/store.png"}}),s("q-item-main",{attrs:{label:"Your store"}}),s("q-item-side",{staticClass:"q-verified-status",attrs:{avatar:"statics/question-yellow.png"}})],1),s("q-item",[s("q-item-side",{attrs:{avatar:"statics/box.png"}}),s("q-item-main",{attrs:{label:"Current Inventory"}}),s("q-item-side",{staticClass:"q-verified-status",attrs:{avatar:"statics/question-yellow.png"}})],1)],1),s("q-item-separator"),s("q-collapsible",{attrs:{label:"Settings"}}),s("q-item-separator"),s("q-collapsible",{attrs:{label:"More"}},[s("q-item",[s("q-item-main",{attrs:{label:"Terms and Conditions"}})],1),s("q-item",[s("q-item-main",{attrs:{label:"Insurance"}})],1),s("q-item",[s("q-item-main",{attrs:{label:"Legal"}})],1)],1),s("q-list",{staticClass:"no-border q-pa-sm q-pt-xl q-mt-auto q-mb-auto full-width text-white",class:{flex:!0,column:t.showLoginOptions}},[s("q-item",{directives:[{name:"show",rawName:"v-show",value:t.showLoginOptions,expression:"showLoginOptions"}],staticClass:"full-width q-pa-no q-mb-xsmd"},[s("q-item-main",{staticClass:"full-width"},[s("fb-signin-button",{attrs:{params:t.fbParams},on:{success:function(a){return t.$store.dispatch("login",{token:Object.assign({provider:"facebook"},a),provider:"facebook",success:!0})},error:function(a){return t.$store.dispatch("login",{token:Object.assign({provider:"facebook"},a),provider:"facebook",success:!1})}}},[s("img",{attrs:{src:"https://dy6j70a9vs3v1.cloudfront.net/funnel_wap/static/files/32c47a476283bf5bb60f88935fc0815a/facebook_white.svg"}}),s("div",{staticClass:"text"},[t._v("Continue with Facebook")])])],1)],1),s("q-item",{directives:[{name:"show",rawName:"v-show",value:t.showLoginOptions,expression:"showLoginOptions"}],staticClass:"full-width q-pa-no"},[s("q-item-main",{staticClass:"full-width"},[s("g-signin-button",{attrs:{params:t.googleParams},on:{success:function(a){return t.$store.dispatch("login",{token:Object.assign({provider:"google"},a),provider:"google",success:!0})},error:function(a){return t.$store.dispatch("login",{token:Object.assign({provider:"google"},a),provider:"google",success:!1})}}},[s("img",{attrs:{src:"https://dy6j70a9vs3v1.cloudfront.net/funnel_wap/static/files/45eaf69cf1018aa240cea767e822dc96/google_white.svg"}}),s("div",{staticClass:"text"},[t._v("Continue with Google")])])],1)],1),s("span",{directives:[{name:"show",rawName:"v-show",value:t.showLoginOptions,expression:"showLoginOptions"}],staticClass:"or full-width q-mt-md q-mb-md"},[t._v("OR")]),s("q-item",{directives:[{name:"show",rawName:"v-show",value:t.showLoginOptions,expression:"showLoginOptions"}],staticClass:"full-width q-pa-no q-mb-xs"},[s("q-item-main",{staticClass:"full-width p-pa-no q-ma-no"},[s("form",{staticClass:"full-width q-pa-no q-ma-no",on:{submit:function(a){a.preventDefault(),t.$store.dispatch("login",{provider:"alopu"})}}},[t.entity&&t.entity.alopu&&(t.entity.alopu.username||void 0==t.entity.alopu.username||""==t.entity.alopu.username||t.entity.alopu.username.length>=0)?s("q-input",{staticClass:"q-mb-sm no-shadow border-1 round-borders",attrs:{"float-label":"Username or Email",color:"white","inverted-light":"",type:"email"},model:{value:t.$store.state.alopu.entity.alopu.username,callback:function(a){t.$set(t.$store.state.alopu.entity.alopu,"username",a)},expression:"$store.state.alopu.entity.alopu.username"}}):t._e()],1)])],1),s("q-item",{directives:[{name:"show",rawName:"v-show",value:t.showLoginOptions,expression:"showLoginOptions"}],staticClass:"full-width q-pa-no q-mb-xs"},[s("q-item-main",{staticClass:"full-width p-pa-no q-ma-no"},[s("form",{staticClass:"full-width q-pa-no q-ma-no",on:{submit:function(a){a.preventDefault(),t.$store.dispatch("login",{provider:"alopu"})}}},[t.entity&&t.entity.alopu&&(t.entity.alopu.password||void 0==t.entity.alopu.password||""==t.entity.alopu.password||t.entity.alopu.password.length>=0)?s("q-input",{staticClass:"q-mb-sm no-shadow border-1 round-borders",attrs:{"float-label":"Password",color:"white","inverted-light":"",type:"password"},model:{value:t.$store.state.alopu.entity.alopu.password,callback:function(a){t.$set(t.$store.state.alopu.entity.alopu,"password",a)},expression:"$store.state.alopu.entity.alopu.password"}}):t._e()],1)])],1),s("q-item",{directives:[{name:"show",rawName:"v-show",value:t.$s.getsmart(t.entity,"alopu.password.length",0)>0&&t.showLoginOptions&&t.$store.state.alopu.registerable,expression:"$s.getsmart(entity, 'alopu.password.length', 0) > 0 && showLoginOptions && $store.state.alopu.registerable"}],staticClass:"full-width q-pa-no q-mb-xs"},[s("q-item-main",{staticClass:"full-width p-pa-no q-ma-no"},[s("form",{staticClass:"full-width q-pa-no q-ma-no",on:{submit:function(a){a.preventDefault(),t.$store.dispatch("login",{provider:"n"})}}},[s("q-input",{staticClass:"q-mb-sm no-shadow border-1 round-borders",attrs:{"float-label":"Confirm password",color:"white","inverted-light":"",type:"password"},model:{value:t.$store.state.alopu.passwordConfirmation,callback:function(a){t.$set(t.$store.state.alopu,"passwordConfirmation",a)},expression:"$store.state.alopu.passwordConfirmation"}})],1)])],1),t.$store.getters.loggedIn?t._e():s("q-item",{staticClass:"full-width q-pa-no q-mb-xsmd"},[s("q-item-main",{staticClass:"full-width"},[s("q-btn",{staticClass:"full-width",attrs:{color:"primary"},on:{click:function(a){t.$store.dispatch("login",{provider:"alopu"})}}},[t._v(t._s("haventchecked"==t.$store.state.alopu.registerable?"login / register":t.$store.state.alopu.registerable?"register":"login"))])],1)],1),t.$store.getters.loggedIn?s("q-item",{staticClass:"full-width q-pa-no q-mb-xsmd"},[s("q-item-main",{staticClass:"full-width text-tertiary"},[s("q-btn",{staticClass:"full-width",attrs:{color:"primary"},on:{click:function(a){t.$store.dispatch("logout")}}},[t._v("logout")])],1)],1):t._e()],1)],1)},o=[];r._withStripped=!0;var n=s("b2e8"),l={name:"planet-express-drawer-comp",data:function(){return{uid:this._uid,fbParams:{scope:"email,public_profile",return_scopes:!0},googleParams:{client_id:"211744308643-qbndqa7gutacqbkh0jrre05ihvdlfquv.apps.googleusercontent.com"}}},sockets:{connect:function(){}},created:function(){},methods:{},props:{siteTitle:{}},computed:{entity:{get:function(){return this.$store.state.alopu.entity},set:function(t){this.$store.commit("entity",{entity:t})}},showLoginOptions:{get:function(){return!this.$store.getters.loggedIn&&this.$store.state.app.showLoginOptions},set:function(t){this.$store.commit("showLoginOptions",t)}},mainDrawer:{get:function(){return this.$store.state.app.mainDrawer},set:function(t){this.$store.commit("mainDrawer",t)}}},components:{currentLocationNav:n["a"]},watch:{"$store.state.app.showLoginOptions":function(){this.showLoginOptions=this.$store.state.app.showLoginOptions}},route:{canActivate:function(){return!0}}},c=l,m=(s("b8bc"),s("2877")),p=Object(m["a"])(c,r,o,!1,null,"509d25b8",null);p.options.__file="planet-express-drawer.vue";var u=p.exports,q=s("3c2e"),d=s.n(q),g={mixins:[d()({vue:{reactiveSetter:!0}})],name:"default",data:function(){return{False:!1,wooo:!0,siteTitle:"alopu",uid:this._uid,fbParams:{scope:"email,public_profile",return_scopes:!0},googleParams:{client_id:"211744308643-qbndqa7gutacqbkh0jrre05ihvdlfquv.apps.googleusercontent.com"}}},sockets:{connect:function(){}},created:function(){},methods:{register:function(){this.showLoginOptions=!this.showLoginOptions},logout:function(){this.$store.dispatch("logout")}},watch:{"entity.alopu.username":function(){if(this.showLoginOptions&&(this.entity.alopu.username||0==this.entity.alopu.username)){clearTimeout(this.checkusername);var t=this;this.checkusername=setTimeout(function(){t.$store.dispatch("checkUsernameAvailability",t.entity.alopu.username)},200)}},"$store.state.app.pageHistory":function(){this.pageHistory=this.$store.state.app.pageHistory},"$store.state.alopu.feedback":function(){for(var t=0;t<this.getsmart(this,"$store.state.alopu.feedback.length",0);t++){var a=this.$store.state.alopu.feedback[0];this.$q.notify(a),this.$store.commit("removefeedback",0)}},"$store.state.alopu.dialog":function(){for(var t=0;t<this.getsmart(this,"$store.state.alopu.dialog.length",0);t++){var a=this.$store.state.alopu.dialog[0];this.$q.dialog(a),this.$store.commit("removedialog",0)}},"$store.state.alopu.entity":function(){this.entity=this.$store.state.alopu.entity,this.$store.getters.loggedIn&&this.$store.commit("showLoginOptions",!1)},"$store.state.app.showLoginOptions":function(){this.showLoginOptions=this.$store.state.app.showLoginOptions}},components:{planetExpressDrawer:u},computed:{navigator:{get:function(){return navigator}},showLoginOptions:{get:function(){return!this.$store.getters.loggedIn&&this.$store.state.app.showLoginOptions},set:function(t){this.$store.commit("showLoginOptions",t)}},mainDrawer:{get:function(){return this.$store.state.app.mainDrawer},set:function(t){this.$store.commit("mainDrawer",t)}},entity:{get:function(){return this.$store.state.alopu.entity},set:function(t){this.$store.commit("entity",{entity:t})}},pageHistory:{get:function(){return this.$store.state.app.pageHistory},set:function(t){this.$store.commit("pageHistory",t)}},feedback:{get:function(){return this.$store.state.alopu.feedback},set:function(t){this.$store.commit("feedback",t)}}}},h=g,v=(s("619a"),s("7a0c"),Object(m["a"])(h,e,i,!1,null,null,null));v.options.__file="default.vue";a["default"]=v.exports},"817c":function(t,a,s){},b8bc:function(t,a,s){"use strict";var e=s("fb5f"),i=s.n(e);i.a},fb5f:function(t,a,s){}}]);