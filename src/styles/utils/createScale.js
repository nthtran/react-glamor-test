// @flow

export default function createScale(
  scale: Array<T>,
  offset: number = 0,
): T {
  const scaleLength = scale.length;
  return (i: number = 0) => {
    const index = Math.max(0, Math.min(i + offset, scaleLength - 1));
    return scale[index];
  }
}
