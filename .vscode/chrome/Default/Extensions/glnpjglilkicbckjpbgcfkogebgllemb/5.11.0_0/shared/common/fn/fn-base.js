(function r(){var r=_okta.toArray,n=_okta.delay,t=_okta.isNull,u=_okta.isUndefined,e=_okta.tap,o=JSON.stringify,i=Okta.guid,c=Okta.fn.base={};c.curry2=function(r){return function(n){return function(t){return r(n,t)}}};c.curry3=function(r){return function(n){return function(t){return function(u){return r(n,t,u)}}}};c.always=c.curry2(function(r){return r});c.dot=c.curry2(function(r,n){return n[r]});c.dot2=c.curry3(function(r,n,t){return t[r][n]});c.splat=c.curry2(function(r,n){return r.apply(this,n)});c.argsToTuple=function(){return r(arguments)};c.timestamp=function(){return(new Date).getTime()};c.guid=i;c.delay=c.curry2(function(r,t){return n(t,r)});c.invoke=function(r){return r.call()};c.equal=c.curry2(function(r,n){return r===n});c.not=function(r){return!r};c.orDefault=c.curry2(function(r,n){return t(n)||u(n)?r:n});c.fmapObject=c.curry3(function(r,n,t){t[r]=n(t[r]);return t});c.tap=c.curry2(function(r,n){return e(n,r)});c.validator=function(n,t){return function(){var u=r(arguments);var e=n.apply(this,u);if(!e){throw new Error(t+": "+o(u))}return u}}})();