(function(t){function e(e){for(var s,r,n=e[0],i=e[1],o=e[2],v=0,f=[];v<n.length;v++)r=n[v],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&f.push(c[r][0]),c[r]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);u&&u(e);while(f.length)f.shift()();return l.push.apply(l,o||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],s=!0,n=1;n<a.length;n++){var i=a[n];0!==c[i]&&(s=!1)}s&&(l.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},c={app:0},l=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],i=n.push.bind(n);n.push=e,n=n.slice();for(var o=0;o<n.length;o++)e(n[o]);var u=i;l.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"14e3":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",[t._m(0),a("div",[t._t("default")],2)]),a("Menu")],1)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-5 "},[a("h1",{},[t._v(" Behavioral Task Hub ")]),a("h2")])}];a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return c}))},"368c":function(t,e,a){},"3c3c":function(t,e,a){"use strict";var s=a("6d14"),c=a.n(s);c.a},5679:function(t,e){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navbar"),a("router-view")],1)},l=[],r=(a("5c0b"),a("2877")),n={},i=Object(r["a"])(n,c,l,!1,null,null,null),o=i.exports,u=a("8c4f"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("div",{staticStyle:{width:"100%",height:"500px"}}),a("item-card")],1)},f=[],d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{attrs:{fluid:""}},[a("b-row",{staticClass:"bg-light p-5"},[a("b-col",{staticClass:"my-1",attrs:{lg:"10"}},[a("b-form-group",{staticClass:"mb-0",attrs:{label:"","label-cols-sm":"3","label-align-sm":"right","label-size":"sm","label-for":"filterInput"}},[a("b-input-group",{attrs:{size:"sm"}},[a("b-form-input",{attrs:{type:"search",id:"filterInput"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),a("b-input-group-append",[a("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v("Clear")])],1)],1)],1)],1),a("b-col",{staticClass:"my-1",attrs:{lg:"12"}},[a("b-form-group",{staticClass:"mb-0",attrs:{label:"Filter On","label-cols-sm":"2","label-align-sm":"right"}},[a("b-row",[a("b-col",{staticClass:"my-1",attrs:{lg:"3"}},[a("div",{staticClass:"text-left"},[a("span",{staticClass:"font-weight-lighter small text-left"},[t._v("Platform")]),a("multiselect",{attrs:{options:t.platforms,multiple:!0,selectLabel:"",selectGroupLabel:"Select group",deselectGroupLabel:"Remove group",deselectLabel:"Remove","option-height":20,"group-values":"options","group-label":"platform","group-select":!0,placeholder:"Select",label:"name","track-by":"name",taggable:!0},on:{input:t.updateTable,remove:t.updateTable},model:{value:t.valuePlatform,callback:function(e){t.valuePlatform=e},expression:"valuePlatform"}})],1)]),a("b-col",{staticClass:"my-1",attrs:{lg:"3"}},[a("div",{staticClass:"text-left"},[a("span",{staticClass:"font-weight-lighter small text-left"},[t._v("Features")]),a("multiselect",{attrs:{options:t.features,multiple:!0,selectLabel:"",selectGroupLabel:"",deselectGroupLabel:"Remove group",deselectLabel:"Remove","option-height":20,placeholder:"Select",label:"name","track-by":"name",taggable:!0},on:{input:t.updateTable,remove:t.updateTable},model:{value:t.valueFeature,callback:function(e){t.valueFeature=e},expression:"valueFeature"}})],1)]),a("b-col",{staticClass:"my-1",attrs:{lg:"3"}},[a("div",{staticClass:"text-left"},[a("span",{staticClass:"font-weight-lighter small text-left"},[t._v("Tags")]),a("multiselect",{attrs:{options:t.tagsvalues,multiple:!0,selectLabel:"",selectGroupLabel:"",deselectGroupLabel:"Remove group",deselectLabel:"Remove","option-height":20,placeholder:"Select",label:"name","track-by":"name",taggable:!0},on:{input:t.updateTable,remove:t.updateTable},model:{value:t.valueTags,callback:function(e){t.valueTags=e},expression:"valueTags"}})],1)]),a("b-col",{staticClass:"my-1",attrs:{lg:"3"}},[a("div",{staticClass:"text-left"},[a("span",{staticClass:"font-weight-lighter small text-left"},[t._v("Institution")]),a("multiselect",{attrs:{options:t.institutions,"option-height":20,placeholder:"Pick a value",selectLabel:"Select",deselectLabel:"Remove"},on:{input:t.updateTable},model:{value:t.valueInstitutions,callback:function(e){t.valueInstitutions=e},expression:"valueInstitutions"}})],1)])],1)],1)],1),a("b-col",{staticClass:"my-1",attrs:{sm:"5",md:"6"}},[a("b-form-group",{staticClass:"mb-0",attrs:{label:"Per page","label-cols-sm":"6","label-cols-md":"4","label-cols-lg":"3","label-align-sm":"right","label-size":"sm","label-for":"perPageSelect"}},[a("b-form-select",{attrs:{id:"perPageSelect",size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1),a("b-col",{staticClass:"my-1",attrs:{sm:"7",md:"6"}},[a("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.data.totalRows,"per-page":t.perPage,align:"fill",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1),a("b-table",{attrs:{striped:"",hover:"",stacked:"md",items:t.data.filteredData,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage,filter:t.filter,filterIncludedFields:t.filterOn,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(tags)",fn:function(e){return t._l(e.unformatted,(function(e){return a("b-badge",{key:e,attrs:{pill:"",variant:"info"}},[t._v(t._s(e))])}))}},{key:"cell(taskName)",fn:function(e){return[a("strong",{staticClass:"text-info font-weight-bolder"},[t._v(t._s(t._f("capitalize")(e.value)))])]}},{key:"cell(platform)",fn:function(e){return t._l(e.value,(function(e){return a("b-badge",{key:e,attrs:{pill:"",variant:t.tags[e]}},[t._v(t._s(e)),a("br")])}))}},{key:"cell(features)",fn:function(e){return t._l(e.value,(function(e){return a("b-badge",{key:e,attrs:{pill:"",variant:"light"}},[t._v(t._s(e)),a("br")])}))}},{key:"cell(links)",fn:function(e){return t._l(e.value,(function(e,s){return a("span",{key:s},["deployment"==s?a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.focus",modifiers:{focus:!0}}],attrs:{href:"${tag}",title:"Deployment",variant:"none"}},[a("b-iconstack",{attrs:{"font-scale":"2"}},[a("b-icon",{attrs:{stacked:"",icon:"circle-fill",variant:"dark"}}),a("b-icon",{attrs:{stacked:"",icon:"cloud-upload",scale:"0.6",variant:"white"}})],1)],1):t._e(),"sourceCode"==s?a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.focus",modifiers:{focus:!0}}],attrs:{href:"${tag}",title:"Source Code",variant:"none"}},[a("b-iconstack",{attrs:{"font-scale":"2"}},[a("b-icon",{attrs:{stacked:"",icon:"circle-fill",variant:"dark"}}),a("b-icon",{attrs:{stacked:"",icon:"code-slash",scale:"0.6",variant:"white"}})],1)],1):t._e()],1)}))}},{key:"cell(publication)",fn:function(e){return t._l(e.value,(function(e,s){return a("span",{key:s},["doi"==s?a("span",[t._v(t._s(e))]):t._e(),"url"==s?a("b-link",{attrs:{href:"${tag}"}},[a("b-icon-box-arrow-up-right",{attrs:{"font-scale":"1.5"}})],1):t._e()],1)}))}},{key:"cell(framework)",fn:function(e){return t._l(e.value,(function(e,s){return a("span",{key:s},["library"==s?a("span",[t._v("Library: "+t._s(e))]):t._e(),a("br"),"language"==s?a("span",[t._v("Language: "+t._s(e))]):t._e()])}))}},{key:"cell(lab)",fn:function(e){return[t._v(" "+t._s(t._f("capitalize")(e.value))+" "),a("b-button",{staticClass:"mr-1",attrs:{size:"sm",variant:"white"},on:{click:function(a){return t.info(e.item,e.index,a.target)}}},[a("b-icon-info-fill",{attrs:{"font-scale":"2"}})],1)]}},{key:"row-details",fn:function(e){return[a("b-card",[a("ul",t._l(e.item.lab,(function(e,s){return a("li",{key:s},[t._v(" "+t._s(s)+": "+t._s(e)+" ")])})),0)])]}}])}),t.infoModal?a("b-modal",{attrs:{id:t.infoModal.id,title:t._f("capitalize")(t.infoModal.title),"ok-only":""},on:{hide:t.resetInfoModal}},[a("div",{staticClass:"text-center"},[a("span",[a("b",{staticClass:"text-warning"},[t._v("Institution: ")]),t._v(t._s(t.infoModal.institution))]),a("br"),a("span",[a("b",{staticClass:"text-warning"},[t._v("Principal Investigator: ")]),t._v(t._s(t.infoModal.principalInvestigator))]),a("br"),a("b",{staticClass:"text-warning"},[t._v("Developers: ")]),t._l(t.infoModal.developers,(function(e,s){return a("span",{key:s},[t._v(t._s(e)),a("br")])})),a("b-link",{attrs:{href:"infoModal.website"}},[a("b-icon-box-arrow-up-right",{attrs:{"font-scale":"1.5"}})],1)],2)]):t._e(),a("b-row",[a("b-col",{staticClass:"my-1",attrs:{sm:"5",md:"6"}},[a("b-form-group",{staticClass:"mb-0",attrs:{label:"Per page","label-cols-sm":"6","label-cols-md":"4","label-cols-lg":"3","label-align-sm":"right","label-size":"sm","label-for":"perPageSelect"}},[a("b-form-select",{attrs:{id:"perPageSelect",size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1),a("b-col",{staticClass:"my-1",attrs:{sm:"7",md:"6"}},[a("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.data.totalRows,"per-page":t.perPage,align:"fill",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)},h=[],p=(a("a630"),a("c975"),a("fb6a"),a("b0c0"),a("d3b7"),a("6062"),a("3ca3"),a("ddb0"),a("5530")),m=a("8e5f"),b=a.n(m),g=a("2f62"),z={components:{Multiselect:b.a},data:function(){return{valuePlatform:[],valueFeature:[],valueTags:[],valueInstitutions:"",platforms:[{platform:"Desktop",options:[{name:"windows"},{name:"linux"},{name:"mac"}]},{platform:"Mobile",options:[{name:"ios"},{name:"android"}]}],features:[{name:"browser"},{name:"electron"},{name:"docker"},{name:"eegTrigger"},{name:"mturk"}],tags:{windows:"success",linux:"success",mac:"success",ios:"primary",android:"primary",browser:"light",eegTrigger:"light",mturk:"light",docker:"light",electron:"light"},fields:[{key:"taskName",label:"Task name",sortable:!0,sortDirection:"desc"},{key:"links",label:"Links",class:"text-center"},{key:"framework",label:"Framework",class:"text-center"},{key:"lab",label:"Labs",sortable:!0,formatter:function(t){return t["name"]},sortByFormatted:!0,class:"text-center"},{key:"publication",label:"Publication",class:"text-center"},{key:"platform",label:"Platform",class:"text-center",formatter:function(t){var e=[];for(var a in t)for(var s in t[a])1==t[a][s]&&e.push(s);return e},sortByFormatted:!0,filterByFormatted:!0},{key:"features",label:"Features",class:"text-center",formatter:function(t){var e=[];for(var a in t)1==t[a]&&e.push(a);return e},sortByFormatted:!0,filterByFormatted:!0},{key:"tags",label:"Tags",formatter:function(t){for(var e="",a=0;a<t.length;a++)e+=String(t[a])+"\n";return e},sortByFormatted:!0,filterByFormatted:!0}],currentPage:1,perPage:5,pageOptions:[5,10,15,20],sortBy:"",sortDesc:!1,sortDirection:"asc",filter:null,filterOn:[],infoModal:{id:"info-modal",title:"",institution:"",principalInvestigator:"",developers:"",website:""}}},computed:Object(p["a"])({},Object(g["c"])(["data"]),{tagsvalues:function(){var t=new Set;for(var e in this.data.data)for(var a in this.data.data[e]["tags"])t.add(this.data.data[e]["tags"][a]);var s=[],c=Array.from(t);for(var l in c)s.push({name:c[l]});return s},institutions:function(){var t=new Set;for(var e in this.data.data)t.add(this.data.data[e]["lab"]["institution"]);var a=[],s=Array.from(t);for(var c in s)a.push(s[c]);return a}}),mounted:function(){this.fetchData()},methods:Object(p["a"])({},Object(g["b"])("data",["fetchData"]),{info:function(t,e,a){this.infoModal.title=null==t?void 0:t.lab.name,this.infoModal.institution=null==t?void 0:t.lab.institution,this.infoModal.principalInvestigator=null==t?void 0:t.lab.principalInvestigator,this.infoModal.developers=null==t?void 0:t.lab.developers,this.infoModal.website=null==t?void 0:t.lab.website,this.$root.$emit("bv::show::modal",this.infoModal.id,a)},resetInfoModal:function(){this.infoModal.title="",this.infoModal.institution="",this.infoModal.principalInvestigator="",this.infoModal.developers="",this.infoModal.website=""},onFiltered:function(t){this.data.totalRows=t.length,this.currentPage=1},updateTable:function(){var t=[];if(this.valuePlatform.length>0||this.valueTags.length>0||this.valueFeature.length>0||this.valueInstitutions.length>0){for(var e in this.data.data){var a=this.data.data[e],s=[],c=a.tags;for(var l in c)s.push(c[l]);var r=a.lab.institution,n=[],i=a.platform;for(var o in i)for(var u in i[o])1==i[o][u]&&n.push(u);var v=[],f=a.features;for(var d in f)1==f[d]&&v.push(d);var h=[];for(var p in this.valueTags)h.push(this.valueTags[p]["name"]);var m=this.valueInstitutions,b=[];for(var g in this.valuePlatform)b.push(this.valuePlatform[g]["name"]);var z=[];for(var _ in this.valueFeature)z.push(this.valueFeature[_]["name"]);var M=!0;if(h.length>0)for(var y in h)if(!(s.indexOf(h[y])>=0)){M=!1;break}if(m.length>0&&m!=r&&(M=!1),b.length>0)for(var k in b)if(!(n.indexOf(b[k])>=0)){M=!1;break}if(z.length>0)for(var w in z)if(!(v.indexOf(z[w])>=0)){M=!1;break}M&&t.push(a)}this.data.filteredData=t}else this.data.filteredData=this.data.data}}),filters:{capitalize:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}}},_=z,M=(a("60bc"),a("ed27"),Object(r["a"])(_,d,h,!1,null,"02ac6659",null)),y=M.exports,k={name:"SearchPage",components:{"item-card":y},computed:{},methods:{},mounted:function(){}},w=k,C=Object(r["a"])(w,v,f,!1,null,null,null),x=C.exports,P=a("f820");s["default"].use(u["a"]);var T=[{path:"/",name:"About",component:P["default"]},{path:"/Search",name:"SearchPage",component:x}],O=new u["a"]({base:"/",routes:T}),S=O,V=(a("d81d"),a("bc3a")),j=a.n(V),H=a("8f3c"),B=a.n(H),D=j.a.create({url:"https://api.github.com/graphql",method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(Object({VUE_APP_GH_TOKEN:"cefeb66069de1c607d4fc90673bf29f5dcf882f4",VUE_APP_TITAN_BRANCH:"develop",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_GITHUB_TOKEN),"User-Agent":Object({VUE_APP_GH_TOKEN:"cefeb66069de1c607d4fc90673bf29f5dcf882f4",VUE_APP_TITAN_BRANCH:"develop",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_GITHUB_USER},timeout:1e4}),L=function(t){return'{\n        repository(owner: "brown-ccv", name: "task-registry-faker") {\n            object(expression: "master:'.concat(t,'/") {\n              ... on Tree {\n                entries {\n                  oid\n                  object {\n                    ... on Blob {\n                      text\n                    }\n                  }\n                  name\n                }\n              }\n            }\n          }\n    }')},E=function(t){var e=t.data.data.repository.object.entries,a=e.map((function(t){return t.text=B.a.parse(t.object.text)}));return a},A={getData:function(t){return D({data:{query:t}})}},I={namespaced:!0,state:{data:[],filteredData:[],totalRows:0},mutations:{SET_DATA:function(t,e){t.data=e,t.filteredData=e,t.totalRows=e.length}},actions:{fetchData:function(t){var e=t.commit;A.getData(L("data")).then((function(t){e("SET_DATA",E(t))})).catch((function(t){}))}}};s["default"].use(g["a"]);var F=new g["a"].Store({state:{},mutations:{},actions:{},modules:{data:I}}),N=(a("f9e3"),a("2dd8"),a("5f5b")),R=a("b1e0"),U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"navbar-brand"},[a("CCVLogo",{staticClass:"logo"}),a("BrownLogo",{staticClass:"brown-logo"})],1),a("div",{staticClass:"navbar-menu"},[a("div",{staticClass:"nav-end"},[a("span",{staticClass:"navbar-item text-dark"},[a("router-link",{attrs:{to:"/"}},[t._v("About")])],1),t._v(" | "),a("span",{staticClass:"navbar-item text-dark"},[a("router-link",{attrs:{to:"/Search"}},[t._v("Search")])],1)])])])},$=[],G=(a("368c"),a("738b")),K=a.n(G),q=a("f00b"),J=a.n(q),Q={components:{CCVLogo:K.a,BrownLogo:J.a}},W=Q,X=Object(r["a"])(W,U,$,!1,null,null,null),Y=X.exports;s["default"].use(N["a"]),s["default"].use(R["a"]),s["default"].config.productionTip=!1,s["default"].component("Navbar",Y),new s["default"]({router:S,store:F,render:function(t){return t(o)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),c=a.n(s);c.a},6109:function(t,e,a){"use strict";var s=a("5679"),c=a.n(s);e["default"]=c.a},"6d14":function(t,e,a){},"738b":function(t,e,a){a("99af");var s=a("ded3"),c=a("4082");t.exports={functional:!0,render:function(t,e){var a=e._c,l=(e._v,e.data),r=e.children,n=void 0===r?[]:r,i=l.class,o=l.staticClass,u=l.style,v=l.staticStyle,f=l.attrs,d=void 0===f?{}:f,h=c(l,["class","staticClass","style","staticStyle","attrs"]);return a("svg",s({class:["ccv-logo",i,o],style:[u,v],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 810 306"},d)},h),n.concat([a("path",{staticClass:"c1",attrs:{d:"M117 98c-4.4 0-8-3.6-8-8V18c0-4.4 3.6-8 8-8h72c4.4 0 8 3.6 8 8v72c0 4.4-3.6 8-8 8h-72zM216 98c-4.4 0-8-3.6-8-8V18c0-4.4 3.6-8 8-8h72c4.4 0 8 3.6 8 8v72c0 4.4-3.6 8-8 8h-72zM18 197c-4.4 0-8-3.6-8-8v-72c0-4.4 3.6-8 8-8h72c4.4 0 8 3.6 8 8v72c0 4.4-3.6 8-8 8H18zM117 296c-4.4 0-8-3.6-8-8v-72c0-4.4 3.6-8 8-8h72c4.4 0 8 3.6 8 8v72c0 4.4-3.6 8-8 8h-72zM216 296c-4.4 0-8-3.6-8-8v-72c0-4.4 3.6-8 8-8h72c4.4 0 8 3.6 8 8v72c0 4.4-3.6 8-8 8h-72z"}}),a("path",{staticClass:"c2",attrs:{d:"M316 97c-4.4 0-8-3.6-8-8V17c0-4.4 3.6-8 8-8h72c4.4 0 8 3.6 8 8v72c0 4.4-3.6 8-8 8h-72zM415 97c-4.4 0-8-3.6-8-8V17c0-4.4 3.6-8 8-8h72c4.4 0 8 3.6 8 8v72c0 4.4-3.6 8-8 8h-72zM217 196c-4.4 0-8-3.6-8-8v-72c0-4.4 3.6-8 8-8h72c4.4 0 8 3.6 8 8v72c0 4.4-3.6 8-8 8h-72zM316 295c-4.4 0-8-3.6-8-8v-72c0-4.4 3.6-8 8-8h72c4.4 0 8 3.6 8 8v72c0 4.4-3.6 8-8 8h-72zM415 295c-4.4 0-8-3.6-8-8v-72c0-4.4 3.6-8 8-8h72c4.4 0 8 3.6 8 8v72c0 4.4-3.6 8-8 8h-72z"}}),a("path",{staticClass:"v",attrs:{d:"M594 190c0 4.4-3.6 8-8 8h-72c-4.4 0-8-3.6-8-8v-72c0-4.4 3.6-8 8-8h72c4.4 0 8 3.6 8 8v72zM594 91c0 4.4-3.6 8-8 8h-72c-4.4 0-8-3.6-8-8V19c0-4.4 3.6-8 8-8h72c4.4 0 8 3.6 8 8v72zM693 289c0 4.4-3.6 8-8 8h-72c-4.4 0-8-3.6-8-8v-72c0-4.4 3.6-8 8-8h72c4.4 0 8 3.6 8 8v72zM792 190c0 4.4-3.6 8-8 8h-72c-4.4 0-8-3.6-8-8v-72c0-4.4 3.6-8 8-8h72c4.4 0 8 3.6 8 8v72zM792 91c0 4.4-3.6 8-8 8h-72c-4.4 0-8-3.6-8-8V19c0-4.4 3.6-8 8-8h72c4.4 0 8 3.6 8 8v72z"}})]))}}},"9c0c":function(t,e,a){},bea2:function(t,e,a){},ed27:function(t,e,a){"use strict";var s=a("bea2"),c=a.n(s);c.a},f00b:function(t,e,a){a("99af");var s=a("ded3"),c=a("4082");t.exports={functional:!0,render:function(t,e){var a=e._c,l=(e._v,e.data),r=e.children,n=void 0===r?[]:r,i=l.class,o=l.staticClass,u=l.style,v=l.staticStyle,f=l.attrs,d=void 0===f?{}:f,h=c(l,["class","staticClass","style","staticStyle","attrs"]);return a("svg",s({class:["brown-logo-color",i,o],style:[u,v],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 287"},d)},h),n.concat([a("g",{staticClass:"st0"},[a("path",{staticClass:"st1",attrs:{d:"M215.9 143.5v21.1c0 6.5 1.3 8.7 8.3 8.6 8.1 0 15-4.1 15-14.3 0-10.6-7.8-15.4-17.7-15.4h-5.6zm0-2.8h6.1c9.3 0 13.9-4.4 13.9-12.3 0-5.8-2.4-12.3-13.9-12.3-3.2 0-4.5.3-5.3.6-.6.2-.9.6-.9 2.5l.1 21.5zm9.5-27.5c7 0 10.9 1.2 14.1 3.4 3.3 2.3 5 5.8 5 10.6 0 8.5-8 12.7-12.7 13.9v.2c8.8 1.3 16.8 6.5 16.8 16.3 0 6.9-3.4 11.7-9 14.9-5 2.7-11.1 3.7-18.5 3.7h-22.3V174c8.2-.6 8.9-1.3 8.9-11.8v-34.9c-.1-10.6-.7-11.2-8.3-11.8v-2.2l26-.1zM282.4 145.7h5.6c4 0 7.1-.5 9.7-2.6 4.2-3.3 5.6-8 5.6-12.8 0-10.2-7.4-14.2-14.6-14.2-3.3 0-4.7.2-5.4.5-.6.2-.9.7-.9 2.6v26.5zm0 16.5c0 10.5.8 11.2 8.7 11.8v2.2h-25.8V174c8.1-.6 8.9-1.3 8.9-11.8v-34.9c0-10.6-.8-11.2-8.5-11.8v-2.2h24.6c6.2 0 11.7.9 15.3 3.3 3.9 2.4 6.4 6.8 6.4 12.4 0 8-4.9 13.8-12.8 17 1.8 2.9 5.7 9.6 8.6 13.9 3.5 5.1 5.5 7.7 8.1 10.7 2 2.4 3.8 4 7.3 4.8l-.2 1.8h-1.4c-11.1-.3-14.5-3.7-18.2-9-3-4.4-7.1-11.5-9.8-16.1-1.5-2.5-3.1-3.5-6.1-3.5h-5.2v13.6h.1zM364.4 115c-11.4 0-21.1 9.4-21.1 27.6 0 18.7 9.8 31.9 23.9 31.9 11.6 0 21.1-9 21.1-27 0-21-10.1-32.5-23.9-32.5m33.3 28.9c0 20.2-14 33.8-32.5 33.8-18.3 0-31.3-14-31.3-32.3 0-16.3 11.4-33.6 33-33.6 16.7 0 30.8 13 30.8 32.1M431.8 115.5l-3 .4c-4.4.6-4.9 1.4-3.6 5.7l13.1 41.3h.2l15.5-48.6h2.3l17.5 48.5h.2c4-12.2 9.6-32.7 11.2-39.6 1.3-5.6.8-6.8-3.5-7.3l-2.8-.4v-2.2h20.5v2.2c-6.4.8-7.1 1.2-10.3 10-.9 2.4-7.9 24.7-16.1 51.3h-2.6L453 129.4l-.2.2-15.8 47.2h-2.7l-16.8-52c-2.6-8-4.1-8.7-9.6-9.3v-2.2h23.7v2.2h.2zM570 176.9h-2.5l-42.1-51.1h-.2v24.7c0 10.2.4 15.4.8 18.4.5 3.4 3.1 4.7 9.5 5v2.2h-23.3V174c5.3-.2 7.8-1.6 8.3-5 .4-3 .8-8.2.8-18.4v-21c0-7-.1-8.5-1.8-10.8-1.9-2.3-4.5-3-8.5-3.3v-2.2h14.1l40.8 48.8h.2v-23.2c0-10.2-.4-15.4-.8-18.4-.5-3.4-3.1-4.7-9.5-5v-2.2H579v2.2c-5.3.2-7.8 1.6-8.3 5-.4 3-.8 8.2-.8 18.4l.1 38z"}})]),a("path",{staticClass:"st2",attrs:{d:"M216.9 143.7v20.9c0 6.4 1.3 8.6 8.3 8.5 8.1 0 14.9-4 14.9-14.2 0-10.5-7.7-15.3-17.6-15.3h-5.6v.1zm0-2.8h6.1c9.2 0 13.8-4.3 13.8-12.2 0-5.8-2.4-12.2-13.7-12.2-3.2 0-4.5.3-5.3.6-.6.2-.9.6-.9 2.5v21.3zm9.4-27.2c6.9 0 10.9 1.2 14 3.4 3.3 2.3 5 5.8 5 10.6 0 8.5-8 12.6-12.6 13.7v.2c8.7 1.2 16.6 6.4 16.6 16.1 0 6.8-3.4 11.6-8.9 14.8-4.9 2.7-11.1 3.7-18.3 3.7H200V174c8.1-.6 8.8-1.3 8.8-11.7v-34.6c-.1-10.5-.7-11.1-8.3-11.7v-2.2h25.8v-.1zM282.8 145.9h5.6c3.9 0 7-.5 9.6-2.6 4.1-3.3 5.6-8 5.6-12.7 0-10.1-7.3-14.1-14.5-14.1-3.3 0-4.6.2-5.4.5-.6.2-.9.7-.9 2.6v26.3zm0 16.3c0 10.5.8 11.1 8.7 11.7v2.2h-25.6v-2.2c8.1-.6 8.8-1.3 8.8-11.7v-34.6c0-10.5-.8-11.1-8.5-11.7v-2.2h24.4c6.1 0 11.6.9 15.2 3.3 3.8 2.4 6.3 6.7 6.3 12.3 0 8-4.9 13.6-12.7 16.8 1.7 2.9 5.7 9.5 8.5 13.7 3.5 5.1 5.5 7.7 8.1 10.6 2 2.4 3.7 3.9 7.2 4.8l-.2 1.8h-1.3c-11-.3-14.4-3.7-18.1-8.9-3-4.3-7-11.4-9.7-16-1.5-2.5-3.1-3.4-6-3.4h-5.2v13.5h.1zM364.1 115.4c-11.3 0-20.9 9.3-20.9 27.4 0 18.5 9.7 31.6 23.7 31.6 11.5 0 20.9-8.9 20.9-26.8 0-20.8-10-32.2-23.7-32.2m33 28.6c0 20-13.9 33.5-32.3 33.5-18.2 0-31-13.9-31-32 0-16.1 11.3-33.3 32.7-33.3 16.7 0 30.6 12.9 30.6 31.8M429.9 115.9l-3 .4c-4.3.6-4.9 1.4-3.6 5.7l13 40.9h.2l15.4-48.2h2.3l17.4 48.1h.2c3.9-12.1 9.5-32.4 11.1-39.3 1.3-5.6.8-6.7-3.5-7.2l-2.8-.4v-2.2H497v2.2c-6.3.8-7 1.2-10.2 9.9-.9 2.4-7.9 24.5-15.9 50.9h-2.6l-17.3-47-.2.2-15.7 46.8h-2.7l-16.6-51.6c-2.6-8-4-8.6-9.5-9.2v-2.2h23.5v2.2h.1zM567 176.8h-2.5l-41.7-50.6h-.2v24.5c0 10.1.4 15.3.8 18.3.5 3.4 3.1 4.7 9.4 5v2.2h-23.1V174c5.3-.2 7.8-1.6 8.3-5 .4-3 .8-8.2.8-18.3v-20.8c0-6.9-.1-8.5-1.8-10.7-1.8-2.3-4.4-3-8.4-3.3v-2.2h14l40.4 48.4h.2v-23c0-10.1-.4-15.3-.8-18.2-.5-3.4-3.1-4.7-9.4-5v-2.2h23v2.2c-5.3.2-7.8 1.6-8.3 5-.4 3-.8 8.2-.8 18.2l.1 37.7z"}}),a("g",[a("path",{staticClass:"st3",attrs:{d:"M58 38c.3.5.7 1.2 1.3 2.1 1.5 2.5 3.9 12 6.9 15.1 1.6-1.1 4.4-2.5 6-3.1-.4-.6-2.1-3.5-4-6-3.6-4.8-6.3-7.4-6.6-7.8-.9.1-2.6.1-3.6-.3zM85.3 50.6c.7-5-.9-13.2-1.9-15.2-1.2-.3-2.5-.7-3.6-1.3-.1.6-1.1 4-1.4 8.9-.2 2.6-.1 6.7.4 7.6 1.6-.1 4.3-.2 6.5 0zM108.9 79.8c0-14.9-11.7-26.6-26.6-26.6-14.7 0-26.6 11.9-26.6 26.6 0 .7.2 2.1.4 3.6 7.6-1.8 17.8-1.5 22.3 2.1 7.3-4.2 17.8-4.4 25.5.1 1.5-.8 3.1-1.3 4.7-1.8.2-1.5.3-3 .3-4zm-32.4-9.1c-.1 1.7-1.5 3-3.2 2.9s-3-1.5-2.9-3.2v-.3c-.3-.4-1.7-.9-3.7.4-1 .6-2.2.2-.4-1.4 1.9-1.7 3.7-2.6 5.3-2.8h.1c2.7-.2 6.2.4 7.8 1 .7.3 0 3.6-.2 3.6-.6-.1-1.8-.6-2.8-.4v.2zm8.9 9.3c-.5 1.6-6.1 2.1-7.2 0-.4-.8-1-2.9-.2-2.5 1.2.7 5.7.2 6.6 0 .8-.2.3-1.2.7-1.1.6.2.6 2.1.1 3.6zm13.1-8.7c-1.4-1.2-3.2-1.7-3.9-1.2v.2c.1 1.7-1.1 3.2-2.8 3.4-1.7.2-3.2-1.1-3.3-2.8v-.1c-1.1-.4-2.9.3-3.1.2-.1-.1-.9-3.2.1-3.6 2.7-1.1 11.3-1.6 13.8 3.2.1.5-.1 1.3-.8.7zM100.1 37.7c-3.1 2.6-7.9 9.1-8.5 14.2 1.5.6 5.3 2.4 5.9 2.9 3.8-3.8 3.1-8 4.6-11.2.7-1.4 1.3-2.5 1.6-3.1-1.3-.7-2.6-1.6-3.6-2.8z"}}),a("path",{staticClass:"st3",attrs:{d:"M118.7 47.9c-.7.4-2.3 1.4-2.9 1.8-3.7 2.8-11.7 6.5-13.5 8.6 1.5 1.3 3.6 3.6 4.6 5.6.9 0 3.5-2.1 8.6-8.1 1.6-1.9 3.4-2.9 6.6-4.7-1.3-1-2.4-2.1-3.4-3.2zM54.3 70.1c-1.7-1.7-5.2-3.2-9.6-2.8-9.2.7-15.2.1-18.6-.4-5.9-.8-9.6 0-12.6 0-9 0 .3.8 1.3 1.2 4.2 1.7 12.8 3.8 19.5 3.3 3.3-.2 8.8 1.8 9.7 2.1 2.4.9 6.8 2.3 9.1 2.2.2-1 .8-4.2 1.2-5.6zM61.7 58.9c-4.6-3.7-8.8-4.5-15.6-7.7-1.5-.7-4.1-2.4-4.2-2.5-.2-.1-.5-.3-.9-.6-.4 1.3-1.2 3-1.9 3.9 1 1.4 8.6 10 18.2 12.6 1-1.8 2.7-3.9 4.4-5.7zM158.4 65.5c-.5-.1-2.2-.3-3.3-.3-1.5 0-11 .1-13.6.5-5.3.8-15.7.4-21.3.2-4.2-.2-9.1 1.5-10.6 2.3 0 0 1.6 4.1 1.7 6.8 1.8.3 3.5-2 8.7-1.9 5.3.1 18.5-.6 25.2-3.2 5-1.9 9.2-2.9 12.5-3.6 1.2-.2 2.9-.4.7-.8z"}}),a("path",{staticClass:"st3",attrs:{d:"M39.2 38.9c.4-.4 1-.3 1.6-.1 4.5 1.5 11 .5 14-4.3.4-.7 1.3-.9 2-.6 3.1 1.3 9.5 1.8 17.3-6 .6-.6 1.5-.5 2.2 0 6.8 5.5 14 5.8 21.2 1 .4-.3 1-.7 1.5-.5s.9.6 1 1.2c2.3 10.7 13.4 9.7 16.8 9.2.4-.1.9 0 1.2.3.4.3.6.6.6 1.1.4 2.5 3.1 7.3 7.9 9.8 4.1 2.1 8.6 1.9 13.3-.5.5-.2 1-.2 1.5 0 6 3.2 11.5 3.4 14.9.5 2.4-2 3.4-5.4 2.4-8.3-1.1-3.2-4.3-5.3-8.8-5.5-.8 0-1.4-.6-1.5-1.4-.4-2.6-1.9-4.7-4.2-6.1-3.6-2.2-8.8-2.4-14-.7-.5.2-1 .1-1.4-.2-.4-.3-.7-.7-.8-1.2-.3-2-1.2-4.7-3.7-6.2-2.6-1.6-6.6-1.6-11.5.1-.8.3-1.6-.1-2-.8-3.2-6-7.6-10-12.8-11.4-4.7-1.2-9.9-.3-14.3 2.5-.6.4-1.3.3-1.9-.1-4.4-3.3-9.7-4.4-14.5-2.9-4.7 1.4-8.2 5.1-10 10.3-.1.4-.5.8-.9.9-.4.2-.9.2-1.3 0-7.2-2.9-13-2.8-16.9.2-3.4 2.6-4.4 6.7-4.2 7.9.1.8-.4 1.6-1.2 1.8l-1.7.4c-4 .9-8.1 1.8-9.3 8.2-.1.7-.7 1.2-1.4 1.3-6.8.7-11.3 3.3-12.3 7.1-.7 2.7.6 5.7 3 7.3 2.5 1.7 5.4 1.5 8.1-.5.4-.3 1-.4 1.5-.2 4.1 1.5 10.6 1.2 14.6-2 2.9-2.3 4-5.7 3.4-10.1-.1-.6.1-1.1.6-1.5zm109.3.5c4.1-.9 9 2 7.6 7.5-.2.9-2.5 1-2.5 0 .4-4.6-1.9-5-5-4.9-1.1 0-1-2.4-.1-2.6zm-17.6-8.2c4-2.3 12.1-1.9 14.7 5.4.4 1.2-1.2 3.3-2.2 1.5-3.1-5.6-8-5.6-12.1-4-1 .3-1.8-2.1-.4-2.9zm-17.1-8.4c3.7-1.3 10-1.9 11.7 4.3.5 1.7-1.6 2.5-2.1 1.3-1.7-4.5-4.9-4.3-8.8-3.1-1.8.7-1.4-2.3-.8-2.5zm-30.2-6.9c2.7-4.3 16.6-8.4 23.7 3.9.8 1.3-.3 2.1-1.1 2.7-.6.4-.9-.5-1.3-1.1-6.1-9.6-17-7.1-20-2.6-.4.8-2-1.6-1.3-2.9zm-22.4.7c2.4-3.9 10.8-9.8 18.3-3.3.8.7-.2 3.4-1.1 2.8-6.8-4.7-12.1-.9-15 2.5-1.4 1.6-2.8-1.1-2.2-2zM21.1 43.7c-2.8 0-5.1.1-7.1 2.2-2.1 2.3-1.6 3.6-2 4-.6.6-2.1-.4-2-1.6.1-5.5 6.7-7.6 10.6-7.1 1.4.2 1.8 2.5.5 2.5zm11.5-9.2c-4.2.5-5.4 2.5-6.1 4.8-.3.9-2.6.2-2.3-1.5 1.1-5.1 6.7-6.4 8.7-5.9.7.2.5 2.5-.3 2.6zm3.6-5.5c.9-4.5 5.3-11.1 15.4-8.6 1.2.3.5 3.5-.8 2.9-7.4-2.9-11.1 2.7-12.3 7.1-.2.7-2.7.5-2.3-1.4z"}}),a("g",[a("path",{staticClass:"st3",attrs:{d:"M15.7 84.6c-4.9-.1-9 1.3-10.4 3.8-2.7 4.6.5 8.6 2.3 9.7 4.3 2.6 8.3.9 8.6-.7-1.2-1.3-3.2-4.3-4.3-4.3-1.6 0-1.5-2.2-.3-2.5 2.8-.9 5.6 4.5 9.7 7.4 3.6 2.6 8.7.7 8.7-.4-2.2-2-4.8-12.8-14.3-13zM113 97.3c3.4 3.4 8 2 8.2.8-.4-.7-2.5-3.8-3.8-4.5-1-.6-1.7-1.5-1.1-2.3.9-1.3 2.8-.4 4 1s4.4 5.7 5.6 6.3c3 1.6 9.5 1.1 9-.9-1.8-2.9-3.1-8.7-8.4-11.2-5.6-2.6-12.8-2-19.4.4 1.1 2.6 4.2 8.7 5.9 10.4zM73.8 86.5c-5.6-2.6-13.5-1.8-20.2.6 1.8 2.5 4.9 8.2 6.5 10.1 3.1 3.7 8.3 1.8 8.5.7-.4-.7-3.2-4.3-4.2-4.9s-1.6-1.5-1-2.2c.9-1.3 3.1 0 4.3 1.4 1.2 1.4 4.5 5.6 5.6 6.3 3.3 2.2 9.5 1.1 9-.8-2.2-2.8-3.2-8.7-8.5-11.2z"}})]),a("g",[a("path",{staticClass:"st3",attrs:{d:"M31.8 129.4c-4 .1-7.9 1.7-10.2 1.3v26.6s1.4 1.1 5.4 0c5.2-1.5 7.5.1 7.5.1v-26.9s-.6-1.2-2.7-1.1zM46 240.8c4 1.1 5.4 0 5.4 0v-26.6c-2.3.4-6.2-1.2-10.2-1.3-2.1-.1-2.7 1.2-2.7 1.2V241c.1-.1 2.4-1.7 7.5-.2zM132.8 129.4c-2.1-.1-2.8 1.2-2.8 1.2v26.9s2.3-1.6 7.5-.1c4 1.1 5.4 0 5.4 0v-26.6c-2.2.3-6.1-1.3-10.1-1.4zM41.3 129.4c-2.1-.1-2.7 1.2-2.7 1.2v26.9s2.3-1.6 7.5-.1c4 1.1 5.4 0 5.4 0v-26.6c-2.3.3-6.2-1.3-10.2-1.4zM34.5 240.9V214s-.6-1.2-2.7-1.2c-4 .1-7.9 1.7-10.2 1.3v26.6s1.4 1.1 5.4 0c5.2-1.4 7.5.2 7.5.2zM130.6 214v26.9s2.3-1.6 7.5-.1c4 1.1 5.4 0 5.4 0v-26.6c-2.3.4-6.2-1.2-10.1-1.3-2.3-.1-2.8 1.1-2.8 1.1zM123.3 129.4c-4 .1-7.9 1.7-10.2 1.3v26.6s1.4 1.1 5.4 0c5.2-1.5 7.5.1 7.5.1v-26.9s-.6-1.2-2.7-1.1zM113.6 214.2v26.6s1.4 1.1 5.4 0c5.2-1.5 7.5.1 7.5.1V214s-.6-1.2-2.7-1.2c-4 .2-7.9 1.8-10.2 1.4z"}}),a("g",[a("path",{staticClass:"st3",attrs:{d:"M160.2 117.5H96.3v57.9h63.9v-57.9zm-9.6 46.1h-18.3v2.3h-7.6v-2.3h-18.3v-30.9h3.9v-5.6c4 1 10.5-1.2 13.3-1.2 3.2 0 4.9 1.4 4.9 1.4s1.7-1.4 4.9-1.4c2.9 0 9.4 2.2 13.3 1.2v5.6h3.9v30.9zM68.4 117.5h-64v57.9h63.9l.1-57.9zm-9.7 46.1H40.3v2.3h-7.6v-2.3H14.4v-30.9h3.9v-5.6c4 1 10.5-1.2 13.3-1.2 3.2 0 4.9 1.4 4.9 1.4s1.7-1.4 4.9-1.4c2.9 0 9.4 2.2 13.3 1.2v5.6h3.9l.1 30.9zM96.3 279.1c16.1-4.7 32.1-10.9 42.9-20.8 3.8-3.5 7-7.1 9.7-11.1h-16.5v2.3h-7.6v-2.3h-18.3v-30.9h3.9v-5.6c4 1 10.4-1.2 13.3-1.2 3.2 0 4.9 1.4 4.9 1.4s1.7-1.4 4.9-1.4c2.9 0 9.4 2.2 13.3 1.2v5.6h3.9v28c5.9-10.2 8.7-22.6 9.6-40.1l-.1-2.6H96.3v77.5zM14.4 243.9v-27.7h3.9v-5.6c4 1 10.4-1.2 13.3-1.2 3.2 0 4.9 1.4 4.9 1.4s1.7-1.4 4.9-1.4c2.9 0 9.4 2.2 13.3 1.2v5.6h3.9v30.9H40.3v2.3h-7.6v-2.3H16.4c2.6 4 5.7 7.6 9.3 11 10.2 9.5 26.2 16 42.6 20.8v-77.6H4.4l.1 2.5c.7 16.1 3.7 29.2 9.9 40.1z"}})])]),a("g",[a("path",{attrs:{d:"M167.3 63.9c-1-.7-11.1-2-12.7-2-1.5 0-10.3.1-13.7.6-5.3.8-14.3.8-21.1 0-2.5-.3-5.2.3-7.5 1 .4-.4.9-.8 1.5-1.4 2-2.1 4.3-6 8.3-8 1-.5 2-1 2.9-1.5 3.4 1.7 8.7 2.8 15.3-.3 9.8 4.9 15.7 1.6 17.8-.2 2.5-2.1 4-5.3 4-8.5 0-1.1-.2-2.2-.5-3.3-1.4-4.3-5.3-7-10.7-7.6-.3-1.1-.8-2.2-1.4-3.2.6-.8 1.2-1.5 1.6-2 .5-.6 2.1-3.3-2.2-1l-1.2.6c-.6-.6-1.3-1.2-2-1.6-4-2.5-9.5-2.8-15.1-1.3-.8-3-2.3-5.5-4.6-7-2.5-1.5-5.6-2-9.3-1.4.2-.5.4-1 .6-1.4 1.6-3.4.8-4.3-1-2.8-1.9 1.7-3.2 2.9-4.1 3.9-3.5-5.6-8.1-9.3-13.5-10.8-4.7-1.2-9.8-.6-14.3 1.6-.3-2.3-.6-4.2-.9-5.3-.9-2.8-1.9-.6-2 .3-.2 1.2-.5 2.8-.8 4.6-4.6-2.4-9.6-3.1-14.4-1.7-5.2 1.6-9.2 5.5-11.5 10.9-1.9-.7-3.6-1.1-5.2-1.4-1-1.3-2.4-2.8-4.3-4.6-1.3-1.2-2.4-.6-1.6 1.8.3.9.6 1.7.8 2.5-3.7.2-6.4 1.4-8.3 2.8-3.6 2.8-5.1 6.8-5.4 9.3-.2.1-.5.1-.5.1-3 .7-7.1 1.8-9.7 5.9-.5-.3-.8-.5-.9-.6-7.6-5.1-4.1 1.5-1.2 4.3C8.2 37.1 5.3 42 4.6 44.9c-.2.7-.3 1.5-.3 2.2 0 3.3 1.7 6.6 4.6 8.6 3.4 2.3 7.5 2.2 11.2-.2 4.8 1.5 11.5 1.3 16.4-2.2 2.8 3 5.1 5.2 6.3 6.4 3 3 7.5 5.3 9.8 6.2-2.3-.9-6-1.8-9.8-1.3-8.1 1.1-13.5-.3-17-.7-5.7-.6-11.6.4-14.6.4-3.1 0-7.5 1.5-9.6 1.8-2.3.3-2.2 1.9 1.1 2.7 3.2.9 9.2 1.4 10.8 2.1 5.2 2.3 13.9 4.1 20 3.6 4.3-.3 8.7 1.8 9.8 2.1 2.2.7 7.5 2.1 9.7 2.1 0-.1 0 3.1.2 4.6-.8.3-1.6.6-2.3.9-2.4-1.5-13.1-5.8-26.1-.4-2.7-.9-8.6-4.2-16.5-1.5-9.8 3.2-8.2 12.2-5 16.4 4.4 5.6 12.5 4.4 14.8 1.6 5.3 3.5 10.7 2.3 14.6-.1 2.6 1.5 15.2 4 24.8.1 1.3 1 6.6 3.7 13.4.3 3.9 2.3 10.4 2.5 13.7-.4 1.2 1 4.8 2.5 12.5 2.4 9.2-.1 11.4-1.5 12.7-2.6 2 .9 7.2 3.6 13.6.9 3.5 2.2 10.4 2 14.1-.4 6.8 3.1 19.2 1.7 22.3-.5 5.6-3.9 2.9-11.7-3.3-15.5-12-6.1-23.3-1.4-26.2.2-3.5-2.4-11-3.9-18.7-2.5.1-.9 0-2 0-3.1v-.4c1.5-.5 3.7-2.1 8.1-2.4 6-.4 20.2-.2 27.3-3.9 4.1-2.1 18.1-4.8 20-5.9 1.8-1.1 1.3-1.9.3-2.6zm-51.7-8.2c-5.1 6-7.7 8.1-8.6 8.1-1-2-3.2-4.3-4.6-5.6 1.8-2 9.8-5.8 13.5-8.6.5-.4 2.2-1.4 2.9-1.8 1 1.1 2.1 2.2 3.4 3.1-3.2 1.9-5 2.9-6.6 4.8zm-73.8-13c4.3.7 9.3-.3 12.9-3.6 4.5 7.1 4.6 13.6 8.9 18.1-5.4-5.3-10.2-5.2-18-9.4-1.3-.7-3.4-2-3.9-2.3.1-.7.1-1.3.1-2.1.1-.3 0-.5 0-.7zM75 50.6l.1.2s-2.4-3.6-2.7-4c-.8-1.2-1.9-2.5-3.1-4-1.9-2.2-3.5-4.1-4.7-5.4 3.1-.8 6.7-2.5 10.5-6.1.4.3.8.5 1.2.8-.2 1.2-.4 2.3-.5 3.1-.9 4.8-.9 8.5-1 10.1 0 1.6.1 3.9.2 5.3zm-6.8-4.4c1.9 2.5 3.6 5.4 4 6-1.6.6-4.4 2-6 3.1-3-3.1-5.4-12.6-6.9-15.1-.6-1-1-1.6-1.3-2.1 1 .4 2.7.3 3.7.3.3.4 2.9 3 6.5 7.8zm14.1 7c14.9 0 26.6 11.7 26.6 26.6 0 1-.1 2.5-.3 3.9-1.6.5-3.2 1-4.7 1.8-7.7-4.5-18.2-4.2-25.5-.1-4.5-3.6-14.6-3.9-22.3-2.1-.2-1.4-.4-2.9-.4-3.6 0-14.6 11.9-26.5 26.6-26.5zm-3.8-10.1c.3-4.9 1.2-8.3 1.4-8.9 1 .5 2.3.9 3.6 1.3 1 2.1 2.6 10.3 1.9 15.2-2.2-.2-4.9-.2-6.4 0-.6-1-.7-5-.5-7.6zm23.5.5c-1.5 3.2-.7 7.4-4.6 11.2-.5-.4-4.4-2.3-5.9-2.9.6-5.1 5.4-11.5 8.5-14.2 1 1.1 2.3 2.1 3.6 2.7-.3.7-.9 1.8-1.6 3.2zm4.1-1c.1-.2.3-.5.4-.8 2.9 1 6 1.2 9.1.9.3 1 .8 2.1 1.4 3.2h-.1c-1.5.7-6.1 3.9-12.9 7.6-1.7 1-2.8 1.9-3.4 2.5.7-1 1.7-2.3 2.2-3.8 1.2-3 .9-5.4 3.3-9.6zm-16.3 3.9c-.7 1.9-1 2.8-1.3 3.9.6-4-.5-9.8-1.7-14.8 3.5.1 7-.8 10.5-2.8.3.8.6 1.5 1 2.2-2 1.6-6.7 6.8-8.5 11.5zm-54.5 4.1c-4 3.2-10.6 3.5-14.6 2-.5-.2-1.1-.1-1.5.2-2.7 2-5.7 2.1-8.1.5s-3.7-4.7-3-7.3c1-3.8 5.5-6.3 12.4-7 .7-.1 1.3-.6 1.4-1.3 1.2-6.3 5.3-7.3 9.3-8.2l1.7-.4c.8-.2 1.3-1 1.2-1.8-.1-1.2.9-5.3 4.2-7.9 3.9-3 9.7-3.1 16.9-.2.4.2.9.2 1.3 0s.7-.5.9-.9c1.8-5.2 5.4-8.8 10-10.3 4.8-1.5 10.1-.4 14.5 2.9.5.4 1.3.4 1.9.1 4.3-3 9.5-3.9 14.2-2.6 5.2 1.4 9.7 5.3 12.8 11.4.4.7 1.2 1 2 .8 4.9-1.7 8.9-1.7 11.5-.1 2.5 1.5 3.4 4.2 3.7 6.2.1.5.3.9.8 1.2.4.3.9.3 1.4.2 5.2-1.7 10.4-1.5 14 .7 2.3 1.4 3.8 3.5 4.2 6.1.1.8.7 1.3 1.5 1.4 4.5.3 7.8 2.3 8.8 5.5 1 2.9 0 6.2-2.4 8.3-3.4 2.9-8.9 2.7-14.9-.5-.5-.3-1-.3-1.5 0-4.7 2.4-9.2 2.6-13.3.5-4.8-2.5-7.6-7.3-7.9-9.8-.1-.4-.3-.8-.6-1.1-.4-.3-.8-.4-1.2-.3-3.4.5-14.5 1.5-16.8-9.2-.1-.5-.5-1-1-1.2s-1.1.2-1.5.5c-7.2 4.8-14.3 4.5-21.2-1-.6-.5-1.6-.6-2.2 0-7.8 7.9-14.2 7.3-17.3 6-.7-.3-1.6-.1-2 .6-3 4.8-9.5 5.8-14 4.3-.5-.2-1.1-.2-1.6.1-.4.4-.6.9-.6 1.5.6 4.3-.6 7.7-3.4 10.1zM39 52c.7-1 1.5-2.7 1.9-3.9.4.3.8.5.9.6.1.1 2.7 1.8 4.2 2.5 6.7 3.2 11 4 15.6 7.7-1.7 1.8-3.4 4-4.4 5.8C47.6 62 40.1 53.4 39 52zm5 21.5c-.9-.3-6.4-2.3-9.7-2.1-6.7.5-15.3-1.6-19.5-3.3-1.1-.4-10.3-1.2-1.3-1.2 3 0 6.6-.8 12.6 0 3.5.5 9.5 1.1 18.6.4 4.5-.4 7.9 1.1 9.6 2.8-.5 1.4-1 4.6-1.1 5.6-2.4.1-6.8-1.3-9.2-2.2zM21.3 98c-4.1-2.9-6.8-8.3-9.7-7.4-1.2.4-1.3 2.5.3 2.5 1.1 0 3.1 3 4.3 4.3-.3 1.6-4.4 3.2-8.6.7-1.9-1.1-5-5.1-2.3-9.7 1.4-2.5 5.5-3.9 10.4-3.8 9.5.2 12.1 11 14.3 13 0 1-5.1 3-8.7.4zm13.7-.2c-3.6-1.6-6.4-9.8-7.5-10.9-.4-.4 6.3-2.9 13.2-2.3 11.7 1 11.7 8.2 14.6 11.9 1.1 1.3-9.4 4.4-20.3 1.3zm38.2.7c-1.1-.7-4.4-4.9-5.6-6.3s-3.4-2.7-4.3-1.4c-.6.8 0 1.7 1 2.2 1.1.6 3.9 4.2 4.2 4.9-.2 1.1-5.4 3-8.5-.7-1.6-1.9-4.6-7.7-6.5-10.1 6.6-2.4 14.6-3.2 20.2-.6 5.4 2.5 6.3 8.4 8.5 11.2.5 1.9-5.7 3.1-9 .8zm14.7-.1c-3.6-1.6-6.4-9.8-7.5-10.9-.4-.4 6.3-2.9 13.2-2.3 11.7 1 11.7 8.2 14.6 11.8 1 1.4-9.5 4.5-20.3 1.4zm58.3-13.5c11.7 1 14.4 8.7 13.3 11.2-1 2.2-8.2 5-19 2-3.6-1.6-6.4-9.8-7.5-10.9-.4-.5 6.4-2.9 13.2-2.3zm-19.8 1.8c5.4 2.5 6.6 8.3 8.4 11.2.5 1.9-6 2.5-9 .9-1.1-.7-4.4-4.9-5.6-6.3s-3-2.4-4-1c-.6.8.1 1.7 1.1 2.3 1.3.7 3.4 3.8 3.8 4.5-.2 1.1-4.8 2.6-8.2-.8-1.7-1.7-4.8-7.8-6-10.2 6.7-2.5 13.9-3.2 19.5-.6zm31.3-20.4c-3.4.7-7.6 1.7-12.5 3.6-6.7 2.6-19.8 3.3-25.2 3.2-5.1-.1-6.9 2.2-8.7 1.9-.1-2.8-1.7-6.8-1.7-6.8 1.5-.8 6.4-2.4 10.6-2.3 5.7.2 16 .6 21.3-.2 2.6-.4 12.1-.4 13.6-.5 1.1 0 2.8.2 3.3.3 2.2.4.5.6-.7.8z"}}),a("path",{attrs:{d:"M21.1 43.7c-2.8 0-5.1.1-7.1 2.2-2.1 2.3-1.6 3.6-2 4-.6.6-2.1-.4-2-1.6.1-5.5 6.7-7.6 10.6-7.1 1.4.2 1.8 2.5.5 2.5M32.6 34.5c-4.2.5-5.4 2.5-6.1 4.8-.3.9-2.6.2-2.3-1.5 1.1-5.1 6.7-6.4 8.7-5.9.7.2.5 2.5-.3 2.6M50.8 23.4c-7.4-2.9-11.1 2.7-12.3 7.1-.2.6-2.6.4-2.3-1.5.9-4.5 5.3-11.1 15.4-8.6 1.2.4.5 3.5-.8 3M78.4 16.1c-6.8-4.7-12.1-.9-15 2.5-1.4 1.6-2.8-1.1-2.2-2 2.4-3.9 10.8-9.8 18.3-3.3.8.7-.2 3.4-1.1 2.8M106.3 22.4c-.6.4-.9-.5-1.3-1.1-6.1-9.6-17-7.1-20-2.6-.6.9-2.2-1.5-1.4-2.8 2.7-4.3 16.6-8.4 23.7 3.9.8 1.3-.2 2.1-1 2.6M123.4 28.5c-1.7-4.5-4.9-4.3-8.8-3.1-1.8.6-1.3-2.4-.8-2.6 3.7-1.3 10-1.9 11.7 4.3.5 1.7-1.7 2.6-2.1 1.4M143.4 38.1c-3.1-5.6-8-5.6-12.1-4-.9.4-1.8-2-.3-2.8 4-2.3 12.1-1.9 14.7 5.4.3 1.1-1.3 3.2-2.3 1.4M156.1 46.9c-.2.9-2.5 1-2.5 0 .4-4.6-1.9-5-5-4.9-1.1 0-1.1-2.4-.2-2.6 4.1-1 9.1 2 7.7 7.5"}}),a("g",[a("path",{attrs:{d:"M76.5 70.7c-.1 1.7-1.5 3-3.2 2.9s-3-1.5-2.9-3.2v-.3c-.3-.4-1.7-.9-3.7.4-1 .6-2.2.2-.4-1.4 1.9-1.7 3.7-2.6 5.3-2.8h.1c2.7-.2 6.2.4 7.8 1 .7.3 0 3.6-.2 3.6-.6-.1-1.8-.6-2.8-.4v.2M85.4 80c-.5 1.6-6.1 2.1-7.2 0-.4-.8-1-2.9-.2-2.5 1.2.7 5.7.2 6.6 0 .8-.2.3-1.2.7-1.1.6.2.6 2.1.1 3.6M98.5 71.3c-1.4-1.2-3.2-1.7-3.9-1.2v.2c.1 1.7-1.1 3.2-2.8 3.4-1.7.2-3.2-1.1-3.3-2.8v-.1c-1.1-.4-2.9.3-3.1.2-.1-.1-.9-3.2.1-3.6 2.7-1.1 11.3-1.6 13.8 3.2.1.5-.1 1.3-.8.7"}})]),a("g",[a("path",{attrs:{d:"M96.3 117.5h63.9v57.9H96.3v-57.9zm-91.9 0h63.9v57.9H4.4v-57.9zm64 161.5c-16.5-4.8-32.4-11.3-42.6-20.8-3.6-3.4-6.7-7.1-9.3-11h16.3v2.3h7.6v-2.3h18.3v-30.9h-3.9v-5.6c-4 .9-10.4-1.2-13.3-1.2-3.2 0-4.9 1.4-4.9 1.4s-1.6-1.4-4.9-1.4c-2.9 0-9.4 2.2-13.3 1.2v5.6h-3.9V244c-6.2-10.9-9.2-24-9.9-40l-.1-2.5h63.9V279zm-46.8-38.2v-26.6c2.3.4 6.2-1.2 10.2-1.3 2.1-.1 2.7 1.2 2.7 1.2V241s-2.3-1.6-7.5-.1c-3.9 1-5.4-.1-5.4-.1zm17 .1V214s.6-1.2 2.7-1.2c4 .1 7.9 1.7 10.2 1.3v26.6s-1.4 1.1-5.4 0c-5.2-1.4-7.5.2-7.5.2zm54.3 39.2l-10.6 2.7-10.6-2.8v-82.1H4.4V179h67.3v-61.5h21.2V179h67.2v18.9H92.9v82.2zm57.7-35.9v-28h-3.9v-5.6c-4 .9-10.4-1.2-13.3-1.2-3.2 0-4.9 1.4-4.9 1.4s-1.6-1.4-4.9-1.4c-2.9 0-9.4 2.2-13.3 1.2v5.6h-3.9v30.9h18.3v2.3h7.6v-2.3h16.5c-2.7 4-5.8 7.6-9.7 11.1-10.8 9.9-26.8 16.1-42.9 20.8v-77.6h63.9l.1 2.6c-.9 17.6-3.7 30-9.6 40.2zm-7.2-30v26.6s-1.4 1.1-5.4 0c-5.2-1.5-7.5.1-7.5.1V214s.6-1.2 2.7-1.2c4.1.2 8 1.8 10.2 1.4zm-16.9-.2v26.9s-2.3-1.6-7.5-.1c-4 1.1-5.4 0-5.4 0v-26.6c2.3.4 6.2-1.2 10.2-1.3 2.1-.1 2.7 1.1 2.7 1.1zM.5 113.6v85.7c0 28.3 7.1 48 22.2 61.8 15 13.7 37.6 20.6 59.6 25.8 22.6-5.3 44.4-12 59.6-25.8 15.1-13.8 22.2-33.4 22.2-61.8v-85.7H.5z"}}),a("path",{attrs:{d:"M54.8 132.7v-5.6c-4 .9-10.4-1.2-13.3-1.2-3.2 0-4.9 1.4-4.9 1.4s-1.6-1.4-4.9-1.4c-2.9 0-9.4 2.2-13.3 1.2v5.6h-3.9v30.9h18.3v2.3h7.6v-2.3h18.3v-30.9h-3.9zm-20.3 24.7s-2.3-1.6-7.5-.1c-4 1.1-5.4 0-5.4 0v-26.6c2.3.4 6.2-1.2 10.2-1.3 2.1-.1 2.7 1.2 2.7 1.2v26.8zm17-.1s-1.4 1.1-5.4 0c-5.2-1.5-7.5.1-7.5.1v-26.9s.6-1.2 2.7-1.2c4 .1 7.9 1.7 10.2 1.3v26.7zM146.7 132.7v-5.6c-4 .9-10.4-1.2-13.3-1.2-3.2 0-4.9 1.4-4.9 1.4s-1.6-1.4-4.9-1.4c-2.9 0-9.4 2.2-13.3 1.2v5.6h-3.9v30.9h18.3v2.3h7.6v-2.3h18.3v-30.9h-3.9zM126 157.4s-2.3-1.6-7.5-.1c-4 1.1-5.4 0-5.4 0v-26.6c2.3.4 6.2-1.2 10.2-1.3 2.1-.1 2.7 1.2 2.7 1.2v26.8zm17-.1s-1.4 1.1-5.4 0c-5.2-1.5-7.5.1-7.5.1v-26.9s.6-1.2 2.8-1.2c4 .1 7.9 1.7 10.2 1.3v26.7h-.1z"}})])]),a("g",[a("path",{staticClass:"st4",attrs:{d:"M71.7 280l10.6 2.8 10.6-2.7v-82.2h67.3V179H92.9v-61.5H71.7V179H4.4v18.9h67.3zM40.8 84.7c-6.9-.6-13.6 1.9-13.2 2.3 1.1 1.1 3.9 9.3 7.5 10.9 10.8 3 21.3 0 20.3-1.3-2.9-3.7-3-10.9-14.6-11.9zM93.6 85.3c-6.9-.6-13.6 1.8-13.2 2.3 1.1 1.1 3.9 9.3 7.5 10.9 10.8 3.1 21.3 0 20.3-1.3-2.9-3.7-2.9-10.9-14.6-11.9zM140.5 98c10.8 3.1 18 .2 19-2 1.2-2.5-1.6-10.2-13.3-11.2-6.9-.6-13.6 1.8-13.2 2.3 1.1 1.1 3.9 9.3 7.5 10.9z"}})])])]))}}},f820:function(t,e,a){"use strict";var s=a("14e3"),c=a("6109"),l=(a("3c3c"),a("2877")),r=Object(l["a"])(c["default"],s["a"],s["b"],!1,null,null,null);e["default"]=r.exports}});
//# sourceMappingURL=app.544174a1.js.map