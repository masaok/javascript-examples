const someFunction = ({ someAttr, otherAttr = null }) => {
  return {
    someAttr,
    otherAttr, // is there a shorthand way of saying "if the attr is null or not supplied, then don't include it in the returned object?"
  };
};

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
