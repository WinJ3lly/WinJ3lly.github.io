!function(e){"undefined"!=typeof module&&module.exports?module.exports.browser=e():"function"==typeof define&&define.amd?define(e):this.bowser=e()}(function(){var y=!0;function t(i){function e(e){e=i.match(e);return e&&1<e.length&&e[1]||""}var o,s=e(/(ipod|iphone|ipad)/i).toLowerCase(),r=!/like android/i.test(i)&&/android/i.test(i),n=/nexus\s*[0-6]\s*/i.test(i),t=!n&&/nexus\s*[0-9]+/i.test(i),a=/CrOS/.test(i),d=/silk/i.test(i),m=/sailfish/i.test(i),p=/tizen/i.test(i),v=/(web|hpw)os/i.test(i),l=/windows phone/i.test(i),f=(/SamsungBrowser/i.test(i),!l&&/windows/i.test(i)),c=!s&&!d&&/macintosh/i.test(i),u=!r&&!m&&!p&&!v&&/linux/i.test(i),h=e(/edge\/(\d+(\.\d+)?)/i),b=e(/version\/(\d+(\.\d+)?)/i),w=/tablet/i.test(i),g=!w&&/[^-]mobi/i.test(i),k=/xbox/i.test(i),a=(/opera/i.test(i)?o={name:"Opera",opera:y,version:b||e(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)}:/opr|opios/i.test(i)?o={name:"Opera",opera:y,version:e(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i)||b}:/SamsungBrowser/i.test(i)?o={name:"Samsung Internet for Android",samsungBrowser:y,version:b||e(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)}:/coast/i.test(i)?o={name:"Opera Coast",coast:y,version:b||e(/(?:coast)[\s\/](\d+(\.\d+)?)/i)}:/yabrowser/i.test(i)?o={name:"Yandex Browser",yandexbrowser:y,version:b||e(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}:/ucbrowser/i.test(i)?o={name:"UC Browser",ucbrowser:y,version:e(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)}:/mxios/i.test(i)?o={name:"Maxthon",maxthon:y,version:e(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)}:/epiphany/i.test(i)?o={name:"Epiphany",epiphany:y,version:e(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)}:/puffin/i.test(i)?o={name:"Puffin",puffin:y,version:e(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)}:/sleipnir/i.test(i)?o={name:"Sleipnir",sleipnir:y,version:e(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)}:/k-meleon/i.test(i)?o={name:"K-Meleon",kMeleon:y,version:e(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)}:l?(o={name:"Windows Phone",windowsphone:y},h?(o.msedge=y,o.version=h):(o.msie=y,o.version=e(/iemobile\/(\d+(\.\d+)?)/i))):/msie|trident/i.test(i)?o={name:"Internet Explorer",msie:y,version:e(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:a?o={name:"Chrome",chromeos:y,chromeBook:y,chrome:y,version:e(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:/chrome.+? edge/i.test(i)?o={name:"Microsoft Edge",msedge:y,version:h}:/vivaldi/i.test(i)?o={name:"Vivaldi",vivaldi:y,version:e(/vivaldi\/(\d+(\.\d+)?)/i)||b}:m?o={name:"Sailfish",sailfish:y,version:e(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(i)?o={name:"SeaMonkey",seamonkey:y,version:e(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel|fxios/i.test(i)?(o={name:"Firefox",firefox:y,version:e(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(i)&&(o.firefoxos=y)):d?o={name:"Amazon Silk",silk:y,version:e(/silk\/(\d+(\.\d+)?)/i)}:/phantom/i.test(i)?o={name:"PhantomJS",phantom:y,version:e(/phantomjs\/(\d+(\.\d+)?)/i)}:/slimerjs/i.test(i)?o={name:"SlimerJS",slimer:y,version:e(/slimerjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(i)||/rim\stablet/i.test(i)?o={name:"BlackBerry",blackberry:y,version:b||e(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:v?(o={name:"WebOS",webos:y,version:b||e(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(i)&&(o.touchpad=y)):/bada/i.test(i)?o={name:"Bada",bada:y,version:e(/dolfin\/(\d+(\.\d+)?)/i)}:p?o={name:"Tizen",tizen:y,version:e(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||b}:/qupzilla/i.test(i)?o={name:"QupZilla",qupzilla:y,version:e(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i)||b}:/chromium/i.test(i)?o={name:"Chromium",chromium:y,version:e(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i)||b}:/chrome|crios|crmo/i.test(i)?o={name:"Chrome",chrome:y,version:e(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:r?o={name:"Android",version:b}:/safari|applewebkit/i.test(i)?(o={name:"Safari",safari:y},b&&(o.version=b)):s?(o={name:"iphone"==s?"iPhone":"ipad"==s?"iPad":"iPod"},b&&(o.version=b)):o=/googlebot/i.test(i)?{name:"Googlebot",googlebot:y,version:e(/googlebot\/(\d+(\.\d+))/i)||b}:{name:e(/^(.*)\/(.*) /),version:(l=/^(.*)\/(.*) /,(l=i.match(l))&&1<l.length&&l[2]||"")},!o.msedge&&/(apple)?webkit/i.test(i)?(/(apple)?webkit\/537\.36/i.test(i)?(o.name=o.name||"Blink",o.blink=y):(o.name=o.name||"Webkit",o.webkit=y),!o.version&&b&&(o.version=b)):!o.opera&&/gecko\//i.test(i)&&(o.name=o.name||"Gecko",o.gecko=y,o.version=o.version||e(/gecko\/(\d+(\.\d+)?)/i)),o.windowsphone||o.msedge||!r&&!o.silk?o.windowsphone||o.msedge||!s?c?o.mac=y:k?o.xbox=y:f?o.windows=y:u&&(o.linux=y):(o[s]=y,o.ios=y):o.android=y,""),h=(o.windowsphone?a=e(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):s?a=(a=e(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g,"."):r?a=e(/android[ \/-](\d+(\.\d+)*)/i):o.webos?a=e(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):o.blackberry?a=e(/rim\stablet\sos\s(\d+(\.\d+)*)/i):o.bada?a=e(/bada\/(\d+(\.\d+)*)/i):o.tizen&&(a=e(/tizen[\/\s](\d+(\.\d+)*)/i)),a&&(o.osversion=a),a.split(".")[0]);return w||t||"ipad"==s||r&&(3==h||4<=h&&!g)||o.silk?o.tablet=y:(g||"iphone"==s||"ipod"==s||r||n||o.blackberry||o.webos||o.bada)&&(o.mobile=y),o.msedge||o.msie&&10<=o.version||o.yandexbrowser&&15<=o.version||o.vivaldi&&1<=o.version||o.chrome&&20<=o.version||o.samsungBrowser&&4<=o.version||o.firefox&&20<=o.version||o.safari&&6<=o.version||o.opera&&10<=o.version||o.ios&&o.osversion&&6<=o.osversion.split(".")[0]||o.blackberry&&10.1<=o.version||o.chromium&&20<=o.version?o.a=y:o.msie&&o.version<10||o.chrome&&o.version<20||o.firefox&&o.version<20||o.safari&&o.version<6||o.opera&&o.version<10||o.ios&&o.osversion&&o.osversion.split(".")[0]<6||o.chromium&&o.version<20?o.c=y:o.x=y,o}var a=t("undefined"!=typeof navigator&&navigator.userAgent||"");function s(e){return e.split(".").length}function r(e,i){var o,s=[];if(Array.prototype.map)return Array.prototype.map.call(e,i);for(o=0;o<e.length;o++)s.push(i(e[o]));return s}function d(e){for(var o=Math.max(s(e[0]),s(e[1])),i=r(e,function(e){var i=o-s(e);return r((e+=new Array(1+i).join(".0")).split("."),function(e){return new Array(20-e.length).join("0")+e}).reverse()});0<=--o;){if(i[0][o]>i[1][o])return 1;if(i[0][o]!==i[1][o])return-1;if(0===o)return 0}}function n(e,i,o){var s,r=a,n=("string"==typeof i&&(o=i,i=void 0),void 0===i&&(i=!1),""+(r=o?t(o):r).version);for(s in e)if(e.hasOwnProperty(s)&&r[s]){if("string"!=typeof e[s])throw new Error("Browser version in the minVersion map should be a string: "+s+": "+String(e));return d([n,e[s]])<0}return i}return a.test=function(e){for(var i=0;i<e.length;++i){var o=e[i];if("string"==typeof o&&o in a)return!0}return!1},a.isUnsupportedBrowser=n,a.compareVersions=d,a.check=function(e,i,o){return!n(e,i,o)},a._detect=t,a});