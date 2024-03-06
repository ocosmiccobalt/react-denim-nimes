import { useContext, useEffect, useState } from 'react';

import CartContext from '../../store/cart-context.jsx';
import UserProgressContext from '../../store/user-progress-context.jsx';
import classes from './ShowCartButton.module.scss';

function ShowCartButton() {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const userProgressCtx = useContext(UserProgressContext);

  const numberOfCartItems = items.reduce((num, item) => num += item.amount, 0);

  const buttonClasses = `${classes['show-cart-button']} ${isHighlighted ? classes.bump : ''}`;

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setIsHighlighted(true);

    const timer = setTimeout(() => {
      setIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button
      className={buttonClasses}
      type="button"
      onClick={handleShowCart}
      aria-label="Open the cart"
    >
      <span className={classes['show-cart-button__amount']}>
        {numberOfCartItems}
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
