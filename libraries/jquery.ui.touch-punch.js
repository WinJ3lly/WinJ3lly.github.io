!function(t){"function"==typeof define&&define.amd?define(["jquery","libraries/jquery-ui.interactions","libraries/jquery-ui.slider"],t):t(jQuery)}(function(o){var t,e,n,u;function i(t){return{x:t.originalEvent.changedTouches[0].pageX,y:t.originalEvent.changedTouches[0].pageY}}function c(t,o){var e,n;1<t.originalEvent.touches.length||(t.cancelable&&t.preventDefault(),e=t.originalEvent.changedTouches[0],(n=document.createEvent("MouseEvents")).initMouseEvent(o,!0,!0,window,1,e.screenX,e.screenY,e.clientX,e.clientY,!1,!1,!1,!1,0,null),t.target.dispatchEvent(n))}o.support.mspointer=window.navigator.msPointerEnabled,o.support.touch="ontouchstart"in document||"ontouchstart"in window||window.TouchEvent||window.DocumentTouch&&document instanceof DocumentTouch||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints,(o.support.touch||o.support.mspointer)&&o.ui.mouse&&(t=o.ui.mouse.prototype,e=t._mouseInit,n=t._mouseDestroy,t._touchStart=function(t){var o=this;this._startedMove=t.timeStamp,o._startPos=i(t),!u&&o._mouseCapture(t.originalEvent.changedTouches[0])&&(u=!0,o._touchMoved=!1,c(t,"mouseover"),c(t,"mousemove"),c(t,"mousedown"))},t._touchMove=function(t){u&&(this._touchMoved=!0,c(t,"mousemove"))},t._touchEnd=function(t){var o;u&&(c(t,"mouseup"),c(t,"mouseout"),o=t.timeStamp-this._startedMove,!this._touchMoved||o<500?c(t,"click"):(o=i(t),Math.abs(o.x-this._startPos.x)<10&&Math.abs(o.y-this._startPos.y)<10&&(this._touchMoved&&"stylus"!==t.originalEvent.changedTouches[0].touchType||c(t,"click"))),this._touchMoved=!1,u=!1)},t._mouseInit=function(){var t=this;o.support.mspointer&&(t.element[0].style.msTouchAction="none"),t.element.on({touchstart:o.proxy(t,"_touchStart"),touchmove:o.proxy(t,"_touchMove"),touchend:o.proxy(t,"_touchEnd")}),e.call(t)},t._mouseDestroy=function(){var t=this;t.element.off({touchstart:o.proxy(t,"_touchStart"),touchmove:o.proxy(t,"_touchMove"),touchend:o.proxy(t,"_touchEnd")}),n.call(t)})});