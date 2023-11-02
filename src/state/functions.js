export const newRow = (text) => {
  return {
    text: text,
    id: Math.floor(Date.now() % 100000000),
    isChecked: false,
  };
};
