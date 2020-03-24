(this.webpackJsonpDragonLand=this.webpackJsonpDragonLand||[]).push([[0],{40:function(e,t,a){e.exports=a(73)},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(21),c=a.n(i),o=a(7),s=a(18),l=a(38),u=a(15),m={name:"",gold:0,life:0,attack:0,defense:0,maxHit:30,everyEquipmentCollected:!1,roundsFought:0,hits:0,equipment:[]};var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_HERO":return Object(u.a)({},e,{gold:4,life:100,maxHit:30,name:t.name});case"BUY_EQUIPMENT":var a=0,n=0;return t.equipment.stats.map((function(e){return"attack"===e.title.toLowerCase()?a=e.points:"defense"===e.title.toLowerCase()&&(n=e.points),null})),Object(u.a)({},e,{gold:e.gold-t.equipment.price,attack:e.attack+a,defense:e.defense+n,maxHit:e.maxHit+a,equipment:e.equipment.concat(t.equipment)});case"WIN_GOLD":return Object(u.a)({},e,{gold:e.gold+t.goldAmount});case"LOSE_GOLD":var r=e.gold-t.goldAmount;return r<0&&(r=0),Object(u.a)({},e,{gold:r});case"GAIN_LIFE":return Object(u.a)({},e,{life:e.life+t.lifeAmount});case"LOSE_LIFE":var i=e.life-t.lifeAmount;return i<0&&(i=0),Object(u.a)({},e,{life:i});case"INCREMENT_ROUNDS_FOUGHT":return Object(u.a)({},e,{roundsFought:e.roundsFought+1});case"INCREMENT_HITS":return Object(u.a)({},e,{hits:e.hits+1});case"EVERY_EQUIPMENT_COLLECTED":return Object(u.a)({},e,{everyEquipmentCollected:!0});case"GAME_OVER":return{name:"",gold:0,life:0,attack:0,defense:0,maxHit:0,everyEquipmentCollected:!1,roundsFought:0,hits:0,equipment:[]};default:return e}},p=a(2),d=a.n(p),g=a(10),f=a(16),E=a.n(f),v="/api/equipment",b=function(){return E.a.get(v).then((function(e){return e.data}))};var O=function(e){return{type:"FETCH_EQUIPMENT",equipment:e}};function N(e,t){return e.id-t.id}var q={equipment:[]};var w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_EQUIPMENT":return{equipment:t.equipment};default:return e}},y={fightOn:!1};var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SWITCH_FIGHT_ON":return{fightOn:!e.fightOn};default:return e}},x=Object(s.c)({heroReducer:h,equipmentReducer:w,battlefieldReducer:j});var k=a(3),H=a(4),C=a(5),F=a(6),R=a(19),L=a(9);function W(e,t){return e.roundsFought-t.roundsFought||e.hits-t.hits||t.gold-e.gold}var T=function(){return E.a.get("/api/highscores").then((function(e){return e.data.sort(W).slice(0,10)}))},D=function(e){return E.a.post("/api/highscores",e).then((function(e){return e.data}))},I=function(e){Object(F.a)(a,e);var t=Object(C.a)(a);function a(e){var n;return Object(k.a)(this,a),(n=t.call(this,e)).state={highscores:[]},n}return Object(H.a)(a,[{key:"componentDidMount",value:function(){var e=Object(g.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:return t=e.sent,e.next=5,this.setState({highscores:t});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"highscores"},r.a.createElement("h3",null,"Highscores"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Rounds"),r.a.createElement("th",null,"Hits"),r.a.createElement("th",null,"Gold"))),r.a.createElement("tbody",null,this.state.highscores.map((function(e){return r.a.createElement("tr",{key:e.id},e.name.length>15?r.a.createElement("td",null,e.name.slice(0,15)):r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.roundsFought),r.a.createElement("td",null,e.hits),r.a.createElement("td",null,e.gold))})))))}}]),a}(r.a.Component),_=function(){return r.a.createElement("div",{className:"home"},r.a.createElement("h1",null,"DragonLand"),r.a.createElement("div",{className:"home-introduction"},r.a.createElement("span",{className:"home-introduction-1"},"Create a hero,"),r.a.createElement("span",{className:"home-introduction-2"},"equip yourself,"),r.a.createElement("span",{className:"home-introduction-3"},"slay the dragons!")),r.a.createElement("div",{className:"home-info"},r.a.createElement("span",{className:"home-info-row"},"Your quest is to vanquish the dragons with as few fought rounds and hits as possible."),r.a.createElement("span",{className:"home-info-row"},"Green Dragon, the final boss, appears when you have collected all the equipment."),r.a.createElement("span",{className:"home-info-row"},"Below zero gold or getting crushed by the Green Dragon ends the game."),r.a.createElement("span",{className:"home-info-row"},"Winning a fight: +3 gold"),r.a.createElement("span",{className:"home-info-row"},"Losing a fight: -2 gold")),r.a.createElement(I,null))},A=function(e){return r.a.createElement("div",{className:"equipment"},r.a.createElement("p",null,e.equipment.title),e.equipment.stats.map((function(e){return r.a.createElement("div",{key:e.title},e.title+": +"+e.points)})),r.a.createElement("img",{src:e.equipment.imageUrl,alt:e.equipment.title,className:"equipment-img"}))},G=function(e){Object(F.a)(a,e);var t=Object(C.a)(a);function a(){return Object(k.a)(this,a),t.apply(this,arguments)}return Object(H.a)(a,[{key:"render",value:function(){var e=this.props,t=e.roundsFought,a=e.hits,n=e.gold,i=e.attack,c=e.defense,o=e.maxHit;return r.a.createElement("div",{className:"hero-stats"},r.a.createElement("p",null,r.a.createElement("span",{className:"left-column"},"Rounds:"),r.a.createElement("span",{className:"right-column"},t)),r.a.createElement("p",null,r.a.createElement("span",{className:"left-column"},"Hits:"),r.a.createElement("span",{className:"right-column"},a)),r.a.createElement("p",null,r.a.createElement("span",{className:"left-column"},"Gold:"),r.a.createElement("span",{className:"right-column"},n)),r.a.createElement("p",null,r.a.createElement("span",{className:"left-column"},"Attack:"),r.a.createElement("span",{className:"right-column"},i)),r.a.createElement("p",null,r.a.createElement("span",{className:"left-column"},"Defense:"),r.a.createElement("span",{className:"right-column"},c)),r.a.createElement("p",null,r.a.createElement("span",{className:"left-column"},"Max hit:"),r.a.createElement("span",{className:"right-column"},o)))}}]),a}(r.a.Component),S=Object(o.b)((function(e){return{gold:e.heroReducer.gold,attack:e.heroReducer.attack,defense:e.heroReducer.defense,maxHit:e.heroReducer.maxHit,roundsFought:e.heroReducer.roundsFought,hits:e.heroReducer.hits}}))(G),M=function(e){Object(F.a)(a,e);var t=Object(C.a)(a);function a(e){var n;return Object(k.a)(this,a),(n=t.call(this,e)).handleNameChange=function(e){n.setState({name:e.currentTarget.value})},n.createHero=function(){n.state.name.length>0&&n.state.name.length<16?n.props.createHero(n.state.name):n.setState({nameRequiredWarning:!0})},n.state={name:"",nameRequiredWarning:!1},n}return Object(H.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.equipment;return r.a.createElement("div",null,0===t.length?r.a.createElement("div",{className:"hero-form"},r.a.createElement("h3",null,"Create a hero"),this.state.nameRequiredWarning?r.a.createElement("div",{className:"name-required-warning"},r.a.createElement("p",null,"Name has to be 1-15 characters")):null,r.a.createElement("label",{htmlFor:"input-name"},"Name:"),r.a.createElement("input",{type:"text",id:"input-name",onChange:this.handleNameChange,autoFocus:!0}),r.a.createElement("button",{className:"button create-hero-btn",onClick:this.createHero},"Create")):null,t&&t.length>0?r.a.createElement("div",{className:"hero-info"},r.a.createElement("h3",null,t),r.a.createElement(S,null),r.a.createElement("h3",null,"Equipments:"),a&&a.length>0?r.a.createElement("div",{className:"grid-container"},a.map((function(e){return r.a.createElement("div",{className:"grid-item",key:e.id},r.a.createElement(A,{equipment:e,key:e.id}))}))):null):null)}}]),a}(r.a.Component),U=Object(o.b)((function(e){return{name:e.heroReducer.name,equipment:e.heroReducer.equipment}}),(function(e){return{createHero:function(t){return e(function(e){return{type:"CREATE_HERO",name:e}}(t))}}}))(M),Y=function(e){Object(F.a)(a,e);var t=Object(C.a)(a);function a(){var e;Object(k.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).buyEquipment=function(t){e.props.buyEquipment(t)},e}return Object(H.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.gold,n=t.herosEquipment;return r.a.createElement("div",{className:"equipment-for-sale"},r.a.createElement("p",null,this.props.equipment.title),this.props.equipment.stats.map((function(e){return r.a.createElement("div",{key:e.title},e.title+": +"+e.points)})),r.a.createElement("p",null,"Price: ",this.props.equipment.price),r.a.createElement("img",{src:this.props.equipment.imageUrl,alt:this.props.equipment.title,className:"equipment-img equipment-for-sale-img"}),a>=this.props.equipment.price&&!n.includes(this.props.equipment)?r.a.createElement("button",{onClick:function(){return e.buyEquipment(e.props.equipment)},className:"button buy-equipment-btn"},"Buy"):r.a.createElement("button",{disabled:!0,className:"button buy-equipment-btn no-gold"},"No gold"))}}]),a}(r.a.Component),B=Object(o.b)((function(e){return{gold:e.heroReducer.gold,herosEquipment:e.heroReducer.equipment}}),(function(e){return{buyEquipment:function(t){return e(function(e){return{type:"BUY_EQUIPMENT",equipment:e}}(t))}}}))(Y),P=function(e){Object(F.a)(a,e);var t=Object(C.a)(a);function a(){var e;Object(k.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).everyEquipmentCollected=function(){e.props.everyEquipmentCollected()},e}return Object(H.a)(a,[{key:"componentDidUpdate",value:function(){this.props.herosEquipment.length===this.props.equipment.length&&this.everyEquipmentCollected()}},{key:"render",value:function(){var e=this.props,t=e.equipment,a=e.herosEquipment,n=e.gold;return e.name?r.a.createElement("div",null,r.a.createElement("h3",null,"Gold: ",n),t.length>0?r.a.createElement("div",{className:"grid-container"},t.map((function(e){return a.includes(e)?null:r.a.createElement("div",{className:"grid-item",key:e.id},r.a.createElement(B,{equipment:e}))}))):null):r.a.createElement(L.a,{to:"/"})}}]),a}(r.a.Component),Q=Object(o.b)((function(e){return{equipment:e.equipmentReducer.equipment,gold:e.heroReducer.gold,herosEquipment:e.heroReducer.equipment,name:e.heroReducer.name}}),(function(e){return{everyEquipmentCollected:function(){return e({type:"EVERY_EQUIPMENT_COLLECTED"})}}}))(P),V=function(e){Object(F.a)(a,e);var t=Object(C.a)(a);function a(){return Object(k.a)(this,a),t.apply(this,arguments)}return Object(H.a)(a,[{key:"render",value:function(){var e={width:"".concat(this.props.life,"%")};return r.a.createElement("div",null,r.a.createElement("div",{className:"lifebar"},r.a.createElement("div",{className:"lifebar-background"},r.a.createElement("span",{className:"lifebar-number"},this.props.life),r.a.createElement("div",{className:"lifebar-life",style:e}))),r.a.createElement("div",{className:"battlefield-damage"},this.props.fightOn||this.props.fightOver?-this.props.hitAmount:null))}}]),a}(r.a.Component),J=function(e){return r.a.createElement("div",{className:"battlefield-character hero-character"},r.a.createElement(S,null),r.a.createElement(V,{life:e.life,fightOn:e.fightOn,fightOver:e.fightOver,hitAmount:e.hitAmount}),e.fightOver&&!e.fightOn?e.heroWon?r.a.createElement("img",{src:"/images/hero.png",alt:"hero",className:"battlefield-character-image",id:"hero-character"}):r.a.createElement("img",{src:"/images/hero.png",alt:"hero",className:"battlefield-character-image invisible-img",id:"hero-character"}):r.a.createElement("img",{src:"/images/hero.png",alt:"hero",className:"battlefield-character-image",id:"hero-character"}))},X=function(e){return r.a.createElement("div",{className:"dragon-stats"},r.a.createElement("p",null,r.a.createElement("span",{className:"left-column"},"Max hit: "),r.a.createElement("span",{className:"right-column"},e.maxHit)))},z=function(e){return r.a.createElement("div",{className:"battlefield-character dragon-character"},r.a.createElement(X,{maxHit:e.maxHit}),r.a.createElement(V,{life:e.life,fightOn:e.fightOn,fightOver:e.fightOver,hitAmount:e.hitAmount}),e.fightOver&&!e.fightOn&&e.heroWon?r.a.createElement("img",{src:"/images/dragon.png",alt:"dragon",className:"battlefield-character-image invisible-img",id:"dragon-character"}):e.everyEquipmentCollected?r.a.createElement("img",{src:"/images/dragon-boss.png",alt:"dragon",className:"battlefield-character-image",id:"dragon-character"}):r.a.createElement("img",{src:"/images/dragon.png",alt:"dragon",className:"battlefield-character-image",id:"dragon-character"}))},K=function(e){Object(F.a)(a,e);var t=Object(C.a)(a);function a(e){var n;return Object(k.a)(this,a),(n=t.call(this,e)).startFight=Object(g.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState({fightOn:!0,herosLife:n.props.herosLife,dragonsLife:100,herosHit:0,dragonsHit:0});case 2:n.props.switchFightOn(),n.props.incrementRoundsFought(),n.fight();case 5:case"end":return e.stop()}}),e)}))),n.fight=function(){n.state.herosLife<=0||n.state.dragonsLife<=0?n.battleOver():n.dealDamage()},n.wait=function(e){return new Promise((function(t){return setTimeout(t,e)}))},n.showWinnerForTwoSec=Object(g.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({showWinner:!0}),e.next=3,n.wait(2e3);case 3:n.setState({showWinner:!1});case 4:case"end":return e.stop()}}),e)}))),n.animation=function(e,t,a){var n=document.getElementById(e);n&&n.animate({transform:[t,a]},{duration:500,iterations:1})},n.dealDamage=Object(g.a)(d.a.mark((function e(){var t,a,r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.wait(1e3);case 2:if(n.props.incrementHits(),n.animation("hero-character","translateX(10px)","translateX(-10px)"),t=Math.floor(Math.random()*(n.props.maxHitForHero+1)),(a=n.state.dragonsLife-t)<0&&(a=0),n.setState({dragonsLife:a,herosHit:t}),!(n.state.dragonsLife>0)){e.next=16;break}return e.next=11,n.wait(1e3);case 11:n.animation("dragon-character","translateY(-10px)","translateY(10px)"),r=Math.floor(Math.random()*(n.state.maxHitForDragon+1)),(i=n.state.herosLife-r)<0&&(i=0),n.setState({herosLife:i,dragonsHit:r});case 16:n.fight();case 17:case"end":return e.stop()}}),e)}))),n.battleOver=Object(g.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.props.switchFightOn();case 2:return t=n.state.herosLife>0,e.next=5,n.setState({fightOn:!1,fightOver:!0,heroWon:t});case 5:t?n.battleWon():n.battleLost();case 6:case"end":return e.stop()}}),e)}))),n.battleWon=Object(g.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.props.everyEquipmentCollected){e.next=7;break}return e.next=3,n.newHighscore();case 3:return e.next=5,n.gameWin();case 5:e.next=9;break;case 7:n.winGold(),n.showWinnerForTwoSec();case 9:case"end":return e.stop()}}),e)}))),n.newHighscore=Object(g.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={name:n.props.name,roundsFought:n.props.roundsFought,hits:n.props.hits,gold:n.props.gold},e.next=3,D(t);case 3:case"end":return e.stop()}}),e)}))),n.winGold=function(){n.props.winGold(n.state.winAmount)},n.battleLost=Object(g.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.props.gold-n.state.loseAmount<0||n.props.everyEquipmentCollected?n.gameOver():(n.loseGold(),n.showWinnerForTwoSec());case 1:case"end":return e.stop()}}),e)}))),n.loseGold=function(){n.props.loseGold(n.state.loseAmount)},n.gameWin=Object(g.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState({gameWin:!0,gameOver:!0});case 2:return e.next=4,n.props.gameOver();case 4:case"end":return e.stop()}}),e)}))),n.gameOver=Object(g.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState({gameOver:!0});case 2:return e.next=4,n.props.gameOver();case 4:case"end":return e.stop()}}),e)}))),n.state={fightOn:!1,fightOver:!1,heroWon:!1,winAmount:3,loseAmount:2,gameOver:!1,gameWin:!1,herosHit:0,herosLife:100,dragonsLife:100,dragonsHit:0,maxHitForDragon:30,extraHitForGreenDragon:9,showWinner:!1},n}return Object(H.a)(a,[{key:"componentDidMount",value:function(){this.props.everyEquipmentCollected?this.setState({maxHitForDragon:this.state.maxHitForDragon-this.props.defense+this.state.extraHitForGreenDragon}):this.setState({maxHitForDragon:this.state.maxHitForDragon-this.props.defense})}},{key:"render",value:function(){return this.props.name?this.state.gameWin?r.a.createElement(L.a,{to:"/gamewin"}):this.state.gameOver?r.a.createElement(L.a,{to:"/gameover"}):r.a.createElement("div",{className:"battlefield"},r.a.createElement("h1",null,"Battlefield"),r.a.createElement("div",{className:"battlefield-characters"},r.a.createElement(J,{maxHit:this.props.maxHitForHero,life:this.state.herosLife,fightOn:this.state.fightOn,fightOver:this.state.fightOver,hitAmount:this.state.dragonsHit,heroWon:this.state.heroWon}),r.a.createElement(z,{maxHit:this.state.maxHitForDragon,life:this.state.dragonsLife,fightOn:this.state.fightOn,fightOver:this.state.fightOver,hitAmount:this.state.herosHit,heroWon:this.state.heroWon,everyEquipmentCollected:this.props.everyEquipmentCollected})),r.a.createElement("div",{className:"battlefield-actions"},this.state.fightOn?null:r.a.createElement("button",{className:"button battlefield-fight-button",onClick:this.startFight},"Fight"),this.state.fightOver&&!this.state.fightOn&&this.state.heroWon&&this.state.showWinner?r.a.createElement("p",null,"You won!"):null,this.state.fightOver&&!this.state.fightOn&&!this.state.heroWon&&this.state.showWinner?r.a.createElement("p",null,"You lost!"):null)):r.a.createElement(L.a,{to:"/"})}}]),a}(r.a.Component),Z=Object(o.b)((function(e){return{name:e.heroReducer.name,roundsFought:e.heroReducer.roundsFought,hits:e.heroReducer.hits,gold:e.heroReducer.gold,herosLife:e.heroReducer.life,attack:e.heroReducer.attack,defense:e.heroReducer.defense,maxHitForHero:e.heroReducer.maxHit,everyEquipmentCollected:e.heroReducer.everyEquipmentCollected,herosEquipment:e.heroReducer.equipment}}),(function(e){return{winGold:function(t){return e(function(e){return{type:"WIN_GOLD",goldAmount:e}}(t))},loseGold:function(t){return e(function(e){return{type:"LOSE_GOLD",goldAmount:e}}(t))},gameOver:function(){return e({type:"GAME_OVER"})},incrementRoundsFought:function(){return e({type:"INCREMENT_ROUNDS_FOUGHT"})},incrementHits:function(){return e({type:"INCREMENT_HITS"})},switchFightOn:function(){return e({type:"SWITCH_FIGHT_ON"})}}}))(K),$=function(){return r.a.createElement("div",{className:"gameover"},r.a.createElement("h3",null,"The dragons took over the land."),r.a.createElement("h3",null,"Try again with a new hero!"),r.a.createElement("img",{src:"/images/dragon.png",alt:"dragon",className:"gameover-img reverse-img"}),r.a.createElement("img",{src:"/images/dragon.png",alt:"dragon",className:"gameover-img"}),r.a.createElement(I,null))},ee=function(){return r.a.createElement("div",{className:"gameover"},r.a.createElement("h3",null,"Congratulations!"),r.a.createElement("h3",null,"The dragons have been vanquished and the land is free once and for all!"),r.a.createElement("img",{src:"/images/hero.png",alt:"dragon",className:"gameover-img"}),r.a.createElement("img",{src:"/images/dragon-boss.png",alt:"dragon",className:"gameover-img revert-img"}),r.a.createElement(I,null))},te=function(e){Object(F.a)(a,e);var t=Object(C.a)(a);function a(){var e;Object(k.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).checkIfFightOn=function(t){e.props.fightOn&&t.preventDefault()},e}return Object(H.a)(a,[{key:"render",value:function(){var e=this.props.name;return r.a.createElement(R.a,null,r.a.createElement("header",{className:"header"},r.a.createElement(R.b,{to:"/",onClick:this.checkIfFightOn},r.a.createElement("img",{src:"favicon.png",alt:"logo",className:"logo"})),r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:"nav"},r.a.createElement("ul",{className:"nav-ul"},r.a.createElement("li",{className:"nav-li"},r.a.createElement(R.b,{to:"/hero",className:"nav-link",onClick:this.checkIfFightOn},"Hero")),e?r.a.createElement("li",{className:"nav-li"},r.a.createElement(R.b,{to:"/shop",className:"nav-link",onClick:this.checkIfFightOn},"Shop")):null,e?r.a.createElement("li",{className:"nav-li"},r.a.createElement(R.b,{to:"/battlefield",className:"nav-link",onClick:this.checkIfFightOn},"Battlefield")):null)))),r.a.createElement("div",{className:"content"},r.a.createElement(L.d,null,r.a.createElement(L.b,{path:"/",exact:!0,component:_}),r.a.createElement(L.b,{path:"/hero",component:U}),r.a.createElement(L.b,{path:"/shop",component:Q}),r.a.createElement(L.b,{path:"/battlefield",component:Z}),r.a.createElement(L.b,{path:"/gameover",component:$}),r.a.createElement(L.b,{path:"/gamewin",component:ee}))))}}]),a}(r.a.Component),ae=Object(o.b)((function(e){return{name:e.heroReducer.name,fightOn:e.battlefieldReducer.fightOn}}))(te),ne=function(e){Object(F.a)(a,e);var t=Object(C.a)(a);function a(){return Object(k.a)(this,a),t.apply(this,arguments)}return Object(H.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchEquipment()}},{key:"render",value:function(){return r.a.createElement(ae,null)}}]),a}(r.a.Component),re=Object(o.b)(null,(function(e){return{fetchEquipment:function(){return e(function(){var e=Object(g.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:return a=e.sent,t(O(a.equipment.sort(N))),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))(ne),ie=(a(68),a(69),a(70),a(71),a(72),Object(s.d)(x,Object(s.a)(l.a)));c.a.render(r.a.createElement(o.a,{store:ie},r.a.createElement(re,null)),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.1d5eb789.chunk.js.map