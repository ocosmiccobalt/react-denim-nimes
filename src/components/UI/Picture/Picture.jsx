import { TYPES, PIXEL_DENSITY_DESCRIPTORS, getSrc, getSrcSet } from './util.js';
import Sources from './Sources.jsx';

const HOST = '/';
const OPTIONS = [
  { media: '(min-width: 75rem)', suffix: '-desktop' },
  { media: '(min-width: 48rem)', suffix: '-tablet' },
  { media: null, suffix: '-mobile' }
];
const NO_MEDIA_OPTIONS = [{ media: null, suffix: '' }];
const IMG_SRC_SUFFIX = OPTIONS[OPTIONS.length - 1].suffix;
const NO_MEDIA_IMG_SRC_SUFFIX = NO_MEDIA_OPTIONS[0].suffix;

function Picture({
  srcName,
  oldType = 'jpg',
  size: {
    width, height, mWidth, mHeight, tWidth, tHeight, dWidth, dHeight
  } = {},
  noMedia = false,
  alt,
  imgClassName = '',
  webWitals = {}
}) {
  const srcStart = HOST + 'img/' + srcName;

  const options = noMedia ? NO_MEDIA_OPTIONS : OPTIONS;

  for (const obj of options) {
    switch(obj.suffix) {
      case OPTIONS[0].suffix:
        obj.width = dWidth;
        obj.height = dHeight;
        break;

      case OPTIONS[1].suffix:
        obj.width = tWidth;
        obj.height = tHeight;
        break;

      case OPTIONS[2].suffix:
        obj.width = mWidth;
        obj.height = mHeight;
        break;

      case NO_MEDIA_OPTIONS[0].suffix:
        obj.width = width;
        obj.height = height;
        break;

      default:
        break;
    }
  }

  const sourceTypes = noMedia ? TYPES : TYPES.concat(oldType);
  const sources = sourceTypes.map((type) => (
    <Sources
      key={type}
      type={type}
      descriptors={PIXEL_DENSITY_DESCRIPTORS}
      options={options}
      srcStart={srcStart}
    />
  ));

  const imgSrcSuffix = noMedia ? NO_MEDIA_IMG_SRC_SUFFIX : IMG_SRC_SUFFIX;

  const imgSrc = getSrc({
    start: srcStart,
    suffix: imgSrcSuffix,
    descriptor: PIXEL_DENSITY_DESCRIPTORS[0],
    type: oldType
  });

  const imgSrcSet = getSrcSet({
    start: srcStart,
    suffix: imgSrcSuffix,
    descriptors: PIXEL_DENSITY_DESCRIPTORS.slice(1),
    type: oldType
  });

  const imgWidth = noMedia ? width : mWidth;
  const imgHeight = noMedia ? height : mHeight;

  const img = (
    <img
      className={imgClassName}
      src={imgSrc}
      srcSet={imgSrcSet}
      width={imgWidth}
      height={imgHeight}
      alt={alt}
      {...webWitals}
    />
  );

  return (
    <picture>
      {sources}
      {img}
    </picture>
  );
}

export default Picture;
