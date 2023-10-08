export const textMapper = (text: string) => {
  const result = [];
  const arr = text.split(" ");

  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    for (const letter of word) {
      result.push({
        letter,
        className: "",
      });
    }
    i + 1 < arr.length &&
      result.push({
        letter: " ",
        className: "",
      });
  }

  return result;
};
