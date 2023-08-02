export const gsapMovings = function () {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {

        let width = window.innerWidth,
        height = window.innerHeight,
        dur = 5000,
        tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".scroll-container",
                pin: true,
                start: "top top",
                end: `+=${height}`,
                scrub: true,
                // markers: true,
                toggleClass: "active",
            }
        })
    
        tl.fromTo('.moving-block', {left: width}, {left: -width*2, duration: 4000})
            .fromTo('.bla', { backgroundColor: '#1E2EB8' }, { backgroundColor: '#E8EDF6', duration: dur })
            .fromTo('.first-text', { opacity: 1, zIndex: 2 }, { opacity: 0, duration: 0.5, zIndex: 1 }, '-=0.5')
            .fromTo('.second-text', { opacity: 0, zIndex: 1 }, { opacity: 1, duration: 1000, zIndex: 2 }, '+=1')
            .fromTo('.moving-card', { opacity: 0 }, { opacity: 1, duration: 1000 }, '+=1')

        tl.eventCallback("onReverseComplete", () => {
            gsap.set('.bla', { backgroundColor: '#1E2EB8' });
            gsap.set('.first-text', { opacity: 1 });
            gsap.set('.second-text', { opacity: 0 });
        });
    
        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '.laptop',
                pin: true,
                start: "top top",
                end: `+=2000`,
                scrub: true,
                // markers: true,
            }
        })

        tl2.fromTo('.laptop-img', { bottom: '-50%', right: 0, scale: 1 }, { bottom: '10%', right: '-10%', scale: 1.1, duration: 500 })
            .fromTo('.laptop-text', { opacity: 1 }, { opacity: 0, duration: 500 })
            .fromTo('.after-laptop', {left: width}, {left: -width*5.4, duration: 6000})
            .fromTo('.laptop-img', { right: '-10%' }, { right: '100%', duration: 500 }, '-=5300')
            .fromTo('.laptop-number.number-1', { translateX: '200%' }, { translateX: 0, duration: 500}, '-=4600' )
            .fromTo('.laptop-number.number-2', { translateX: '200%' }, { translateX: 0, duration: 500}, '-=4550' )
      
        return () => { // optional
          // custom cleanup code here (runs when it STOPS matching)
        };
    });

    mm.add("(min-width: 768px) and (max-width: 1023px)", () => {

        let width = window.innerWidth,
        height = window.innerHeight,
        dur = 5000,
        tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".scroll-container",
                pin: true,
                start: "top top",
                end: `+=${height}`,
                scrub: true,
                // markers: true,
                toggleClass: "active",
            }
        })
    
        tl.fromTo('.moving-block', {left: width}, {left: -width*2.2, duration: 4000})
            .fromTo('.bla', { backgroundColor: '#1E2EB8' }, { backgroundColor: '#E8EDF6', duration: dur })
            .fromTo('.first-text', { opacity: 1, zIndex: 2 }, { opacity: 0, duration: 0.5, zIndex: 1 }, '-=0.5')
            .fromTo('.second-text', { opacity: 0, zIndex: 1 }, { opacity: 1, duration: 1000, zIndex: 2 }, '+=1')
            .fromTo('.moving-card', { opacity: 0 }, { opacity: 1, duration: 1000 }, '+=1')

        tl.eventCallback("onReverseComplete", () => {
            gsap.set('.bla', { backgroundColor: '#1E2EB8' });
            gsap.set('.first-text', { opacity: 1 });
            gsap.set('.second-text', { opacity: 0 });
        });
    
        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '.laptop',
                pin: true,
                start: "top top",
                end: `+=2000`,
                scrub: true,
                // markers: true,
            }
        })

        tl2.fromTo('.laptop-img', { bottom: '-50%', right: 0, scale: 1 }, { bottom: '20%', right: '-30%', scale: 1.8, duration: 500 })
            .fromTo('.laptop-text', { opacity: 1 }, { opacity: 0, duration: 500 })
            .fromTo('.after-laptop', {left: width}, {left: -width*5.4, duration: 6000})
            .fromTo('.laptop-img', { right: '-10%' }, { right: '110%', duration: 500 }, '-=5300')
            .fromTo('.laptop-number.number-1', { translateX: '200%' }, { translateX: 0, duration: 500}, '-=4600' )
            .fromTo('.laptop-number.number-2', { translateX: '200%' }, { translateX: 0, duration: 500}, '-=4550' )
      
        return () => { // optional
          // custom cleanup code here (runs when it STOPS matching)
        };
    });
    
    mm.add("(max-width: 767px)", () => {

        let width = window.innerWidth,
        height = window.innerHeight,
        dur = 5000,
        tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".scroll-container",
                pin: true,
                start: "top top",
                end: `+=${height}`,
                scrub: true,
                // markers: true,
                toggleClass: "active",
            }
        })
    
        tl.fromTo('.moving-block', {left: width}, {left: -width*4, duration: 4000})
            .fromTo('.bla', { backgroundColor: '#1E2EB8' }, { backgroundColor: '#E8EDF6', duration: dur })
            .fromTo('.first-text', { opacity: 1, zIndex: 2 }, { opacity: 0, duration: 0.5, zIndex: 1 }, '-=0.5')
            .fromTo('.second-text', { opacity: 0, zIndex: 1 }, { opacity: 1, duration: 1000, zIndex: 2 }, '+=1')
            .fromTo('.moving-card', { opacity: 0 }, { opacity: 1, duration: 1000 }, '+=1')

        tl.eventCallback("onReverseComplete", () => {
            gsap.set('.bla', { backgroundColor: '#1E2EB8' });
            gsap.set('.first-text', { opacity: 1 });
            gsap.set('.second-text', { opacity: 0 });
        });
    
        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '.laptop',
                pin: true,
                start: "top top",
                end: `+=2000`,
                scrub: true,
                // markers: true,
            }
        })

        tl2.fromTo('.laptop-img', { bottom: '-50%', right: 0, scale: 1 }, { bottom: '40%', right: '-25%', scale: 4, duration: 500 })
            .fromTo('.laptop-text', { opacity: 1 }, { opacity: 0, duration: 500 })
            .fromTo('.after-laptop', {left: width}, {left: -width*5.6, duration: 6000})
            .fromTo('.laptop-img', { right: '-10%' }, { right: '200%', duration: 500 }, '-=5300')
            .fromTo('.laptop-number.number-1', { translateX: '200%' }, { translateX: 0, duration: 500}, '-=4600' )
            .fromTo('.laptop-number.number-2', { translateX: '200%' }, { translateX: 0, duration: 500}, '-=4550' )
      
        return () => { // optional
          // custom cleanup code here (runs when it STOPS matching)
        };
    });  

}