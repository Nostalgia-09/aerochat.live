import{s as N,c as U}from"../chunks/scheduler.DOjC0atF.js";import{S as X,i as B,e as f,s as q,t as h,o as F,c as _,a as T,n as G,b as y,f as v,d as H,p as J,g as M,h as K,j as e,q as O,k as R,r as Q,u as W,v as Y}from"../chunks/index.D13opEun.js";import{s as Z}from"../chunks/entry.ByPG9Zzj.js";import{C as tt}from"../chunks/CommandLink.nr9ViP3X.js";const et=()=>{const a=Z;return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},updated:a.updated}},st={subscribe(a){return et().page.subscribe(a)}};function rt(a){var A;let n,t,l,C="An error has occured",w,p,V="Unfortunately, an error was encountered whilst trying to process your request.",z,d,j='If you believe this is a mistake, please contact us on our <a href="https://discord.gg/EfHdHThNGX" target="_blank">Discord server</a>.',D,o,I,g=a[0].status+"",E,L,b=((A=a[0].error)==null?void 0:A.message)+"",x,P,$=a[0].url.pathname+"",k,S,c,u;return c=new tt({props:{title:"Go home",href:"/"}}),{c(){n=f("div"),t=f("div"),l=f("h1"),l.textContent=C,w=q(),p=f("p"),p.textContent=V,z=q(),d=f("p"),d.innerHTML=j,D=q(),o=f("p"),I=h("Error code: "),E=h(g),L=h(`
			Error message: `),x=h(b),P=h(`
			Route: `),k=h($),S=q(),F(c.$$.fragment),this.h()},l(s){n=_(s,"DIV",{class:!0});var i=T(n);t=_(i,"DIV",{class:!0});var r=T(t);l=_(r,"H1",{"data-svelte-h":!0}),G(l)!=="svelte-10th5ak"&&(l.textContent=C),w=y(r),p=_(r,"P",{"data-svelte-h":!0}),G(p)!=="svelte-1eafemo"&&(p.textContent=V),z=y(r),d=_(r,"P",{"data-svelte-h":!0}),G(d)!=="svelte-19mwl77"&&(d.innerHTML=j),D=y(r),o=_(r,"P",{class:!0});var m=T(o);I=v(m,"Error code: "),E=v(m,g),L=v(m,`
			Error message: `),x=v(m,b),P=v(m,`
			Route: `),k=v(m,$),m.forEach(H),S=y(r),J(c.$$.fragment,r),r.forEach(H),i.forEach(H),this.h()},h(){M(o,"class","error__info svelte-1dz3tlq"),M(t,"class","error svelte-1dz3tlq"),M(n,"class","content svelte-1dz3tlq")},m(s,i){K(s,n,i),e(n,t),e(t,l),e(t,w),e(t,p),e(t,z),e(t,d),e(t,D),e(t,o),e(o,I),e(o,E),e(o,L),e(o,x),e(o,P),e(o,k),e(t,S),O(c,t,null),u=!0},p(s,[i]){var r;(!u||i&1)&&g!==(g=s[0].status+"")&&R(E,g),(!u||i&1)&&b!==(b=((r=s[0].error)==null?void 0:r.message)+"")&&R(x,b),(!u||i&1)&&$!==($=s[0].url.pathname+"")&&R(k,$)},i(s){u||(Q(c.$$.fragment,s),u=!0)},o(s){W(c.$$.fragment,s),u=!1},d(s){s&&H(n),Y(c)}}}function at(a,n,t){let l;return U(a,st,C=>t(0,l=C)),[l]}let ct=class extends X{constructor(n){super(),B(this,n,at,rt,N,{})}};export{ct as component};