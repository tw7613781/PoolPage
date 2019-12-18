(function(e){function t(t){for(var n,o,i=t[0],c=t[1],l=t[2],h=0,d=[];h<i.length;h++)o=i[h],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==s[c]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},s={app:0},a=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),s=r.n(n);s.a},1:function(e,t){},1181:function(e,t,r){"use strict";var n=r("3d62"),s=r.n(n);s.a},2:function(e,t){},2280:function(e,t,r){"use strict";var n=r("e3bb"),s=r.n(n);s.a},3:function(e,t){},"3d62":function(e,t,r){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("h1",[e._v("Welcome to Hycon Mining Pool")]),n("Bulletin"),n("Pool"),n("Worker"),n("MinedBlocks"),n("MinedBlockHistory")],1)},a=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h2",[e._v("Bulletin")]),null!=e.error?r("p",{staticClass:"error"},[e._v(e._s(e.error))]):e._e(),e.msg?r("div",{staticClass:"container-bulletin"},[r("p",[e._v("Published at: "+e._s(e.time))]),r("p",[e._v(e._s(e.msg))])]):e._e()])},i=[],c=(r("d3b7"),r("96cf"),r("d4ec")),l=r("bee2"),u=r("30dc"),h="http://localhost:3000/",d=function(){function e(){Object(c["a"])(this,e)}return Object(l["a"])(e,null,[{key:"findWorkers",value:function(e){var t="findWorker/".concat(e);return new Promise((function(e,r){u(h+t,(function(t,n,s){if(t)return r(t);e(JSON.parse(s))}))}))}},{key:"getPool",value:function(){var e="getPool";return new Promise((function(t,r){u(h+e,(function(e,n,s){if(e)return r(e);t(JSON.parse(s))}))}))}},{key:"getMinedBlocks",value:function(){var e="getMinedBlocks";return new Promise((function(t,r){u(h+e,(function(e,n,s){if(e)return r(e);t(JSON.parse(s))}))}))}},{key:"getMinedBlockHistory",value:function(){var e="getMinedBlockHistory";return new Promise((function(t,r){u(h+e,(function(e,n,s){if(e)return r(e);t(JSON.parse(s))}))}))}},{key:"getBulletin",value:function(){var e="getBulletin";return new Promise((function(t,r){u(h+e,(function(e,n,s){if(e)return r(e);t(JSON.parse(s))}))}))}}]),e}(),p={name:"Bulletin",data:function(){return{msg:null,time:null,error:null}},created:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,regeneratorRuntime.awrap(d.getBulletin());case 3:e=t.sent,this.msg=e.msg,this.time=e.tick,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),this.error=t.t0;case 11:case"end":return t.stop()}}),null,this,[[0,8]])}},f=p,v=(r("1181"),r("2877")),_=Object(v["a"])(f,o,i,!1,null,"7728e762",null),m=_.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h2",[e._v("Check the worker details")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],attrs:{type:"text",id:"addr",placeholder:"Input the Hycon address associated with worker...",size:"50"},domProps:{value:e.address},on:{input:function(t){t.target.composing||(e.address=t.target.value)}}}),null!=e.error?r("p",{staticClass:"error"},[e._v(e._s(e.error))]):e._e(),0!=e.workers.length?r("table",{staticClass:"displayWorkers"},[r("thead",[r("tr",e._l(e.headers,(function(t){return r("th",{key:t.value},[e._v(" "+e._s(t)+" ")])})),0)]),r("tbody",e._l(e.workers,(function(t){return r("tr",{key:t._id},[r("td",[e._v(" "+e._s(t.tick)+" ")]),r("td",[e._v(" "+e._s(t._id)+" ")]),r("td",[e._v(" "+e._s(t.hashrate)+" ")]),r("td",[e._v(" "+e._s(t.shares)+" ")]),r("td",[e._v(" "+e._s(t.address)+" ")]),r("td",[e._v(" "+e._s(t.ip)+" ")])])})),0)]):e._e()])},g=[],w=(r("130f"),{POOL_POOLING_INTERVAL:15e3,WORKER_POOLING_INTERVAL:15e3,BLOCKS_POOLING_INTERVAL:15e3,BLOCK_HISTORY_POOLING_INTERVAL:6e4,HYCON_EXPLORER:"https://explorer.hycon.io/"}),b={name:"Worker",data:function(){return{headers:["age","id","HashRate","Shares","Address","IP"],workers:[],error:null,address:"",timer:null}},methods:{workExist:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,regeneratorRuntime.awrap(d.findWorkers(this.address));case 3:return e=t.sent,t.abrupt("return",0!==e.length);case 7:t.prev=7,t.t0=t["catch"](0),this.errorHandle(t.t0);case 10:case"end":return t.stop()}}),null,this,[[0,7]])},getWorkers:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,regeneratorRuntime.awrap(d.findWorkers(this.address));case 3:this.workers=e.sent,this.error=null,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),this.errorHandle(e.t0);case 10:case"end":return e.stop()}}),null,this,[[0,7]])},errorHandle:function(e){this.error=e,this.workers=[]}},watch:{address:function(){var e=this;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,!(this.address.length>0)){t.next=15;break}return t.next=4,regeneratorRuntime.awrap(this.workExist());case 4:if(t.t0=t.sent,!0!==t.t0){t.next=10;break}setImmediate((function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(e.getWorkers());case 2:case"end":return t.stop()}}))})),null!==this.timer?clearInterval(this.timer):this.timer=setInterval((function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(e.getWorkers());case 2:case"end":return t.stop()}}))}),w.WORKER_POOLING_INTERVAL),t.next=13;break;case 10:this.errorHandle("Not Found"),clearInterval(this.timer),this.timer=null;case 13:t.next=16;break;case 15:this.errorHandle(null);case 16:t.next=21;break;case 18:t.prev=18,t.t1=t["catch"](0),this.errorHandle(t.t1);case 21:case"end":return t.stop()}}),null,this,[[0,18]])}}},y=b,x=(r("6c52"),Object(v["a"])(y,k,g,!1,null,"262f7b60",null)),O=x.exports,R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h2",[e._v("Mined Blocks Detail")]),null!=e.error?r("p",{staticClass:"error"},[e._v(e._s(e.error))]):e._e(),0!=e.blocks.length?r("table",{staticClass:"container-blocks"},[r("thead",[r("tr",e._l(e.headers,(function(t){return r("th",{key:t.value},[e._v(" "+e._s(t)+" ")])})),0)]),r("tbody",e._l(e.blocks,(function(t){return r("tr",{key:t._id},[r("td",[e._v(" "+e._s(t.timestamp)+" ")]),r("td",[r("a",{staticClass:"href",attrs:{href:e.hyconExplorerBlock+t._id,target:"_blank"}},[e._v(" "+e._s(t._id)+" ")])]),r("td",[e._v(" "+e._s(t.mainchain)+" ")]),r("td",[e._v(" "+e._s(t.paied)+" ")]),r("td",[r("a",{staticClass:"href",attrs:{href:e.hyconExplorerBlock+t.prevHash,target:"_blank"}},[e._v(" "+e._s(t.prevHash)+" ")])])])})),0)]):e._e()])},P=[],B={name:"MinedBlocks",data:function(){return{headers:["age","hash","inMainChain","paied","prevHash"],blocks:[],error:null,timer:null,hyconExplorerBlock:w.HYCON_EXPLORER+"block/"}},created:function(){var e=this;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:try{setImmediate((function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(e.getMinedBlocks());case 2:case"end":return t.stop()}}))})),this.timer=setInterval((function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(e.getMinedBlocks());case 2:case"end":return t.stop()}}))}),w.BLOCKS_POOLING_INTERVAL)}catch(r){this.errorHandle(r)}case 1:case"end":return t.stop()}}),null,this)},methods:{getMinedBlocks:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,regeneratorRuntime.awrap(d.getMinedBlocks());case 3:this.blocks=e.sent,this.error=null,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),this.errorHandle(e.t0);case 10:case"end":return e.stop()}}),null,this,[[0,7]])},errorHandle:function(e){this.error=e,this.blocks=[]}}},H=B,E=(r("9add"),Object(v["a"])(H,R,P,!1,null,"54eb6ac2",null)),I=E.exports,C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h2",[e._v("Pool Basic Info")]),null!=e.error?r("p",{staticClass:"error"},[e._v(e._s(e.error))]):e._e(),null!=e.pool?r("div",{staticClass:"container-pool"},[r("p",[e._v("Pool Difficulty: "+e._s(e.pool.diff.toExponential()))]),r("p",[e._v("Pool fee: "+e._s(100*e.pool.fee)+"% per Block and current network reward: "+e._s(e.pool.reward)+" HYC per Block")]),r("p",[e._v("Pool hashrate: "+e._s(e.pool.hashrate)+" and current network hashrate: "+e._s(e.pool.networkHashrate))])]):e._e()])},L=[],N={name:"Pool",data:function(){return{pool:null,error:null,timer:null}},created:function(){var e=this;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:try{setImmediate((function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(e.getPool());case 2:case"end":return t.stop()}}))})),this.timer=setInterval((function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(e.getPool());case 2:case"end":return t.stop()}}))}),w.POOL_POOLING_INTERVAL)}catch(r){this.errorHandle(r)}case 1:case"end":return t.stop()}}),null,this)},methods:{getPool:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,regeneratorRuntime.awrap(d.getPool());case 3:this.pool=e.sent,this.error=null,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),this.errorHandle(e.t0);case 10:case"end":return e.stop()}}),null,this,[[0,7]])},errorHandle:function(e){this.error=e,this.pool=null}}},M=N,j=(r("7dcf"),Object(v["a"])(M,C,L,!1,null,"20dffd62",null)),S=j.exports,W=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h2",[e._v("Mined Block History: Latest 50 Blocks")]),null!=e.error?r("p",{staticClass:"error"},[e._v(e._s(e.error))]):e._e(),0!=e.blocks.length?r("table",{staticClass:"container-history"},[r("thead",[r("tr",e._l(e.headers,(function(t){return r("th",{key:t.value},[e._v(" "+e._s(t)+" ")])})),0)]),r("tbody",e._l(e.blocks,(function(t){return r("tr",{key:t._id},[r("td",[e._v(" "+e._s(t.timestamp)+" ")]),r("td",[r("a",{staticClass:"href",attrs:{href:e.hyconExplorerBlock+t._id,target:"_blank"}},[e._v(" "+e._s(t._id)+" ")])]),r("td",[e._v(" "+e._s(t.mainchain)+" ")]),r("td",[e._v(" "+e._s(t.paied)+" ")]),r("td",[r("a",{staticClass:"href",attrs:{href:e.hyconExplorerBlock+t.prevHash,target:"_blank"}},[e._v(" "+e._s(t.prevHash)+" ")])])])})),0)]):e._e()])},T=[],A={name:"MinedBlocks",data:function(){return{headers:["age","hash","inMainChain","paied","prevHash"],blocks:[],error:null,timer:null,hyconExplorerBlock:w.HYCON_EXPLORER+"block/"}},created:function(){var e=this;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:try{setImmediate((function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(e.getBlockHistory());case 2:case"end":return t.stop()}}))})),this.timer=setInterval((function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(e.getBlockHistory());case 2:case"end":return t.stop()}}))}),w.BLOCK_HISTORY_POOLING_INTERVAL)}catch(r){this.errorHandle(r)}case 1:case"end":return t.stop()}}),null,this)},methods:{getBlockHistory:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,regeneratorRuntime.awrap(d.getMinedBlockHistory());case 3:this.blocks=e.sent,this.error=null,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),this.errorHandle(e.t0);case 10:case"end":return e.stop()}}),null,this,[[0,7]])},errorHandle:function(e){this.error=e,this.blocks=[]}}},V=A,G=(r("2280"),Object(v["a"])(V,W,T,!1,null,"6b5ef40c",null)),J=G.exports,$={name:"app",components:{Bulletin:m,Worker:O,MinedBlocks:I,Pool:S,MinedBlockHistory:J}},K=$,Y=(r("034f"),Object(v["a"])(K,s,a,!1,null,null,null)),X=Y.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(X)}}).$mount("#app")},"5cb5":function(e,t,r){},"6c52":function(e,t,r){"use strict";var n=r("a5eb"),s=r.n(n);s.a},"7dcf":function(e,t,r){"use strict";var n=r("5cb5"),s=r.n(n);s.a},"85ec":function(e,t,r){},"9add":function(e,t,r){"use strict";var n=r("d7c5"),s=r.n(n);s.a},a5eb:function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.71126cc5.png"},d7c5:function(e,t,r){},e3bb:function(e,t,r){}});
//# sourceMappingURL=app.bcbd2d20.js.map