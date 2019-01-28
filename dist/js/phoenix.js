var vP = $(".phoenix path"),
  tl = new TimelineMax();
function fire() {
  tl.staggerTo(
      vP,
      1.5,
      {
        cycle: {
          fill: ["white", "gray", "black"],
          opacity: [0.1, 0.3, 0.6, 0.1]
        },
        ease: RoughEase.ease.config({
          template: Power0.easeNone,
          strength: 1,
          points: 20,
          taper: "none",
          randomize: true,
          clamp: false
        })
      },
      0.04
    )
    .staggerTo(
      vP,
      1.5,
      {
        cycle: {
          y: [-500, -200, -300, -1000],
          x: [200, -200, -700, 700],
          rotation: function(i) {
            return i * 5;
          }
        },
        opacity: 0,
        fill: "gray",
        ease: Circ.easeInOut
      },
      0.05
    );

  return tl;
}

//master timeline
var master = new TimelineMax();
master.timeScale(1.2);
master.add(fire());
master.reverse(0);
