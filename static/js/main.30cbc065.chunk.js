(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{30:function(e,t,a){e.exports=a(59)},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),l=a.n(c),o=a(10),s=a(1),m=a(13),i=a.n(m),u=a(27),E=a(11),d=a(28),p=a.n(d),v=Object(n.createContext)(),k=a(8),b=function(e,t){switch(t.type){case"SEARCH_POKEMON":return Object(k.a)(Object(k.a)({},e),{},{pokemonList:t.payload,error:""});case"SET_SELECTED_POKEMON":return Object(k.a)(Object(k.a)({},e),{},{selectedPokemon:t.payload});case"SET_ERROR":return Object(k.a)(Object(k.a)({},e),{},{error:t.payload,pokemonList:[]});default:return e}},f=function(e){var t=Object(n.useReducer)(b,{selectedPokemon:null,pokemonList:[],error:""}),a=Object(E.a)(t,2),c=a[0],l=a[1],o=function(){var e=Object(u.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://api.pokemontcg.io/v1/cards?name=".concat(t));case 2:(a=e.sent).data.cards.length<1?l({type:"SET_ERROR",payload:"The Pokemon doesnt exist!"}):l({type:"SEARCH_POKEMON",payload:a.data.cards});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(v.Provider,{value:{selectedPokemon:c.selectedPokemon,pokemonList:c.pokemonList,error:c.error,searchPokemon:o,setSelectedPokemon:function(e){l({type:"SET_SELECTED_POKEMON",payload:e})}}},e.children)},O=function(){var e=Object(n.useContext)(v),t=e.pokemonList,a=e.setSelectedPokemon,c=e.selectedPokemon,l=e.error;return null!==c?r.a.createElement(s.a,{to:"/p/".concat(c.id)}):r.a.createElement(n.Fragment,null,t.length?r.a.createElement("div",{className:"search-results"},t.map((function(e){return r.a.createElement("img",{key:e.id,onClick:function(){return function(e){a(e)}(e)},className:"card-img-preview",src:e.imageUrlHiRes,alt:e.name})}))):r.a.createElement(n.Fragment,null,l?r.a.createElement("div",{className:"error-msg"},l):r.a.createElement("div",{className:"results-empty"},"Search for a Pokemon!")))},h=function(){var e=Object(n.useContext)(v).searchPokemon,t=Object(n.useState)(""),a=Object(E.a)(t,2),c=a[0],l=a[1];return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e(c)}},r.a.createElement("h1",{className:"title"},"Pokemon Finder"),r.a.createElement("input",{placeholder:"Search",className:"search-input",type:"text",onChange:function(e){l(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"submit-btn"},"Submit")),r.a.createElement(O,null))},y=function(e){var t=e.title,a=e.types,n=e.val;return a?r.a.createElement("div",null,r.a.createElement("div",{className:"row-title"},t,":"),a.map((function(e,t){return r.a.createElement("div",{key:t},e)}))):r.a.createElement("div",null,r.a.createElement("span",{className:"row-title"},t,":"),r.a.createElement("span",null,n))},N=function(){var e=Object(n.useContext)(v),t=e.selectedPokemon,a=e.setSelectedPokemon;return null===t?r.a.createElement(s.a,{to:"/"}):r.a.createElement("div",{className:"poke-details"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"details-name"},t.name),r.a.createElement("img",{className:"details-img",src:t.imageUrlHiRes,alt:t.name})),r.a.createElement("div",{className:"details-info"},r.a.createElement("h1",{className:"detail"},"Details"),r.a.createElement("div",{className:"detail-table"},r.a.createElement(y,{title:"Type",types:t.types}),r.a.createElement(y,{title:"Rarity",val:t.rarity}),r.a.createElement(y,{title:"Series",val:t.series}),r.a.createElement(y,{title:"Set",val:t.set}),t.evolvesFrom&&r.a.createElement(y,{title:"Evolves from",val:t.evolvesFrom}),r.a.createElement("button",{className:"back-btn",onClick:function(){a(null)}},"Back"))))},P=(a(58),function(){return r.a.createElement(f,null,r.a.createElement(o.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/p/:id",component:N}),r.a.createElement(s.b,{exact:!0,path:"/",component:h}))))});l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.30cbc065.chunk.js.map