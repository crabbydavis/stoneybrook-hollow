(self.webpackChunkstoneybrook_hollow=self.webpackChunkstoneybrook_hollow||[]).push([[5618],{5618:function(e,t,n){"use strict";n.r(t),n.d(t,{createSwipeBackGesture:function(){return a}});var r=n(9525),o=n(8145);n(7495);var a=function(e,t,n,a,i){var u=e.ownerDocument.defaultView;return(0,o.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(e){return e.startX<=50&&t()},onStart:n,onMove:function(e){a(e.deltaX/u.innerWidth)},onEnd:function(e){var t=u.innerWidth,n=e.deltaX/t,o=e.velocityX,a=o>=0&&(o>.2||e.deltaX>t/2),c=(a?1-n:n)*t,s=0;if(c>5){var l=c/Math.abs(o);s=Math.min(l,540)}i(a,n<=0?.01:(0,r.d)(0,n,.9999),s)}})}}}]);