/*!
 * jQuery Once v2.1.1 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){"use strict";var n=function(e){e=e||"once";if(typeof e!=="string"){throw new Error("The jQuery Once id parameter must be a string")}return e};e.fn.once=function(t){var r="jquery-once-"+n(t);return this.filter(function(){return e(this).data(r)!==true}).data(r,true)};e.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+n(e))};e.fn.findOnce=function(t){var r="jquery-once-"+n(t);return this.filter(function(){return e(this).data(r)===true})}});

(function(){'use strict';var settingsElement=document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');window.drupalSettings={};if(settingsElement!==null){window.drupalSettings=JSON.parse(settingsElement.textContent);}})();;

window.Drupal={behaviors:{},locale:{}};(function(Drupal,drupalSettings,drupalTranslations){'use strict';Drupal.throwError=function(error){setTimeout(function(){throw error;},0);};Drupal.attachBehaviors=function(context,settings){context=context||document;settings=settings||drupalSettings;var behaviors=Drupal.behaviors;for(var i in behaviors){if(behaviors.hasOwnProperty(i)&&typeof behaviors[i].attach==='function'){try{behaviors[i].attach(context,settings);}
catch(e){Drupal.throwError(e);}}}};Drupal.detachBehaviors=function(context,settings,trigger){context=context||document;settings=settings||drupalSettings;trigger=trigger||'unload';var behaviors=Drupal.behaviors;for(var i in behaviors){if(behaviors.hasOwnProperty(i)&&typeof behaviors[i].detach==='function'){try{behaviors[i].detach(context,settings,trigger);}
catch(e){Drupal.throwError(e);}}}};Drupal.checkPlain=function(str){str=str.toString().replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');return str;};Drupal.formatString=function(str,args){var processedArgs={};for(var key in args){if(args.hasOwnProperty(key)){switch(key.charAt(0)){case'@':processedArgs[key]=Drupal.checkPlain(args[key]);break;case'!':processedArgs[key]=args[key];break;default:processedArgs[key]=Drupal.theme('placeholder',args[key]);break;}}}
return Drupal.stringReplace(str,processedArgs,null);};Drupal.stringReplace=function(str,args,keys){if(str.length===0){return str;}
if(!Array.isArray(keys)){keys=[];for(var k in args){if(args.hasOwnProperty(k)){keys.push(k);}}
keys.sort(function(a,b){return a.length-b.length;});}
if(keys.length===0){return str;}
var key=keys.pop();var fragments=str.split(key);if(keys.length){for(var i=0;i<fragments.length;i++){fragments[i]=Drupal.stringReplace(fragments[i],args,keys.slice(0));}}
return fragments.join(args[key]);};Drupal.t=function(str,args,options){options=options||{};options.context=options.context||'';if(typeof drupalTranslations!=='undefined'&&drupalTranslations.strings&&drupalTranslations.strings[options.context]&&drupalTranslations.strings[options.context][str]){str=drupalTranslations.strings[options.context][str];}
if(args){str=Drupal.formatString(str,args);}
return str;};Drupal.url=function(path){return drupalSettings.path.baseUrl+drupalSettings.path.pathPrefix+path;};Drupal.url.toAbsolute=function(url){var urlParsingNode=document.createElement('a');try{url=decodeURIComponent(url);}
catch(e){}
urlParsingNode.setAttribute('href',url);return urlParsingNode.cloneNode(false).href;};Drupal.url.isLocal=function(url){var absoluteUrl=Drupal.url.toAbsolute(url);var protocol=location.protocol;if(protocol==='http:'&&absoluteUrl.indexOf('https:')===0){protocol='https:';}
var baseUrl=protocol+'//'+location.host+drupalSettings.path.baseUrl.slice(0,-1);try{absoluteUrl=decodeURIComponent(absoluteUrl);}
catch(e){}
try{baseUrl=decodeURIComponent(baseUrl);}
catch(e){}
return absoluteUrl===baseUrl||absoluteUrl.indexOf(baseUrl+'/')===0;};Drupal.formatPlural=function(count,singular,plural,args,options){args=args||{};args['@count']=count;var pluralDelimiter=drupalSettings.pluralDelimiter;var translations=Drupal.t(singular+pluralDelimiter+plural,args,options).split(pluralDelimiter);var index=0;if(typeof drupalTranslations!=='undefined'&&drupalTranslations.pluralFormula){index=count in drupalTranslations.pluralFormula?drupalTranslations.pluralFormula[count]:drupalTranslations.pluralFormula['default'];}
else if(args['@count']!==1){index=1;}
return translations[index];};Drupal.encodePath=function(item){return window.encodeURIComponent(item).replace(/%2F/g,'/');};Drupal.theme=function(func){var args=Array.prototype.slice.apply(arguments,[1]);if(func in Drupal.theme){return Drupal.theme[func].apply(this,args);}};Drupal.theme.placeholder=function(str){return'<em class="placeholder">'+Drupal.checkPlain(str)+'</em>';};})(Drupal,window.drupalSettings,window.drupalTranslations);;
/* Source and licensing information for the line(s) below can be found at https://mariadb.com/core/misc/drupal.init.js. */

if(window.jQuery){jQuery.noConflict();}
document.documentElement.className+=' js';(function(domready,Drupal,drupalSettings){'use strict';domready(function(){Drupal.attachBehaviors(document,drupalSettings);});})(domready,Drupal,window.drupalSettings);
/* Source and licensing information for the above line(s) can be found at https://mariadb.com/core/misc/drupal.init.js. */;
