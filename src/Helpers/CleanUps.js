const cleanUpNumber = (value) => {
  let num;

  // Remove Leading Zeroes
  value = value > 0 ? value.replace(/^0+/, "") : value;

  // Remove Non-Numbers
  num = value.replace(/[^0-9]/g, "");

  return num;
};

export { cleanUpNumber };
