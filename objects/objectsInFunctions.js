const someFunction = ({ someAttr, otherAttr = null }) => {
  return {
    someAttr,
    otherAttr, // is there a shorthand way of saying "if the attr is null or not supplied, then don't include it in the returned object?"
  };
};

const newFunction = (obj = {}) => {
  const filtered = Object.fromEntries(
    Object.entries(obj).filter(([k, v]) => ![null, undefined].includes(v))
  );

  // Return the filtered parameters, and some other important stuff specific to this function
  return {
    ...filtered,
    and: "some",
    other: "stuff",
  };
};

console.log(
  newFunction({
    someAttr: "hello",
    otherAttr: null,
    undefAttr: undefined,
  })
);

console.log(
  someFunction({
    someAttr: "hello",
    otherAttr: "world",
  })
);

console.log(
  someFunction({
    someAttr: "hello",
  })
);
