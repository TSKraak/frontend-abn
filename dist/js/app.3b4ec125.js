(function(){"use strict";var e={8578:function(e,o,n){var t=n(5130),r=n(6768);const s={id:"app"},i=(0,r.Lk)("h1",null,"Graph Database Visualization",-1);function l(e,o,n,t,l,a){const d=(0,r.g2)("TreeNode"),c=(0,r.g2)("ModalBlock");return(0,r.uX)(),(0,r.CE)("div",s,[i,(0,r.Lk)("button",{onClick:o[0]||(o[0]=(...e)=>a.populateDatabase&&a.populateDatabase(...e))},"Populate Database"),(0,r.bF)(d,{nodes:l.nodes,selectedNode:l.selectedNode,onShowDescription:a.openModal},null,8,["nodes","selectedNode","onShowDescription"]),l.isModalVisible?((0,r.uX)(),(0,r.Wv)(c,{key:0,visible:l.isModalVisible,content:l.modalContent,onClose:a.closeModal},null,8,["visible","content","onClose"])):(0,r.Q3)("",!0)])}var a=n(4373),d=n(4232);const c={class:"tree-node"},u={class:"tree-node__list"},p=["onClick"];function f(e,o,n,t,s,i){const l=(0,r.g2)("tree-node",!0);return(0,r.uX)(),(0,r.CE)("div",c,[(0,r.Lk)("ul",u,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n.nodes,(e=>((0,r.uX)(),(0,r.CE)("li",{class:"tree-node__item",key:e.node?.name||e.name},[(0,r.Lk)("span",{class:(0,d.C4)({"tree-node__item__name":!0,"tree-node__item__name--selected":e===n.selectedNode}),onClick:o=>i.showDescription(e)},(0,d.v_)(e.node?.name||e.name),11,p),e.children&&e.children.length?((0,r.uX)(),(0,r.Wv)(l,{key:0,nodes:e.children,selectedNode:n.selectedNode,onShowDescription:i.showDescription},null,8,["nodes","selectedNode","onShowDescription"])):(0,r.Q3)("",!0)])))),128))])])}var h={name:"TreeNode",props:{nodes:{type:Array,required:!0},selectedNode:null},data(){return{hoveredNode:null}},methods:{showDescription(e){this.$emit("show-description",e)}}},v=n(1241);const b=(0,v.A)(h,[["render",f]]);var m=b;const y={key:0,class:"modal__overlay"},_={class:"modal"},k={class:"modal__header"},w={class:"modal__body"};function g(e,o,n,t,s,i){return n.visible?((0,r.uX)(),(0,r.CE)("div",y,[(0,r.Lk)("div",_,[(0,r.Lk)("div",k,[(0,r.Lk)("button",{onClick:o[0]||(o[0]=(...e)=>i.close&&i.close(...e)),class:"modal__close-btn"},"x")]),(0,r.Lk)("div",w,[(0,r.Lk)("p",null,(0,d.v_)(n.content),1)])])])):(0,r.Q3)("",!0)}var C={props:{visible:{type:Boolean,required:!0},content:{type:String,required:!0}},methods:{close(){this.$emit("close")}}};const N=(0,v.A)(C,[["render",g],["__scopeId","data-v-a28c3be8"]]);var M=N,O={name:"App",components:{TreeNode:m,ModalBlock:M},data(){return{nodes:[],isModalVisible:!1,modalContent:"",selectedNode:null}},methods:{async populateDatabase(){try{await a.A.post("https://abn-backend.azurewebsites.net/populate"),this.fetchNodes()}catch(e){console.error(e)}},async fetchNodes(){try{const e=await a.A.get("https://abn-backend.azurewebsites.net/nodes");this.nodes=e.data}catch(e){console.error(e)}},openModal(e){this.selectedNode=e,this.modalContent=e.description||e.node?.description,this.isModalVisible=!0},closeModal(){this.selectedNode=null,this.isModalVisible=!1,this.modalContent=""}},created(){this.fetchNodes()}};const D=(0,v.A)(O,[["render",l]]);var S=D;(0,t.Ef)(S).mount("#app")}},o={};function n(t){var r=o[t];if(void 0!==r)return r.exports;var s=o[t]={exports:{}};return e[t].call(s.exports,s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(o,t,r,s){if(!t){var i=1/0;for(c=0;c<e.length;c++){t=e[c][0],r=e[c][1],s=e[c][2];for(var l=!0,a=0;a<t.length;a++)(!1&s||i>=s)&&Object.keys(n.O).every((function(e){return n.O[e](t[a])}))?t.splice(a--,1):(l=!1,s<i&&(i=s));if(l){e.splice(c--,1);var d=r();void 0!==d&&(o=d)}}return o}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[t,r,s]}}(),function(){n.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(o,{a:o}),o}}(),function(){n.d=function(e,o){for(var t in o)n.o(o,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};n.O.j=function(o){return 0===e[o]};var o=function(o,t){var r,s,i=t[0],l=t[1],a=t[2],d=0;if(i.some((function(o){return 0!==e[o]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(a)var c=a(n)}for(o&&o(t);d<i.length;d++)s=i[d],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(c)},t=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))}();var t=n.O(void 0,[504],(function(){return n(8578)}));t=n.O(t)})();
//# sourceMappingURL=app.3b4ec125.js.map