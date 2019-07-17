(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,n){e.exports=n(75)},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(23),c=n.n(i),o=n(8),s=n(19),l=n(40),u=n(16),m="CREATE_HERO",h="BUY_EQUIPMENT",p="WIN_GOLD",d="LOSE_GOLD",g="GAME_OVER",f="GAIN_LIFE",E="LOSE_LIFE",v="EVERY_EQUIPMENT_COLLECTED",b="INCREMENT_ROUNDS_FOUGHT",O="INCREMENT_HITS",N={name:"",gold:0,life:0,attack:0,defense:0,maxHit:30,everyEquipmentCollected:!1,roundsFought:0,hits:0,equipment:[]};var q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(u.a)({},e,{gold:4,life:100,maxHit:30,name:t.name});case h:var n=0,a=0;return t.equipment.stats.map(function(e){return"attack"===e.title.toLowerCase()?n=e.points:"defense"===e.title.toLowerCase()&&(a=e.points),null}),Object(u.a)({},e,{gold:e.gold-t.equipment.price,attack:e.attack+n,defense:e.defense+a,maxHit:e.maxHit+n,equipment:e.equipment.concat(t.equipment)});case p:return Object(u.a)({},e,{gold:e.gold+t.goldAmount});case d:var r=e.gold-t.goldAmount;return r<0&&(r=0),Object(u.a)({},e,{gold:r});case f:return Object(u.a)({},e,{life:e.life+t.lifeAmount});case E:var i=e.life-t.lifeAmount;return i<0&&(i=0),Object(u.a)({},e,{life:i});case b:return Object(u.a)({},e,{roundsFought:e.roundsFought+1});case O:return Object(u.a)({},e,{hits:e.hits+1});case v:return Object(u.a)({},e,{everyEquipmentCollected:!0});case g:return{name:"",gold:0,life:0,attack:0,defense:0,maxHit:0,everyEquipmentCollected:!1,roundsFought:0,hits:0,equipment:[]};default:return e}},w=n(1),j=n.n(w),y=n(10),x=n(18),k=n.n(x),H="/api/equipment",F={getEquipment:function(){return k.a.get(H).then(function(e){return e.data})},getRandomEquipment:function(){return k.a.get("".concat(H,"/random")).then(function(e){return e.data})},getXEquipment:function(e){return k.a.get("".concat(H,"/amount/").concat(e)).then(function(e){return e.data})}},C="FETCH_EQUIPMENT";var R=function(e){return{type:C,equipment:e}};function W(e,t){return e.id-t.id}var L={equipment:[]};var A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return{equipment:t.equipment};default:return e}},D="SWITCH_FIGHT_ON",T={fightOn:!1};var S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T;switch((arguments.length>1?arguments[1]:void 0).type){case D:return{fightOn:!e.fightOn};default:return e}},G=Object(s.c)({heroReducer:q,equipmentReducer:A,battlefieldReducer:S});var I=n(2),M=n(3),_=n(5),U=n(4),B=n(6),Y=n(21),P=n(9);function Q(e,t){return e.roundsFought-t.roundsFought||e.hits-t.hits||t.gold-e.gold}var X={getTopTenOrdered:function(){return k.a.get("/api/highscores").then(function(e){return e.data.sort(Q).slice(0,10)})},newHighscore:function(e){return k.a.post("/api/highscores",e).then(function(e){return e.data})}},J=function(e){function t(e){var n;return Object(I.a)(this,t),(n=Object(_.a)(this,Object(U.a)(t).call(this,e))).state={highscores:[]},n}return Object(B.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(j.a.mark(function e(){var t;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.getTopTenOrdered();case 2:return t=e.sent,e.next=5,this.setState({highscores:t});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"highscores"},r.a.createElement("h3",null,"Highscores"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Rounds"),r.a.createElement("th",null,"Hits"),r.a.createElement("th",null,"Gold"))),r.a.createElement("tbody",null,this.state.highscores.map(function(e){return r.a.createElement("tr",{key:e.id},e.name.length>15?r.a.createElement("td",null,e.name.slice(0,15)):r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.roundsFought),r.a.createElement("td",null,e.hits),r.a.createElement("td",null,e.gold))}))))}}]),t}(r.a.Component),V=function(){return r.a.createElement("div",{className:"home"},r.a.createElement("h1",null,"DragonLand"),r.a.createElement("div",{className:"home-introduction"},r.a.createElement("span",{className:"home-introduction-1"},"Create a hero,"),r.a.createElement("span",{className:"home-introduction-2"},"equip yourself,"),r.a.createElement("span",{className:"home-introduction-3"},"slay the dragons!")),r.a.createElement("div",{className:"home-info"},r.a.createElement("span",{className:"home-info-row"},"Your quest is to vanquish the dragons with as few fought rounds and hits as possible."),r.a.createElement("span",{className:"home-info-row"},"Green Dragon, the final boss, appears when you have collected all the equipment."),r.a.createElement("span",{className:"home-info-row"},"Below zero gold or getting crushed by the Green Dragon ends the game."),r.a.createElement("span",{className:"home-info-row"},"Winning a fight: +3 gold"),r.a.createElement("span",{className:"home-info-row"},"Losing a fight: -2 gold.")),r.a.createElement(J,null))},z=function(e){return r.a.createElement("div",{className:"equipment"},r.a.createElement("p",null,e.equipment.title),e.equipment.stats.map(function(e){return r.a.createElement("div",{key:e.title},e.title+": +"+e.points)}),r.a.createElement("img",{src:e.equipment.imageUrl,alt:e.equipment.title,className:"equipment-img"}))},K=function(e){function t(){return Object(I.a)(this,t),Object(_.a)(this,Object(U.a)(t).apply(this,arguments))}return Object(B.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this.props,t=e.roundsFought,n=e.hits,a=e.gold,i=e.attack,c=e.defense,o=e.maxHit;return r.a.createElement("div",{className:"hero-stats"},r.a.createElement("p",null,r.a.createElement("span",{className:"left-column"},"Rounds:"),r.a.createElement("span",{className:"right-column"},t)),r.a.createElement("p",null,r.a.createElement("span",{className:"left-column"},"Hits:"),r.a.createElement("span",{className:"right-column"},n)),r.a.createElement("p",null,r.a.createElement("span",{className:"left-column"},"Gold:"),r.a.createElement("span",{className:"right-column"},a)),r.a.createElement("p",null,r.a.createElement("span",{className:"left-column"},"Attack:"),r.a.createElement("span",{className:"right-column"},i)),r.a.createElement("p",null,r.a.createElement("span",{className:"left-column"},"Defense:"),r.a.createElement("span",{className:"right-column"},c)),r.a.createElement("p",null,r.a.createElement("span",{className:"left-column"},"Max hit:"),r.a.createElement("span",{className:"right-column"},o)))}}]),t}(r.a.Component),Z=Object(o.b)(function(e){return{gold:e.heroReducer.gold,attack:e.heroReducer.attack,defense:e.heroReducer.defense,maxHit:e.heroReducer.maxHit,roundsFought:e.heroReducer.roundsFought,hits:e.heroReducer.hits}})(K),$=function(e){function t(e){var n;return Object(I.a)(this,t),(n=Object(_.a)(this,Object(U.a)(t).call(this,e))).handleNameChange=function(e){n.setState({name:e.currentTarget.value})},n.createHero=function(){n.state.name.length>0&&n.state.name.length<16?n.props.createHero(n.state.name):n.setState({nameRequiredWarning:!0})},n.state={name:"",nameRequiredWarning:!1},n}return Object(B.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.equipment;return r.a.createElement("div",null,0===t.length?r.a.createElement("div",{className:"hero-form"},r.a.createElement("h3",null,"Create a hero"),this.state.nameRequiredWarning?r.a.createElement("div",{className:"name-required-warning"},r.a.createElement("p",null,"Name has to be 1-15 characters")):null,r.a.createElement("label",{htmlFor:"input-name"},"Name:"),r.a.createElement("input",{type:"text",id:"input-name",onChange:this.handleNameChange,autoFocus:!0}),r.a.createElement("button",{className:"button create-hero-btn",onClick:this.createHero},"Create")):null,t&&t.length>0?r.a.createElement("div",{className:"hero-info"},r.a.createElement("h3",null,t),r.a.createElement(Z,null),r.a.createElement("h3",null,"Equipments:"),n&&n.length>0?r.a.createElement("div",{className:"grid-container"},n.map(function(e){return r.a.createElement("div",{className:"grid-item",key:e.id},r.a.createElement(z,{equipment:e,key:e.id}))})):null):null)}}]),t}(r.a.Component),ee=Object(o.b)(function(e){return{name:e.heroReducer.name,equipment:e.heroReducer.equipment}},function(e){return{createHero:function(t){return e(function(e){return{type:m,name:e}}(t))}}})($),te=function(e){function t(){var e,n;Object(I.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(_.a)(this,(e=Object(U.a)(t)).call.apply(e,[this].concat(r)))).buyEquipment=function(e){n.props.buyEquipment(e)},n}return Object(B.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.gold,a=t.herosEquipment;return r.a.createElement("div",{className:"equipment-for-sale"},r.a.createElement("p",null,this.props.equipment.title),this.props.equipment.stats.map(function(e){return r.a.createElement("div",{key:e.title},e.title+": +"+e.points)}),r.a.createElement("p",null,"Price: ",this.props.equipment.price),r.a.createElement("img",{src:this.props.equipment.imageUrl,alt:this.props.equipment.title,className:"equipment-img equipment-for-sale-img"}),n>=this.props.equipment.price&&!a.includes(this.props.equipment)?r.a.createElement("button",{onClick:function(){return e.buyEquipment(e.props.equipment)},className:"button buy-equipment-btn"},"Buy"):r.a.createElement("button",{disabled:!0,className:"button buy-equipment-btn no-gold"},"No gold"))}}]),t}(r.a.Component),ne=Object(o.b)(function(e){return{gold:e.heroReducer.gold,herosEquipment:e.heroReducer.equipment}},function(e){return{buyEquipment:function(t){return e(function(e){return{type:h,equipment:e}}(t))}}})(te),ae=function(e){function t(){var e,n;Object(I.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(_.a)(this,(e=Object(U.a)(t)).call.apply(e,[this].concat(r)))).everyEquipmentCollected=function(){n.props.everyEquipmentCollected()},n}return Object(B.a)(t,e),Object(M.a)(t,[{key:"componentDidUpdate",value:function(){this.props.herosEquipment.length===this.props.equipment.length&&this.everyEquipmentCollected()}},{key:"render",value:function(){var e=this.props,t=e.equipment,n=e.herosEquipment,a=e.gold;return e.name?r.a.createElement("div",null,r.a.createElement("h3",null,"Gold: ",a),t.length>0?r.a.createElement("div",{className:"grid-container"},t.map(function(e){return n.includes(e)?null:r.a.createElement("div",{className:"grid-item",key:e.id},r.a.createElement(ne,{equipment:e}))})):null):r.a.createElement(P.a,{to:"/"})}}]),t}(r.a.Component),re=Object(o.b)(function(e){return{equipment:e.equipmentReducer.equipment,gold:e.heroReducer.gold,herosEquipment:e.heroReducer.equipment,name:e.heroReducer.name}},function(e){return{everyEquipmentCollected:function(){return e({type:v})}}})(ae),ie=function(e){function t(){return Object(I.a)(this,t),Object(_.a)(this,Object(U.a)(t).apply(this,arguments))}return Object(B.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e={width:"".concat(this.props.life,"%")};return r.a.createElement("div",null,r.a.createElement("div",{className:"lifebar"},r.a.createElement("div",{className:"lifebar-background"},r.a.createElement("span",{className:"lifebar-number"},this.props.life),r.a.createElement("div",{className:"lifebar-life",style:e}))),r.a.createElement("div",{className:"battlefield-damage"},this.props.fightOn||this.props.fightOver?-this.props.hitAmount:null))}}]),t}(r.a.Component),ce=function(e){return r.a.createElement("div",{className:"battlefield-character hero-character"},r.a.createElement(Z,null),r.a.createElement(ie,{life:e.life,fightOn:e.fightOn,fightOver:e.fightOver,hitAmount:e.hitAmount}),e.fightOver&&!e.fightOn?e.heroWon?r.a.createElement("img",{src:"/images/hero.png",alt:"hero",className:"battlefield-character-image",id:"hero-character"}):r.a.createElement("img",{src:"/images/hero.png",alt:"hero",className:"battlefield-character-image invisible-img",id:"hero-character"}):r.a.createElement("img",{src:"/images/hero.png",alt:"hero",className:"battlefield-character-image",id:"hero-character"}))},oe=function(e){return r.a.createElement("div",{className:"dragon-stats"},r.a.createElement("p",null,r.a.createElement("span",{className:"left-column"},"Max hit: "),r.a.createElement("span",{className:"right-column"},e.maxHit)))},se=function(e){return r.a.createElement("div",{className:"battlefield-character dragon-character"},r.a.createElement(oe,{maxHit:e.maxHit}),r.a.createElement(ie,{life:e.life,fightOn:e.fightOn,fightOver:e.fightOver,hitAmount:e.hitAmount}),e.fightOver&&!e.fightOn&&e.heroWon?r.a.createElement("img",{src:"/images/dragon.png",alt:"dragon",className:"battlefield-character-image invisible-img",id:"dragon-character"}):e.everyEquipmentCollected?r.a.createElement("img",{src:"/images/dragon-boss.png",alt:"dragon",className:"battlefield-character-image",id:"dragon-character"}):r.a.createElement("img",{src:"/images/dragon.png",alt:"dragon",className:"battlefield-character-image",id:"dragon-character"}))},le=function(e){function t(e){var n;return Object(I.a)(this,t),(n=Object(_.a)(this,Object(U.a)(t).call(this,e))).startFight=Object(y.a)(j.a.mark(function e(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState({fightOn:!0,herosLife:n.props.herosLife,dragonsLife:100,herosHit:0,dragonsHit:0});case 2:n.props.switchFightOn(),n.props.incrementRoundsFought(),n.fight();case 5:case"end":return e.stop()}},e)})),n.fight=function(){n.state.herosLife<=0||n.state.dragonsLife<=0?n.battleOver():n.dealDamage()},n.wait=function(e){return new Promise(function(t){return setTimeout(t,e)})},n.showWinnerForTwoSec=Object(y.a)(j.a.mark(function e(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({showWinner:!0}),e.next=3,n.wait(2e3);case 3:n.setState({showWinner:!1});case 4:case"end":return e.stop()}},e)})),n.animation=function(e,t,n){var a=document.getElementById(e);a&&a.animate({transform:[t,n]},{duration:500,iterations:1})},n.dealDamage=Object(y.a)(j.a.mark(function e(){var t,a,r,i;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.wait(1e3);case 2:if(n.props.incrementHits(),n.animation("hero-character","translateX(10px)","translateX(-10px)"),t=Math.floor(Math.random()*(n.props.maxHitForHero+1)),(a=n.state.dragonsLife-t)<0&&(a=0),n.setState({dragonsLife:a,herosHit:t}),!(n.state.dragonsLife>0)){e.next=16;break}return e.next=11,n.wait(1e3);case 11:n.animation("dragon-character","translateY(-10px)","translateY(10px)"),r=Math.floor(Math.random()*(n.state.maxHitForDragon+1)),(i=n.state.herosLife-r)<0&&(i=0),n.setState({herosLife:i,dragonsHit:r});case 16:n.fight();case 17:case"end":return e.stop()}},e)})),n.battleOver=Object(y.a)(j.a.mark(function e(){var t;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.props.switchFightOn();case 2:return t=n.state.herosLife>0,e.next=5,n.setState({fightOn:!1,fightOver:!0,heroWon:t});case 5:t?n.battleWon():n.battleLost();case 6:case"end":return e.stop()}},e)})),n.battleWon=Object(y.a)(j.a.mark(function e(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.props.everyEquipmentCollected){e.next=7;break}return e.next=3,n.newHighscore();case 3:return e.next=5,n.gameWin();case 5:e.next=9;break;case 7:n.winGold(),n.showWinnerForTwoSec();case 9:case"end":return e.stop()}},e)})),n.newHighscore=Object(y.a)(j.a.mark(function e(){var t;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={name:n.props.name,roundsFought:n.props.roundsFought,hits:n.props.hits,gold:n.props.gold},e.next=3,X.newHighscore(t);case 3:case"end":return e.stop()}},e)})),n.winGold=function(){n.props.winGold(n.state.winAmount)},n.battleLost=Object(y.a)(j.a.mark(function e(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.props.gold-n.state.loseAmount<0||n.props.everyEquipmentCollected?n.gameOver():(n.loseGold(),n.showWinnerForTwoSec());case 1:case"end":return e.stop()}},e)})),n.loseGold=function(){n.props.loseGold(n.state.loseAmount)},n.gameWin=Object(y.a)(j.a.mark(function e(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState({gameWin:!0,gameOver:!0});case 2:return e.next=4,n.props.gameOver();case 4:case"end":return e.stop()}},e)})),n.gameOver=Object(y.a)(j.a.mark(function e(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState({gameOver:!0});case 2:return e.next=4,n.props.gameOver();case 4:case"end":return e.stop()}},e)})),n.state={fightOn:!1,fightOver:!1,heroWon:!1,winAmount:3,loseAmount:2,gameOver:!1,gameWin:!1,herosHit:0,herosLife:100,dragonsLife:100,dragonsHit:0,maxHitForDragon:30,extraHitForGreenDragon:9,showWinner:!1},n}return Object(B.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){this.props.everyEquipmentCollected?this.setState({maxHitForDragon:this.state.maxHitForDragon-this.props.defense+this.state.extraHitForGreenDragon}):this.setState({maxHitForDragon:this.state.maxHitForDragon-this.props.defense})}},{key:"render",value:function(){return this.props.name?this.state.gameWin?r.a.createElement(P.a,{to:"/gamewin"}):this.state.gameOver?r.a.createElement(P.a,{to:"/gameover"}):r.a.createElement("div",{className:"battlefield"},r.a.createElement("h1",null,"Battlefield"),r.a.createElement("div",{className:"battlefield-characters"},r.a.createElement(ce,{maxHit:this.props.maxHitForHero,life:this.state.herosLife,fightOn:this.state.fightOn,fightOver:this.state.fightOver,hitAmount:this.state.dragonsHit,heroWon:this.state.heroWon}),r.a.createElement(se,{maxHit:this.state.maxHitForDragon,life:this.state.dragonsLife,fightOn:this.state.fightOn,fightOver:this.state.fightOver,hitAmount:this.state.herosHit,heroWon:this.state.heroWon,everyEquipmentCollected:this.props.everyEquipmentCollected})),r.a.createElement("div",{className:"battlefield-actions"},this.state.fightOn?null:r.a.createElement("button",{className:"button battlefield-fight-button",onClick:this.startFight},"Fight"),this.state.fightOver&&!this.state.fightOn&&this.state.heroWon&&this.state.showWinner?r.a.createElement("p",null,"You won!"):null,this.state.fightOver&&!this.state.fightOn&&!this.state.heroWon&&this.state.showWinner?r.a.createElement("p",null,"You lost!"):null)):r.a.createElement(P.a,{to:"/"})}}]),t}(r.a.Component),ue=Object(o.b)(function(e){return{name:e.heroReducer.name,roundsFought:e.heroReducer.roundsFought,hits:e.heroReducer.hits,gold:e.heroReducer.gold,herosLife:e.heroReducer.life,attack:e.heroReducer.attack,defense:e.heroReducer.defense,maxHitForHero:e.heroReducer.maxHit,everyEquipmentCollected:e.heroReducer.everyEquipmentCollected,herosEquipment:e.heroReducer.equipment}},function(e){return{winGold:function(t){return e(function(e){return{type:p,goldAmount:e}}(t))},loseGold:function(t){return e(function(e){return{type:d,goldAmount:e}}(t))},gameOver:function(){return e({type:g})},incrementRoundsFought:function(){return e({type:b})},incrementHits:function(){return e({type:O})},switchFightOn:function(){return e({type:D})}}})(le),me=function(){return r.a.createElement("div",{className:"gameover"},r.a.createElement("h3",null,"The dragons took over the land."),r.a.createElement("h3",null,"Try again with a new hero!"),r.a.createElement("img",{src:"/images/dragon.png",alt:"dragon",className:"gameover-img reverse-img"}),r.a.createElement("img",{src:"/images/dragon.png",alt:"dragon",className:"gameover-img"}),r.a.createElement(J,null))},he=function(){return r.a.createElement("div",{className:"gameover"},r.a.createElement("h3",null,"Congratulations!"),r.a.createElement("h3",null,"The dragons have been vanquished and the land is free once and for all!"),r.a.createElement("img",{src:"/images/hero.png",alt:"dragon",className:"gameover-img"}),r.a.createElement("img",{src:"/images/dragon-boss.png",alt:"dragon",className:"gameover-img revert-img"}),r.a.createElement(J,null))},pe=function(e){function t(){var e,n;Object(I.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(_.a)(this,(e=Object(U.a)(t)).call.apply(e,[this].concat(r)))).checkIfFightOn=function(e){n.props.fightOn&&e.preventDefault()},n}return Object(B.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this.props.name;return r.a.createElement(Y.a,null,r.a.createElement("header",{className:"header"},r.a.createElement(Y.b,{to:"/",onClick:this.checkIfFightOn},r.a.createElement("img",{src:"favicon.png",alt:"logo",className:"logo"})),r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:"nav"},r.a.createElement("ul",{className:"nav-ul"},r.a.createElement("li",{className:"nav-li"},r.a.createElement(Y.b,{to:"/hero",className:"nav-link",onClick:this.checkIfFightOn},"Hero")),e?r.a.createElement("li",{className:"nav-li"},r.a.createElement(Y.b,{to:"/shop",className:"nav-link",onClick:this.checkIfFightOn},"Shop")):null,e?r.a.createElement("li",{className:"nav-li"},r.a.createElement(Y.b,{to:"/battlefield",className:"nav-link",onClick:this.checkIfFightOn},"Battlefield")):null)))),r.a.createElement("div",{className:"content"},r.a.createElement(P.d,null,r.a.createElement(P.b,{path:"/",exact:!0,component:V}),r.a.createElement(P.b,{path:"/hero",component:ee}),r.a.createElement(P.b,{path:"/shop",component:re}),r.a.createElement(P.b,{path:"/battlefield",component:ue}),r.a.createElement(P.b,{path:"/gameover",component:me}),r.a.createElement(P.b,{path:"/gamewin",component:he}))))}}]),t}(r.a.Component),de=Object(o.b)(function(e){return{name:e.heroReducer.name,fightOn:e.battlefieldReducer.fightOn}})(pe),ge=function(e){function t(){return Object(I.a)(this,t),Object(_.a)(this,Object(U.a)(t).apply(this,arguments))}return Object(B.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchEquipment()}},{key:"render",value:function(){return r.a.createElement(de,null)}}]),t}(r.a.Component),fe=Object(o.b)(null,function(e){return{fetchEquipment:function(){return e(function(){var e=Object(y.a)(j.a.mark(function e(t){var n;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.getEquipment();case 2:return n=e.sent,t(R(n.equipment.sort(W))),e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())}}})(ge),Ee=(n(70),n(71),n(72),n(73),n(74),Object(s.d)(G,Object(s.a)(l.a)));c.a.render(r.a.createElement(o.a,{store:Ee},r.a.createElement(fe,null)),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.c7acfdaa.chunk.js.map