parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"D9Nj":[function(require,module,exports) {

},{"./assets/background.png":[["background.dda41088.png","A4mA"],"A4mA"],"./assets/background21.png":[["background21.98b380ee.png","fBno"],"fBno"]}],"qMRA":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function i(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),Object.defineProperty(e,"prototype",{writable:!1}),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var s=function(){function t(i){e(this,t),this.width=100,this.height=20,this.maxSpeed=350,this.xStart=400-this.width/2,this.x=this.xStart,this.speed=0,this.color="#FFA500",this.initialAcc=125}return i(t,[{key:"update",value:function(e){e/=4,this.x+=this.speed*e/100,this.speed>0?this.speed-=1*e/2:this.speed<0&&(this.speed+=1*e/2),this.x<=0&&(this.x=0),this.x>700&&(this.x=700),this.speed>this.maxSpeed&&(this.speed=this.maxSpeed),this.speed<-this.maxSpeed&&(this.speed=-this.maxSpeed)}},{key:"draw",value:function(e){var t=e.createLinearGradient(0,800,0,0);t.addColorStop(0,"rgba(12, 12, 23, 1)"),t.addColorStop(.235,"rgba(12, 12, 23, 1)"),t.addColorStop(.285,"rgba(265,165,0,1)"),t.addColorStop(1,"rgba(12, 12, 23, 1)"),e.fillStyle=t,e.fillRect(this.x,580,this.width,this.height)}},{key:"moveLeft",value:function(){this.speed-=this.initialAcc}},{key:"moveRight",value:function(){this.speed+=this.initialAcc}},{key:"reset",value:function(){this.x=this.xStart,this.speed=0}},{key:"stop",value:function(){this.speed=0}}]),t}();exports.default=s;
},{}],"gFLk":[function(require,module,exports) {
"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function t(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o=t(function e(t,o){function a(e){function n(e){e.clientX+t.width<t.x&&t.moveLeft(),e.clientX>t.x+t.width&&t.moveRight()}function a(e){e.touches[0].clientX+t.width<t.x&&t.moveLeft(),e.touches[0].clientX>t.x+t.width&&t.moveRight()}(o.gameState<1||void 0===o.gameState)&&o.start(),document.addEventListener("mousemove",n),document.addEventListener("touchmove",a),document.addEventListener("mouseup",function(e){document.removeEventListener("mousemove",n)}),document.addEventListener("touchend",function(e){document.removeEventListener("touchmove",a)})}n(this,e),this.canvas=document.getElementById("game"),this.canvas.addEventListener("mousedown",a),this.canvas.addEventListener("touchstart",a),document.addEventListener("keydown",function(e){switch(e.keyCode){case 37:t.moveLeft();break;case 39:t.moveRight();break;case 32:(o.gameState<1||void 0===o.gameState)&&o.start()}})});exports.default=o;
},{}],"UD3n":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var s=0;s<e.length;s++){var i=e[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,s,i){return s&&e(t.prototype,s),i&&e(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var i=function(){function e(s){t(this,e),this.startX=50,this.startX2=750,this.startY=100,this.startXSpeed=130,this.startYSpeed=0,this.acceleration=25,this.wallBounce=6,this.graceWidth=10,this.ballTrail=[],this.slomo=!1,this.firstHit=0,this.startPos=Math.round(Math.random()),this.x=this.startPos>0?this.startX2:this.startX,this.y=this.startY,this.radius=8,this.yReserve=0,this.color="rgba(255,165,0,1.000)",this.xSpeed=this.startPos>0?-this.startXSpeed:this.startXSpeed,this.ySpeed=this.startYSpeed}return s(e,[{key:"update",value:function(t,e,s){var i=1e3/s;s/=5;var h=i>240?4:i>180?3:i>120?2:1;this.slomo?(this.x+=this.xSpeed*s/(200*h*s),this.y+=this.ySpeed*s/(200*h*s),this.ySpeed+=1*s/8/h*s,this.yReserve+=1*s/8*(s/4)):(this.firstHit>0&&(this.yReserve=this.firstHit/h,this.firstHit=0),this.x+=this.xSpeed*s/200,this.y+=this.ySpeed*s/200,this.ySpeed+=1*s);var a=(Math.abs(this.ySpeed)+Math.abs(this.xSpeed))/10;this.color="rgba(".concat(255-a,",").concat(165-a,",0,1)"),this.y>585&&this.x>t.x-this.graceWidth&&this.x<t.x+(t.width+this.graceWidth)&&(this.ySpeed=-(this.ySpeed+this.acceleration),this.xSpeed+=t.speed+50*Math.random(),this.yReserve>0&&(this.ySpeed-=this.yReserve*h,this.yReserve=0)),this.y<0&&(this.ySpeed=-(this.ySpeed-this.acceleration)),this.x>800&&(this.xSpeed=-this.xSpeed,this.x-=this.wallBounce),this.x<0&&(this.xSpeed=-this.xSpeed,this.x+=this.wallBounce),this.y>600&&(e.gameState>0&&e.endScreen(),e.gameState=0,e.audio.menuStart(e)),this.ballTrail.push([this.x,this.y,this.color]);var r=(Math.abs(this.ySpeed)+Math.abs(this.xSpeed))/s;e.maxSpeed<r&&(e.maxSpeed=Math.round(r),this.deaths>0&&e.displayAnnouncement("wow, new max speed ".concat(e.maxSpeed,"!")))}},{key:"draw",value:function(t){t.beginPath(),t.strokeStyle=this.color,t.fillStyle=this.color,t.lineWidth=1,t.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),t.stroke(),t.fill(),t.closePath(),this.ballTrail.reverse();for(var e=1;e<this.ballTrail.length;e++)t.strokeStyle=this.ballTrail[e][2],t.lineWidth=e<5?15:75/(75+4*e)*15,t.beginPath(),t.moveTo(this.ballTrail[e-1][0],this.ballTrail[e-1][1]),t.lineTo(this.ballTrail[e][0],this.ballTrail[e][1]),t.stroke(),t.closePath();this.ballTrail.length>150&&(this.ballTrail.reverse(),this.ballTrail.shift())}},{key:"reset",value:function(){this.ballTrail=[],this.x=1e3}},{key:"start",value:function(){this.x=this.startX,this.y=this.startY,this.xSpeed=this.startXSpeed,this.ySpeed=this.startYSpeed}}]),e}();exports.default=i;
},{}],"sWst":[function(require,module,exports) {
"use strict";function e(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function r(e,r){for(var i=0;i<r.length;i++){var t=r[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function i(e,i,t){return i&&r(e.prototype,i),t&&r(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=function(){function r(){e(this,r),this.sizeX=52,this.sizeY=20,this.brickPerRow=15,this.startCap=0,this.brickArray=[],this.doMoveBricks=0,this.moveToStage=1,this.colors="rgba(255,".concat(0+33*(this.moveToStage-1),",").concat(0+33*(this.moveToStage-1),",1)")}return i(r,[{key:"update",value:function(e){var r=e/4;this.doMoveBricks>0&&(this.doMoveBricks+=1*r),this.doMoveBricks>400&&(this.doMoveBricks=0,this.moveBricks(this.moveToStage))}},{key:"draw",value:function(e){var r=this;this.brickArray.forEach(function(i){e.fillStyle=r.colors="rgba(255,".concat(165+33*(i[0]-1),",0,1)"),i[0]>0&&e.fillRect(i[1],i[2],r.sizeX,r.sizeY)})}},{key:"generateBrickArray",value:function(e,r,i){var t=this.startCap,o=2*e,s=0,a=0;i=void 0===i?0:i;for(var n=0;n<this.brickPerRow;n++)a>0||0===i?(this.brickArray.push([r,t+n*this.sizeX,o+e*this.sizeY]),s<this.brickPerRow-1&&(t+=2,s++),a--):(t+=2,a++)}},{key:"beginGen",value:function(){this.brickArray=[];for(var e=0;e<2;e++)this.generateBrickArray(e,2);for(var r=0;r<2;r++)this.generateBrickArray(2+r,1,1)}},{key:"waitAndMoveBricks",value:function(e){this.doMoveBricks=1,this.moveToStage=e}},{key:"moveBricks",value:function(e){var r=this,i=[],t=Math.round(e/2)+1;this.brickArray.forEach(function(e){i.push([e[0],e[1],e[2]+r.sizeY+2])}),this.brickArray=i,this.generateBrickArray(0,t)}},{key:"start",value:function(){this.brickArray=[],this.doMoveBricks=0,this.moveToStage=2,this.beginGen()}},{key:"end",value:function(){this.brickArray=[]}}]),r}();exports.default=t;
},{}],"ogLr":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=function(){function t(){e(this,t)}return n(t,[{key:"start",value:function(e,t){for(var n,r=t,o=0;o<r;o++)(n=document.createElement("HR")).style.left=Math.floor(1e3*Math.random())-100+"px",n.style.animationDuration=.2+.3*Math.random()+"s",n.style.animationDelay=5*Math.random()+"s",e.appendChild(n)}},{key:"end",value:function(){document.querySelectorAll("HR").forEach(function(e){return e.remove()})}}]),t}();exports.default=r;
},{}],"mUZd":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function a(e,a,s){return a&&t(e.prototype,a),s&&t(e,s),Object.defineProperty(e,"prototype",{writable:!1}),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var s=function(){function t(a){e(this,t),this.data=a.getInfo(),this.tutorialText=function(e){return{movement:{text:'use <i class="fa fa-caret-square-o-left" style="font-size:36px"></i> and <i class="fa fa-caret-square-o-right" style="font-size:36px"></i> to move',displayed:!1},mousemovement:{text:'you can also move with <i class="fa-solid fa-computer-mouse"></i></i>',displayed:!1},mobilemovement:{text:'on mobile use your <i class="fa fa-hand-o-up" style="font-size:36px"></i> to move',displayed:!1},levels:{text:"for every 4 score you get a new row of bricks",displayed:!1},noob:{text:"best way to get points is to not die and destroy every brick",displayed:!1},rows:{text:"on every 2 rows bricks get tougher to destroy",displayed:!1},pro:{text:"try turning the music up",displayed:!1}}},this.specialText=function(e){return{bugs:{text:"there are no bugs, only features",displayed:!1},speed:{text:"max speed you have achieved with your balls is ".concat(e.maxSpeed," "),displayed:!1},deaths:{text:"you have died ".concat(e.deaths," time").concat(e.deaths>1?"s":e.deaths>10?"s that's alot":"","!"),displayed:!1},debris:{text:"you have littered the streets with ".concat(e.debrisGenerated," pieces of thrash!"),displayed:!1},bit:{text:"we have mined ".concat(e.debrisGenerated*e.deaths*e.maxSpeed," poopcoins on your computer while you were playing!"),displayed:!1},music:{text:"music is Power Glove - Motorcycle Cop",displayed:!1},stage:{text:"highest stage you have reached is ".concat(e.stage-1),displayed:!1}}},this.read=0,this.getTexts=Object.values(this.tutorialText(this.data))}return a(t,[{key:"getTutorialText",value:function(){if(this.getTutorialStatus())return"";for(var e=0;e<this.getTexts.length;e++)if(!this.getTexts[e].displayed)return this.getTexts[e].displayed=!0,this.read++,this.getTexts[e].text}},{key:"getData",value:function(){return this.data}},{key:"updateData",value:function(e){this.data=e}},{key:"getSpecialText",value:function(){this.getSpecial=Object.values(this.specialText(this.data));var e=this.getSpecial.length;return this.getSpecial[Math.floor(Math.random()*e)].text}},{key:"getTutorialStatus",value:function(){return this.read===this.getTexts.length}}]),t}();exports.default=s;
},{}],"jC8c":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var u=t[i];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(e,u.key,u)}}function i(e,i,u){return i&&t(e.prototype,i),u&&t(e,u),Object.defineProperty(e,"prototype",{writable:!1}),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var u=function(){function t(){e(this,t),this.audioSwitch=document.querySelector("input"),this.menumusic=document.getElementById("menuaudio"),this.gamemusic=document.getElementById("gameaudio"),this.playAudio=!1}return i(t,[{key:"update",value:function(e){this.audioSwitch.checked?(this.playAudio=!0,0===e.gameState||void 0===e.gameState?(this.menumusic.play(),this.gamemusic.pause()):(this.menumusic.pause(),this.gamemusic.play())):(this.playAudio=!1,this.menumusic.pause(),this.gamemusic.pause())}},{key:"start",value:function(){this.gamemusic.currentTime=0}},{key:"menuStart",value:function(e){this.gamemusic.pause(),this.menumusic.play(),this.audioSwitch.checked?(this.menumusic.currentTime=0,this.gamemusic.pause(),this.menumusic.play()):(this.playAudio=!1,this.menumusic.pause(),this.gamemusic.pause())}}]),t}();exports.default=u;
},{}],"hc6E":[function(require,module,exports) {
"use strict";function i(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}function t(i,t){for(var h=0;h<t.length;h++){var s=t[h];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(i,s.key,s)}}function h(i,h,s){return h&&t(i.prototype,h),s&&t(i,s),Object.defineProperty(i,"prototype",{writable:!1}),i}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var s=function(){function t(h,s,e){i(this,t),this.x=h,this.y=s,this.xSize=15+25*Math.random(),this.ySize=9+12*Math.random(),this.fallSpeed=2,this.color=e,this.xDir=4*Math.random()-2,this.debrisTrail=[],this.addTrail=0,this.hitGround=0}return h(t,[{key:"update",value:function(i,t){t/=8;for(var h=1e4,s=Math.round(this.x)+1;s<this.x+Math.round(this.xSize)-1;s++)i.groundHeight[s]<h&&(h=i.groundHeight[s]);if(this.y<=h-this.ySize||this.x<=0||this.x+this.xSize>=800||this.y>600){this.y+=this.fallSpeed*t,this.x+this.xDir*t-this.xSize>=0||this.x+this.xDir*t+this.xSize<=800?this.x+=this.xDir*t:this.x-=this.xDir*t,this.xDir+=this.xDir<0?.008:-.008;var e=1e3/t;t/=5;var r=e>240?4:e>180?3:e>120?2:1;this.addTrail>3+r?(this.addTrail=0,this.debrisTrail.push([this.x+this.xSize/2,this.y+this.ySize/2,this.color])):this.addTrail++}else if(this.debrisTrail.shift(),0===this.hitGround&&(this.hitGround=1),1===this.hitGround)for(var a=Math.round(this.x);a<this.x+Math.round(this.xSize);a++)i.groundHeight[a]=i.groundHeight[a]-this.ySize/3,this.hitGround=2;(this.debrisTrail.length>4||this.hitGround>0)&&this.debrisTrail.shift()}},{key:"draw",value:function(i){for(var t=0,h=1;h<this.debrisTrail.length;h++)i.fillStyle="rgba(265,165,0,".concat(0+h/5),i.lineWidth=2,i.beginPath(),i.fillRect(this.debrisTrail[h][0]-this.xSize/2,this.debrisTrail[h][1]-this.ySize/2,this.xSize*((300-5*t)/300),this.ySize*((300-5*t)/300)),i.fill(),i.stroke(),i.closePath(),t++;i.fillStyle="rgba(".concat(255-this.y/2.5,",").concat(165+33*(this.color-1)-this.y/2.9,",0,1)"),i.fillRect(this.x,this.y,this.xSize,this.ySize)}}]),t}();exports.default=s;
},{}],"s61U":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o=function(){function e(i,o,l){t(this,e),this.x=i,this.y=o,this.color="rgba(255,165,0,0.4)",this.evol=0,this.delay=l,this.dt}return i(e,[{key:"draw",value:function(t){this.delay<=0?this.evol<100&&(t.beginPath(),t.fillStyle="rgba(".concat(this.evol<50?255-this.evol:this.evol<60?200-1.1*this.evol:100-this.evol,",").concat(this.evol<20?255-this.evol:this.evol<60?165-1.1*this.evol:100-this.evol,",").concat(this.evol<10?255-this.evol:this.evol<60?0:100-this.evol,",").concat(this.evol<5?1:.25,")"),t.lineWidth=0,t.arc(this.x,this.y,this.evol,0,2*Math.PI),this.evol+=this.dt,t.fill(),t.closePath()):this.delay--}},{key:"update",value:function(t,e,i){this.dt=1*Math.round(Math.abs(i/8)),this.evol>100&&t.xploArray.splice(e,1)}}]),e}();exports.default=o;
},{}],"JGsW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./debris")),r=t(require("./xplosion"));function t(e){return e&&e.__esModule?e:{default:e}}function a(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function n(e,r){for(var t=0;t<r.length;t++){var a=r[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function o(e,r,t){return r&&n(e.prototype,r),t&&n(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}var i=function(){function t(){a(this,t)}return o(t,[{key:"update",value:function(t,a,n){n.gameState>0&&a.brickArray.forEach(function(o){if(o[0]>0&&t.x+2*t.radius>=o[1]&&t.x<=o[1]+a.sizeX&&t.y+2*t.radius>=o[2]&&t.y<=o[2]+a.sizeY){if(o[0]-=1,0===o[0]){n.score+=1;for(var i=0;i<10;i++)n.xploArray.push(new r.default(o[1]+20*Math.random()-10,o[2]+20*Math.random()-10,10*i))}t.ySpeed=-t.ySpeed/1.2,t.xSpeed=-t.xSpeed/1.5+(500*Math.random()-250),t.y+=4,t.ySpeed+=20;for(var u=5+12*Math.random();u>0;)n.debrisGenerated++,n.debrisArray.push(new e.default(40*Math.random()-20+o[1],20*Math.random()-10+o[2],[o[0]],n)),u--}})}}]),t}();exports.default=i;
},{"./debris":"hc6E","./xplosion":"s61U"}],"HPsM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=h(require("./paddle")),e=h(require("./input")),s=h(require("./ball")),i=h(require("./brick")),a=h(require("./rain")),n=h(require("./tutorial")),r=h(require("./audio")),o=h(require("./collision"));function h(t){return t&&t.__esModule?t:{default:t}}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var s=0;s<e.length;s++){var i=e[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function d(t,e,s){return e&&u(t.prototype,e),s&&u(t,s),Object.defineProperty(t,"prototype",{writable:!1}),t}var l=document.getElementById("startScreen"),f=function(){function h(){c(this,h),this.paddle=new t.default(this),this.ball=new s.default(this),this.brick=new i.default,this.audio=new r.default(this),this.debrisArray=[],this.groundHeight=[];for(var u=0;u<800;u++)this.updateGround(u,600);this.xploArray=[],this.score=0,this.bestScore=0,this.stage=2,this.deaths=0,this.debrisGenerated=0,this.maxSpeed=0,this.tutorial=new n.default(this),this.collisionDetection=new o.default,this.scoreDisplay=document.getElementById("score"),this.tip=document.getElementById("deathTip"),this.tipScore=document.getElementById("deathScore"),this.tipBest=document.getElementById("deathBest"),this.tipBestest=document.getElementById("deathBestest"),this.deathTexts=document.querySelectorAll(".deathText"),this.bestScoreDisplay=document.getElementById("best"),this.newHighScore=0,this.announcements=document.getElementById("announcements"),this.dark=document.getElementById("darkness"),this.rain=new a.default,this.canvas=document.getElementById("rain"),this.rain.start(this.canvas,33),this.textQueue=[],this.alreadyDisplaying=!1;new e.default(this.paddle,this)}return d(h,[{key:"updateGround",value:function(t,e){this.groundHeight[t]=e}},{key:"update",value:function(t){var e=this;this.audio.update(this),this.gameState>0&&(this.paddle.update(t),this.ball.update(this.paddle,this,t),this.brick.update(t),this.collisionDetection.update(this.ball,this.brick,this)),this.score+4>=4*this.stage&&(this.stage+=1,this.displayAnnouncement("new set of enemy bricks approaching"),this.brick.waitAndMoveBricks(this.stage),this.rain.start(this.canvas,10)),this.game=this,this.debrisArray.forEach(function(s){s.update(e,t)}),this.xploArray.forEach(function(s,i){s.update(e,i,t)})}},{key:"draw",value:function(t){this.brick.draw(t),this.debrisArray.forEach(function(e){e.draw(t)}),this.xploArray.forEach(function(e,s){e.draw(t)}),this.ball.draw(t),this.paddle.draw(t),this.scoreDisplay.textContent=this.score,this.score>this.bestScore&&(this.bestScore=this.score,this.bestScoreDisplay.textContent=this.score,0===this.newHighScore&&this.score>5&&this.displayAnnouncement("impressive officer!<br> you got a new high score <br> 🔥🔥🔥".concat(this.score,"🔥🔥🔥 ")),this.newHighScore=1)}},{key:"start",value:function(){var t=this;this.rain.end(),this.brick.end(),l.hidden=!0,this.debrisArray=[],this.xploArray=[],this.score=0,this.stage=2,this.brick.start(),this.ball.start(),this.paddle.reset(),this.gameState=1,this.ball.ballTrail=[],this.groundHeight=[],this.newHighScore=0,this.audio.start(),this.dark.style.opacity=1,this.deathTexts.forEach(function(t){t.hidden=!0}),this.moveDeathTextstoPos(),this.fadeDarkness(!0),this.ball.slomo=!0,setTimeout(function(){t.ball.slomo=!1},3e3);for(var e=0;e<800;e++){this.groundHeight[e]=600}this.canvas=document.getElementById("rain"),this.rain.start(this.canvas,5);var s;(s=this).displayAnnouncement(s.tutorial.getTutorialText())}},{key:"displayAnnouncement",value:function(t){var e=this;this.alreadyDisplaying?(this.textQueue.push(t),setTimeout(function(){e.displayAnnouncement(e.textQueue.pop())},100)):(this.alreadyDisplaying=!0,this.announcements.innerHTML="<h2>".concat(t,"</h2>"),this.announcements.style.opacity=1,setTimeout(function(){e.fadeAnnouncement(),e.alreadyDisplaying=!1},4e3))}},{key:"fadeAnnouncement",value:function(){var t=this;setTimeout(function(){t.announcements.style.opacity>0&&(t.announcements.style.opacity-=.05,t.fadeAnnouncement())},50)}},{key:"fadeDarkness",value:function(t){var e=this;setTimeout(function(){t&&(e.dark.style.opacity-=.01,e.dark.style.opacity>.2&&e.fadeDarkness(!0))},40)}},{key:"fadeInDarkness",value:function(t){var e=this;setTimeout(function(){t&&(e.dark.style.opacity=parseFloat(e.dark.style.opacity)+.01,e.dark.style.opacity<=1&&e.fadeInDarkness(!0))},40)}},{key:"moveDeathTextsAway",value:function(){this.deathTexts.forEach(function(t,e){t.style.transform="translate(".concat(-1e3*(e+1),"px,0px)")})}},{key:"moveDeathTextstoPos",value:function(){this.deathTexts.forEach(function(t,e){t.style.transform="translate(2000px,0px)"})}},{key:"moveDeathTextsIn",value:function(){this.deathTexts.forEach(function(t,e){t.style.transform="translate(0px,0px)"})}},{key:"endScreen",value:function(){var t=this;this.deaths++,this.fadeInDarkness(!0),this.moveDeathTextsIn(),this.tutorial.updateData(this.getInfo()),l.hidden=!0,this.tip.innerHTML=this.tutorial.getSpecialText(),this.tipScore.innerHTML=this.score,this.tipBest.innerHTML=this.bestScore,this.deathTexts.forEach(function(t){t.hidden=!1}),this.score===this.bestScore?this.tipBestest.innerHTML="🔥🔥which is your bestest score hell yes motherfucker!!🔥🔥":this.tipBestest.hidden=!0,this.ball.reset(),setTimeout(function(){1!==t.gameState&&(t.moveDeathTextsAway(),t.fadeDarkness())},13500),setTimeout(function(){1!==t.gameState&&(l.hidden=!1,t.fadeInDarkness())},15e3)}},{key:"getInfo",value:function(){return{bestScore:this.bestScore,maxSpeed:this.maxSpeed,deaths:this.deaths,debrisGenerated:this.debrisGenerated,stage:this.stage}}}]),h}();exports.default=f;
},{"./paddle":"qMRA","./input":"gFLk","./ball":"UD3n","./brick":"sWst","./rain":"ogLr","./tutorial":"mUZd","./audio":"jC8c","./collision":"JGsW"}],"H99C":[function(require,module,exports) {
"use strict";require("./styles.css");var e=t(require("./game.js"));function t(e){return e&&e.__esModule?e:{default:e}}var n=document.getElementById("game"),r=n.getContext("2d"),a=new e.default,u=0,i=0;function o(e){var t=new Date;i=1e3/(t-s);var n=t-s;s=t,r.clearRect(0,0,800,600),a.update(n),a.draw(r),requestAnimationFrame(o)}var s=new Date,d=0;function m(){setTimeout(function(){document.getElementById("fpsCounter").innerHTML=Math.round(i),m()},100)}requestAnimationFrame(o),m();
},{"./styles.css":"D9Nj","./game.js":"HPsM"}]},{},["H99C"], null)
//# sourceMappingURL=/csb-3ljmvs/src.8c8a0d4a.js.map