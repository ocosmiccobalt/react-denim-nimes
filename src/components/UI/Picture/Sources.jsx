import { TYPES, PIXEL_DENSITY_DESCRIPTORS, getSrcSet } from './util.js';

function Sources({
  type,
  descriptors = PIXEL_DENSITY_DESCRIPTORS,
  options = [],
  srcStart
}) {
  const isFallbackType = !TYPES.includes(type);

  let typeProp;

  if (!isFallbackType) {
    typeProp = 'image/' + type;
  }

  let sourceOptions = options;

  if (isFallbackType) {
    sourceOptions = options.filter((o) => o.media && o.suffix !== '-mobile');
  }

  const sources = sourceOptions.map((o, i) => {
    const { media, suffix, width, height } = o;
    let mediaProp;

    if (media) {
      mediaProp = media;
    }

    const srcSet = getSrcSet({
      start: srcStart,
      suffix,
      descriptors,
      type
    });

    return (
      <source
        key={i}
        type={typeProp}
        media={mediaProp}
        srcSet={srcSet}
        width={width}
        height={height}
      />
    );
  });

  return sources;
}

export default Sources;
