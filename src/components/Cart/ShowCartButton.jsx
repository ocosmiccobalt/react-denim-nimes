import { useContext } from 'react';

import CartContext from '../../store/cart-context.jsx';
import classes from './ShowCartButton.module.scss';

function ShowCartButton({ onClick }) {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((num, item) => num += item.amount, 0);

  return (
    <button
      className={classes['show-cart-button']}
      type="button"
      onClick={onClick}
      aria-label="Open the cart"
    >
      <span className={classes['show-cart-button__amount']}>
        <span className="visually-hidden">Amount of items:</span>
        <span>{numberOfCartItems}</span>
      </span>
      <svg
        className={classes['show-cart-button__icon']}
        width="20"
        height="18"
        aria-hidden="true"
        focusable="false"
      >
        <use xlinkHref="#icon-cart"></use>
      </svg>
    </button>
  );
}

export default ShowCartButton;
