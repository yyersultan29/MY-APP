const colors = ["green", "red", "yellow", "blue"];

export const getRandomColor = () => {
  return colors[Math.floor(Math.random() * 4)];
};

export const sleep = async (miliSecund: number) => {
  return new Promise((res) => {
    setTimeout(() => {
      res("");
    }, miliSecund);
  });
};
