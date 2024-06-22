function loadingAnimation(){
  let h5 = document.querySelector("#part1 h5");
let tl = gsap.timeline();
tl.from(".line h1", {
  y: 150,
  stagger: 0.25,
  duration: 0.6,
  delay: 0.5,
});
tl.from("#part1", {
  opacity: 0,
  onStart: function () {
    let grow = 0;
    setInterval(function () {
      if (grow < 100) {
        grow++;
      } else {
        grow = 100;
      }
      h5.innerHTML = grow;
    }, 20);
  },
});
tl.to(".line h2",{
    animationName:"anime",
    opacity:1
})
tl.to("#loader", {
  opacity: 0,
  duration: 0.5,
  delay: 3,
});
tl.from("#page1",{
    delay:0.2,
    y:1600,
    opacity:0,
    duration:0.6,
    ease:Power4
})
tl.to("#loader",{
    display:"none"
})
tl.from("nav",{
  opacity:0
})
tl.from("#matter1 h1, #matter2 h1, #matter3 h2, #matter4 h1",{
  y:150,
  stagger:0.2
})
}
document.addEventListener("mousemove",function(dets){
  gsap.to("#crsr",{
    left:dets.x,
    top:dets.y
  })
})
function cursorAnimation(){
  
  Shery.makeMagnet("#nav2 h4");
}
loadingAnimation();
cursorAnimation();