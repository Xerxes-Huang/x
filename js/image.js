function switchPage(type) {
    switch(type) {
        case 'text':
            console.log('text.html');
            window.location.href = 'text.html';
            break;
        case 'index':
            console.log('index.html');
            window.location.href = 'index.html';
            break;
    }
}
function initDragScroll(scrollBox, isHorizontal = true) {
  let drag = false;
  let startPos, startScroll;
  const pageSize = isHorizontal ? scrollBox.offsetWidth : scrollBox.offsetHeight;

  scrollBox.addEventListener('mousedown', e => {
    drag = true;
    scrollBox.style.cursor = 'grabbing';
    startPos = isHorizontal ? e.clientX : e.clientY;
    startScroll = isHorizontal ? scrollBox.scrollLeft : scrollBox.scrollTop;
    scrollBox.style.scrollBehavior = 'auto';
  })
  window.addEventListener('mousemove', e => {
    if (!drag) return;
    const movePos = isHorizontal ? e.clientX : e.clientY;
    const diff = movePos - startPos;
    if(isHorizontal){
      scrollBox.scrollLeft = startScroll - diff;
    }else{
      scrollBox.scrollTop = startScroll - diff;
    }
  })

  window.addEventListener('mouseup', () => {
    if (!drag) return;
    drag = false;
    scrollBox.style.cursor = 'grab';
    scrollBox.style.scrollBehavior = 'smooth';
    const target = Math.round((isHorizontal ? scrollBox.scrollLeft : scrollBox.scrollTop) / pageSize) * pageSize;
    if(isHorizontal){
      scrollBox.scrollTo({ left: target });
    }else{
      scrollBox.scrollTo({ top: target });
    }
  })

  scrollBox.addEventListener('touchstart', e => {
    drag = true;
    const touch = e.touches[0];
    startPos = isHorizontal ? touch.clientX : touch.clientY;
    startScroll = isHorizontal ? scrollBox.scrollLeft : scrollBox.scrollTop;
    scrollBox.style.scrollBehavior = 'auto';
  })
  window.addEventListener('touchmove', e => {
    if (!drag) return;
    const touch = e.touches[0];
    const movePos = isHorizontal ? touch.clientX : touch.clientY;
    const diff = movePos - startPos;
    if(isHorizontal){
      scrollBox.scrollLeft = startScroll - diff;
    }else{
      scrollBox.scrollTop = startScroll - diff;
    }
  })
  window.addEventListener('touchend', () => {
    if (!drag) return;
    drag = false;
    scrollBox.style.scrollBehavior = 'smooth';
    const target = Math.round((isHorizontal ? scrollBox.scrollLeft : scrollBox.scrollTop) / pageSize) * pageSize;
    if(isHorizontal){
      scrollBox.scrollTo({ left: target });
    }else{
      scrollBox.scrollTo({ top: target });
    }
  })
}

const scrollH = document.querySelector('.scroll-h');
const scrollV = document.querySelector('.scroll-v');
initDragScroll(scrollH, true);
initDragScroll(scrollV, false);
const scrollH = document.querySelector('.scroll-h');
const scrollV = document.querySelector('.scroll-v');
initDragScroll(scrollH, true);
initDragScroll(scrollV, false);
const scrollWrap = document.querySelector('.scroll-h');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const pageW = scrollWrap.offsetWidth;
btnPrev.addEventListener('click', () => {
  let targetLeft = Math.round(scrollWrap.scrollLeft / pageW) * pageW - pageW;
  if (targetLeft < 0) {
    targetLeft = scrollWrap.scrollWidth - pageW;
  }
  scrollWrap.scrollTo({
    left: targetLeft,
    behavior: 'smooth'
  });
});

btnNext.addEventListener('click', () => {
  let targetLeft = Math.round(scrollWrap.scrollLeft / pageW) * pageW + pageW;
  const maxLeft = scrollWrap.scrollWidth - pageW;
  if (targetLeft > maxLeft) {
    targetLeft = 0;
  }
  scrollWrap.scrollTo({
    left: targetLeft,
    behavior: 'smooth'
  });
});
