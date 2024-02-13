import{i as u,S as f}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const y=document.querySelector(".form"),d=document.querySelector(".gallery"),c=document.querySelector(".loader");y.addEventListener("submit",g);function g(o){o.preventDefault();const r=o.target.elements.query.value;if(r.trim()==="")return u.error({message:"Please enter a search query.",position:"topRight"});c.style.display="inline-block",p(r),o.target.reset()}async function p(o){const r="https://pixabay.com/api/",l="?key=42272316-28c697ce0580eb37211383c7d",i=`&q=${o}`,e="&image_type=photo",t="&orientation=horizontal",s="&safesearch=true",m=r+l+i+e+t+s;c.style.display="inline-block";try{const n=await fetch(m);if(!n.ok)throw new Error("Network response was not ok");const a=await n.json();a&&a.hits&&a.hits.length>0?h(a):u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}catch(n){console.error("Error:",n)}finally{c.style.display="none"}}function h(o){const r=o.hits.map(b).join("");d.innerHTML=r,document.querySelectorAll(".gallery-link").forEach(e=>{e.setAttribute("href",e.querySelector("img").getAttribute("src"))}),new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function b({largeImageURL:o,webformatURL:r,tags:l,likes:i,views:e,comments:t,downloads:s}){return`<li class="gallery-item" >
    <a class="gallery-link" href="${o}">
      <img
        class="gallery-image"
        src="${r}"
        alt="${l}"
      />
    </a>
    <div class="item-text">
      <ul>Likes<li>${i}</li></ul>
      <ul>Views<li>${e}</li></ul>
      <ul>Comments<li>${t}</li></ul>
      <ul>Downloads<li>${s}</li></ul>
    </div>
  </li>`}
//# sourceMappingURL=commonHelpers.js.map
