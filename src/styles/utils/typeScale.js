// @flow

// Formula from http://spencermortensen.com/articles/typographic-scale/
const typeScale = (
  i: number,
  r: number = 2, // ratio | octave -> 2
  n: number = 5, // number of sizes per interval
  f0: number = 12, // fundamental frequency
): number => Math.round(f0 * Math.pow(r, i / n));

export default typeScale;
