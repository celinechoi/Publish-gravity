//공통gsap
function gsapAnimate() {
  gsap.set('.ch--m1', { x: '-80px', y: '+40px' }); //
  gsap.set('.ch--m2', { x: '+50px', y: '+30px' }); //
  gsap.set('.ch--f1', { x: '+80px', y: '+40px' }); //
  gsap.set('.ch--f2', { x: '-50px', y: '+30px' }); //

  // gsap.set('.ch--cat', { x: '+20px', y: '+10px' }); //
  // gsap.set('.ch--m1', { x: '-50px', y: '+20px' }); //
  // gsap.set('.ch--m2', { x: '+25px', y: '+20px' }); //
  // gsap.set('.ch--f1', { x: '+50px', y: '+20px' }); //
  // gsap.set('.ch--f2', { x: '-25px', y: '+20px' }); //
  gsap.set('.section-landing .title-wrap', { y: '+200px', opacity: 0 }); //
  gsap.set('.section-landing .i--logo', { y: '+200px', opacity: 0 }); //
  // gsap.set('.section-landing .i--fire', { opacity: 0 }); //

  var tl = gsap.timeline();
  tl.to('.ch--m1', { x: 0, y: 0, duration: 1.5, ease: 'power3.out' }, '<=') //
    .to('.ch--f1', { x: 0, y: 0, duration: 1.5, ease: 'power3.out' }, '<=') //
    .to('.ch--m2', { x: 0, y: 0, duration: 1.5, ease: 'power3.out' }, '<=0.3') //
    .to('.ch--f2', { x: 0, y: 0, duration: 1.5, ease: 'power3.out' }, '<=0.3')
    // .to('.ch--dog', { x: 0, y: 0, duration: 2, ease: 'power3.out' }, '<=') //
    // .to('.ch--cat', { x: 0, y: 0, duration: 2, ease: 'power3.out' }, '<=')

    .to('.section-landing .i--logo', { y: 0, ease: 'power4.out', opacity: 1, duration: 0.7 }, '<=')
    .to('.section-landing .title-wrap', { y: 0, ease: 'power4.out', opacity: 1, duration: 0.7, delay: 0.1 }, '<='); //

  // .to('.section-landing .i--fire--1', { opacity: 1, duration: 0.4, delay: 0.2 }, '<') //
  // .to('.section-landing .i--fire--2', { opacity: 1, duration: 0.4, delay: 0.25 }, '<'); //

  // FIXME: repeat: 작업완료시 주석해제
  var repeat = gsap.timeline();
  repeat
    //캐릭터요소 둥둥
    .to('.section-content .i--ani:nth-child(2n)', { ease: 'none', repeat: -1, duration: 3, rotate: 2, y: '-4%', yoyo: true }, '<=') //
    .to('.section-content .i--ani:nth-child(2n+1)', { ease: 'none', repeat: -1, delay: 1.5, duration: 3, rotate: 2, y: '-4%', yoyo: true }, '<=');
}
gsapAnimate();

//1 : 메가 부스터 프로모션
//2 : 서버 오픈 페스티벌
//3 : 룬 타블렛

if ($('html').attr('data-page') == 3) {
  gsapPage3();
}

function gsapPage3() {
  // 야시장 이벤트
  gsap.set('.i--1 ', { scale: 0.5, opacity: 0 });
  const ST_3 = gsap.timeline({
    scrollTrigger: {
      trigger: '.i--1',
      start: 'top-=300 center',
      end: 'bottom',
      // markers: true,
      // scrub: 1,
      onEnter: () => {
        var tl = gsap.timeline();
        // tl.to('.i--1', { ease: 'bounce.out', duration: 3, delay: 0.3, opacity: 1, scale: 1 }, `<=`)
        tl.to('.i--1', { ease: 'elastic.out(1,0.3)', duration: 3, delay: 0.3, opacity: 1, scale: 1 }, `<=`)
          //
          .to('.i--1', { ease: 'none', yoyo: true, repeat: -1, duration: 3.5, rotate: '-2', y: '-2%' }, `<=1`);
      },
    },
  });
}
