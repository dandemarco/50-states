(function(){"use strict";var t={597:function(t,e,a){var n=a(963),i=a(252);function r(t,e,a,n,r,s){const o=(0,i.up)("page-header"),u=(0,i.up)("router-view"),c=(0,i.up)("page-footer");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(o),(0,i.Wm)(u),(0,i.Wm)(c)])}const s=t=>((0,i.dD)("data-v-30dbc27b"),t=t(),(0,i.Cn)(),t),o={id:"block-header"},u=s((()=>(0,i._)("h1",{id:"title"},"Have you visited every state?",-1))),c=[u];function d(t,e,a,n,r,s){return(0,i.wg)(),(0,i.iD)("div",o,c)}var l={name:"PageHeader"},p=a(744);const f=(0,p.Z)(l,[["render",d],["__scopeId","data-v-30dbc27b"]]);var h=f;const v=t=>((0,i.dD)("data-v-0427944e"),t=t(),(0,i.Cn)(),t),m={id:"navigation-links"},g={class:"nav-link"},A=(0,i.Uk)("Home"),y={class:"nav-link"},b=(0,i.Uk)("About this site"),w=v((()=>(0,i._)("p",null,[(0,i.Uk)("Header image by "),(0,i._)("a",{href:"https://unsplash.com/photos/gtCWBwbZNpM"},"John-Mark Smith on Unsplash.")],-1))),S=v((()=>(0,i._)("p",null,[(0,i._)("a",{target:"_blank",href:"https://icons8.com/icon/2652/map-editing"},"Map Editing"),(0,i.Uk)(" icon by "),(0,i._)("a",{target:"_blank",href:"https://icons8.com"},"Icons8")],-1)));function k(t,e,a,n,r,s){const o=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",m,[(0,i._)("span",g,[(0,i.Wm)(o,{to:"/"},{default:(0,i.w5)((()=>[A])),_:1})]),(0,i._)("span",y,[(0,i.Wm)(o,{to:"/about"},{default:(0,i.w5)((()=>[b])),_:1})])]),w,S])}var D={name:"PageFooter"};const V=(0,p.Z)(D,[["render",k],["__scopeId","data-v-0427944e"]]);var E=V;const I={class:"state-list-container"};function _(t,e,a,n,r,s){const o=(0,i.up)("state-summary"),u=(0,i.up)("state-detail");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",null,[(0,i.Wm)(o,{states:r.states},null,8,["states"])]),(0,i._)("div",I,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.states,(t=>((0,i.wg)(),(0,i.iD)("div",{class:"state-container",key:t.name},[(0,i.Wm)(u,{state:t,onUpdateVisited:s.updateVisited},null,8,["state","onUpdateVisited"])])))),128))])])}var O=a(577),R="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAE50lEQVRoge3Zf2wTZRzH8ff3us7FDf4AjUGBOFknRmMi3YIIxin8o38ZTIiJCcivUX6GxYCGgC6y8ENNhiB0gwEBA4khGv8w/sOiRCQGuwH+gWFtCZqhjJgYww8j63pf/7h21Ntd6ba7bjH7JE3au6fP87zuee6uvQfGMroiNdHkSUQnq8iOcde6j51qfLHPi4rrGr8tuTlpyhuiugkwRaS5vDRw9NTiyn+GUl/t/su1quZmlBeAUuCCIB/HIlWfWZCWhN5lkVSkaTigfgC6GaXKtrtHYHfqvpLohcWVfxVaZ7g1uUhUDwDBgXt1T0eket1diJDsb3gIIGeAdAnaZIrcEtWNwKxM8Zui7DdK2HV2eehqvnprooklCG2AuJVRYUE/pKLnanBARwoAuYxAHKWpcmLV8RMLJJ0tO2Nf1/OGEXgb9JVMx3oVOW4Y+lGsPnTRBXEAMIBuYIpTHwQ53Q/piITEtWMOIKdyCglRttoBAzuYfApDN6K8jjVdFGjuiITeckQIDcFA79FUX+lJYIZDlTcGQPIe6QzIemsDIE2VE6YdywewJ9x6eaqo2QAsA77viIRedkJ0rAjtApjVdnGCI0b5wxWSF5SNkERla0VP9/HhXO3qDl8pe7D80dSJBZJ2Q2TjiBE+vydkAMi6nKIi27y8XIP7SNiTwZwHpgIpFZ4tKbSRTIePZF6ep1AEQCpduhALYaIs7YyEzhl+dGqwGQyipjWxHqUZC7G8Y2XoU4CCR8Sv1LbEFysWQuGdzsIQqujqzpXVh7L7RnRELIS0kUVEQjvdytoQqzoj1S25+0dsRGqiiSXZkUBoKHAkTJTluSNR0xI/DSME8Wo6WZE5MAJTy8vplJuiQvxCQBEhfiKgSBC/EVAESDEQ4DOkWAjwEVJMBPh0H6mNxt/MIoZzsxtMPB+RmbsT41UkytB+AA4JAT5A0iXUAWWAqqrrox/7HXs4CPABIiJz+98i+8It8Yi9jBfnhD2eQ0zReTkfB2D8QIDHJ/szey49LPCEbXMWg4iU+YEAjyGBYMk8UKf//iLIXhSDYV6d3OLt1PrvtHJq646oLh3uie0UT0dElZfsw6Hws6HSjmh7aTB96szS6Te9bDMbTyEGdJmACN+g0p5O9bWfXzv9dy/bcIunkFgkNPfepfzJqHgc5EXGIKMtY5DRlv8NpP/yG25NLvJvVVcUNZsryoJHhrqq65Talvj87EquWI8crad1RVjVvY7KnmDwTvSHZU/+OVRATTQ5G/QDhOcym76TQtcMhwbIWdU1dUNOw7eAtnRfYNf5NY/9Wigg3No1XdTYDrya2dSDamPF9d8O3v1p1KhGeFLyNVGagGoARX4xhO3l17oPuYIcvgdcEZEd9u+FWy/PMdRcpzAfCACmwteGYbwfq58WywN4wDADW1R0FdbpcFvgE6OXbWfXhW6A09p1oaBBAOyZsTdZFTBYq6L1WH+LAc4I7IytqPoKEQV4+uhP5cG/718jsAkYD6RAD0s6+F5sdWVPbp2u64bFWNWdeSAx2exjvQr1wDgAETpR+RB0osK7wEPWseQLQ4xNP9ZPizvVlXcBFHA78liAAqZeAZl98NK43pSxxEQ2CDxi233WNM0N51Y9fjpfHfeGZFKMVd26w1fKbvemF6pqA9CnIls6V1R96VX9Yylm/gVXhFrnIvZ5VgAAAABJRU5ErkJggg==";const j=t=>((0,i.dD)("data-v-417a751c"),t=t(),(0,i.Cn)(),t),W={class:"state-info"},T={class:"state-name"},C=j((()=>(0,i._)("img",{class:"map-icon",src:R},null,-1)));function P(t,e,a,r,s,o){const u=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",W,[(0,i._)("span",T,(0,O.zw)(a.state.name),1),(0,i._)("div",null,[(0,i.wy)((0,i._)("input",{class:"visit-state",type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=t=>s.visited=t),onChange:e[1]||(e[1]=(...t)=>o.updateVisited&&o.updateVisited(...t))},null,544),[[n.e8,s.visited]])]),(0,i._)("div",null,[(0,i.Wm)(u,{to:{name:"StateMap",params:{state:a.state.name}}},{default:(0,i.w5)((()=>[C])),_:1},8,["to"])])])}var M={name:"StateDetail",emits:["update-visited"],props:{state:Object},data(){return{visited:this.state.visited}},methods:{updateVisited(){this.$emit("update-visited",this.state.name,this.visited)}}};const Z=(0,p.Z)(M,[["render",P],["__scopeId","data-v-417a751c"]]);var N=Z;const Y={key:0},H={key:0,id:"all-visited-message"};function U(t,e,a,n,r,s){return a.states.length>0?((0,i.wg)(),(0,i.iD)("div",Y,[(0,i._)("p",null,"There are a total of "+(0,O.zw)(a.states.length)+" states and the District of Columbia",1),(0,i._)("p",null,"You have visted "+(0,O.zw)(s.totalVisited)+" "+(0,O.zw)(s.units),1),s.areAllVisited?((0,i.wg)(),(0,i.iD)("p",H,"You have visited all the states plus DC!")):(0,i.kq)("",!0)])):(0,i.kq)("",!0)}var B={name:"StateSummary",props:{states:Array},computed:{totalVisited(){let t=0;return this.states.forEach((e=>{e.visited&&t++})),t},units(){return 1==this.totalVisited?"state":"states"},areAllVisited(){return this.totalVisited===this.states.length}}};const G=(0,p.Z)(B,[["render",U],["__scopeId","data-v-75e1db58"]]);var Q=G,q={components:{StateDetail:N,StateSummary:Q},name:"StateList",data(){return{states:[]}},mounted(){this.fetchAllStates()},methods:{fetchAllStates(){this.$stateService.getAllStates().then((t=>{this.states=t})).catch((t=>{alert("Sorry, can't fetch state list"),console.error(t)}))},updateVisited(t,e){this.$stateService.setVisited(t,e).then((t=>{this.fetchAllStates()})).catch((t=>{alert("Sorry, can't update state"),console.error(t)}))}}};const x=(0,p.Z)(q,[["render",_],["__scopeId","data-v-227aaeb7"]]);var J=x,z={name:"App",components:{PageHeader:h,PageFooter:E,StateList:J}};const F=(0,p.Z)(z,[["render",r]]);var L=F,X=a(669),K=a.n(X),$={getAllStates(){return K().get("/api/states").then((t=>t.data))},setVisited(t,e){let a={visited:e};return K().patch("/api/states/"+t,a).then((t=>t.data))},getOneState(t){return K().get("/api/state/"+t).then((t=>t.data))}},tt=a(119);const et=(0,i._)("h2",null,"Where have you traveled to?",-1),at=(0,i._)("p",null,"Use this site to keep track of which states you have traveled to",-1),nt=(0,i._)("p",null,"A Vue.js site by Dan",-1),it=[et,at,nt];function rt(t,e,a,n,r,s){return(0,i.wg)(),(0,i.iD)("div",null,it)}var st={name:"AboutSite"};const ot=(0,p.Z)(st,[["render",rt]]);var ut=ot;const ct={class:"state-map"},dt={key:0},lt={key:1},pt={key:2,id:"map-container"};function ft(t,e,a,n,r,s){const o=(0,i.up)("l-tile-layer"),u=(0,i.up)("l-map");return(0,i.wg)(),(0,i.iD)("div",ct,[(0,i._)("h2",null,"The state of "+(0,O.zw)(r.state.name),1),r.state.visited?((0,i.wg)(),(0,i.iD)("p",dt,"You have visited this state")):((0,i.wg)(),(0,i.iD)("p",lt,"You have not visited this state yet")),r.dataReady?((0,i.wg)(),(0,i.iD)("div",pt,[(0,i.Wm)(u,{ref:"map",onReady:s.onMapReady,center:s.mapCenter,zoom:r.state.zoom},{default:(0,i.w5)((()=>[(0,i.Wm)(o,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:"© OpenStreetMap contributors"})])),_:1},8,["onReady","center","zoom"])])):(0,i.kq)("",!0)])}var ht=a(662),vt={name:"StateMap",components:{LMap:ht.iA,LTileLayer:ht.Hw},data(){return{state:{},dataReady:!1,mapReady:!1}},mounted(){this.state.name=this.$route.params.state,this.fetchStateData()},methods:{fetchStateData(){this.$stateService.getOneState(this.state.name).then((t=>{this.state=t,this.dataReady=!0,this.setMapView()})).catch((t=>{t.response&&404===t.response.status?this.state.name="?":(alert("Sorry, error fetching data about this state"),console.error(t))}))},onMapReady(){this.mapReady=!0,this.setMapView()},setMapView(){this.mapReady&&this.dataReady&&this.$refs.map.leafletObject.setView(this.mapCenter,this.state.zoom)}},computed:{mapCenter(){return[this.state.lat,this.state.lon]}}};const mt=(0,p.Z)(vt,[["render",ft],["__scopeId","data-v-2aedcaa6"]]);var gt=mt,At=(0,tt.p7)({history:(0,tt.r5)(),routes:[{path:"/",name:"StateList",component:J},{path:"/about",name:"AboutSite",component:ut},{path:"/map/:state",name:"StateMap",component:gt}]});let yt=(0,n.ri)(L);yt.config.globalProperties.$stateService=$,yt.use(At),yt.mount("#app")}},e={};function a(n){var i=e[n];if(void 0!==i)return i.exports;var r=e[n]={exports:{}};return t[n].call(r.exports,r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(e,n,i,r){if(!n){var s=1/0;for(d=0;d<t.length;d++){n=t[d][0],i=t[d][1],r=t[d][2];for(var o=!0,u=0;u<n.length;u++)(!1&r||s>=r)&&Object.keys(a.O).every((function(t){return a.O[t](n[u])}))?n.splice(u--,1):(o=!1,r<s&&(s=r));if(o){t.splice(d--,1);var c=i();void 0!==c&&(e=c)}}return e}r=r||0;for(var d=t.length;d>0&&t[d-1][2]>r;d--)t[d]=t[d-1];t[d]=[n,i,r]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){var t,e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__};a.t=function(n,i){if(1&i&&(n=this(n)),8&i)return n;if("object"===typeof n&&n){if(4&i&&n.__esModule)return n;if(16&i&&"function"===typeof n.then)return n}var r=Object.create(null);a.r(r);var s={};t=t||[null,e({}),e([]),e(e)];for(var o=2&i&&n;"object"==typeof o&&!~t.indexOf(o);o=e(o))Object.getOwnPropertyNames(o).forEach((function(t){s[t]=function(){return n[t]}}));return s["default"]=function(){return n},a.d(r,s),r}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,n){return a.f[n](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/"+t+"."+{93:"bfcff94b",243:"641845ea",431:"6f785a78",633:"96d63457",858:"3c47c181"}[t]+".js"}}(),function(){a.miniCssF=function(t){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="client:";a.l=function(n,i,r,s){if(t[n])t[n].push(i);else{var o,u;if(void 0!==r)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var l=c[d];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==e+r){o=l;break}}o||(u=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",e+r),o.src=n),t[n]=[i];var p=function(e,a){o.onerror=o.onload=null,clearTimeout(f);var i=t[n];if(delete t[n],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((function(t){return t(a)})),e)return e(a)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=p.bind(null,o.onerror),o.onload=p.bind(null,o.onload),u&&document.head.appendChild(o)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t={143:0};a.f.j=function(e,n){var i=a.o(t,e)?t[e]:void 0;if(0!==i)if(i)n.push(i[2]);else{var r=new Promise((function(a,n){i=t[e]=[a,n]}));n.push(i[2]=r);var s=a.p+a.u(e),o=new Error,u=function(n){if(a.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var r=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;o.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",o.name="ChunkLoadError",o.type=r,o.request=s,i[1](o)}};a.l(s,u,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,r,s=n[0],o=n[1],u=n[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(i in o)a.o(o,i)&&(a.m[i]=o[i]);if(u)var d=u(a)}for(e&&e(n);c<s.length;c++)r=s[c],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(d)},n=self["webpackChunkclient"]=self["webpackChunkclient"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(597)}));n=a.O(n)})();
//# sourceMappingURL=app.351a4a78.js.map