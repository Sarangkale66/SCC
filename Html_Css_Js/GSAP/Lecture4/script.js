function Slidebar(){
  let menu=document.querySelector("#menu-btn");
  let slidebar=document.querySelector("#slidebar");
  let cross=document.querySelector("#cross")
  
  menu.addEventListener("click",function(){
    gsap.to(slidebar,{
      right:"0%",
      duration:0.5
    });
  });
  cross.addEventListener("click",function(){
    gsap.to(slidebar,{
      right:"-20%",
      duration:0.5
    });
  });
}
Slidebar();

function Pointer(){
  let curser=document.querySelector("#curser");
  let main=document.querySelector("body");
  
  main.addEventListener("mouseenter",function(details){
    gsap.to(curser,{
      scale:1,
      opacity:1
    });
  });

  main.addEventListener("mousemove",function(details){
    gsap.to(curser,{
      x:details.x-6,
      y:details.y-75
    });
  });

  main.addEventListener("mouseleave",function(details){
    gsap.to(curser,{
     scale:0,
     opacity:0
    });
  });

}
Pointer();

function Scaling(){
let box=document.querySelector("#box");
let curser=document.querySelector("#curser");


box.addEventListener("mousemove",function(details){ 
  gsap.to(curser,{
    scale:11,
    duration:1
  });
});
box.addEventListener("mousemove",function(details){ 
  gsap.to(box,{
    color:"black",
    scale:0.5,
    duration:1
  });
});

box.addEventListener("mouseleave",function(details){
  gsap.to(curser,{
    scale:1,
    duration:1
  });
})
box.addEventListener("mouseleave",function(details){
  gsap.to(box,{
    color:"white",
    scale:1,
    duration:1
  });
})
}
Scaling();

function TextAnimation(){
  
}