import{S as e,P as t,W as n,T as i,a as o,M as r,b as s,C as a,V as c}from"./vendor.306a2a6c.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const d=new e,l=new t(75,window.innerWidth/window.innerHeight,.1,1e3),u=new n({canvas:document.querySelector("#bg"),alpha:!0,antialias:!0});u.setSize(window.innerWidth,window.innerHeight);const f=new i,m=new o(5,3,50,30),p=new r({map:f.load("assets/images/flag-image.jpg")}),w=new s(m,p);d.add(w),w.rotation.set(-.1,0,0),l.position.z=5;const g=new a;!function e(){const t=g.getElapsedTime(),n=m.getAttribute("position"),i=new c;for(let o=0;o<n.count;o++){i.fromBufferAttribute(n,o);const e=.5*Math.sin(2*i.x+t),r=.25*Math.sin(i.x+t),s=.2*Math.sin(i.y+t);i.z=e+r+s,n.setXYZ(o,i.x,i.y,i.z)}w.geometry.attributes.position.needsUpdate=!0,requestAnimationFrame(e),u.render(d,l)}();
