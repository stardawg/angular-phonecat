(function(t){"use strict";var n=false;try{throw new Error}catch(e){n=!!e.stack}var r=Object.prototype.toString;var o=t.WindowUtil.Function.prototype.toString;var i=/^\[object .+?Constructor\]$/;var u=RegExp("^"+String(r).replace(/[.*+?^${}()|[\]\/\\]/g,"\\$&").replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function c(t){var n=typeof t;return n=="function"?u.test(o.call(t)):t&&n=="object"&&i.test(r.call(t))||false}var f=P();var s;var a=function(){};var p=function(){var n={task:void 0,next:null};var e=n;var r=false;var o=void 0;var i=false;function u(){while(n.next){n=n.next;var e=n.task;n.task=void 0;var o=n.domain;if(o){n.domain=void 0;o.enter()}try{e()}catch(c){if(i){if(o){o.exit()}t.WindowUtil.setTimeout(u,0);if(o){o.enter()}throw c}else{setTimeout(function(){throw c},0)}}if(o){o.exit()}}r=false}p=function(t){e=e.next={task:t,domain:i&&process.domain,next:null};if(!r){r=true;o()}};if(typeof process!=="undefined"&&process.nextTick){i=true;o=function(){process.nextTick(u)}}else if(typeof setImmediate==="function"){if(typeof window!=="undefined"&&c(setImmediate.bind)){o=setImmediate.bind(window,u)}else{o=function(){setImmediate(u)}}}else if(typeof MessageChannel!=="undefined"){var f=new MessageChannel;f.port1.onmessage=function(){o=s;f.port1.onmessage=u;u()};var s=function(){f.port2.postMessage(0)};o=function(){t.WindowUtil.setTimeout(u,0);s()}}else{o=function(){t.WindowUtil.setTimeout(u,0)}}return p}();var l=t.WindowUtil.Function.call;function d(t){return function(){return l.apply(t,arguments)}}var v=d(Array.prototype.slice);var h=d(function(t,n){var e=0,r=this.length;if(arguments.length===1){do{if(e in this){n=this[e++];break}if(++e>=r){throw new TypeError}}while(1)}for(;e<r;e++){if(e in this){n=t(n,this[e],e)}}return n});var y=d(Array.prototype.indexOf||function(t){for(var n=0;n<this.length;n++){if(this[n]===t){return n}}return-1});var m=d(Array.prototype.map||function(t,n){var e=this;var r=[];h(e,function(o,i,u){r.push(t.call(n,i,u,e))},void 0);return r});var w=c(Object.create)?Object.create:function(t){function n(){}n.prototype=t;return new n};var j=d(Object.prototype.hasOwnProperty);var k=Object.keys||function(t){var n=[];for(var e in t){if(j(t,e)){n.push(e)}}return n};var g=d(Object.prototype.toString);function b(t){return t===Object(t)}function x(t){return g(t)==="[object StopIteration]"||t instanceof R}var R;if(typeof ReturnValue!=="undefined"){R=ReturnValue}else{R=function(t){this.value=t}}var O=false;var T="From previous event:";function S(t,e){if(n&&e.stack&&typeof t==="object"&&t!==null&&t.stack&&t.stack.indexOf(T)===-1){var r=[];for(var o=e;!!o;o=o.source){if(o.stack){r.unshift(o.stack)}}r.unshift(t.stack);var i=r.join("\n"+T+"\n");t.stack=N(i)}}function N(t){var n=t.split("\n");var e=[];for(var r=0;r<n.length;++r){var o=n[r];if(!D(o)&&!E(o)&&o){e.push(o)}}return e.join("\n")}function E(t){return t.indexOf("(module.js:")!==-1||t.indexOf("(node.js:")!==-1}function U(t){var n=/at .+ \((.+):(\d+):(?:\d+)\)$/.exec(t);if(n){return[n[1],Number(n[2])]}var e=/at ([^ ]+):(\d+):(?:\d+)$/.exec(t);if(e){return[e[1],Number(e[2])]}var r=/.*@(.+):(\d+)$/.exec(t);if(r){return[r[1],Number(r[2])]}}function D(t){var n=U(t);if(!n){return false}var e=n[0];var r=n[1];return e===s&&r>=f&&r<=yt}function P(){if(!n){return}try{throw new Error}catch(t){var e=t.stack.split("\n");var r=e[0].indexOf("@")>0?e[1]:e[2];var o=U(r);if(!o){return}s=o[0];return o[1]}}function $(t,n,e){return function(){if(typeof console!=="undefined"&&typeof console.warn==="function"){console.warn(n+" is deprecated, use "+e+" instead.",new Error("").stack)}return t.apply(t,arguments)}}function C(t){if(Q(t)){return t}if(V(t)){return rt(t)}else{return et(t)}}C.resolve=C;C.nextTick=p;C.longStackSupport=false;C.defer=F;function F(){var t=[],e=[],r;var o=w(F.prototype);var i=w(A.prototype);i.promiseDispatch=function(n,o,i){var u=v(arguments);if(t){t.push(u);if(o==="when"&&i[1]){e.push(i[1])}}else{p(function(){r.promiseDispatch.apply(r,u)})}};i.valueOf=$(function(){if(t){return i}var n=B(r);if(Q(n)){r=n}return n},"valueOf","inspect");i.inspect=function(){if(!r){return{state:"pending"}}return r.inspect()};if(C.longStackSupport&&n){try{throw new Error}catch(u){i.stack=u.stack.substring(u.stack.indexOf("\n")+1)}}function c(n){r=n;i.source=n;h(t,function(t,e){p(function(){n.promiseDispatch.apply(n,e)})},void 0);t=void 0;e=void 0}o.promise=i;o.resolve=function(t){if(r){return}c(C(t))};o.fulfill=function(t){if(r){return}c(et(t))};o.reject=function(t){if(r){return}c(nt(t))};o.notify=function(t){if(r){return}h(e,function(n,e){p(function(){e(t)})},void 0)};return o}F.prototype.makeNodeResolver=function(){var t=this;return function(n,e){if(n){t.reject(n)}else if(arguments.length>2){t.resolve(v(arguments,1))}else{t.resolve(e)}}};C.promise=I;function I(t){if(typeof t!=="function"){throw new TypeError("resolver must be a function.")}var n=F();try{t(n.resolve,n.reject,n.notify)}catch(e){n.reject(e)}return n.promise}C.passByCopy=function(t){return t};A.prototype.passByCopy=function(){return this};C.join=function(t,n){return C(t).join(n)};A.prototype.join=function(t){return C([this,t]).spread(function(t,n){if(t===n){return t}else{throw new Error("Can't join: not the same: "+t+" "+n)}})};C.race=W;function W(t){return I(function(n,e){for(var r=0,o=t.length;r<o;r++){C(t[r]).then(n,e)}})}A.prototype.race=function(){return this.then(C.race)};C.makePromise=A;function A(t,n,e){if(n===void 0){n=function(t){return nt(new Error("Promise does not support operation: "+t))}}if(e===void 0){e=function(){return{state:"unknown"}}}var r=w(A.prototype);r.promiseDispatch=function(e,o,i){var u;try{if(t[o]){u=t[o].apply(r,i)}else{u=n.call(r,o,i)}}catch(c){u=nt(c)}if(e){e(u)}};r.inspect=e;if(e){var o=e();if(o.state==="rejected"){r.exception=o.reason}r.valueOf=$(function(){var t=e();if(t.state==="pending"||t.state==="rejected"){return r}return t.value})}return r}A.prototype.toString=function(){return"[object Promise]"};A.prototype.then=function(t,n,e){var r=this;var o=F();var i=false;function u(n){try{return typeof t==="function"?t(n):n}catch(e){return nt(e)}}function c(t){if(typeof n==="function"){S(t,r);try{return n(t)}catch(e){return nt(e)}}return nt(t)}function f(t){return typeof e==="function"?e(t):t}p(function(){r.promiseDispatch(function(t){if(i){return}i=true;o.resolve(u(t))},"when",[function(t){if(i){return}i=true;o.resolve(c(t))}])});r.promiseDispatch(void 0,"when",[void 0,function(t){var n;var e=false;try{n=f(t)}catch(r){e=true;if(C.onerror){C.onerror(r)}else{throw r}}if(!e){o.notify(n)}}]);return o.promise};C.when=M;function M(t,n,e,r){return C(t).then(n,e,r)}A.prototype.thenResolve=function(t){return this.then(function(){return t})};C.thenResolve=function(t,n){return C(t).thenResolve(n)};A.prototype.thenReject=function(t){return this.then(function(){throw t})};C.thenReject=function(t,n){return C(t).thenReject(n)};C.nearer=B;function B(t){if(Q(t)){var n=t.inspect();if(n.state==="fulfilled"){return n.value}}return t}C.isPromise=Q;function Q(t){return b(t)&&typeof t.promiseDispatch==="function"&&typeof t.inspect==="function"}C.isPromiseAlike=V;function V(t){return b(t)&&typeof t.then==="function"}C.isPending=L;function L(t){return Q(t)&&t.inspect().state==="pending"}A.prototype.isPending=function(){return this.inspect().state==="pending"};C.isFulfilled=q;function q(t){return!Q(t)||t.inspect().state==="fulfilled"}A.prototype.isFulfilled=function(){return this.inspect().state==="fulfilled"};C.isRejected=z;function z(t){return Q(t)&&t.inspect().state==="rejected"}A.prototype.isRejected=function(){return this.inspect().state==="rejected"};var G=[];var H=[];var J=false;var K=true;function X(){if(!J&&typeof window!=="undefined"&&!window.Touch&&window.console){console.warn("[Q] Unhandled rejection reasons (should be empty):",G)}J=true}function Y(){for(var t=0;t<G.length;t++){var n=G[t];console.warn("Unhandled rejection reason:",n)}}function Z(){G.length=0;H.length=0;J=false;if(!K){K=true;if(typeof process!=="undefined"&&process.on){process.on("exit",Y)}}}function _(t,n){if(!K){return}H.push(t);if(n&&typeof n.stack!=="undefined"){G.push(n.stack)}else{G.push("(no stack) "+n)}X()}function tt(t){if(!K){return}var n=y(H,t);if(n!==-1){H.splice(n,1);G.splice(n,1)}}C.resetUnhandledRejections=Z;C.getUnhandledReasons=function(){return G.slice()};C.stopUnhandledRejectionTracking=function(){Z();if(typeof process!=="undefined"&&process.on){process.removeListener("exit",Y)}K=false};Z();C.reject=nt;function nt(t){var n=A({when:function(n){if(n){tt(this)}return n?n(t):this}},function e(){return this},function r(){return{state:"rejected",reason:t}});_(n,t);return n}C.fulfill=et;function et(t){return A({when:function(){return t},get:function(n){return t[n]},set:function(n,e){t[n]=e},"delete":function(n){delete t[n]},post:function(n,e){if(n===null||n===void 0){return t.apply(void 0,e)}else{return t[n].apply(t,e)}},apply:function(n,e){return t.apply(n,e)},keys:function(){return k(t)}},void 0,function n(){return{state:"fulfilled",value:t}})}function rt(t){var n=F();p(function(){try{t.then(n.resolve,n.reject,n.notify)}catch(e){n.reject(e)}});return n.promise}C.master=ot;function ot(t){return A({isDef:function(){}},function n(e,r){return at(t,e,r)},function(){return C(t).inspect()})}C.spread=it;function it(t,n,e){return C(t).spread(n,e)}A.prototype.spread=function(t,n){return this.all().then(function(n){return t.apply(void 0,n)},n)};C.async=ut;function ut(t){return function(){function n(t,n){var i;if(O){try{i=e[t](n)}catch(u){return nt(u)}if(i.done){return i.value}else{return M(i.value,r,o)}}else{try{i=e[t](n)}catch(u){if(x(u)){return u.value}else{return nt(u)}}return M(i,r,o)}}var e=t.apply(this,arguments);var r=n.bind(n,"next");var o=n.bind(n,"throw");return r()}}C.spawn=ct;function ct(t){C.done(C.async(t)())}C["return"]=ft;function ft(t){throw new R(t)}C.promised=st;function st(t){return function(){return it([this,pt(arguments)],function(n,e){return t.apply(n,e)})}}C.dispatch=at;function at(t,n,e){return C(t).dispatch(n,e)}A.prototype.dispatch=function(t,n){var e=this;var r=F();p(function(){e.promiseDispatch(r.resolve,t,n)});return r.promise};C.get=function(t,n){return C(t).dispatch("get",[n])};A.prototype.get=function(t){return this.dispatch("get",[t])};C.set=function(t,n,e){return C(t).dispatch("set",[n,e])};A.prototype.set=function(t,n){return this.dispatch("set",[t,n])};C.del=C["delete"]=function(t,n){return C(t).dispatch("delete",[n])};A.prototype.del=A.prototype["delete"]=function(t){return this.dispatch("delete",[t])};C.mapply=C.post=function(t,n,e){return C(t).dispatch("post",[n,e])};A.prototype.mapply=A.prototype.post=function(t,n){return this.dispatch("post",[t,n])};C.send=C.mcall=C.invoke=function(t,n){return C(t).dispatch("post",[n,v(arguments,2)])};A.prototype.send=A.prototype.mcall=A.prototype.invoke=function(t){return this.dispatch("post",[t,v(arguments,1)])};C.fapply=function(t,n){return C(t).dispatch("apply",[void 0,n])};A.prototype.fapply=function(t){return this.dispatch("apply",[void 0,t])};C["try"]=C.fcall=function(t){return C(t).dispatch("apply",[void 0,v(arguments,1)])};A.prototype.fcall=function(){return this.dispatch("apply",[void 0,v(arguments)])};C.fbind=function(t){var n=C(t);var e=v(arguments,1);return function r(){return n.dispatch("apply",[this,e.concat(v(arguments))])}};A.prototype.fbind=function(){var t=this;var n=v(arguments);return function e(){return t.dispatch("apply",[this,n.concat(v(arguments))])}};C.keys=function(t){return C(t).dispatch("keys",[])};A.prototype.keys=function(){return this.dispatch("keys",[])};C.all=pt;function pt(t){return M(t,function(t){var n=0;var e=F();h(t,function(r,o,i){var u;if(Q(o)&&(u=o.inspect()).state==="fulfilled"){t[i]=u.value}else{++n;M(o,function(r){t[i]=r;if(--n===0){e.resolve(t)}},e.reject,function(t){e.notify({index:i,value:t})})}},void 0);if(n===0){e.resolve(t)}return e.promise})}A.prototype.all=function(){return pt(this)};C.allResolved=$(lt,"allResolved","allSettled");function lt(t){return M(t,function(t){t=m(t,C);return M(pt(m(t,function(t){return M(t,a,a)})),function(){return t})})}A.prototype.allResolved=function(){return lt(this)};C.allSettled=dt;function dt(t){return C(t).allSettled()}A.prototype.allSettled=function(){return this.then(function(t){return pt(m(t,function(t){t=C(t);function n(){return t.inspect()}return t.then(n,n)}))})};C.fail=C["catch"]=function(t,n){return C(t).then(void 0,n)};A.prototype.fail=A.prototype["catch"]=function(t){return this.then(void 0,t)};C.progress=vt;function vt(t,n){return C(t).then(void 0,void 0,n)}A.prototype.progress=function(t){return this.then(void 0,void 0,t)};C.fin=C["finally"]=function(t,n){return C(t)["finally"](n)};A.prototype.fin=A.prototype["finally"]=function(t){t=C(t);return this.then(function(n){return t.fcall().then(function(){return n})},function(n){return t.fcall().then(function(){throw n})})};C.done=function(t,n,e,r){return C(t).done(n,e,r)};A.prototype.done=function(t,n,e){var r=function(t){p(function(){S(t,o);if(C.onerror){C.onerror(t)}else{throw t}})};var o=t||n||e?this.then(t,n,e):this;if(typeof process==="object"&&process&&process.domain){r=process.domain.bind(r)}o.then(void 0,r)};C.timeout=function(t,n,e){return C(t).timeout(n,e)};A.prototype.timeout=function(t,n){var e=F();var r=setTimeout(function(){e.reject(new Error(n||"Timed out after "+t+" ms"))},t);this.then(function(t){clearTimeout(r);e.resolve(t)},function(t){clearTimeout(r);e.reject(t)},e.notify);return e.promise};C.delay=function(t,n){if(n===void 0){n=t;t=void 0}return C(t).delay(n)};A.prototype.delay=function(t){return this.then(function(n){var e=F();setTimeout(function(){e.resolve(n)},t);return e.promise})};C.nfapply=function(t,n){return C(t).nfapply(n)};A.prototype.nfapply=function(t){var n=F();var e=v(t);e.push(n.makeNodeResolver());this.fapply(e).fail(n.reject);return n.promise};C.nfcall=function(t){var n=v(arguments,1);return C(t).nfapply(n)};A.prototype.nfcall=function(){var t=v(arguments);var n=F();t.push(n.makeNodeResolver());this.fapply(t).fail(n.reject);return n.promise};C.nfbind=C.denodeify=function(t){var n=v(arguments,1);return function(){var e=n.concat(v(arguments));var r=F();e.push(r.makeNodeResolver());C(t).fapply(e).fail(r.reject);return r.promise}};A.prototype.nfbind=A.prototype.denodeify=function(){var t=v(arguments);t.unshift(this);return C.denodeify.apply(void 0,t)};C.nbind=function(t,n){var e=v(arguments,2);return function(){var r=e.concat(v(arguments));var o=F();r.push(o.makeNodeResolver());function i(){return t.apply(n,arguments)}C(i).fapply(r).fail(o.reject);return o.promise}};A.prototype.nbind=function(){var t=v(arguments,0);t.unshift(this);return C.nbind.apply(void 0,t)};C.nmapply=C.npost=function(t,n,e){return C(t).npost(n,e)};A.prototype.nmapply=A.prototype.npost=function(t,n){var e=v(n||[]);var r=F();e.push(r.makeNodeResolver());this.dispatch("post",[t,e]).fail(r.reject);return r.promise};C.nsend=C.nmcall=C.ninvoke=function(t,n){var e=v(arguments,2);var r=F();e.push(r.makeNodeResolver());C(t).dispatch("post",[n,e]).fail(r.reject);return r.promise};A.prototype.nsend=A.prototype.nmcall=A.prototype.ninvoke=function(t){var n=v(arguments,1);var e=F();n.push(e.makeNodeResolver());this.dispatch("post",[t,n]).fail(e.reject);return e.promise};C.nodeify=ht;function ht(t,n){return C(t).nodeify(n)}A.prototype.nodeify=function(t){if(t){this.then(function(n){p(function(){t(null,n)})},function(n){p(function(){t(n)})})}else{return this}};t.Q=C;var yt=P()})(Okta);