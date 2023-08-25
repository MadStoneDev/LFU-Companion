const cleanUpNumber = (value) => {
  // Remove Non-Numbers
  let num = value.replace(/[^0-9]/g, "");

  // Remove Leading Zeroes
  num = parseInt(num, 10).toString();

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
