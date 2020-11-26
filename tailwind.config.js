module.exports = {
  purge: [],
  // variants: {
  //   textColor: ["hover"],
  //   visibility: ["hover"],
  //   textOpacity: ["hover"],
  //   borderColor: ["hover"],
  //   backgroundColor: ["hover"],
  //   animation: ["motion-safe"],
  // },
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      grey0: "#f7fafc",
      grey1: "#edf2f7",
      grey2: "#cbd5e0",
      grey3: "#718096",
      grey4: "#2d3748",
      altBlack: "#1a202c",
      primary: "#00B6FF",
      secondary: "#00B6FF",
      background: "#0A0A0A",
      grey: "#F2F2F2",
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
