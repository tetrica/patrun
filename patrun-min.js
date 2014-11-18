/* Copyright (c) 2013 Richard Rodger, MIT License, https://github.com/rjrodger/patrun */
(function(){"use strict";var n=this,e=n.patrun,r="undefined"!=typeof require,t=n._,u=n.gex;if("undefined"==typeof t){if(!r)throw new Error("patrun requires underscore, see http://underscorejs.org");t=require("underscore")}if("undefined"==typeof u){if(!r)throw new Error("patrun requires gex, see https://github.com/rjrodger/gex");u=require("gex")}var i=n.patrun=function(r){var i={},o={};return i.noConflict=function(){return n.patrun=e,i},i.add=function(n,e){n=t.clone(n);var u;r&&(u=r.call(i,n,e));for(var s,d=t.keys(n).sort(),l=o,f=0;f<d.length;f++){var v=d[f],a=n[v];if(null!==a&&void 0!==a)if(s=l.v,s&&v==l.k)l=s[a]||(s[a]={});else if(l.k)if(v<l.k){var c=l.v,p=l.s;l.v={},l.s={k:l.k,v:c,s:p},l.k=v,l=l.v[a]={}}else s=l.v,l=l.s||(l.s={}),f--;else l.k=v,l.v={},l=l.v[a]={}}return void 0!==e&&l&&(l.d=e,u&&(l.f=t.isFunction(u)?u:u.find,l.r=t.isFunction(u.remove)?u.remove:void 0)),i},i.findexact=function(n){return i.find(n,!0)},i.find=function(n,e){var r=o,u=o.d||null,s=null,d=null,l=[],f={},v=t.keys(n).length;do{if(d=r.k,r.v){var a=r.v[n[d]];a?(f[d]=!0,r.s&&l.push(r.s),u=null==a.d?null:a.d,s=a.f,r=a):r=r.s}else r=null;null==r&&null===u&&0<l.length&&(r=l.pop())}while(r);return null===u&&0===v&&void 0!==o.d&&(u=o.d,s=o.f),e&&t.keys(f).length!=v&&(u=null),s&&(u=s.call(i,n,u)),u},i.remove=function(n){var e,r=o,t=null,u=[];do if(e=r.k,r.v){var i=r.v[n[e]];i?(u.push({km:r,v:n[e]}),t=i.d,r=i):r=r.s}else r=null;while(r);if(void 0!==t){var s=u[u.length-1];if(s&&s.km&&s.km.v){var d=s.km.v[s.v];(!d.r||d.r(n,d.d))&&delete d.d}}},i.list=function(n,e){function r(i,o,s,d){if(i.v){var l,f=i.k,v=u(n?null==n[f]?e?null:"*":n[f]:"*"),a=t.extend({},o),c=t.extend({},s);for(var p in i.v)if(v.on(p)){var h=t.clone(a);h[f]=p;var k=t.extend({},c);delete k[f],l=i.v[p],0===t.keys(k).length&&l&&l.d&&d.push({match:h,data:l.d,find:l.f}),l&&l.v&&r(l,t.extend({},h),t.extend({},k),d)}l=i.s,l&&r(l,t.extend({},a),t.extend({},c),d)}}var i=[];return o.d&&i.push({match:{},data:o.d,find:o.f}),r(o,{},t.extend({},n),i),i},i.toString=function(n,e){function r(n,e){for(var r=0;e>r;r++)n.push(" ")}function u(e,o,s,d){var l;if(void 0!==e.d&&(r(o,s),o.push(n(e.d)),i.push(d.join(", ")+" -> "+n(e.d))),e.k&&(o.push("\n"),r(o,s),o.push(e.k+":")),e.v){s++;for(var f in e.v)o.push("\n"),r(o,s),o.push(f+" ->"),l=t.clone(d),l.push(e.k+"="+f),u(e.v[f],o,s+1,l);e.s&&(o.push("\n"),r(o,s),o.push("* ->"),l=t.clone(d),u(e.s,o,s+1,l))}}n=t.isFunction(n)?n:function(n){return t.isFunction(n)?"<"+n.name+">":"<"+n+">"},e=t.isBoolean(arguments[0])?arguments[0]:e,e=void 0===e?!1:e;var i=[],s=[];return u(o,s,0,[]),e?s.join(""):i.join("\n")},i.inspect=i.toString,i.toJSON=function(n){return JSON.stringify(o,function(n,e){return t.isFunction(e)?"[Function]":e},n)},i};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=i),exports.patrun=i):n.patrun=i}).call(this);
//# sourceMappingURL=patrun-min.map