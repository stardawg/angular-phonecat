(function n(){var n=Okta.fn.storage={},a=JSON.stringify,r=JSON.parse;n.wrapVal=function(n){return a({val:n})};n.unwrapVal=function(n){return n?r(n).val:null}})();