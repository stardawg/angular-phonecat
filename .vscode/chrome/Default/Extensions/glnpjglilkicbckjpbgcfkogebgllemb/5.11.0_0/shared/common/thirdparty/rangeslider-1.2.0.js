(function(t){"use strict";function i(){var t=document.createElement("input");t.setAttribute("type","range");return t.type!=="text"}var e="rangeslider",n=0,s=i(),o={polyfill:true,rangeClass:"rangeslider",disabledClass:"rangeslider--disabled",fillClass:"rangeslider__fill",handleClass:"rangeslider__handle",startEvent:["mousedown","touchstart","pointerdown"],moveEvent:["mousemove","touchmove","pointermove"],endEvent:["mouseup","touchend","pointerup"]};function h(t,i){var e=Array.prototype.slice.call(arguments,2);return setTimeout(function(){return t.apply(null,e)},i)}function r(t,i){i=i||100;return function(){if(!t.debouncing){var e=Array.prototype.slice.apply(arguments);t.lastReturnVal=t.apply(window,e);t.debouncing=true}clearTimeout(t.debounceTimeout);t.debounceTimeout=setTimeout(function(){t.debouncing=false},i);return t.lastReturnVal}}function l(t){if(t.offsetWidth===0||t.offsetHeight===0||t.open===false){return true}return false}function a(t){var i=[],e=t.parentNode;while(l(e)){i.push(e);e=e.parentNode}return i}function d(t,i){var e=a(t),n=e.length,s=[],o=t[i];function h(t){if(typeof t.open!=="undefined"){t.open=t.open?false:true}}if(n){for(var r=0;r<n;r++){s[r]=e[r].style.cssText;e[r].style.display="block";e[r].style.height="0";e[r].style.overflow="hidden";e[r].style.visibility="hidden";h(e[r])}o=t[i];for(var l=0;l<n;l++){e[l].style.cssText=s[l];h(e[l])}}return o}function u(i,l){this.$window=t(window);this.$document=t(document);this.$element=t(i);this.options=t.extend({},o,l);this.polyfill=this.options.polyfill;this.onInit=this.options.onInit;this.onSlide=this.options.onSlide;this.onSlideEnd=this.options.onSlideEnd;if(this.polyfill){if(s){return false}}this.identifier="js-"+e+"-"+n++;this.startEvent=this.options.startEvent.join("."+this.identifier+" ")+"."+this.identifier;this.moveEvent=this.options.moveEvent.join("."+this.identifier+" ")+"."+this.identifier;this.endEvent=this.options.endEvent.join("."+this.identifier+" ")+"."+this.identifier;this.toFixed=(this.step+"").replace(".","").length-1;this.$fill=t('<div class="'+this.options.fillClass+'" />');this.$handle=t('<div class="'+this.options.handleClass+'" />');this.$range=t('<div class="'+this.options.rangeClass+'" id="'+this.identifier+'" />').insertAfter(this.$element).prepend(this.$fill,this.$handle);this.$element.css({position:"absolute",width:"1px",height:"1px",overflow:"hidden",opacity:"0"});this.handleDown=t.proxy(this.handleDown,this);this.handleMove=t.proxy(this.handleMove,this);this.handleEnd=t.proxy(this.handleEnd,this);this.init();var a=this;this.$window.on("resize."+this.identifier,r(function(){h(function(){a.update()},300)},20));this.$document.on(this.startEvent,"#"+this.identifier+":not(."+this.options.disabledClass+")",this.handleDown);this.$element.on("change."+this.identifier,function(t,i){if(i&&i.origin===a.identifier){return}var e=t.target.value,n=a.getPositionFromValue(e);a.setPosition(n)})}u.prototype.init=function(){this.update(true);this.$element[0].value=this.value;if(this.onInit&&typeof this.onInit==="function"){this.onInit()}};u.prototype.update=function(t){t=t||false;if(t){this.min=parseFloat(this.$element[0].getAttribute("min")||0);this.max=parseFloat(this.$element[0].getAttribute("max")||100);this.value=parseFloat(this.$element[0].value||this.min+(this.max-this.min)/2);this.step=parseFloat(this.$element[0].getAttribute("step")||1)}this.handleWidth=d(this.$handle[0],"offsetWidth");this.rangeWidth=d(this.$range[0],"offsetWidth");this.maxHandleX=this.rangeWidth-this.handleWidth;this.grabX=this.handleWidth/2;this.position=this.getPositionFromValue(this.value);if(this.$element[0].disabled){this.$range.addClass(this.options.disabledClass)}else{this.$range.removeClass(this.options.disabledClass)}this.setPosition(this.position)};u.prototype.handleDown=function(t){t.preventDefault();this.$document.on(this.moveEvent,this.handleMove);this.$document.on(this.endEvent,this.handleEnd);if((" "+t.target.className+" ").replace(/[\n\t]/g," ").indexOf(this.options.handleClass)>-1){return}var i=this.getRelativePosition(t),e=this.$range[0].getBoundingClientRect().left,n=this.getPositionFromNode(this.$handle[0])-e;this.setPosition(i-this.grabX);if(i>=n&&i<n+this.handleWidth){this.grabX=i-n}};u.prototype.handleMove=function(t){t.preventDefault();var i=this.getRelativePosition(t);this.setPosition(i-this.grabX)};u.prototype.handleEnd=function(t){t.preventDefault();this.$document.off(this.moveEvent,this.handleMove);this.$document.off(this.endEvent,this.handleEnd);this.$element.trigger("change",{origin:this.identifier});if(this.onSlideEnd&&typeof this.onSlideEnd==="function"){this.onSlideEnd(this.position,this.value)}};u.prototype.cap=function(t,i,e){if(t<i){return i}if(t>e){return e}return t};u.prototype.setPosition=function(t){var i,e;i=this.getValueFromPosition(this.cap(t,0,this.maxHandleX));e=this.getPositionFromValue(i);this.$fill[0].style.width=e+this.grabX+"px";this.$handle[0].style.left=e+"px";this.setValue(i);this.position=e;this.value=i;if(this.onSlide&&typeof this.onSlide==="function"){this.onSlide(e,i)}};u.prototype.getPositionFromNode=function(t){var i=0;while(t!==null){i+=t.offsetLeft;t=t.offsetParent}return i};u.prototype.getRelativePosition=function(t){var i=this.$range[0].getBoundingClientRect().left,e=0;if(typeof t.pageX!=="undefined"){e=t.pageX}else if(typeof t.originalEvent.clientX!=="undefined"){e=t.originalEvent.clientX}else if(t.originalEvent.touches&&t.originalEvent.touches[0]&&typeof t.originalEvent.touches[0].clientX!=="undefined"){e=t.originalEvent.touches[0].clientX}else if(t.currentPoint&&typeof t.currentPoint.x!=="undefined"){e=t.currentPoint.x}return e-i};u.prototype.getPositionFromValue=function(t){var i,e;i=(t-this.min)/(this.max-this.min);e=i*this.maxHandleX;return e};u.prototype.getValueFromPosition=function(t){var i,e;i=t/(this.maxHandleX||1);e=this.step*Math.round(i*(this.max-this.min)/this.step)+this.min;return Number(e.toFixed(this.toFixed))};u.prototype.setValue=function(t){if(t===this.value){return}this.$element.val(t).trigger("input",{origin:this.identifier})};u.prototype.destroy=function(){this.$document.off("."+this.identifier);this.$window.off("."+this.identifier);this.$element.off("."+this.identifier).removeAttr("style").removeData("plugin_"+e);if(this.$range&&this.$range.length){this.$range[0].parentNode.removeChild(this.$range[0])}};t.fn[e]=function(i){var n=Array.prototype.slice.call(arguments,1);return this.each(function(){var s=t(this),o=s.data("plugin_"+e);if(!o){s.data("plugin_"+e,o=new u(this,i))}if(typeof i==="string"){o[i].apply(o,n)}})}})($okta);