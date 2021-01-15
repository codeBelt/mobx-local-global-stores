// A function that performs no operations.
export const noop = Function.prototype as <T>(...params: T[]) => T;

export const delay = (durationInMilliseconds = 250): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, durationInMilliseconds));
};
