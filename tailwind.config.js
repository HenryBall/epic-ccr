module.exports = {
  purge: [],
  variants: {
    textColor: ["hover"],
    visibility: ["hover"],
    textOpacity: ["hover"],
    borderColor: ["hover"],
    backgroundColor: ["hover"],
    animation: ["motion-safe"],
  },
  theme: {
    extend: {
      colors: {
        primary: "#00B6FF",
      },
    },
  },
  plugins: [
    require("tailwindcss-animatecss")({
      classes: [
        "animate__animated",
        "animate__fadeIn",
        "animate__fadeInUp",
        "animate__pulse",
      ],
      settings: {
        animatedSpeed: 1500,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000,
      },
      variants: ["responsive", "hover", "reduced-motion"],
    }),
  ],
};
