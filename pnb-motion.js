/* PNB shared motion controller — no external libraries */
(()=>{'use strict';
const reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.body.classList.add('pnb-page-ready');
const progress=document.createElement('div');progress.className='pnb-progress';progress.setAttribute('aria-hidden','true');document.body.appendChild(progress);
const top=document.createElement('button');top.className='pnb-top';top.type='button';top.textContent='↑';top.setAttribute('aria-label','পাতার শুরুতে যান');top.title='উপরে যান';document.body.appendChild(top);
top.addEventListener('click',()=>window.scrollTo({top:0,behavior:reduce?'auto':'smooth'}));
let ticking=false;
function update(){const max=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(max>0?Math.min(100,window.scrollY/max*100):0)+'%';top.classList.toggle('is-visible',window.scrollY>420);ticking=false}
window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(update);ticking=true}},{passive:true});update();
const candidates=document.querySelectorAll('main h1,main h2,main .card,main .side-item,main .hero-main,main .item,main .box,main article,main .section-title,main .grid,main section');
if(!reduce){document.body.classList.add('pnb-motion-ready');if('IntersectionObserver'in window){const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');io.unobserve(entry.target)}}),{threshold:.08,rootMargin:'0px 0px -24px 0px'});candidates.forEach((el,i)=>{el.classList.add('pnb-reveal');if(i%4)el.dataset.pnbDelay=String(i%4);io.observe(el)})}else candidates.forEach(el=>el.classList.add('is-visible'))}
document.querySelectorAll('main .card,main .item,main .box,main .side-item,main .hero-main,main button,main .btn').forEach(el=>el.classList.add('pnb-motion-item'));
document.querySelectorAll('.ticker b').forEach(el=>el.classList.add('pnb-pulse'));
})();