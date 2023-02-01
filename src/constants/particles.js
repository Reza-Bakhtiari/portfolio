export const csparticles = {
  fpsLimit: 60,
  particles: {
    move: {
      bounce: false,
      direction: "none",
      enable: true,
      outModes: "out",
      random: true,
      speed: 1.5,
      straight: false,
    },
    number: { density: { enable: true, area: 600 }, value: 40 },
    opacity: {
      value: 0.7,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 0.5, max: 0.5 },
    },
  },
  themes: [
    {
      name: "light",
      default: {
        value: true,
        mode: "light",
      },
      options: {
        background: {
          color: "#fff",
        },
        particles: {
          color: {
            value: "#000",
          },
        },
      },
    },
    {
      name: "dark",
      default: {
        value: true,
        mode: "dark",
      },
      options: {
        // background: {
        //   color: "#fff",
        // },
        particles: {
          color: {
            value: "#FC4294",
          },
        },
      },
    },
  ],
};

export const csparticles2 = {
  fps_limit: 60,
  interactivity: {
    detect_on: "canvas",
    // events: {
    //   onclick: { enable: false, mode: "push" },
    //   onhover: {
    //     enable: true,
    //     mode: "attract",
    //     parallax: { enable: false, force: 60, smooth: 10 },
    //   },
    //   resize: true,
    // },
    // modes: {
    //   push: { quantity: 4 },
    //   attract: { distance: 200, duration: 0.4, factor: 5 },
    // },
  },
  particles: {
    color: { value: "#d2e8fe" },
    line_linked: {
      color: "#d2e8fe",
      distance: 50,
      enable: true,
      opacity: 0.1,
      width: 2,
    },
    move: {
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
      bounce: false,
      direction: "none",
      enable: true,
      out_mode: "out",
      random: false,
      speed: 1,
      straight: false,
    },
    number: { density: { enable: true, value_area: 500 }, value: 70 },
    opacity: {
      anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
      random: false,
      value: 0.5,
    },
    shape: {
      character: {
        fill: false,
        font: "Verdana",
        style: "",
        value: "*",
        weight: "400",
      },
      image: {
        height: 100,
        replace_color: true,
        src: "images/github.svg",
        width: 100,
      },
      polygon: { nb_sides: 5 },
      stroke: { color: "#000000", width: 0 },
      type: "circle",
    },
    size: {
      anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
      random: true,
      value: 5,
    },
  },
  polygon: {
    draw: { enable: true, lineColor: "#ffffff", lineWidth: 0.5 },
    move: { radius: 10 },
    scale: 1,
    type: "none",
    url: "",
  },
  retina_detect: true,
};
