let menu=document.querySelector("#menu");
let cross=document.querySelector("#cross");
let slidebar=document.querySelector("#slidebar")
  menu.addEventListener("click",()=>{
      slidebar.classList.remove("hidden");
      gsap.to("#slidebar",{
        x:-230,
        duartion:5
      });
});
  cross.addEventListener("click",()=>{
      gsap.to("#slidebar",{
        x:230,
        duartion:5
      })
      setTimeout(()=>{
        slidebar.classList.add("hidden");
      },500);
    });