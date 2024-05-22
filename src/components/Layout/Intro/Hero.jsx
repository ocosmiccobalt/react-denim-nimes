import Picture from '../../UI/Picture/Picture.jsx';

function Hero({ className = '', imgClassName = '' }) {
  const size = {
    mWidth: 202,
    mHeight: 249,
    tWidth: 264,
    tHeight: 319,
    dWidth: 430,
    dHeight: 517
  };

  return (
    <p
      className={className}
      style={{ '--tablet-aspect-ratio': '24 / 29', '--desktop-aspect-ratio': '430 / 517' }}
    >
      <Picture
        srcName='hero'
        size={size}
        alt="Confident girl wearing denim jacket."
        imgClassName={imgClassName}
        webWitals={{ fetchpriority: 'high' }}
      />
    </p>
  );
}

export default Hero;
