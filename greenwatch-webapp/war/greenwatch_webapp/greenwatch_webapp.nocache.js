function greenwatch_webapp(){var Q='',wb='" for "gwt:onLoadErrorFn"',ub='" for "gwt:onPropertyErrorFn"',db='"><\/script>',fb='#',hc='.cache.html',hb='/',Yb='3E1BFEC4B5377F59EF161A6D860C6524',Zb='3EE71B4D4F46096AF4C54BCE7EAB8AC2',$b='42B4C387006BCDAC7232B36A64BB843E',_b='4D69EBB6448DD83DF832C7880B1DAE9E',ac='5CCF8783724AED9FCB3A109C2F639C38',bc='7814BD15FBDAF10E7232AD662057AE1B',cc='9690FB0D961AB7B677698160D9D946E1',gc=':',ob='::',pc='<script defer="defer">greenwatch_webapp.onInjectionDone(\'greenwatch_webapp\')<\/script>',cb='<script id="',rb='=',gb='?',dc='A3C13C4936FEB5F3C150ABD2147498C3',ec='AF97B3FA5FFEFD40672DDB7B6C5694C6',tb='Bad handler "',fc='DEEDE972D4847CB5E5C2A9B6078C7491',oc='DOMContentLoaded',Gb='Gears.Factory',eb='SCRIPT',bb='__gwt_marker_greenwatch_webapp',Ib='application/x-googlegears',ib='base',$='baseUrl',U='begin',T='bootstrap',kb='clear.cache.gif',qb='content',Z='end',Db='function',Fb='gears',Sb='gecko',Tb='gecko1_8',Bb='geolocation.api',R='greenwatch_webapp',ab='greenwatch_webapp.nocache.js',nb='greenwatch_webapp::',V='gwt.codesvr=',W='gwt.hosted=',X='gwt.hybrid',ic='gwt/standard/standard.css',vb='gwt:onLoadErrorFn',sb='gwt:onPropertyErrorFn',pb='gwt:property',nc='head',Wb='hosted.html?greenwatch_webapp',mc='href',Eb='html5',Rb='ie6',Qb='ie8',Hb='ie_mobile',xb='iframe',jb='img',yb="javascript:''",jc='link',Vb='loadExternalRefs',lb='meta',Ab='moduleRequested',Y='moduleStartup',Pb='msie',mb='name',Kb='none',Jb='object',Mb='opera',zb='position:absolute;width:0;height:0;border:none',kc='rel',Ob='safari',_='script',Xb='selectingPermutation',S='startup',lc='stylesheet',Cb='undefined',Ub='unknown',Lb='user.agent',Nb='webkit';var m=window,n=document,o=m.__gwtStatsEvent?function(a){return m.__gwtStatsEvent(a)}:null,p=m.__gwtStatsSessionId?m.__gwtStatsSessionId:null,q,r,s,t=Q,u={},v=[],w=[],x=[],y=0,z,A;o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:T,millis:(new Date).getTime(),type:U});if(!m.__gwt_stylesLoaded){m.__gwt_stylesLoaded={}}if(!m.__gwt_scriptsLoaded){m.__gwt_scriptsLoaded={}}function B(){var b=false;try{var c=m.location.search;return (c.indexOf(V)!=-1||(c.indexOf(W)!=-1||m.external&&m.external.gwtOnLoad))&&c.indexOf(X)==-1}catch(a){}B=function(){return b};return b}
function C(){if(q&&r){var b=n.getElementById(R);var c=b.contentWindow;if(B()){c.__gwt_getProperty=function(a){return I(a)}}greenwatch_webapp=null;c.gwtOnLoad(z,R,t,y);o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:Y,millis:(new Date).getTime(),type:Z})}}
function D(){if(u[$]){t=u[$];return t}var e;var f=n.getElementsByTagName(_);for(var g=0;g<f.length;++g){if(f[g].src.indexOf(ab)!=-1){e=f[g]}}if(!e){var h=bb;var i;n.write(cb+h+db);i=n.getElementById(h);e=i&&i.previousSibling;while(e&&e.tagName!=eb){e=e.previousSibling}}function j(a){var b=a.lastIndexOf(fb);if(b==-1){b=a.length}var c=a.indexOf(gb);if(c==-1){c=a.length}var d=a.lastIndexOf(hb,Math.min(c,b));return d>=0?a.substring(0,d+1):Q}
;if(e&&e.src){t=j(e.src)}if(t==Q){var k=n.getElementsByTagName(ib);if(k.length>0){t=k[k.length-1].href}else{t=j(n.location.href)}}else if(t.match(/^\w+:\/\//)){}else{var l=n.createElement(jb);l.src=t+kb;t=j(l.src)}if(i){i.parentNode.removeChild(i)}return t}
function E(){var b=document.getElementsByTagName(lb);for(var c=0,d=b.length;c<d;++c){var e=b[c],f=e.getAttribute(mb),g;if(f){f=f.replace(nb,Q);if(f.indexOf(ob)>=0){continue}if(f==pb){g=e.getAttribute(qb);if(g){var h,i=g.indexOf(rb);if(i>=0){f=g.substring(0,i);h=g.substring(i+1)}else{f=g;h=Q}u[f]=h}}else if(f==sb){g=e.getAttribute(qb);if(g){try{A=eval(g)}catch(a){alert(tb+g+ub)}}}else if(f==vb){g=e.getAttribute(qb);if(g){try{z=eval(g)}catch(a){alert(tb+g+wb)}}}}}}
function H(a,b){var c=x;for(var d=0,e=a.length-1;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
function I(a){var b=w[a](),c=v[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(A){A(a,d,b)}throw null}
var J;function K(){if(!J){J=true;var a=n.createElement(xb);a.src=yb;a.id=R;a.style.cssText=zb;a.tabIndex=-1;n.body.appendChild(a);o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:Y,millis:(new Date).getTime(),type:Ab});a.contentWindow.location.replace(t+M)}}
w[Bb]=function(){if(typeof navigator.geolocation!=Cb&&typeof navigator.geolocation.getCurrentPosition==Db){return Eb}if(window.google&&google.gears){return Fb}var b=null;if(typeof GearsFactory!=Cb){b=new GearsFactory}else{try{b=new ActiveXObject(Gb);if(b.getBuildInfo().indexOf(Hb)!=-1){b.privateSetGlobalObject(this)}}catch(a){if(typeof navigator.mimeTypes!=Cb&&navigator.mimeTypes[Ib]){b=document.createElement(Jb);b.style.display=Kb;b.width=0;b.height=0;b.type=Ib;document.documentElement.appendChild(b)}}}if(!b){return Eb}if(!window.google){google={}}if(!google.gears){google.gears={factory:b}}return Fb};v[Bb]={gears:0,html5:1};w[Lb]=function(){var b=navigator.userAgent.toLowerCase();var c=function(a){return parseInt(a[1])*1000+parseInt(a[2])};if(b.indexOf(Mb)!=-1){return Mb}else if(b.indexOf(Nb)!=-1){return Ob}else if(b.indexOf(Pb)!=-1){if(document.documentMode>=8){return Qb}else{var d=/msie ([0-9]+)\.([0-9]+)/.exec(b);if(d&&d.length==3){var e=c(d);if(e>=6000){return Rb}}}}else if(b.indexOf(Sb)!=-1){return Tb}return Ub};v[Lb]={gecko1_8:0,ie6:1,ie8:2,opera:3,safari:4};greenwatch_webapp.onScriptLoad=function(){if(J){r=true;C()}};greenwatch_webapp.onInjectionDone=function(){q=true;o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:Vb,millis:(new Date).getTime(),type:Z});C()};E();D();var L;var M;if(B()){if(m.external&&(m.external.initModule&&m.external.initModule(R))){m.location.reload();return}M=Wb;L=Q}o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:T,millis:(new Date).getTime(),type:Xb});if(!B()){try{H([Fb,Tb],Yb);H([Fb,Mb],Zb);H([Fb,Rb],$b);H([Fb,Qb],_b);H([Eb,Rb],ac);H([Eb,Ob],bc);H([Fb,Ob],cc);H([Eb,Qb],dc);H([Eb,Mb],ec);H([Eb,Tb],fc);L=x[I(Bb)][I(Lb)];var N=L.indexOf(gc);if(N!=-1){y=Number(L.substring(N+1));L=L.substring(0,N)}M=L+hc}catch(a){return}}var O;function P(){if(!s){s=true;if(!__gwt_stylesLoaded[ic]){var a=n.createElement(jc);__gwt_stylesLoaded[ic]=a;a.setAttribute(kc,lc);a.setAttribute(mc,t+ic);n.getElementsByTagName(nc)[0].appendChild(a)}C();if(n.removeEventListener){n.removeEventListener(oc,P,false)}if(O){clearInterval(O)}}}
if(n.addEventListener){n.addEventListener(oc,function(){K();P()},false)}var O=setInterval(function(){if(/loaded|complete/.test(n.readyState)){K();P()}},50);o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:T,millis:(new Date).getTime(),type:Z});o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:Vb,millis:(new Date).getTime(),type:U});n.write(pc)}
greenwatch_webapp();