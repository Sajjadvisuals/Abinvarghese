/* ABIN VARGHESE — shared site behaviour & chrome */
(function(){
  var PAGE = window.PAGE || 'home';

  /* ---- NAV ---- */
  function navHTML(){
    function link(href,label,id){
      return '<a href="'+href+'"'+(PAGE===id?' class="active"':'')+'><span class="plus">+</span>'+label+'</a>';
    }
    var menuActive=(PAGE==='about'||PAGE==='contact')?' is-active':'';
    return '<a class="nav__brand" href="index.html"><span>Abin Varghese</span><span>Content Creator / Video Editor / Videographer</span></a>'+
      '<div class="nav__actions">'+
        '<nav class="nav__menu">'+
          link('https://abycreations.com/content-creator-portfolio/','Content Creation','content')+
          link('https://abycreations.com/editor-portfolio/','Video Editing','editing')+
          link('photography.html','Photography','photography')+
        '</nav>'+
        '<button class="nav__burger'+menuActive+'" id="navBurger" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>'+
      '</div>';
  }
  function overlayHTML(){
    function biglink(href,label,id,num,work){
      var cls=[];if(work)cls.push('navmenu__work');if(PAGE===id)cls.push('active');
      return '<a href="'+href+'"'+(cls.length?' class="'+cls.join(' ')+'"':'')+'><span class="navmenu__i">'+num+'</span>'+label+'<span class="navmenu__ar">↗</span></a>';
    }
    return '<div class="navmenu__bg" data-mclose></div>'+
      '<div class="navmenu__panel">'+
        '<div class="navmenu__head"><span class="label">Menu</span>'+
          '<button class="navmenu__close" data-mclose aria-label="Close menu">Close <span>✕</span></button></div>'+
        '<nav class="navmenu__links">'+
          biglink('https://abycreations.com/content-creator-portfolio/','Content Creation','content','01',1)+
          biglink('https://abycreations.com/editor-portfolio/','Video Editing','editing','02',1)+
          biglink('photography.html','Photography','photography','03',1)+
          biglink('about.html','About','about','04')+
          biglink('contact.html','Contact','contact','05')+
        '</nav>'+
        '<div class="navmenu__foot">'+
          '<a class="navmenu__mail" href="mailto:abinwayanad@gmail.com">abinwayanad@gmail.com</a>'+
          '<span class="fp">Dubai · United Arab Emirates</span>'+
        '</div>'+
      '</div>';
  }
  var nav=document.querySelector('.nav');
  if(nav){
    nav.innerHTML=navHTML();
    var menu=document.createElement('div');
    menu.className='navmenu';menu.id='navMenu';menu.setAttribute('aria-hidden','true');
    menu.innerHTML=overlayHTML();
    document.body.appendChild(menu);
    var burger=document.getElementById('navBurger');
    function openMenu(){menu.classList.add('open');menu.setAttribute('aria-hidden','false');burger.classList.add('open');burger.setAttribute('aria-expanded','true');document.documentElement.style.overflow='hidden';}
    function closeMenu(){menu.classList.remove('open');menu.setAttribute('aria-hidden','true');burger.classList.remove('open');burger.setAttribute('aria-expanded','false');document.documentElement.style.overflow='';}
    burger.addEventListener('click',function(){menu.classList.contains('open')?closeMenu():openMenu();});
    menu.addEventListener('click',function(e){if(e.target.hasAttribute('data-mclose'))closeMenu();});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&menu.classList.contains('open'))closeMenu();});
  }

  /* ---- FOOTER ---- */
  function footerHTML(){
    var word='Abin&nbsp;Varghese&nbsp;<span class="o">Abin&nbsp;Varghese</span>&nbsp;';
    var ig='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>';
    var vi='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M3 7.5c1-.9 2-1.7 3.2-1.7 1.6 0 2.3 1.1 2.7 2.9.5 2.2.9 3.6 1.3 4.4.3.6.6.9 1 .9.7 0 1.9-1.6 2.9-3.7.8-1.7.5-3-1.4-3 .8-2.6 3.7-4 5.8-3 1.4.7 1.7 2.4 1.1 4.4-.8 2.6-2.6 5.6-4.3 7.5-1.6 1.8-3.1 2.6-4.3 2.6-1.4 0-2.2-1.3-2.9-3.6-.5-1.7-1-3.4-1.5-5.1-.4-1.4-.8-2-1.3-2-.3 0-.7.3-1.2.7z"/></svg>';
    var yt='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10 9.2l5 2.8-5 2.8z" fill="currentColor" stroke="none"/></svg>';
    var li='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="7" y1="10" x2="7" y2="17"/><circle cx="7" cy="6.8" r="1.1" fill="currentColor" stroke="none"/><path d="M11 17v-4a2.2 2.2 0 0 1 4.4 0v4M11 10.6V17"/></svg>';
    function s(svg,label,href){return '<a href="'+href+'" target="_blank" rel="noopener" aria-label="'+label+'">'+svg+'</a>';}
    return '<div class="marquee" aria-hidden="true"><div class="marquee__track">'+
      '<span>'+word+word+word+'</span><span>'+word+word+word+'</span>'+
    '</div></div>'+
    '<div class="footer__bottom">'+
      '<span class="fp">© 2026 Abin Varghese — All rights reserved</span>'+
      '<a class="fp footer__credit" href="https://www.linkedin.com/in/muhammedsajjad/" target="_blank" rel="noopener">Designed by Sajjad</a>'+
    '</div>';
  }
  var footer=document.querySelector('.footer');
  if(footer){footer.innerHTML=footerHTML();}

  /* ---- nav scroll state ---- */
  function onScroll(){
    if(!nav)return;
    if(window.scrollY>40)nav.classList.add('scrolled');else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();

  /* ---- reveal ---- */
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
  },{threshold:.12,rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.rv').forEach(function(el){io.observe(el);});

  /* ---- parallax (data-parallax = strength) ---- */
  var pxEls=[].slice.call(document.querySelectorAll('[data-parallax]'));
  var ticking=false;
  function parallax(){
    var vh=window.innerHeight;
    pxEls.forEach(function(el){
      var r=el.getBoundingClientRect();
      var s=parseFloat(el.getAttribute('data-parallax'))||0.12;
      var center=r.top+r.height/2;
      var off=(center-vh/2)/vh; // -1..1
      el.style.transform='translate3d(0,'+(off*s*100).toFixed(2)+'px,0)';
    });
    ticking=false;
  }
  function reqPx(){if(!ticking){ticking=true;requestAnimationFrame(parallax);}}
  if(pxEls.length){window.addEventListener('scroll',reqPx,{passive:true});window.addEventListener('resize',reqPx);parallax();}

  /* ---- live clock (Gulf Standard Time, UTC+4) ---- */
  function tick(){
    var el=document.getElementById('ftClock');var hero=document.getElementById('heroClock');
    var now=new Date();
    var gst=new Date(now.getTime()+(now.getTimezoneOffset()+240)*60000);
    var hh=String(gst.getHours()).padStart(2,'0'),mm=String(gst.getMinutes()).padStart(2,'0'),ss=String(gst.getSeconds()).padStart(2,'0');
    var t=hh+':'+mm+':'+ss+' GST';
    if(el)el.textContent=t+' · DUBAI, UAE';
    if(hero)hero.textContent=t;
  }
  tick();setInterval(tick,1000);

  /* ---- hero parallax on home ---- */
  var heroMedia=document.querySelector('.hero__media');
  if(heroMedia){
    window.addEventListener('scroll',function(){
      var y=window.scrollY;
      heroMedia.style.transform='translate3d(0,'+(y*0.28).toFixed(1)+'px,0)';
    },{passive:true});
  }
})();
