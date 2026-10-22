"use strict";
(() => {
  const $ = s => document.querySelector(s);
  const booksEl = $("#books");
  const passagesEl = $("#passages");
  let parvas = [];
  let translations = [];
  let upaparvas = {};
  let state = {book:1,chapter:1,language:"both",query:""};
  const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const pad = (number,width) => String(number).padStart(width,"0");
  const sourceRef = (b,c,v) => pad(b,2)+"."+pad(c,3)+"."+pad(v,3);
  function hashState(){
    const m = location.hash.match(/^#\/(\d{1,2})\/(\d{1,3})$/);
    if(!m) return {book:1,chapter:1};
    const book = Number(m[1]),chapter = Number(m[2]);
    if(!parvas[book-1] || chapter<1 || chapter>parvas[book-1].chapters) return {book:1,chapter:1};
    return {book,chapter};
  }
  function navigate(book,chapter) {
    location.hash = "#/"+book+"/"+chapter;
    if(hashState().book===state.book && hashState().chapter===state.chapter) render();
    $("#main").scrollIntoView({behavior:"smooth",block:"start"});
    closeMenu();
  }
  function closeMenu(){$("#sidebar").classList.remove("open");$("#menu").setAttribute("aria-expanded","false");}
  function makeBookMenu(){
    booksEl.innerHTML=parvas.map(p=>'<button class="book-link '+(p.number===state.book?'active':'')+'" type="button" data-book="'+p.number+'"><span class="book-no">'+p.key+'</span><span><span class="book-name">'+escapeHtml(p.name)+' Parva</span><span class="book-hindi">'+escapeHtml(p.sanskrit)+'</span></span><span class="book-count">'+p.chapters+'</span></button>').join("");
  }
  function makeVerse(v){
    const en = state.language!=="hi";
    const hi = state.language!=="en";
    const translation = '<div class="translations '+(en&&hi?'':'single')+'">'+
      (en?'<div class="translation en"><div class="translation-label">English translation</div><p>'+escapeHtml(v.english)+'</p></div>':'')+
      (hi?'<div class="translation hi"><div class="translation-label">हिन्दी अनुवाद</div><p lang="hi">'+escapeHtml(v.hindi)+'</p></div>':'')+'</div>';
    const context = '<div class="context"><small>MODERN CONTEXT / आधुनिक संदर्भ</small>'+
      (en?'<p>'+escapeHtml(v.contextEn||"")+'</p>':'')+
      (hi?'<p lang="hi">'+escapeHtml(v.contextHi||"")+'</p>':'')+'</div>';
    return '<article class="verse" id="v-'+v.id.replaceAll(".","-")+'"><div class="verse-top"><span class="verse-id">'+v.id+'</span><span class="verse-kind">'+escapeHtml(v.kind==="invocation"?"Opening invocation":v.kind==="prose"?"Prose narration":"Śloka")+'</span></div><p class="sanskrit" lang="sa">'+escapeHtml(v.sanskrit)+'</p>'+translation+context+'</article>';
  }
  function makeTeachings(data) {
    const noted=data.filter(v=>v.teachingEn||v.teachingHi);
    $("#teachings").classList.toggle("hidden",!noted.length);
    $("#teaching-list").innerHTML=noted.map(v=>'<div class="teaching-item"><small>'+v.id+'</small><div>'+(state.language!=="hi"?'<p>'+escapeHtml(v.teachingEn||"")+'</p>':'')+(state.language!=="en"?'<p lang="hi">'+escapeHtml(v.teachingHi||"")+'</p>':'')+'</div></div>').join("");
  }
  function render() {
    Object.assign(state,hashState());
    const p=parvas[state.book-1];
    if(!p) return;
    makeBookMenu();
    $("#parva-count").textContent="BOOK "+p.key+" OF 18";
    $("#chapter-title").textContent=p.name+" Parva";
    $("#chapter-subtitle").textContent=p.sanskrit+" · Adhyāya "+state.chapter+(state.book===1&&state.chapter===1?" · Anukramaṇikā":"");
    $("#crumb").textContent="PARVA "+p.key+" / ADHYĀYA "+pad(state.chapter,3);
    $("#primary-source").href=p.source;
    $("#language").value=state.language;
    $("#search").value=state.query;
    const present=translations.filter(v=>v.parva===state.book&&v.chapter===state.chapter);
    const q=state.query.trim().toLocaleLowerCase();
    const visible=q?present.filter(v=>[v.id,v.sanskrit,v.english,v.hindi,v.contextEn,v.contextHi,v.teachingEn,v.teachingHi].some(x=>String(x||"").toLocaleLowerCase().includes(q))):present;
    $("#chapter-status").textContent=present.length
       ?present.length+" published passages in this chapter (including the opening invocation and prose where applicable). Translation remains in progress."
       :"No translations published for this chapter yet. Its position in the Sanskrit edition is preserved.";
    passagesEl.innerHTML=visible.map(makeVerse).join("");
    if(!present.length) passagesEl.innerHTML='<div class="pending"><h3>Translation in preparation</h3><p>This adhyāya remains in its original parva position. We will not invent verses or display an unverified translation to fill the gap.</p><p><a target="_blank" rel="noopener noreferrer" href="'+p.source+'">Read this parva in the BORI Sanskrit source ↗</a></p></div>';
    else if(!visible.length) passagesEl.innerHTML='<div class="pending"><h3>No matching published passages</h3><p>Search only covers passages translated and verified so far.</p></div>';
    makeTeachings(visible);
    const groups=upaparvas[String(state.book)]||[];
    const activeGroup=groups.find(g=>state.chapter>=g.start&&state.chapter<=g.end);
    $("#upaparva-index").classList.toggle("hidden",!groups.length);
    $("#upaparva-list").innerHTML=groups.map(g=>'<button type="button" class="upaparva-button '+(activeGroup===g?'active':'')+'" data-upaparva="'+g.start+'"><span>'+escapeHtml(g.name)+'</span><small>Adhyāyas '+g.start+'–'+g.end+'</small></button>').join("");
    if(activeGroup) $("#chapter-subtitle").textContent=p.sanskrit+" · "+activeGroup.name+" · Adhyāya "+state.chapter;
    $("#chapter-count").textContent=p.chapters+" chapters in "+p.name+" Parva (BORI Critical Edition). The selected chapter is "+state.chapter+". Chapter buttons preserve edition numbering.";
    const buttons=[];
    for(let n=1;n<=p.chapters;n++){
      const isPublished=state.book===1&&n===1;
      buttons.push('<button type="button" class="chapter-button '+(n===state.chapter?'active ':'')+(isPublished?'published':'')+'" data-chapter="'+n+'" aria-label="Chapter '+n+(isPublished?', translation available':'')+'" aria-current="'+(n===state.chapter?'true':'false')+'">'+pad(n,3)+'</button>');
    }
    $("#chapter-grid").innerHTML=buttons.join("");
    $("#prev-chapter").disabled=state.book===1&&state.chapter===1;
    $("#next-chapter").disabled=state.book===18&&state.chapter===p.chapters;
    document.title=p.name+" Parva · Chapter "+state.chapter+" | Mahabharata";
  }
  document.addEventListener("click",e=>{
    const bookBtn=e.target.closest("[data-book]");
    const chapterBtn=e.target.closest("[data-chapter]");
    const subBtn=e.target.closest("[data-upaparva]");
    if(bookBtn) navigate(Number(bookBtn.dataset.book),1);
    if(chapterBtn) navigate(state.book,Number(chapterBtn.dataset.chapter));
    if(subBtn) navigate(state.book,Number(subBtn.dataset.upaparva));
  });
  $("#prev-chapter").addEventListener("click",()=>{
    if(state.chapter>1) navigate(state.book,state.chapter-1);
    else if(state.book>1) navigate(state.book-1,parvas[state.book-2].chapters);
  });
  $("#next-chapter").addEventListener("click",()=>{
    if(state.chapter<parvas[state.book-1].chapters) navigate(state.book,state.chapter+1);
    else if(state.book<18) navigate(state.book+1,1);
  });
  $("#language").addEventListener("change",e=>{state.language=e.target.value;render()});
  $("#search").addEventListener("input",e=>{state.query=e.target.value;render()});
  $("#menu").addEventListener("click",()=>{const opened=$("#sidebar").classList.toggle("open");$("#menu").setAttribute("aria-expanded",String(opened));});
  addEventListener("hashchange",render);
  Promise.all([
    fetch("./data/parvas.json").then(r=>{if(!r.ok)throw new Error("Parvas not found");return r.json()}),
    fetch("./data/translations.json").then(r=>{if(!r.ok)throw new Error("Translations not found");return r.json()}),
    fetch("./data/upaparvas.json").then(r=>{if(!r.ok)throw new Error("Subparva map not found");return r.json()})
  ]).then(([ps,vs,us])=>{parvas=ps;translations=vs.passages;upaparvas=us.books;$("#progress").textContent=translations.length;render();})
    .catch(err=>{$("#chapter-status").textContent="Content could not load. Check the repository Pages settings and JSON paths.";console.error(err)});
})();
