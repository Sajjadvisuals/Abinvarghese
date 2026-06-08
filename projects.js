/* ABIN VARGHESE — project data (exact source order) + categories + in-page player + filters
   Verticals (19) first, in vertical-doc order; then Horizontals (49), in horizontal-doc order.
   categories: cin=Cinematography · vid=Videography · edt=Editing · grd=Grading */
(function(){
  var V = [
    {id:'tqqLq_WAJ4A', t:'My Social Works ShowReel 2026', r:['Concept','Videography','Video Editing','Photography'], tag:'Social', k:'Short', cat:['vid','edt']},
    {id:'LkDmj-U-_7w', t:'Content Creation', r:['Videography','Photography'], tag:'Social', k:'Reel', cat:['vid','edt','grd']},
    {id:'1MET4LFJA9Y', t:'Emirates NBD', r:['Video Editing'], tag:'Leo Burnett · Prodigious ME', m:'Production House: Prodigious ME · Agency: Leo Burnett', k:'Social', cat:['edt']},
    {id:'FMIGEBvp_Ws', t:'Nivea Middle East', r:['Videography','Video Editing'], tag:'Saatchi & Saatchi', m:'Agency: Saatchi & Saatchi', k:'Social', cat:['vid','edt']},
    {id:'eQrgGVPmMFk', t:'Red Bull', r:['Concept','Videography','Video Editing','Colour Grading','Post Production'], tag:'Brand Content', k:'Social', cat:['cin','vid','edt','grd']},
    {id:'6Qi3xZ31wfs', t:'NGO UAE', r:['Concept','Videography','Video Editing','Colour Grading','Post Production'], tag:'Brand Content', k:'Social', cat:['vid','edt','grd']},
    {id:'IzykCeIvrfc', t:'GMC', r:['Video Editing','Colour Grading','Post Production'], tag:'Leo Burnett', m:'Agency: Leo Burnett', k:'Social', cat:['edt','grd']},
    {id:'EmyOImSd47M', t:'ADNOC', r:['Concept','Videography','Video Editing'], tag:'Saatchi & Saatchi', m:'Agency: Saatchi & Saatchi', k:'Social', cat:['vid','edt']},
    {id:'aiDlo_09KoY', t:'Baruni', r:['Videography','Video Editing','Colour Grading','Post Production'], tag:'Brand Content', k:'Social', cat:['vid','edt','grd']},
    {id:'EXi1UVpwwyw', t:'Zafran', r:['Video Editing','Post Production'], tag:'Brand Content', k:'Social', cat:['edt']},
    {id:'rUZ9pzlB26o', t:'Sharjah Events', r:['Video Editing','Animations','Post Producing'], tag:'Event', k:'Social', cat:['edt']},
    {id:'ig4-G9bVxtQ', t:'GentsHub UAE', r:['Concept','Videography','Video Editing','Colour Grading','Post Production'], tag:'Brand Content', k:'Social', cat:['vid','edt','grd']},
    {id:'vGtZyR_XekY', t:'ADNOC Car Wash', r:['Concept','Videography','Video Editing'], tag:'Saatchi & Saatchi', m:'Agency: Saatchi & Saatchi', k:'Social', cat:['vid','edt']},
    {id:'P9VbLAQkxI4', t:'F&B Content', r:['Videography','Video Editing'], tag:'Food & Beverage', k:'Social', cat:['vid','edt']},
    {id:'bUlHA2EG4lU', t:'F&B Content', r:['Videography','Video Editing'], tag:'Food & Beverage', k:'Social', cat:['vid','edt']},
    {id:'hbDloWF3m5s', t:'F&B Content', r:['Videography','Video Editing'], tag:'Food & Beverage', k:'Social', cat:['vid','edt']},
    {id:'_R0ptaVF3zE', t:'Nivea Middle East — TikTok', r:['Videography','Video Editing'], tag:'Saatchi & Saatchi', m:'Agency: Saatchi & Saatchi', k:'Social', cat:['vid','edt']},
    {id:'eCmuoM0y_r4', t:'NANA', r:['Regional Video Edit Adaptations','Video Editing'], tag:'Saatchi & Saatchi', m:'Agency: Saatchi & Saatchi', k:'Social', cat:['edt']},
    {id:'JCxL2_ax1h4', t:'Shaze UAE', r:['Videography','Video Editing','Post Production'], tag:'Brand Content', k:'Social', cat:['vid','edt']},
    {id:'AQ7GorfyO4g', t:'Ajman Free Zone — AI Video Content', r:['Concept','Script','Generative AI','Generative Audio','Animations','Video Editing','Colour Grade','Post Production'], tag:'AI Production', k:'Gen AI', cat:['edt','grd']}
  ];
  var H = [
    {id:'vxbWxRJvGZw', t:'ADNOC Sustainability Campaign', r:['Videography','Video Editing','Colour Grading','Post Producing'], tag:'Saatchi & Saatchi', m:'Agency: Saatchi & Saatchi', k:'Campaign', cat:['cin','vid','edt','grd']},
    {id:'V670O3P7PM4', t:'PIF — Kingdom of Saudi Arabia', r:['Concept','Copy','Video Editing','Colour Grading'], tag:'Create · Trailer', m:'Agency: Create', k:'Trailer', cat:['edt','grd']},
    {id:'fhPi-eainNI', t:'Carrera', r:['Videography','Video Editing','Colour Grading'], tag:'Brand Content', k:'Film', cat:['cin','vid','edt','grd']},
    {id:'snO6C57ttnI', t:'Starbucks Middle East', r:['Video Editing'], tag:'Impact BBDO', m:'Agency: Impact BBDO', k:'Film', cat:['edt']},
    {id:'PRPh_z7WM-8', t:'ADNOC', r:['Video Editing'], tag:'Saatchi & Saatchi', m:'Agency: Saatchi & Saatchi', k:'Film', cat:['edt']},
    {id:'X7Jc_1_zYPQ', t:'EDGE — 2019 Dubai Air Show', r:['Video Editing'], tag:'Dejavu Dubai', m:'Production House: Dejavu Dubai', k:'Event', cat:['edt']},
    {id:'AA08ca_FgKI', t:'e&', r:['Video Editing'], tag:'Saatchi & Saatchi', m:'Agency: Saatchi & Saatchi', k:'Film', cat:['edt']},
    {id:'JwWiSNtYDeE', t:'Film Trailer', r:['Video Edit'], tag:'Film', k:'Trailer', cat:['edt']},
    {id:'v7moU4svk00', t:'Camali Clinic', r:['Concept','Direction','Videography','Editing'], tag:'Corporate Video', k:'Corporate', cat:['cin','vid','edt']},
    {id:'OvvcTeU5DCk', t:'Discovery India', r:['Promo','Video Editor'], tag:'Broadcast', k:'Promo', cat:['edt']},
    {id:'1qy-cCqaJGY', t:'ADNOC Distribution', r:['Video Editing','Animations','Post Producing'], tag:'Brand Content', k:'Film', cat:['edt']},
    {id:'BraNilE3iUE', t:'Carrera', r:['Social Content Creation'], tag:'Brand Content', k:'Social', cat:['vid','edt']},
    {id:'nrLwglofY6I', t:'Emirati Women’s Day Campaign', r:['Videography','Video Editing'], tag:'ADNOC · Saatchi & Saatchi', m:'Client: ADNOC · Agency: Saatchi & Saatchi', k:'Campaign', cat:['vid','edt']},
    {id:'DVygP4Ye5yE', t:'Film Song', r:['Offline Editing'], tag:'Film', k:'Music', cat:['edt']},
    {id:'F-ZKg1x7MeA', t:'Namshi UAE', r:['Video Editing'], tag:'Brand Content', k:'Film', cat:['edt']},
    {id:'WXa8kGtySlM', t:'Oracle', r:['Videography','Video Editing','Post Production'], tag:'Corporate', k:'Corporate', cat:['vid','edt']},
    {id:'u_-m-Xnqz7I', t:'Oracle', r:['Videography','Video Editing','Post Production'], tag:'Corporate', k:'Corporate', cat:['vid','edt']},
    {id:'IWS4jMlR2HU', t:'Admiral Mobility', r:['Video Editing'], tag:'Corporate', k:'Film', cat:['edt']},
    {id:'PJ1F8vO_jCo', t:'Diriyah Global Seminar 2024', r:['Video Editing'], tag:'Event', k:'Event', cat:['edt']},
    {id:'4xJbwE-HAhg', t:'Musical Album', r:['Director of Photography / Cinematographer'], tag:'Freelance', k:'Music', cat:['cin']},
    {id:'OtvYLMMr158', t:'Film Trailer', r:['Video Editing'], tag:'Film', k:'Trailer', cat:['edt']},
    {id:'u6FmYMdXu_8', t:'DEWA — Earth Hour Campaign', r:['Video Editing'], tag:'Social-Eyes', m:'Agency: Social-Eyes', k:'Campaign', cat:['edt']},
    {id:'ipSn7yLC4mk', t:'Gold Box Roasteries', r:['Videography','Video Editing'], tag:'Brand Content', k:'Film', cat:['vid','edt']},
    {id:'Aj9MaIuldvU', t:'Senyar Fish', r:['Videography','Video Editing'], tag:'Social Content Creation', k:'Social', cat:['vid','edt']},
    {id:'bGFkQL17t54', t:'World Government Summit', r:['Video Editing'], tag:'Social-Eyes', m:'Agency: Social-Eyes', k:'Event', cat:['edt']},
    {id:'vuwWQQBeNm4', t:'2019 Abu Dhabi Grand Prix', r:['Videography','Video Editing'], tag:'Event', k:'Event', cat:['vid','edt']},
    {id:'TcrTP-kb91o', t:'Ferrari', r:['Videography','Video Editing'], tag:'Brand Content', k:'Film', cat:['cin','vid','edt']},
    {id:'s7saXX1Lxho', t:'Bahmani Manufacturing', r:['Videography','Video Editing'], tag:'Corporate Video', k:'Corporate', cat:['vid','edt']},
    {id:'8wfR2-yHpSU', t:'Vesuvius', r:['Concept','Direction','Videography','Video Editing','Colour Grading','Post Production'], tag:'Corporate Video', k:'Corporate', cat:['cin','vid','edt','grd']},
    {id:'bf--cbTy3cg', t:'TV Commercial', r:['Video Editing'], tag:'Broadcast', k:'Film', cat:['edt']},
    {id:'XWiA9v0J7U4', t:'CHRO Summit', r:['Videography','Video Editing'], tag:'Corporate Event', k:'Event', cat:['vid','edt']},
    {id:'zyVAXmnyDsU', t:'Music Video', r:['Videography','Video Editing'], tag:'Freelance', k:'Music', cat:['cin','vid','edt']},
    {id:'fUyi-YZaUL4', t:'Star Middle East', r:['Video Editing'], tag:'Broadcast', k:'Film', cat:['edt']},
    {id:'xo02xK46y4A', t:'B4U Middle East', r:['Video Editing'], tag:'Broadcast', k:'Film', cat:['edt']},
    {id:'k3F_6JGob_8', t:'Automobile', r:['Content Creation'], tag:'Automotive', k:'Social', cat:['vid','edt']},
    {id:'wiqdFcF7vxM', t:'Event', r:['Videography','Video Editing'], tag:'Event', k:'Event', cat:['vid','edt']},
    {id:'64cKDo_Kb2w', t:'Musical Album', r:['Videography','Video Editing'], tag:'Freelance', k:'Music', cat:['cin','vid','edt']},
    {id:'c3lJbH7gZEo', t:'Oceana Developers', r:['Videography','Video Editing'], tag:'Corporate Video', k:'Corporate', cat:['vid','edt']},
    {id:'VmHwRGy-XVI', t:'Conference Video', r:['Video Editing'], tag:'Event', k:'Event', cat:['edt']},
    {id:'oYZ9ApKlaqg', t:'Oil Fields Supply Centre — Jebel Ali', r:['Videography','Video Editing'], tag:'Corporate Video', k:'Corporate', cat:['vid','edt']},
    {id:'bURvnfkyGj4', t:'Events & Conferences', r:['Videography','Video Editing'], tag:'Event', k:'Event', cat:['vid','edt']},
    {id:'f8_7bY66x2g', t:'Corporate Video', r:['Videography','Video Editing'], tag:'Corporate', k:'Corporate', cat:['vid','edt']},
    {id:'CP90K0ITadE', t:'Real Estate Videos', r:['Videography','Video Editing'], tag:'Real Estate', k:'Film', cat:['vid','edt']},
    {id:'abOVluRPrb4', t:'Manufacturing', r:['Videography','Video Editing'], tag:'Corporate', k:'Corporate', cat:['vid','edt']},
    {id:'Ts7FiGaJ594', t:'Education', r:['Videography','Video Editing'], tag:'Education', k:'Film', cat:['vid','edt']},
    {id:'-zKRn-LJeAQ', t:'Exhibitions', r:['Videography','Video Editing'], tag:'Event', k:'Event', cat:['vid','edt']},
    {id:'UG62eEUeLjw', t:'Corporate Video', r:['Videography','Video Editing'], tag:'Corporate', k:'Corporate', cat:['vid','edt']},
    {id:'yvTMkGFiVFE', t:'Corporate Video', r:['Videography','Video Editing'], tag:'Corporate', k:'Corporate', cat:['vid','edt']},
    {id:'ZajAsS2feAw', t:'Company Profile', r:['Videography','Video Editing'], tag:'Corporate', k:'Corporate', cat:['vid','edt']}
  ];
  V.forEach(function(p){p.o='v';});
  H.forEach(function(p){p.o='h';});
  var P = V.concat(H);

  /* ---- Video Editing page order (its own list + sequence) ---- */
  var VE_V = [
    {id:'tqqLq_WAJ4A', t:'My Social Works ShowReel 2026', r:['Video Editing'], k:'Short'},
    {id:'LkDmj-U-_7w', t:'My Video Editor Reel (Social)', r:['Video Editing','Colour Grading'], k:'Reel'},
    {id:'EXi1UVpwwyw', t:'Zafran', r:['Video Editing','Post Production'], k:'Social'},
    {id:'6Qi3xZ31wfs', t:'NGO UAE', r:['Video Editing','Colour Grading','Post Production'], k:'Social'},
    {id:'rUZ9pzlB26o', t:'Sharjah Events', r:['Video Editing','Animations','Colour Grading','Post Producing'], k:'Social'},
    {id:'IzykCeIvrfc', t:'GMC', r:['Video Editing','Colour Grading','Post Production'], m:'Agency: Leo Burnett', k:'Social'},
    {id:'EmyOImSd47M', t:'ADNOC', r:['Video Editing'], m:'Agency: Saatchi & Saatchi', k:'Social'},
    {id:'1MET4LFJA9Y', t:'Emirates NBD', r:['Video Editing'], m:'Production House: Prodigious ME · Agency: Leo Burnett', k:'Social'},
    {id:'eQrgGVPmMFk', t:'Red Bull', r:['Video Editing','Colour Grading','Post Production'], k:'Social'},
    {id:'vGtZyR_XekY', t:'ADNOC', r:['Video Editing'], m:'Agency: Saatchi & Saatchi', k:'Social'},
    {id:'aiDlo_09KoY', t:'Baruni', r:['Videography','Video Editing','Colour Grading','Post Production'], k:'Social'},
    {id:'P9VbLAQkxI4', t:'F&B Content', r:['Video Editing'], k:'Social'}
  ];
  var VE_H = [
    {id:'X7Jc_1_zYPQ', t:'EDGE — Dubai Air Show', r:['Video Editing'], m:'Production House: Dejavu Dubai', k:'Event'},
    {id:'vxbWxRJvGZw', t:'ADNOC', r:['Video Editing'], m:'Agency: Saatchi & Saatchi', k:'Campaign'},
    {id:'V670O3P7PM4', t:'PIF — Kingdom of Saudi Arabia', r:['Video Editing','Colour Grading'], m:'Agency: Create', k:'Trailer'},
    {id:'OvvcTeU5DCk', t:'Discovery India', r:['Promo','Video Editor'], k:'Promo'},
    {id:'fhPi-eainNI', t:'Carrera', r:['Video Editing','Colour Grading','Post Production'], k:'Film'},
    {id:'PJ1F8vO_jCo', t:'Diriyah Global Seminar 2024', r:['Video Editing'], k:'Event'},
    {id:'snO6C57ttnI', t:'Starbucks Middle East', r:['Regional Video Edit Adaptations'], m:'Agency: Impact BBDO', k:'Film'},
    {id:'PRPh_z7WM-8', t:'ADNOC', r:['Video Editing'], m:'Agency: Saatchi & Saatchi', k:'Film'},
    {id:'AA08ca_FgKI', t:'e&', r:['Video Editing'], m:'Agency: Saatchi & Saatchi', k:'Film'},
    {id:'vuwWQQBeNm4', t:'2019 Abu Dhabi Grand Prix', r:['Video Editing'], k:'Event'},
    {id:'JwWiSNtYDeE', t:'Film Trailer', r:['Video Edit'], k:'Trailer'},
    {id:'BraNilE3iUE', t:'Carrera', r:['Social Content Creation'], k:'Social'},
    {id:'nrLwglofY6I', t:'Emirati Women’s Day Campaign', r:['Video Editing'], m:'Client: ADNOC · Agency: Saatchi & Saatchi', k:'Campaign'},
    {id:'DVygP4Ye5yE', t:'Film Song', r:['Offline Editing'], k:'Music'},
    {id:'F-ZKg1x7MeA', t:'Namshi UAE', r:['Video Editing'], k:'Film'},
    {id:'WXa8kGtySlM', t:'Oracle', r:['Video Editing','Post Production'], k:'Corporate'},
    {id:'u_-m-Xnqz7I', t:'Oracle', r:['Video Editing','Post Production'], k:'Corporate'},
    {id:'OtvYLMMr158', t:'Film Trailer', r:['Video Editing'], k:'Trailer'},
    {id:'u6FmYMdXu_8', t:'DEWA — Earth Hour Campaign', r:['Video Editing'], m:'Agency: Social-Eyes', k:'Campaign'},
    {id:'bGFkQL17t54', t:'World Government Summit', r:['Video Editing'], m:'Agency: Social-Eyes', k:'Event'},
    {id:'XWiA9v0J7U4', t:'CHRO Summit', r:['Videography','Video Editing'], k:'Event'},
    {id:'fUyi-YZaUL4', t:'Star Middle East', r:['Video Editing'], k:'Film'},
    {id:'xo02xK46y4A', t:'B4U Middle East', r:['Video Editing'], k:'Film'},
    {id:'bURvnfkyGj4', t:'Events & Conferences', r:['Video Editing'], k:'Event'},
    {id:'-zKRn-LJeAQ', t:'Exhibitions', r:['Video Editing'], k:'Film'}
  ];
  VE_V.forEach(function(p){p.o='v';});
  VE_H.forEach(function(p){p.o='h';});
  var REEL = {id:'Jl8S3iZ8elU', mp4:'assets/showreel.mp4', t:'Showreel', r:['Script / Concept','Videography','Photography','Video Editing']};
  var FEAT_V = ['LkDmj-U-_7w','1MET4LFJA9Y','FMIGEBvp_Ws'];
  var FEAT_H = ['vxbWxRJvGZw','V670O3P7PM4','fhPi-eainNI'];
  var CATS = [
    {key:'all', label:'All Work'},
    {key:'cin', label:'Cinematography'},
    {key:'vid', label:'Videography'},
    {key:'edt', label:'Editing'},
    {key:'grd', label:'Grading'}
  ];
  window.ABIN = {P:P, V:V, H:H, REEL:REEL, CATS:CATS};

  function thumb(id){return 'https://i.ytimg.com/vi/'+id+'/maxresdefault.jpg';}
  // YouTube serves a 120x90 gray placeholder for maxres/sd when a real one is absent.
  // Detect that on load and walk to the next real source, ending on a video frame (0.jpg).
  window.abinThumb=function(img,ok){
    if(ok&&img.naturalWidth>120)return;
    var id=img.getAttribute('data-id');var step=(+img.getAttribute('data-step')||0)+1;
    var vert=img.getAttribute('data-vert')==='1';
    var chain=vert?['oardefault','oar2','hq720','maxresdefault','sddefault','hqdefault','0','1','2','3']
                  :['maxresdefault','sddefault','hqdefault','0','1','2','3'];
    if(step<chain.length){img.setAttribute('data-step',step);img.src='https://i.ytimg.com/vi/'+id+'/'+chain[step]+'.jpg';}
  };
  function imgTag(id,alt,vert){
    var first=vert?'https://i.ytimg.com/vi/'+id+'/oardefault.jpg':thumb(id);
    return '<img loading="lazy" data-id="'+id+'" data-step="0"'+(vert?' data-vert="1"':'')+' src="'+first+'" onload="abinThumb(this,1)" onerror="abinThumb(this,0)" alt="'+alt+'">';
  }
  function roles(arr){return arr.map(function(x){return '<span>'+x+'</span>';}).join('<span class="tile__dot"></span>');}
  function count(key){return key==='all'?P.length:P.filter(function(p){return p.cat.indexOf(key)>-1;}).length;}
  function byId(id){return P.filter(function(p){return p.id===id;})[0];}

  function tile(p, n){
    var num=String(n).padStart(2,'0');
    return '<a class="tile rv" data-vid="'+p.id+'" data-title="'+p.t+'" data-tag="'+(p.tag||p.m||'')+'" data-cats="'+(p.cat||[]).join(' ')+'" '+
      'href="https://youtu.be/'+p.id+'" aria-label="Play '+p.t+'">'+
      '<div class="tile__media">'+imgTag(p.id,p.t+' — still',p.o==='v')+
        '<div class="tile__grade"></div>'+
        '<div class="tile__top"><span class="tile__rec fp fp-ink"><b></b> '+p.k+'</span><span class="fp">'+num+'</span></div>'+
        '<div class="tile__scrub"><i></i></div>'+
      '</div>'+
      '<div class="tile__caption">'+
        '<span class="tile__title">'+p.t+'</span>'+
        '<span class="tile__sub fp">'+roles(p.r)+'</span>'+
        (p.m?'<span class="tile__meta fp">'+p.m+'</span>':'')+
      '</div>'+
    '</a>';
  }

  /* ---------- in-page player (modal) ---------- */
  function buildPlayer(){
    if(document.getElementById('player'))return;
    var d=document.createElement('div');d.className='player';d.id='player';d.setAttribute('aria-hidden','true');
    d.innerHTML='<div class="player__bg" data-close></div>'+
      '<div class="player__frame">'+
        '<div class="player__head"><span class="fp fp-accent" id="playerTag"></span>'+
          '<button class="player__close" data-close>Close <span>✕</span></button></div>'+
        '<div class="player__media" id="playerMedia"></div>'+
        '<div class="player__cap"><span class="tile__title" id="playerTitle"></span>'+
          '<a class="fp" id="playerYT" href="#" target="_blank" rel="noopener">Open on YouTube ↗</a></div>'+
      '</div>';
    document.body.appendChild(d);
    d.addEventListener('click',function(e){if(e.target.hasAttribute('data-close'))closePlayer();});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')closePlayer();});
  }
  window.openPlayer=function(opts){
    buildPlayer();
    if(window.stopAllPreviews)window.stopAllPreviews();
    var pl=document.getElementById('player'),media=document.getElementById('playerMedia');
    document.getElementById('playerTitle').textContent=opts.title||'';
    document.getElementById('playerTag').textContent=opts.tag||'Now playing';
    var yt=document.getElementById('playerYT');
    if(opts.yt){yt.style.display='';yt.href='https://youtu.be/'+opts.yt;}else{yt.style.display='none';}
    if(opts.mp4){media.innerHTML='<video src="'+opts.mp4+'" controls autoplay playsinline></video>';}
    else{media.innerHTML='<iframe src="https://www.youtube-nocookie.com/embed/'+opts.yt+'?autoplay=1&rel=0&playsinline=1&modestbranding=1" title="'+(opts.title||'video')+'" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>';}
    pl.classList.add('open');pl.setAttribute('aria-hidden','false');document.documentElement.style.overflow='hidden';
  };
  window.closePlayer=function(){
    var pl=document.getElementById('player');if(!pl)return;
    document.getElementById('playerMedia').innerHTML='';
    pl.classList.remove('open');pl.setAttribute('aria-hidden','true');document.documentElement.style.overflow='';
  };
  var curPreview=null;
  function stopPreview(){
    if(curPreview){var pv=curPreview.media.querySelector('.tile__preview');if(pv)pv.remove();curPreview.tile.classList.remove('is-previewing');curPreview=null;}
  }
  function startPreview(tile){
    if(curPreview&&curPreview.tile===tile)return;
    stopPreview();
    var media=tile.querySelector('.tile__media'),id=tile.getAttribute('data-vid');if(!media||!id)return;
    var pv=document.createElement('div');pv.className='tile__preview';
    pv.innerHTML='<iframe src="https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1&mute=1&controls=0&loop=1&playlist='+id+'&modestbranding=1&playsinline=1&rel=0&disablekb=1" allow="autoplay" tabindex="-1" aria-hidden="true" frameborder="0"></iframe>';
    media.appendChild(pv);tile.classList.add('is-previewing');
    requestAnimationFrame(function(){pv.classList.add('on');});
    curPreview={tile:tile,media:media};
  }
  window.stopAllPreviews=stopPreview;
  document.addEventListener('click',function(e){
    if(matchMedia('(hover:none)').matches && !e.target.closest('a.tile') && !e.target.closest('.player')) stopPreview();
  },true);
  function bindTiles(scope){
    scope.querySelectorAll('a.tile[data-vid]').forEach(function(a){
      var hoverT=null;
      a.addEventListener('mouseenter',function(){
        if(matchMedia('(hover:none)').matches)return;
        hoverT=setTimeout(function(){startPreview(a);},200);
      });
      a.addEventListener('mouseleave',function(){
        if(matchMedia('(hover:none)').matches)return;
        clearTimeout(hoverT);stopPreview();
      });
      a.addEventListener('click',function(e){
        e.preventDefault();
        var touch=matchMedia('(hover:none)').matches;
        if(touch&&(!curPreview||curPreview.tile!==a)){startPreview(a);return;} /* 1st tap = preview */
        openPlayer({yt:a.getAttribute('data-vid'),title:a.getAttribute('data-title'),tag:a.getAttribute('data-tag')});
      });
    });
  }
  function initReveals(scope){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.05,rootMargin:'0px 0px -4% 0px'});
    scope.querySelectorAll('.rv').forEach(function(el){io.observe(el);});
  }
  function setCount(group,n){var c=group&&group.querySelector('[data-count]');if(c)c.textContent=n+(n===1?' film':' films');}

  /* ---------- renderers ---------- */
  window.renderReel=function(sel){
    var el=document.querySelector(sel);if(!el)return;buildPlayer();var p=REEL;
    el.innerHTML='<div class="reel rv" data-reel>'+
      '<div class="reel__media"><video id="reelVideo" autoplay muted loop playsinline preload="auto" poster="assets/reel-thumb.jpg"><source src="'+p.mp4+'" type="video/mp4"></video></div>'+
      '<div class="reel__scrim"></div>'+
      '<div class="reel__top"><span class="tile__rec fp fp-ink"><b></b> SHOWREEL</span></div>'+
      '<button class="reel__sound sound-toggle" id="reelSound" aria-label="Toggle sound"><span class="sound-toggle__bars" aria-hidden="true"><i></i><i></i><i></i><i></i></span><span id="reelSoundLabel">Sound off</span></button>'+
      '<button class="reel__expand" id="reelExpand" aria-label="Play full screen">Full screen <span>⤢</span></button>'+
      '<div class="reel__cap"><h3>Showreel ’26</h3>'+
        '<div class="meta"><span class="fp">'+p.r.join('  ·  ')+'</span></div></div></div>';
    var v=el.querySelector('#reelVideo');
    var tryPlay=function(){var pr=v.play();if(pr&&pr.catch)pr.catch(function(){});};
    v.addEventListener('canplay',tryPlay);tryPlay();
    var sBtn=el.querySelector('#reelSound'),sLab=el.querySelector('#reelSoundLabel');
    sBtn.addEventListener('click',function(){
      v.muted=!v.muted;if(!v.muted){v.volume=1;tryPlay();}
      sBtn.classList.toggle('on',!v.muted);sLab.textContent=v.muted?'Sound off':'Sound on';
    });
    el.querySelector('#reelExpand').addEventListener('click',function(){
      v.pause();openPlayer({mp4:p.mp4,yt:p.id,title:'Showreel 2026',tag:'Now playing — full reel'});
    });
    initReveals(el);
  };

  window.renderGrids=function(vSel,hSel,wrapSel,vList,hList){
    var v=document.querySelector(vSel),h=document.querySelector(hSel);if(!v&&!h)return;buildPlayer();
    var vl=vList||V, hl=hList||H;
    if(v)v.innerHTML=vl.map(function(p,i){return tile(p,i+1);}).join('');
    if(h)h.innerHTML=hl.map(function(p,i){return tile(p,i+1);}).join('');
    var wrap=document.querySelector(wrapSel);
    if(wrap){var g=wrap.querySelectorAll('.grid-group');setCount(g[0],vl.length);setCount(g[1],hl.length);bindTiles(wrap);initReveals(wrap);}
  };

  window.renderFilters=function(sel,wrapSel){
    var el=document.querySelector(sel);if(!el)return;
    el.innerHTML=CATS.map(function(c,i){return '<button class="filter'+(i===0?' active':'')+'" data-cat="'+c.key+'">'+c.label+'<span>'+count(c.key)+'</span></button>';}).join('');
    var wrap=document.querySelector(wrapSel);if(!wrap)return;
    el.addEventListener('click',function(e){
      var b=e.target.closest('.filter');if(!b)return;var key=b.getAttribute('data-cat');
      el.querySelectorAll('.filter').forEach(function(x){x.classList.toggle('active',x===b);});
      wrap.querySelectorAll('.tile').forEach(function(t){
        var cats=(t.getAttribute('data-cats')||'').split(' ');
        t.classList.toggle('is-hidden',!(key==='all'||cats.indexOf(key)>-1));
      });
      wrap.querySelectorAll('.grid-group').forEach(function(g){
        var vis=g.querySelectorAll('.tile:not(.is-hidden)').length;
        g.classList.toggle('is-hidden',vis===0);setCount(g,vis);
      });
    });
  };

  // Video Editing: grouped vertical / horizontal style (same as Content Creation), VE order
  window.renderVE=function(vSel,hSel,wrapSel){
    return window.renderGrids(vSel,hSel,wrapSel,VE_V,VE_H);
  };

  // mixed interleave: 3 vertical row, then 3 horizontal row, repeating
  function renderMixedImpl(wrapSel, vList, hList){
    var wrap=document.querySelector(wrapSel);if(!wrap)return;buildPlayer();
    var vi=0,hi=0,n=1,html='';
    function vrow(){var items=vList.slice(vi,vi+3);vi+=items.length;return items.length?'<div class="mixrow mixrow--v">'+items.map(function(p){return tile(p,n++);}).join('')+'</div>':'';}
    function hrow(){var items=hList.slice(hi,hi+3);hi+=items.length;return items.length?'<div class="mixrow mixrow--h">'+items.map(function(p){return tile(p,n++);}).join('')+'</div>':'';}
    while(vi<vList.length){html+=vrow();html+=hrow();}
    while(hi<hList.length){html+=hrow();}
    wrap.innerHTML=html;bindTiles(wrap);initReveals(wrap);
  }
  // Video Editing order
  window.renderMixed=function(wrapSel){ return renderMixedImpl(wrapSel, VE_V, VE_H); };
  // Content Creation order (used on home)
  window.renderMixedCC=function(wrapSel){ return renderMixedImpl(wrapSel, V, H); };

  // home preview: 3 vertical + 3 horizontal
  window.renderFeatured=function(vSel,hSel,wrapSel){
    var v=document.querySelector(vSel),h=document.querySelector(hSel);if(!v&&!h)return;buildPlayer();
    if(v)v.innerHTML=FEAT_V.map(function(id,i){return tile(byId(id),i+1);}).join('');
    if(h)h.innerHTML=FEAT_H.map(function(id,i){return tile(byId(id),i+1);}).join('');
    var wrap=document.querySelector(wrapSel)||document.body;
    bindTiles(wrap);initReveals(wrap);
  };
})();
