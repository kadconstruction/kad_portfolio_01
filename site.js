(function(){
var WA="https://wa.me/2349064230595?text=";
var pages=[["index.html","Home"],["about.html","About"],["services.html","Services"],["portfolio.html","Portfolio"]];
var cur=location.pathname.split("/").pop()||"index.html";
var links=pages.map(function(p){return '<a href="'+p[0]+'"'+(p[0]==cur?' class="on"':'')+'>'+p[1]+'</a>'}).join("");
var nav=document.getElementById("nav");
if(nav)nav.innerHTML='<div class="wrap"><a class="brand" href="index.html"><img src="logo.png" alt="KAD Robotics logo">KAD Robotics</a><button class="burger" aria-label="Menu" id="burger">☰</button><div class="menu" id="menu">'+links+'<a class="btn" href="contact.html">Get in touch</a></div></div>';
var f=document.getElementById("footer");
if(f)f.innerHTML='<div class="wrap"><div><b style="color:var(--text)">KAD Robotics</b><br>Design technologist: web, graphics and electronics.</div><nav>'+links+'<a href="contact.html">Contact</a></nav></div><div class="copy">© '+new Date().getFullYear()+' KAD Robotics. All rights reserved.</div>';
var b=document.getElementById("burger"),m=document.getElementById("menu");
if(b)b.onclick=function(){m.classList.toggle("open")};
document.querySelectorAll("[data-wa]").forEach(function(a){a.href=WA+encodeURIComponent(a.getAttribute("data-wa"))});
var fl=document.querySelectorAll(".filters button");
fl.forEach(function(x){x.onclick=function(){fl.forEach(function(y){y.classList.remove("on")});x.classList.add("on");
document.querySelectorAll(".work").forEach(function(w){w.style.display=(x.dataset.f=="all"||w.dataset.c==x.dataset.f)?"":"none"})}});
})();
