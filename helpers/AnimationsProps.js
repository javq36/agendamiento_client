export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};
export const itemanimado = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
    x: [5000, 0],
    transition: { type: "spring", stiffness: 100, duration: 1 },
  },
};
export const itemanimado2 = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
    x: [-5000, 0],
    transition: { type: "spring", stiffness: 100, duration: 1 },
  },
};
