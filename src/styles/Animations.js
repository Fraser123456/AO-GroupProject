export const staggeredGrow = (delay) => {
  return {
    animation: "Grow 1s",
    animationDelay: delay * 100 + "ms",
    animationFillMode: "backwards",
  };
};

export const staggeredSlideUp = (delay) => {
  return {
    animation: "slideUp 1s",
    animationFillMode: "both",
    animationDelay: delay + 500 + "ms",
  };
};
