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
    sourceOptions = options.filter((obj) => obj.media && obj.suffix !== '-mobile');
  }

  return sourceOptions.map((obj, i) => {
    const { media, suffix, width, height } = obj;
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
}

export default Sources;
