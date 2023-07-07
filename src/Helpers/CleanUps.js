const cleanUpNumber = (value) => {
  let num;

  // Remove Leading Zeroes
  value = value > 0 ? value.replace(/^0+/, "") : value;

  // Remove Non-Numbers
  num = value.replace(/[^0-9]/g, "");

  return num;
};

const capitalise = (value) => {
  return value.toString().charAt(0).toUpperCase() + value.toString().slice(1);
};

const processKeys = (value) => {
  const nums = value.match(/\d+/g);
  const chars = value.match(/[a-zA-Z]+/g);
  return nums + " " + capitalise(chars);
};

export { cleanUpNumber, capitalise, processKeys };
