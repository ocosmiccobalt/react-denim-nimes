export const PIXEL_DENSITY_DESCRIPTORS = ['1x','2x'];
export const TYPES = ['avif', 'webp'];

export function getSrc({
  start,
  suffix,
  descriptor,
  type
} = {}) {
  return `${start}${suffix}@${descriptor}.${type}`;
}

export function getSrcSet({
  start,
  suffix,
  descriptors,
  type
} = {}) {
  return descriptors
    .map((descriptor) => {
      return `${getSrc({
        start,
        suffix,
        descriptor,
        type
      })} ${descriptor}`;
    })
    .join(', ');
}
