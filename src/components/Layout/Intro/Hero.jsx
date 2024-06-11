import Picture from '../../UI/Picture/Picture.jsx';

const STYLE = {
  '--tablet-aspect-ratio': '24 / 29',
  '--desktop-aspect-ratio': '430 / 517'
};

const PICTURE_SIZE = {
  mWidth: 202,
  mHeight: 249,
  tWidth: 264,
  tHeight: 319,
  dWidth: 430,
  dHeight: 517
};

const ALT = 'Confident girl wearing denim jacket.';
const SRC_NAME = 'hero';

function Hero({
  className = '',
  imgClassName = ''
}) {
  return (
    <p
      className={className}
      style={STYLE}
    >
      <Picture
        srcName={SRC_NAME}
        size={PICTURE_SIZE}
        alt={ALT}
        imgClassName={imgClassName}
        webWitals={{ fetchpriority: 'high' }}
      />
    </p>
  );
}

export default Hero;
