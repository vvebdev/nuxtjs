import{_ as p}from"./nuxt-link.90372329.js";import{o as c,a as i,t,i as d,b as n,u,e as l,w as f,F as h,h as $}from"./entry.5c1817c5.js";import{u as b}from"./counter.39e905ae.js";const g={__name:"button",props:{text:{type:String,default:""}},setup(r){return(s,o)=>(c(),i("button",null,t(r.text),1))}},x=n("br",null,null,-1),k=n("br",null,null,-1),S={__name:"[id]",setup(r){const s=d(),o=b(),_=s.params.id;return(e,a)=>{const m=p;return c(),i(h,null,[n("h1",null,t(e.$t("userPage.title")),1),n("h2",null,t(e.$t("userPage.userId"))+" = "+t(u(_)),1),n("h2",null,t(e.$t("counter"))+" = "+t(u(o).count),1),l(g,{text:e.$t("button"),onClick:a[0]||(a[0]=N=>u(o).increment())},null,8,["text"]),x,k,l(m,{to:"/"},{default:f(()=>[$(t(e.$t("userPage.toMain")),1)]),_:1})],64)}}};export{S as default};
