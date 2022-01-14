const someFunction = ({ someAttr, otherAttr = null }) => {
  return {
    someAttr,
    otherAttr, // is there a shorthand way of saying "if the attr is null or not supplied, then don't include it in the returned object?"
  };
};

const newFunction = ({ someAttr, otherAttr }) => {
  const results = {
    someAttr,
    otherAttr,
    and: "some",
    other: "stuff",
  };

  // Return the filtered parameters, but include the other stuff
  return Object.fromEntries(
    Object.entries(results).filter(([k, v]) => ![null, undefined].includes(v))
  );
};

const splatFunction = ({ ...stuff }) => {
  const results = {
    ...stuff,
    and: "some",
    other: "stuff",
  };

  // Return the filtered parameters, but include the other stuff
  return Object.fromEntries(
    Object.entries(results).filter(([k, v]) => ![null, undefined].includes(v))
  );
};

console.log(
  newFunction({
    someAttr: "hello",
    undefAttr: undefined,
  })
);

console.log(
  splatFunction({
    someAttr: "hello",
    undefAttr: undefined,
  })
);

// console.log(
//   someFunction({
//     someAttr: "hello",
//     otherAttr: "world",
//   })
// );

// console.log(
//   someFunction({
//     someAttr: "hello",
//   })
// );
