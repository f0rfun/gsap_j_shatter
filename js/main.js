const onReverseComplete = () => {
  tl.invalidate();
};

const tl = gsap
  .timeline({
    yoyo: true,
    paused: true,
    onReverseComplete: onReverseComplete,
  })
  .to("svg *", {
    duration: 2,
    x: "+=random(-50, 50)",
    y: "+=random(-50, 50)",
    rotation: "+=random(-45, 45)",
    ease: "power4.inOut",
  });

const svg = document.querySelector("svg");

svg.addEventListener("mouseenter", () => tl.play());
svg.addEventListener("mouseleave", () => {
  tl.reverse();
});
