export function myReducer(accumulator, arrayElement) {
  return { ...accumulator, [arrayElement.position]: arrayElement.name };
};

export function myExpander(accumulator, arrayElement) {
  return [...accumulator, { position: arrayElement[0], name: arrayElement[1] }];
};
