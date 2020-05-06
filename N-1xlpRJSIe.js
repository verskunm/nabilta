if (self.CavalryLogger) { CavalryLogger.start_js(["D9JQp"]); }

__d("FBJSON",[],(function(a,b,c,d,e,f){e.exports={parse:JSON.parse,stringify:JSON.stringify}}),null);
__d("randomInt",["invariant"],(function(a,b,c,d,e,f,g){function a(a,b){a=b===void 0?[0,a]:[a,b];b=a[0];a=a[1];a>b||g(0,1180,a,b);var c=this.random||Math.random;return Math.floor(b+c()*(a-b))}e.exports=a}),null);
__d("ClientIDs",["randomInt"],(function(a,b,c,d,e,f){var g=new Set();a={getNewClientID:function(){var a=Date.now();a=a+":"+(b("randomInt")(0,4294967295)+1);g.add(a);return a},isExistingClientID:function(a){return g.has(a)}};e.exports=a}),null);
__d("QueryString",[],(function(a,b,c,d,e,f){function a(a){var b=[];Object.keys(a).sort().forEach(function(c){var d=a[c];if(d===void 0)return;if(d===null){b.push(c);return}b.push(encodeURIComponent(c)+"="+encodeURIComponent(d))});return b.join("&")}function b(a,b){b===void 0&&(b=!1);var c={};if(a==="")return c;a=a.split("&");for(var d=0;d<a.length;d++){var e=a[d].split("=",2),f=decodeURIComponent(e[0]);if(b&&Object.prototype.hasOwnProperty.call(c,f))throw new URIError("Duplicate key: "+f);c[f]=e.length===2?decodeURIComponent(e[1]):null}return c}function c(a,b){return a+(a.indexOf("?")!==-1?"&":"?")+(typeof b==="string"?b:g.encode(b))}var g={encode:a,decode:b,appendToUrl:c};e.exports=g}),null);
__d("CurrentUser",["Cookie","CurrentUserInitialData"],(function(a,b,c,d,e,f){var g,h={getID:function(){return(g||(g=b("CurrentUserInitialData"))).USER_ID},getAccountID:function(){return(g||(g=b("CurrentUserInitialData"))).ACCOUNT_ID},getEmployeeWorkUserID:function(){return(g||(g=b("CurrentUserInitialData"))).WORK_USER_ID},getName:function(){return(g||(g=b("CurrentUserInitialData"))).NAME},getShortName:function(){return(g||(g=b("CurrentUserInitialData"))).SHORT_NAME},isLoggedIn:function(){return(g||(g=b("CurrentUserInitialData"))).USER_ID!=="0"},isLoggedInNow:function(){if(!h.isLoggedIn())return!1;if((g||(g=b("CurrentUserInitialData"))).IS_INTERN_SITE)return!0;if((g||(g=b("CurrentUserInitialData"))).IS_WORK_USER)return!0;return(g||(g=b("CurrentUserInitialData"))).ORIGINAL_USER_ID!=null&&(g||(g=b("CurrentUserInitialData"))).ORIGINAL_USER_ID!=""?(g||(g=b("CurrentUserInitialData"))).ORIGINAL_USER_ID===b("Cookie").get("c_user"):(g||(g=b("CurrentUserInitialData"))).USER_ID===b("Cookie").get("c_user")},isEmployee:function(){return!!(g||(g=b("CurrentUserInitialData"))).IS_EMPLOYEE},isTestUser:function(){return!!(g||(g=b("CurrentUserInitialData"))).IS_TEST_USER},hasWorkUser:function(){return!!(g||(g=b("CurrentUserInitialData"))).HAS_WORK_USER},isWorkUser:function(){return!!(g||(g=b("CurrentUserInitialData"))).IS_WORK_USER},isGray:function(){return!!(g||(g=b("CurrentUserInitialData"))).IS_GRAY},isUnderage:function(){return!!(g||(g=b("CurrentUserInitialData"))).IS_UNDERAGE},isMessengerOnlyUser:function(){return!!(g||(g=b("CurrentUserInitialData"))).IS_MESSENGER_ONLY_USER},isDeactivatedAllowedOnMessenger:function(){return!!(g||(g=b("CurrentUserInitialData"))).IS_DEACTIVATED_ALLOWED_ON_MESSENGER},getAppID:function(){return(g||(g=b("CurrentUserInitialData"))).APP_ID}};e.exports=h}),null);
__d("getCrossOriginTransport",["invariant","ExecutionEnvironment","ex"],(function(a,b,c,d,e,f,g){function h(){if(!b("ExecutionEnvironment").canUseDOM)throw new Error(b("ex")("getCrossOriginTransport: %s","Cross origin transport unavailable in the server environment."));try{var a=new XMLHttpRequest();!("withCredentials"in a)&&typeof XDomainRequest!=="undefined"&&(a=new XDomainRequest());return a}catch(a){throw new Error(b("ex")("getCrossOriginTransport: %s",a.message))}}h.withCredentials=function(){var a=h();"withCredentials"in a||g(0,5150);var b=a.open;a.open=function(){b.apply(this,arguments),this.withCredentials=!0};return a};e.exports=h}),null);
__d("ZeroRewrites",["URI","ZeroRewriteRules","getCrossOriginTransport","getSameOriginTransport","isFacebookURI"],(function(a,b,c,d,e,f){var g,h={rewriteURI:function(a){if(!b("isFacebookURI")(a)||h._isWhitelisted(a))return a;var c=h._getRewrittenSubdomain(a);c!==null&&c!==void 0&&(a=a.setSubdomain(c));return a},getTransportBuilderForURI:function(a){return h.isRewritten(a)?b("getCrossOriginTransport").withCredentials:b("getSameOriginTransport")},isRewriteSafe:function(a){if(Object.keys(b("ZeroRewriteRules").rewrite_rules).length===0||!b("isFacebookURI")(a))return!1;var c=h._getCurrentURI().getDomain(),d=new(g||(g=b("URI")))(a).qualify().getDomain();return c===d||h.isRewritten(a)},isRewritten:function(a){a=a.getQualifiedURI();if(Object.keys(b("ZeroRewriteRules").rewrite_rules).length===0||!b("isFacebookURI")(a)||h._isWhitelisted(a))return!1;var c=a.getSubdomain(),d=h._getCurrentURI(),e=h._getRewrittenSubdomain(d);return a.getDomain()!==d.getDomain()&&c===e},_isWhitelisted:function(a){a=a.getPath();a.endsWith("/")||(a+="/");return b("ZeroRewriteRules").whitelist&&b("ZeroRewriteRules").whitelist[a]===1},_getRewrittenSubdomain:function(a){a=a.getQualifiedURI().getSubdomain();return b("ZeroRewriteRules").rewrite_rules[a]},_getCurrentURI:function(){return new(g||(g=b("URI")))("/").qualify()}};e.exports=h}),null);