function locomotive(){
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("[data-scroll-container]", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();

  let tl=gsap.timeline({
    scrollTrigger:{
      trigger:".page1",
      scroller:"#main",
      pin:true,
      markers:true,
      scrub:true,
      start:"100% 100%",
      end:"200% 0%"
    }
});
tl.to(".cover",{
  height:"10%",
},"sara")

tl.from(".cover a",{
  opacity:0,
  y:10,
  stagger:0.1
},"sara");
}
locomotive();

gsap.to(".page2 p",{
 transform:"translate(-100%)",
 scrollTrigger:{
  trigger:".page2",
  scroller:"#main",
  markers:true,
  start:"100% 100%",
  end:"200% 0%",
  scrub:true,
  pin:true,
 }
})


