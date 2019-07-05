(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,n){e.exports=n(72)},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(20),c=n.n(l),i=n(2),o=n(15),u=n(39),m=n(19),s="CREATE_HERO",p="BUY_EQUIPMENT",d="WIN_GOLD",h="LOSE_GOLD",g="GAME_OVER",E={name:"",gold:0,equipment:[]};var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(m.a)({},e,{gold:10,name:t.name});case p:var n=e.equipment.concat(t.equipment);return Object(m.a)({},e,{gold:e.gold-t.equipment.price,equipment:n});case d:return Object(m.a)({},e,{gold:e.gold+t.goldAmount});case h:var a=t.goldAmount,r=e.gold-a;return r<0&&(r=0),Object(m.a)({},e,{gold:r});case g:return{name:"",gold:0,equipment:[]};default:return e}},b=n(26),v=n.n(b),q=n(40),O=n(22),N=n.n(O),j="/api/equipment",y={getEquipment:function(){return N.a.get(j).then(function(e){return e.data})},getRandomEquipment:function(){return N.a.get("".concat(j,"/random")).then(function(e){return e.data})},getXEquipment:function(e){return N.a.get("".concat(j,"/amount/").concat(e)).then(function(e){return e.data})}},w="FETCH_EQUIPMENT";var k=function(e){return{type:w,equipment:e}},C={equipment:[]};var R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return{equipment:t.equipment};default:return e}},G=Object(o.c)({heroReducer:f,equipmentReducer:R});var A=n(5),W=n(6),L=n(8),T=n(7),x=n(9),B=n(17),H=n(14),M=function(){return r.a.createElement("div",{className:"home"},r.a.createElement("h1",null,"DragonLand"),r.a.createElement("div",{className:"home-instuctions"},r.a.createElement("span",{className:"home-instruction-1"},"Create a hero,"),r.a.createElement("span",{className:"home-instruction-2"},"equip yourself,"),r.a.createElement("span",{className:"home-instruction-3"},"slay the dragons!")))},S=function(e){return r.a.createElement("div",{className:"equipment"},r.a.createElement("p",null,e.equipment.title),e.equipment.stats.map(function(e){return r.a.createElement("div",{key:e.title},e.title+": +"+e.points)}),r.a.createElement("img",{src:e.equipment.imageUrl,alt:e.equipment.title,className:"equipment-img"}))},I=function(e){var t=0,n=0,a=0;return e.equipment.map(function(e){return e.stats.map(function(e){return"attack"===e.title.toLowerCase()?t+=e.points:"defense"===e.title.toLowerCase()?n+=e.points:"movement"===e.title.toLowerCase()?a+=e.points:null})}),r.a.createElement("div",{className:"hero-stats"},r.a.createElement("p",null,r.a.createElement("span",{className:"left-column"},"Attack: "),r.a.createElement("span",{className:"right-column"},t)),r.a.createElement("p",null,r.a.createElement("span",{className:"left-column"},"Defense: "),r.a.createElement("span",{className:"right-column"},n)),r.a.createElement("p",null,r.a.createElement("span",{className:"left-column"},"Movement: "),r.a.createElement("span",{className:"right-column"},a)))},Y=function(e){function t(e){var n;return Object(A.a)(this,t),(n=Object(L.a)(this,Object(T.a)(t).call(this,e))).handleNameChange=function(e){n.setState({name:e.currentTarget.value})},n.createHero=function(){n.state.name.length>0?n.props.createHero(n.state.name):n.setState({nameRequiredWarning:!0})},n.state={name:"",nameRequiredWarning:!1},n}return Object(x.a)(t,e),Object(W.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.gold,a=e.equipment;return r.a.createElement("div",null,0===t.length?r.a.createElement("div",{className:"hero-form"},r.a.createElement("h3",null,"Create a hero"),this.state.nameRequiredWarning?r.a.createElement("div",{className:"name-required-warning"},r.a.createElement("p",null,"Please enter name")):null,r.a.createElement("label",{htmlFor:"input-name"},"Name:"),r.a.createElement("input",{type:"text",id:"input-name",onChange:this.handleNameChange,autoFocus:!0}),r.a.createElement("button",{className:"button create-hero-btn",onClick:this.createHero},"Create")):null,t&&t.length>0?r.a.createElement("div",{className:"hero-info"},r.a.createElement("h3",null,"Your hero:"),r.a.createElement("p",null,"Name: ",t),r.a.createElement("p",null,"Gold: ",n),r.a.createElement(I,{equipment:a}),r.a.createElement("h3",null,"Equipments:"),a&&a.length>0?r.a.createElement("div",{className:"grid-container"},a.map(function(e){return r.a.createElement("div",{className:"grid-item",key:e.id},r.a.createElement(S,{equipment:e,key:e.id}))})):null):null)}}]),t}(r.a.Component),_=Object(i.b)(function(e){return{name:e.heroReducer.name,gold:e.heroReducer.gold,equipment:e.heroReducer.equipment}},function(e){return{createHero:function(t){return e(function(e){return{type:s,name:e}}(t))}}})(Y),D=function(e){function t(){var e,n;Object(A.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(L.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(r)))).buyEquipment=function(e){n.props.buyEquipment(e)},n}return Object(x.a)(t,e),Object(W.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.gold,a=t.herosEquipment;return r.a.createElement("div",{className:"equipment-for-sale"},r.a.createElement("p",null,this.props.equipment.title),this.props.equipment.stats.map(function(e){return r.a.createElement("div",{key:e.title},e.title+": +"+e.points)}),r.a.createElement("p",null,"Price: ",this.props.equipment.price),r.a.createElement("img",{src:this.props.equipment.imageUrl,alt:this.props.equipment.title,className:"equipment-img equipment-for-sale-img"}),n>=this.props.equipment.price&&!a.includes(this.props.equipment)?r.a.createElement("button",{onClick:function(){return e.buyEquipment(e.props.equipment)},className:"button buy-equipment-btn"},"Buy"):a.includes(this.props.equipment)?r.a.createElement("button",{disabled:!0,className:"button buy-equipment-btn owned"},"Owned"):r.a.createElement("button",{disabled:!0,className:"button buy-equipment-btn no-gold"},"No gold"))}}]),t}(r.a.Component),U=Object(i.b)(function(e){return{gold:e.heroReducer.gold,herosEquipment:e.heroReducer.equipment}},function(e){return{buyEquipment:function(t){return e(function(e){return{type:p,equipment:e}}(t))}}})(D),F=function(e){function t(){return Object(A.a)(this,t),Object(L.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(W.a)(t,[{key:"render",value:function(){var e=this.props,t=e.equipment,n=e.herosEquipment,a=e.gold;return r.a.createElement("div",null,r.a.createElement("h3",null,"Gold: ",a),t.length>0?r.a.createElement("div",{className:"grid-container"},t.map(function(e){return n.includes(e)?null:r.a.createElement("div",{className:"grid-item",key:e.id},r.a.createElement(U,{equipment:e}))})):null)}}]),t}(r.a.Component),P=Object(i.b)(function(e){return{equipment:e.equipmentReducer.equipment,gold:e.heroReducer.gold,herosEquipment:e.heroReducer.equipment}})(F),J=function(){return r.a.createElement("div",{className:"gameover"},r.a.createElement("h3",null,"The dragons took over the land."),r.a.createElement("h3",null,"Try again with a new hero!"),r.a.createElement("img",{src:"/images/dragon.png",alt:"dragon",className:"gameover-dragon reverse-img"}),r.a.createElement("img",{src:"/images/dragon.png",alt:"dragon",className:"gameover-dragon"}))},Q=function(e){function t(e){var n;return Object(A.a)(this,t),(n=Object(L.a)(this,Object(T.a)(t).call(this,e))).fight=function(){n.setState({fightOn:!0});var e=document.getElementById("hero-charater"),t=document.getElementById("dragon-character");e&&t&&(e.animate({transform:["rotate(0deg)","rotate(360deg)"]},{duration:1e3,iterations:2}),t.animate({transform:["translateY(0px)","translateY(10px)"]},{duration:1e3,iterations:2}));var a,r=Math.floor(101*Math.random());a=r%2===0,setTimeout(function(){n.setState({fightOn:!1,fightOver:!0,heroWon:a}),a?n.battleWon():n.battleLost()},2e3)},n.battleWon=function(){n.winGold()},n.winGold=function(){n.props.winGold(n.state.winAmount)},n.battleLost=function(){n.props.gold-n.state.loseAmount<=0?n.gameOver():n.loseGold()},n.loseGold=function(){n.props.loseGold(n.state.loseAmount)},n.gameOver=function(){n.setState({gameOver:!0}),n.props.gameOver()},n.state={fightOn:!1,fightOver:!1,heroWon:!1,winAmount:3,loseAmount:2,gameOver:!1},n}return Object(x.a)(t,e),Object(W.a)(t,[{key:"render",value:function(){var e=this.props,t=e.gold,n=e.herosEquipment;return r.a.createElement("div",null,this.state.gameOver?r.a.createElement(J,null):r.a.createElement("div",{className:"battlefield"},r.a.createElement("h1",null,"Battlefield"),r.a.createElement("div",{className:"battlefield-hero-stats"},r.a.createElement("p",null,"Gold: ",t),r.a.createElement(I,{equipment:n})),r.a.createElement("div",{className:"battlefield-characters"},r.a.createElement("div",{className:"battlefield-character",id:"hero-charater"},r.a.createElement("img",{src:"/images/hero.png",alt:"hero",className:"battlefield-character-image"})),r.a.createElement("div",{className:"battlefield-character",id:"dragon-character"},r.a.createElement("img",{src:"/images/dragon.png",alt:"dragon",className:"battlefield-character-image"}))),r.a.createElement("div",{className:"battlefield-actions"},r.a.createElement("button",{className:"button battlefield-fight-button",onClick:this.fight},"Fight"),this.state.fightOver&&!this.state.fightOn&&this.state.heroWon?r.a.createElement("p",null,"You won!"):null,!this.state.fightOver||this.state.fightOn||this.state.heroWon?null:r.a.createElement("p",null,"You lost!"))))}}]),t}(r.a.Component),V=Object(i.b)(function(e){return{gold:e.heroReducer.gold,herosEquipment:e.heroReducer.equipment}},function(e){return{winGold:function(t){return e(function(e){return{type:d,goldAmount:e}}(t))},loseGold:function(t){return e(function(e){return{type:h,goldAmount:e}}(t))},gameOver:function(){return e({type:g})}}})(Q),X=function(e){function t(){return Object(A.a)(this,t),Object(L.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(W.a)(t,[{key:"render",value:function(){var e=this.props.name;return r.a.createElement(B.a,null,r.a.createElement("header",{className:"header"},r.a.createElement(B.b,{to:"/"},r.a.createElement("img",{src:"favicon.png",alt:"logo",className:"logo"})),r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:"nav"},r.a.createElement("ul",{className:"nav-ul"},r.a.createElement("li",{className:"nav-li"},r.a.createElement(B.b,{to:"/hero",className:"nav-link"},"Hero")),e?r.a.createElement("li",{className:"nav-li"},r.a.createElement(B.b,{to:"/shop",className:"nav-link"},"Shop")):null,e?r.a.createElement("li",{className:"nav-li"},r.a.createElement(B.b,{to:"/battlefield",className:"nav-link"},"Battlefield")):null)))),r.a.createElement("div",{className:"content"},r.a.createElement(H.c,null,r.a.createElement(H.a,{path:"/",exact:!0,component:M}),r.a.createElement(H.a,{path:"/hero",component:_}),r.a.createElement(H.a,{path:"/shop",component:P}),r.a.createElement(H.a,{path:"/battlefield",component:V}))))}}]),t}(r.a.Component),z=Object(i.b)(function(e){return{name:e.heroReducer.name}})(X),K=function(e){function t(){return Object(A.a)(this,t),Object(L.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(W.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchEquipment()}},{key:"render",value:function(){return r.a.createElement(z,null)}}]),t}(r.a.Component),Z=Object(i.b)(null,function(e){return{fetchEquipment:function(){return e(function(){var e=Object(q.a)(v.a.mark(function e(t){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.getEquipment();case 2:return n=e.sent,t(k(n.equipment)),e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())}}})(K),$=(n(70),n(71),Object(o.d)(G,Object(o.a)(u.a)));c.a.render(r.a.createElement(i.a,{store:$},r.a.createElement(Z,null)),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.48e2e534.chunk.js.map