(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,a){e.exports=a(72)},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(22),l=a.n(i),c=a(5),o=a(17),s=a(40),u=a(16),m="CREATE_HERO",p="BUY_EQUIPMENT",h="WIN_GOLD",d="LOSE_GOLD",f="GAME_OVER",g="GAIN_LIFE",E="LOSE_LIFE",b={name:"",gold:0,life:0,equipment:[]};var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(u.a)({},e,{gold:10,life:100,name:t.name});case p:var a=e.equipment.concat(t.equipment);return Object(u.a)({},e,{gold:e.gold-t.equipment.price,equipment:a});case h:return Object(u.a)({},e,{gold:e.gold+t.goldAmount});case d:var n=e.gold-t.goldAmount;return n<0&&(n=0),Object(u.a)({},e,{gold:n});case g:return Object(u.a)({},e,{life:e.life+t.lifeAmount});case E:var r=e.life-t.lifeAmount;return r<0&&(r=0),Object(u.a)({},e,{life:r});case f:return{name:"",gold:0,life:0,equipment:[]};default:return e}},O=a(13),N=a.n(O),q=a(18),j=a(24),y=a.n(j),w="/api/equipment",k={getEquipment:function(){return y.a.get(w).then(function(e){return e.data})},getRandomEquipment:function(){return y.a.get("".concat(w,"/random")).then(function(e){return e.data})},getXEquipment:function(e){return y.a.get("".concat(w,"/amount/").concat(e)).then(function(e){return e.data})}},H="FETCH_EQUIPMENT";var x=function(e){return{type:H,equipment:e}},L={equipment:[]};var C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return{equipment:t.equipment};default:return e}},R=Object(o.c)({heroReducer:v,equipmentReducer:C});var F=a(2),A=a(3),D=a(6),G=a(4),M=a(7),S=a(20),W=a(15),T=function(){return r.a.createElement("div",{className:"home"},r.a.createElement("h1",null,"DragonLand"),r.a.createElement("div",{className:"home-instuctions"},r.a.createElement("span",{className:"home-instruction-1"},"Create a hero,"),r.a.createElement("span",{className:"home-instruction-2"},"equip yourself,"),r.a.createElement("span",{className:"home-instruction-3"},"slay the dragons!")))},_=function(e){return r.a.createElement("div",{className:"equipment"},r.a.createElement("p",null,e.equipment.title),e.equipment.stats.map(function(e){return r.a.createElement("div",{key:e.title},e.title+": +"+e.points)}),r.a.createElement("img",{src:e.equipment.imageUrl,alt:e.equipment.title,className:"equipment-img"}))},I=function(e){var t=0,a=0;return e.equipment.map(function(e){return e.stats.map(function(e){return"attack"===e.title.toLowerCase()?t+=e.points:"defense"===e.title.toLowerCase()?a+=e.points:null})}),r.a.createElement("div",{className:"hero-stats"},r.a.createElement("p",null,r.a.createElement("span",{className:"left-column"},"Attack: "),r.a.createElement("span",{className:"right-column"},t)),r.a.createElement("p",null,r.a.createElement("span",{className:"left-column"},"Defense: "),r.a.createElement("span",{className:"right-column"},a)),r.a.createElement("p",null,r.a.createElement("span",{className:"left-column"},"Max hit: "),r.a.createElement("span",{className:"right-column"},30+t)),r.a.createElement("p",null,r.a.createElement("span",{className:"left-column"},"Min hit: "),r.a.createElement("span",{className:"right-column"},t)))},B=function(e){function t(e){var a;return Object(F.a)(this,t),(a=Object(D.a)(this,Object(G.a)(t).call(this,e))).handleNameChange=function(e){a.setState({name:e.currentTarget.value})},a.createHero=function(){a.state.name.length>0?a.props.createHero(a.state.name):a.setState({nameRequiredWarning:!0})},a.state={name:"",nameRequiredWarning:!1},a}return Object(M.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.gold,n=e.life,i=e.equipment;return r.a.createElement("div",null,0===t.length?r.a.createElement("div",{className:"hero-form"},r.a.createElement("h3",null,"Create a hero"),this.state.nameRequiredWarning?r.a.createElement("div",{className:"name-required-warning"},r.a.createElement("p",null,"Please enter name")):null,r.a.createElement("label",{htmlFor:"input-name"},"Name:"),r.a.createElement("input",{type:"text",id:"input-name",onChange:this.handleNameChange,autoFocus:!0}),r.a.createElement("button",{className:"button create-hero-btn",onClick:this.createHero},"Create")):null,t&&t.length>0?r.a.createElement("div",{className:"hero-info"},r.a.createElement("h3",null,"Your hero:"),r.a.createElement("p",null,"Name: ",t),r.a.createElement("p",null,"Gold: ",a),r.a.createElement("p",null,"Life: ",n),r.a.createElement(I,{equipment:i}),r.a.createElement("h3",null,"Equipments:"),i&&i.length>0?r.a.createElement("div",{className:"grid-container"},i.map(function(e){return r.a.createElement("div",{className:"grid-item",key:e.id},r.a.createElement(_,{equipment:e,key:e.id}))})):null):null)}}]),t}(r.a.Component),P=Object(c.b)(function(e){return{name:e.heroReducer.name,gold:e.heroReducer.gold,life:e.heroReducer.life,equipment:e.heroReducer.equipment}},function(e){return{createHero:function(t){return e(function(e){return{type:m,name:e}}(t))}}})(B),U=function(e){function t(){var e,a;Object(F.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(D.a)(this,(e=Object(G.a)(t)).call.apply(e,[this].concat(r)))).buyEquipment=function(e){a.props.buyEquipment(e)},a}return Object(M.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.gold,n=t.herosEquipment;return r.a.createElement("div",{className:"equipment-for-sale"},r.a.createElement("p",null,this.props.equipment.title),this.props.equipment.stats.map(function(e){return r.a.createElement("div",{key:e.title},e.title+": +"+e.points)}),r.a.createElement("p",null,"Price: ",this.props.equipment.price),r.a.createElement("img",{src:this.props.equipment.imageUrl,alt:this.props.equipment.title,className:"equipment-img equipment-for-sale-img"}),a>=this.props.equipment.price&&!n.includes(this.props.equipment)?r.a.createElement("button",{onClick:function(){return e.buyEquipment(e.props.equipment)},className:"button buy-equipment-btn"},"Buy"):n.includes(this.props.equipment)?r.a.createElement("button",{disabled:!0,className:"button buy-equipment-btn owned"},"Owned"):r.a.createElement("button",{disabled:!0,className:"button buy-equipment-btn no-gold"},"No gold"))}}]),t}(r.a.Component),Y=Object(c.b)(function(e){return{gold:e.heroReducer.gold,herosEquipment:e.heroReducer.equipment}},function(e){return{buyEquipment:function(t){return e(function(e){return{type:p,equipment:e}}(t))}}})(U),J=function(e){function t(){return Object(F.a)(this,t),Object(D.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(M.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){var e=this.props,t=e.equipment,a=e.herosEquipment,n=e.gold;return r.a.createElement("div",null,r.a.createElement("h3",null,"Gold: ",n),t.length>0?r.a.createElement("div",{className:"grid-container"},t.map(function(e){return a.includes(e)?null:r.a.createElement("div",{className:"grid-item",key:e.id},r.a.createElement(Y,{equipment:e}))})):null)}}]),t}(r.a.Component),Q=Object(c.b)(function(e){return{equipment:e.equipmentReducer.equipment,gold:e.heroReducer.gold,herosEquipment:e.heroReducer.equipment}})(J),V=function(e){return r.a.createElement("div",{className:"dragon-stats"},r.a.createElement("p",null,r.a.createElement("span",{className:"left-column"},"Max hit: "),r.a.createElement("span",{className:"right-column"},e.maxHit)),r.a.createElement("p",null,r.a.createElement("span",{className:"left-column"},"Min hit: "),r.a.createElement("span",{className:"right-column"},e.minHit)))},X=function(){return r.a.createElement("div",{className:"gameover"},r.a.createElement("h3",null,"The dragons took over the land."),r.a.createElement("h3",null,"Try again with a new hero!"),r.a.createElement("img",{src:"/images/dragon.png",alt:"dragon",className:"gameover-dragon reverse-img"}),r.a.createElement("img",{src:"/images/dragon.png",alt:"dragon",className:"gameover-dragon"}))},z=function(e){function t(e){var a;return Object(F.a)(this,t),(a=Object(D.a)(this,Object(G.a)(t).call(this,e))).state={life:0},a}return Object(M.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){this.setState({life:this.props.life})}},{key:"render",value:function(){var e={width:"".concat(this.props.life,"%")};return r.a.createElement("div",{className:"lifebar"},r.a.createElement("div",{className:"lifebar-background"},r.a.createElement("span",{className:"lifebar-number"},this.props.life),r.a.createElement("div",{className:"lifebar-life",style:e})))}}]),t}(r.a.Component),K=function(e){function t(e){var a;return Object(F.a)(this,t),(a=Object(D.a)(this,Object(G.a)(t).call(this,e))).startFight=Object(q.a)(N.a.mark(function e(){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({fightOn:!0,herosLife:a.props.herosLife,dragonsLife:100,herosHit:0,dragonsHit:0});case 2:a.fight();case 3:case"end":return e.stop()}},e)})),a.fight=Object(q.a)(N.a.mark(function e(){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a.state.herosLife<=0||a.state.dragonsLife<=0)){e.next=5;break}return e.next=3,a.battleOver();case 3:e.next=7;break;case 5:return e.next=7,a.dealDamage();case 7:case"end":return e.stop()}},e)})),a.wait=function(e){return new Promise(function(t){return setTimeout(t,e)})},a.dealDamage=Object(q.a)(N.a.mark(function e(){var t,n,r,i;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.wait(1e3);case 2:return e.next=4,Math.floor(Math.random()*a.state.maxHitForHero);case 4:return t=e.sent,e.next=7,a.state.dragonsLife;case 7:return e.t0=e.sent,e.t1=t,(n=e.t0-e.t1)<0&&(n=0),e.next=13,a.setState({dragonsLife:n,herosHit:t});case 13:if(!(a.state.dragonsLife>0)){e.next=27;break}return e.next=16,a.wait(1e3);case 16:return e.next=18,Math.floor(Math.random()*a.state.maxHitForDragon);case 18:return r=e.sent,e.next=21,a.state.herosLife;case 21:return e.t2=e.sent,e.t3=r,(i=e.t2-e.t3)<0&&(i=0),e.next=27,a.setState({herosLife:i,dragonsHit:r});case 27:a.fight();case 28:case"end":return e.stop()}},e)})),a.battleOver=function(){var e;e=a.state.herosLife>0,a.setState({fightOn:!1,fightOver:!0,heroWon:e}),e?a.battleWon():a.battleLost()},a.battleWon=function(){a.winGold()},a.winGold=function(){a.props.winGold(a.state.winAmount)},a.battleLost=function(){a.props.gold-a.state.loseAmount<=0?a.gameOver():a.loseGold()},a.loseGold=function(){a.props.loseGold(a.state.loseAmount)},a.gameOver=function(){a.setState({gameOver:!0}),a.props.gameOver()},a.state={fightOn:!1,fightOver:!1,heroWon:!1,winAmount:3,loseAmount:2,gameOver:!1,herosLife:100,herosHit:0,dragonsLife:100,dragonsHit:0,maxHitForHero:30,minHitForHero:0,maxHitForDragon:40,minHitForDragon:0},a}return Object(M.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){var e=0,t=0;this.props.herosEquipment.map(function(a){return a.stats.map(function(a){return"attack"===a.title.toLowerCase()?e+=a.points:"defense"===a.title.toLowerCase()?t+=a.points:null})}),this.setState({herosLife:this.props.herosLife,maxHitForHero:30+e,minHitForHero:e,maxHitForDragon:40-t})}},{key:"render",value:function(){var e=this.props,t=e.gold,a=e.herosEquipment;return r.a.createElement("div",null,this.state.gameOver?r.a.createElement(X,null):r.a.createElement("div",{className:"battlefield"},r.a.createElement("h1",null,"Battlefield"),r.a.createElement("div",{className:"battlefield-characters"},r.a.createElement("div",{className:"battlefield-character",id:"hero-character"},r.a.createElement("div",{className:"battlefield-hero-stats"},r.a.createElement("p",null,"Gold: ",t),r.a.createElement(I,{equipment:a})),r.a.createElement(z,{life:this.state.herosLife}),r.a.createElement("div",{className:"battlefield-damage hero-damage"},this.state.fightOn||this.state.fightOver?-this.state.dragonsHit:null),r.a.createElement("img",{src:"/images/hero.png",alt:"hero",className:"battlefield-character-image"})),r.a.createElement("div",{className:"battlefield-character",id:"dragon-character"},r.a.createElement("div",{className:"battlefied-dragon-stats"},r.a.createElement(V,{maxHit:this.state.maxHitForDragon,minHit:this.state.minHitForDragon})),r.a.createElement(z,{life:this.state.dragonsLife}),r.a.createElement("div",{className:"battlefield-damage dragon-damage"},this.state.fightOn||this.state.fightOver?-this.state.herosHit:null),r.a.createElement("img",{src:"/images/dragon.png",alt:"dragon",className:"battlefield-character-image"}))),r.a.createElement("div",{className:"battlefield-actions"},r.a.createElement("button",{className:"button battlefield-fight-button",onClick:this.startFight},"Fight"),this.state.fightOver&&!this.state.fightOn&&this.state.heroWon?r.a.createElement("p",null,"You won!"):null,!this.state.fightOver||this.state.fightOn||this.state.heroWon?null:r.a.createElement("p",null,"You lost!"))))}}]),t}(r.a.Component),Z=Object(c.b)(function(e){return{gold:e.heroReducer.gold,herosLife:e.heroReducer.life,herosEquipment:e.heroReducer.equipment}},function(e){return{winGold:function(t){return e(function(e){return{type:h,goldAmount:e}}(t))},loseGold:function(t){return e(function(e){return{type:d,goldAmount:e}}(t))},gameOver:function(){return e({type:f})}}})(K),$=function(e){function t(){return Object(F.a)(this,t),Object(D.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(M.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){var e=this.props.name;return r.a.createElement(S.a,null,r.a.createElement("header",{className:"header"},r.a.createElement(S.b,{to:"/"},r.a.createElement("img",{src:"favicon.png",alt:"logo",className:"logo"})),r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:"nav"},r.a.createElement("ul",{className:"nav-ul"},r.a.createElement("li",{className:"nav-li"},r.a.createElement(S.b,{to:"/hero",className:"nav-link"},"Hero")),e?r.a.createElement("li",{className:"nav-li"},r.a.createElement(S.b,{to:"/shop",className:"nav-link"},"Shop")):null,e?r.a.createElement("li",{className:"nav-li"},r.a.createElement(S.b,{to:"/battlefield",className:"nav-link"},"Battlefield")):null)))),r.a.createElement("div",{className:"content"},r.a.createElement(W.c,null,r.a.createElement(W.a,{path:"/",exact:!0,component:T}),r.a.createElement(W.a,{path:"/hero",component:P}),r.a.createElement(W.a,{path:"/shop",component:Q}),r.a.createElement(W.a,{path:"/battlefield",component:Z}))))}}]),t}(r.a.Component),ee=Object(c.b)(function(e){return{name:e.heroReducer.name}})($),te=function(e){function t(){return Object(F.a)(this,t),Object(D.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(M.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchEquipment()}},{key:"render",value:function(){return r.a.createElement(ee,null)}}]),t}(r.a.Component),ae=Object(c.b)(null,function(e){return{fetchEquipment:function(){return e(function(){var e=Object(q.a)(N.a.mark(function e(t){var a;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.getEquipment();case 2:return a=e.sent,t(x(a.equipment)),e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())}}})(te),ne=(a(70),a(71),Object(o.d)(R,Object(o.a)(s.a)));l.a.render(r.a.createElement(c.a,{store:ne},r.a.createElement(ae,null)),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.76390006.chunk.js.map