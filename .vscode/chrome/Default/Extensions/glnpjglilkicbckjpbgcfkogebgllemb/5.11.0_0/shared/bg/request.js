Okta.Request=function(t,n,e){var i=Okta.Q,s=Okta.fn.storage.wrapVal,o=_okta.omit,a={};a.ajax=function(a){var r=a.storeResponse,u=o(a,"storeResponse"),f;if(!r){return t(u).fail(function(t){return t})}if(r.destination!=="persistent"&&r.destination!=="session"){throw"StoreResponse destination is invalid: "+r.destination}f=r.destination==="session"?n:e;f.set(r.key,r.pendingVal);t(u).then(function(t){f.set(r.key,s(t))}).fail(function(){f.set(r.key,null)});return i(true)};return a};