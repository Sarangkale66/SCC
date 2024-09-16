function init(){
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
init();

function scroll(){
  let para=document.querySelector(".page2 p");
  gsap.to(para,{
    // transform:"translateX(-40%)",
    scrollTrigger:{
      trigger:".page2",
      pin:true,
      scroller:"#main",//By-default-body
      markers:true,
      start:"center 50%",
      end:"center 0%",
      scrub:true
    }
  });
}
scroll();