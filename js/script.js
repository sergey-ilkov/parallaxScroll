// setTimeout(() => {
//     scrollTo();
// }, 300);

// function scrollTo() {
//     document.body.style.cssText = `sadf`;
//     console.log('aaa');
// }

window.addEventListener('scroll', (e) => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`;
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
});
