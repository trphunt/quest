export function myReducer(accumulator, arrayElement) {
  return { ...accumulator, [arrayElement.position]: arrayElement.name };
};
