// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.


/**
 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.3.1
 */
;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);




/**
 * jQuery.LocalScroll - Animated scrolling navigation, using anchors.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 3/11/2009
 * @author Ariel Flesler
 * @version 1.2.7
 **/
;(function($){var l=location.href.replace(/#.*/,'');var g=$.localScroll=function(a){$('body').localScroll(a)};g.defaults={duration:1e3,axis:'y',event:'click',stop:true,target:window,reset:true};g.hash=function(a){if(location.hash){a=$.extend({},g.defaults,a);a.hash=false;if(a.reset){var e=a.duration;delete a.duration;$(a.target).scrollTo(0,a);a.duration=e}i(0,location,a)}};$.fn.localScroll=function(b){b=$.extend({},g.defaults,b);return b.lazy?this.bind(b.event,function(a){var e=$([a.target,a.target.parentNode]).filter(d)[0];if(e)i(a,e,b)}):this.find('a,area').filter(d).bind(b.event,function(a){i(a,this,b)}).end().end();function d(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,'')==l&&(!b.filter||$(this).is(b.filter))}};function i(a,e,b){var d=e.hash.slice(1),f=document.getElementById(d)||document.getElementsByName(d)[0];if(!f)return;if(a)a.preventDefault();var h=$(b.target);if(b.lock&&h.is(':animated')||b.onBefore&&b.onBefore.call(b,a,f,h)===false)return;if(b.stop)h.stop(true);if(b.hash){var j=f.id==d?'id':'name',k=$('<a> </a>').attr(j,d).css({position:'absolute',top:$(window).scrollTop(),left:$(window).scrollLeft()});f[j]='';$('body').prepend(k);location=e.hash;k.remove();f[j]=d}h.scrollTo(f,b).trigger('notify.serialScroll',[f])}})(jQuery);






(function(a,b){if(typeof define==="function"&&define.amd){define(b)}else{a.KeyboardJS=b()}})(this,function(){function o(a){if(b[a]){c=b[a]}}function n(a,c){b[a]=c}function m(){return d}function l(a){if(a==="all"){f=[];return}a=a.replace(/\s/g,"").split(",");for(var b=f.length;b>-1;b-=1){if(f[b]){var c=f[b];for(var d=0;d<c.length;d+=1){var e=c[d],g=false;for(var h=0;h<e.keys.length;h+=1){var i=e.keys[h];for(var j=0;j<a.length;j+=1){var k=a[j];if(k===i){g=true;break}}if(g){break}}if(g){f[b].splice(d,1);d-=1;if(f[b].length<1){delete f[b]}}}}}}function k(a,b,c,d,e){function f(){if(typeof h==="function"){h()}if(typeof i==="function"){i()}if(typeof k==="function"){k()}if(typeof l==="function"){l()}if(typeof m==="function"){clearInterval(m)}}var g=[0,0];if(typeof e!=="function"){return false}var h=j(a,function(){if(g[0]===0){g[0]=-1}},function(){g[0]=0}).clear;var i=j(b,function(){if(g[0]===0){g[0]=1}},function(){g[0]=0}).clear;var k=j(c,function(){if(g[1]===0){g[1]=-1}},function(){g[1]=0}).clear;var l=j(d,function(){if(g[1]===0){g[1]=1}},function(){g[1]=0}).clear;var m=setInterval(function(){if(g[0]===0&&g[1]===0){return}e(g)},1);return{clear:f}}function j(a,b,c){function d(){if(h&&h.length){var a=f[h.length];if(a.indexOf(i)>-1){var b=f[h.length].indexOf(i);f[h.length].splice(b,1)}}}var e=a.toLowerCase().replace(/\s/g,"").split(",");for(var g=0;g<e.length;g+=1){var h=e[g].split("+");if(h.length){if(!f[h.length]){f[h.length]=[]}var i={callback:b,endCallback:c,keyCombo:e[g],keys:h};f[h.length].push(i)}}return{clear:d}}function i(a){var b=g();var c;for(var d in e){if(e.hasOwnProperty(d)){var f=e[d],h=false;for(var i=0;i<b.length;i+=1){var j=b[i].keyCombo;if(j===d){h=true;break}}if(!h){if(typeof f.endCallback==="function"){if(!f.endCallback(a,f.keys,f.keyCombo)){c=false}}delete e[d]}}}return c}function h(a){if(d<1){return true}var b=g(),c=[],f;for(var h=0;h<b.length;h+=1){var i=b[h],j=false;for(var k=0;k<i.keys.length;k+=1){var l=i.keys[k];if(c.indexOf(l)>-1){j=true;break}}if(!j){if(typeof i.callback==="function"){if(!i.callback(a,i.keys,i.keyCombo)){f=false}}if(!e[i.keyCombo]){e[i.keyCombo]=i}for(var k=0;k<i.keys.length;k+=1){var l=i.keys[k];if(c.indexOf(l)<0){c.push(l)}}}}if(c.length){return false}return f}function g(){var a=[];for(var b=f.length;b>-1;b-=1){if(f[b]){var c=f[b];for(var e=0;e<c.length;e+=1){var g=c[e],h=true;for(var i=0;i<g.keys.length;i+=1){var j=g.keys[i];if(d.indexOf(j)<0){h=false}}if(h){a.push(g)}}}}return a}function a(a,b,c){if(a.addEventListener){a.addEventListener(b,c,false)}else{a.attachEvent("on"+b,function(b){return c.call(a,b)})}}[].indexOf||(Array.prototype.indexOf=function(a,b,c){for(c=this.length,b=(c+~~b)%c;b<c&&(!(b in this)||this[b]!==a);b++);return b^c?b:-1});var b={us:{backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,pause:19,"break":19,capslock:20,escape:27,esc:27,space:32,spacebar:32,pageup:33,pagedown:34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,"delete":46,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,meta:91,command:91,windows:91,win:91,_91:92,select:93,num0:96,num1:97,num2:98,num3:99,num4:100,num5:101,num6:102,num7:103,num8:104,num9:105,multiply:106,add:107,subtract:109,decimal:110,divide:111,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,numlock:144,num:144,scrolllock:145,scroll:145,semicolon:186,equal:187,equalsign:187,comma:188,dash:189,period:190,slash:191,forwardslash:191,graveaccent:192,openbracket:219,backslash:220,closebracket:221,singlequote:222}};var c=b["us"],d=[],e={},f=[];a(document,"keydown",function(a){for(var b in c){if(c.hasOwnProperty(b)&&a.keyCode===c[b]){if(d.indexOf(b)<0){d.push(b)}}}return h(a)});a(document,"keyup",function(a){for(var b in c){if(c.hasOwnProperty(b)&&a.keyCode===c[b]){var e=d.indexOf(b);if(e>-1){d.splice(e,1)}}}return i(a)});return{bind:{key:j,axis:k},activeKeys:m,unbind:{key:l},locale:{add:n,set:o}}})