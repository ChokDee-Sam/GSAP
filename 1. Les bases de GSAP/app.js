const img1 = document.querySelector(".container-images img:nth-child(1)");

function goCat() {
  //   gsap.to(img1, {
  //     x: 100,
  //     y: 50,
  //     scale: 2,
  //     duration: 3,
  //     delay :2,
  //   });

  gsap.fromTo(
    img1,
    { opacity: 0, x: 100, y: 50, scale: 2 },
    {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      duration: 1,
      delay: 2,
      repeat: 2,
      //   repeatDelay: 1,
    }
  );
}

const btn = document.querySelector(".btn");
btn.addEventListener("click", goCat);

gsap.to(".title", {
  color: "red",
});

// ––––––––––––––––––––––––––––––––––––––––––––––––––––
// ––––––––––––––––––––––––––––––––––––––––––––––––––––

const img2 = document.querySelector(".container-images img:nth-child(2)");

gsap.from(".container-images img", {
  //   x: 100,
  y: 200,
  //   scale: 2,
  duration: 1,
  opacity: 0,
  ease: "power-4.out",
  stagger: 0.2,
});

// ––––––––––––––––––––––––––––––––––––––––––––––––––––
// ––––––––––––––––––––––––––––––––––––––––––––––––––––

// gsap.to(".btn", {
//   x: 200,
//   //   x: "random(-100,300)",
//   duration: 0.3,
//   stagger: 0.1,
// });

// ––––––––––––––––––––––––––––––––––––––––––––––––––––
// ––––––––––––––––––––––––––––––––––––––––––––––––––––

const complete = () => {
  console.log("COMPLETE !");
};

gsap.to(".btn", {
  keyframes: [
    { duration: 0.4, y: 100 },
    { duration: 0.4, scale: 1.3 },
    { duration: 0.4, y: 300 },
    { duration: 0.4, y: 0 },
  ],
  repeat: 1,
  onStart: () => console.log("Start"),
  onComplete: complete,
  onUpdate: () => console.log("Update"),
  onRepeat: () => console.log("Repeat"),
});

// ––––––––––––––––––––––––––––––––––––––––––––––––––––
// ––––––––––––––––––––––––––––––––––––––––––––––––––––

gsap.registerEffect({
  name: "rotationScale",
  effect: (targets, config) => {
    return gsap.to(targets, {
      duration: config.duration,
      scale: 2,
      rotation: 360,
    });
  },
  defaults: { duration: 2 },
});

// appel
gsap.effects.rotationScale(".title", { duration: 3 });

// ––––––––––––––––––––––––––––––––––––––––––––––––––––
// ––––––––––––––––––––––––––––––––––––––––––––––––––––

// gsap.set(".txt", { opacity: 0 });

// ––––––––––––––––––––––––––––––––––––––––––––––––––––
// ––––––––––––––––––––––––––––––––––––––––––––––––––––

const anim = gsap.to(".txt", {
  x: 100,
  y: 50,
  yoyo: true,
  repeat: 1,
  duration: 1,
});

// anim.yoyo(3);
anim.delay(1);
// anim.pause();
// anim.resume();
// anim.kill(); //permet de supprimer un Tween
// anim.seek(1.9); // permet de démarrer plus loin

setTimeout(() => {
  anim.restart();
}, 6000);
