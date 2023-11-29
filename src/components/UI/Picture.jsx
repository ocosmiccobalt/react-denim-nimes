function Picture({
  srcName,
  size: {
    mWidth, mHeight, tWidth, tHeight, dWidth, dHeight
  },
  alt,
  imgClassName = '',
  webWitals = {}
}) {
  return (
    <picture>
      <source
        type="image/avif"
        media="(min-width: 75rem)"
        srcSet={`/img/${srcName}-desktop@1x.avif 1x, /img/${srcName}-desktop@2x.avif 2x`}
        width={dWidth}
        height={dHeight}
      />
      <source
        type="image/avif"
        media="(min-width: 48rem)"
        srcSet={`/img/${srcName}-tablet@1x.avif 1x, /img/${srcName}-tablet@2x.avif 2x`}
        width={tWidth}
        height={tHeight}
      />
      <source
        type="image/avif"
        srcSet={`/img/${srcName}-mobile@1x.avif 1x, /img/${srcName}-mobile@2x.avif 2x`}
        width={mWidth}
        height={mHeight}
      />

      <source
        type="image/webp"
        media="(min-width: 75rem)"
        srcSet={`/img/${srcName}-desktop@1x.webp 1x, /img/${srcName}-desktop@2x.webp 2x`}
        width={dWidth}
        height={dHeight}
      />
      <source
        type="image/webp"
        media="(min-width: 48rem)"
        srcSet={`/img/${srcName}-tablet@1x.webp 1x, /img/${srcName}-tablet@2x.webp 2x`}
        width={tWidth}
        height={tHeight}
      />
      <source
        type="image/webp"
        srcSet={`/img/${srcName}-mobile@1x.webp 1x, /img/${srcName}-mobile@2x.webp 2x`}
        width={mWidth}
        height={mHeight}
      />

      <source
        media="(min-width: 75rem)"
        srcSet={`/img/${srcName}-desktop@1x.jpg 1x, /img/${srcName}-desktop@2x.jpg 2x`}
        width={dWidth}
        height={dHeight}
      />
      <source
        media="(min-width: 48rem)"
        srcSet={`/img/${srcName}-tablet@1x.jpg 1x, /img/${srcName}-tablet@2x.jpg 2x`}
        width={tWidth}
        height={tHeight}
      />
      <img
        className={imgClassName}
        src={`/img/${srcName}-mobile@1x.jpg`}
        srcSet={`/img/${srcName}-mobile@2x.jpg 2x`}
        width={mWidth}
        height={mHeight}
        alt={alt}
        {...webWitals}
      />
    </picture>
  );
}

export default Picture;
