import{i as c,S as f}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const y=document.querySelector(".form"),d=document.querySelector(".gallery"),u=document.querySelector(".loader");y.addEventListener("submit",g);function g(o){o.preventDefault();const r=o.target.elements.query.value;if(r.trim()==="")return c.error({message:"Please enter a search query.",position:"topRight"});u.style.display="inline-block",p(r),o.target.reset()}async function p(o){const r="https://pixabay.com/api/",s="?key=42272316-28c697ce0580eb37211383c7d",n=`&q=${o}`,e="&image_type=photo",t="&orientation=horizontal",i="&safesearch=true",m=r+s+n+e+t+i;u.style.display="inline-block";try{const l=await fetch(m);if(!l.ok)throw new Error("Network response was not ok");const a=await l.json();a&&a.hits&&a.hits.length>0?h(a):c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}catch(l){console.error("Error fetching images:",l),c.error({message:"Failed to fetch images. Please try again later.",position:"topRight"})}finally{u.style.display="none"}}function h(o){const r=o.hits.map(b).join("");d.innerHTML=r,new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function b({largeImageURL:o,webformatURL:r,tags:s,likes:n,views:e,comments:t,downloads:i}){return`<li class="gallery-item" >
    <a class="gallery-link" href="${o}">
      <img
        class="gallery-image"
        src="${r}"
        alt="${s}"
      />
    </a>
    <div class="item-text">
      <ul>Likes<li>${n}</li></ul>
      <ul>Views<li>${e}</li></ul>
      <ul>Comments<li>${t}</li></ul>
      <ul>Downloads<li>${i}</li></ul>
    </div>
  </li>`}
//# sourceMappingURL=commonHelpers.js.map
