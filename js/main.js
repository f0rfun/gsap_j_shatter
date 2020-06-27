var tmax_optionsGlobal = {
  repeat: -1,
  repeatDelay: 0.65,
  yoyo: true,
};

CSSPlugin.useSVGTransformAttr = true;

var tl = new TimelineMax(tmax_optionsGlobal),
  path = "svg *",
  stagger_val = 0,
  duration = 2;

$.each($(path), function (i, el) {
  tl.set($(this), {
    x: "+=" + getRandom(-50, 50),
    y: "+=" + getRandom(-50, 50),
    rotation: "+=" + getRandom(-45, 45),
    scale: 1,
    opacity: 1,
  });
});

var stagger_opts_to = {
  x: 0,
  y: 0,
  opacity: 1,
  scale: 1,
  rotation: 0,
  ease: Power4.easeInOut,
};

tl.staggerTo(path, duration, stagger_opts_to, stagger_val);

var $svg = $("svg");
$svg.hover(
  function () {
    tl.timeScale(0.5);
  },
  function () {
    tl.timeScale(1);
  }
);

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
