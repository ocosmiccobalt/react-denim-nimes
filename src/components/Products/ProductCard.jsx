import { useContext } from 'react';

import Picture from '../UI/Picture.jsx';
import ProductForm from './ProductForm.jsx';
import CartContext from '../../store/cart-context.jsx';
import classes from './ProductCard.module.scss';

function ProductCard({
  id,
  title,
  price,
  webVitals = { loading: 'lazy' },
  colors = ['blue gray', 'navy', 'gray'],
  large = false
}) {
  const PICTURE_SIZE = {
    mWidth: 130,
    mHeight: 160,
    tWidth: 206,
    tHeight: 279,
    dWidth: 243,
    dHeight: 270
  };

  const LARGE_PICTURE_SIZE = {
    mWidth: 290,
    mHeight: 442,
    tWidth: 442,
    tHeight: 672,
    dWidth: 552,
    dHeight: 670
  };

  const PICTURE_STYLE = { '--tablet-aspect-ratio': '206 / 279', '--desktop-aspect-ratio': '9 / 10' };
  const LARGE_PICTURE_STYLE = { '--tablet-aspect-ratio': '221 / 336', '--desktop-aspect-ratio': '276 / 335' };

  const cartCtx = useContext(CartContext);

  function handleAddItemToCart(data) {
    cartCtx.addItem({
      pId: id,
      color: data.color,
      size: data.size,
      get id() {
        return [this.pId, this.color, this.size].toString();
      },
      amount: data.amount,
      title: title,
      price: price
    });
  }

  const formattedPrice = `$ ${price.toFixed(2)}`;

  return (
    <article className={classes.card}>
      <h3 className={classes.card__title}>
        <a className={classes.card__link} href="#">
          {title}
        </a>
      </h3>
      <p className={classes.card__price}>
        {formattedPrice}
      </p>
      <p
        className={classes.card__illustration}
        style={large ? LARGE_PICTURE_STYLE : PICTURE_STYLE}
      >
        <Picture
          srcName={`item-${id}${large ? '-large' : ''}`}
          size={large ? LARGE_PICTURE_SIZE : PICTURE_SIZE}
          alt={`${title}, ${formattedPrice}`}
          imgClassName={classes.card__image}
          webWitals={webVitals}
        />
      </p>
      <ProductForm id={id} colors={colors} onAddItemToCart={handleAddItemToCart} />
    </article>
  );
}

export default ProductCard;
