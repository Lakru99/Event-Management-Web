// animation for link buttons

// section-b
let div4 = document.querySelector(".section-b .left");

gsap.fromTo(
  div4,
  {
    clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
  },
  {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    ease: "Sine.easeInOut",
    duration: 8,
    scrollTrigger: {
      trigger: div4,
      scrub: 1,
      start: "top bottom",
      end: "top bottom-=600",
    },
  }
);

// section-c
// let div5 = document.querySelector(".section-c .right");

// gsap.fromTo(
//     div5, {
//         clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
//     }, {
//         clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
//         ease: 'Sine.easeInOut',
//         duration: 8,
//         scrollTrigger: {
//             trigger: div5,
//             scrub: 1,
//             start: "top bottom",
//             end: "top bottom-=600"
//         },
//     }
// );

// section-e
// let div6 = document.querySelector(".section-e .left");

// gsap.fromTo(
//   div6,
//   {
//     clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
//   },
//   {
//     clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
//     ease: "Sine.easeInOut",
//     duration: 8,
//     scrollTrigger: {
//       trigger: div6,
//       scrub: 1,
//       start: "top bottom",
//       end: "top bottom-=700",
//     },
//   }
// );
