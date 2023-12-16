import { forwardRef, useRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';

import Button from '../UI/Button.jsx';
import classes from './Cart.module.scss';

const Cart = forwardRef(function Cart({ onClose }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    };
  });

  const portalElement = document.getElementById('overlays');

  const cartItems = [{
    pId: 1,
    color: 'light-gray',
    size: 'L',
    get id() {
      return [this.pId, this.color, this.size].toString();
    },
    title: 'Jacket',
    price: 40,
    amount: 1,
  }].map((item) => (
    <li className={classes.cart__item} key={item.id}>{item.title}</li>
  ));

  function handleCloseCartClick() {
    dialog.current.close();
  }

  return createPortal(
    <dialog className={classes.cart} ref={dialog} onClose={onClose}>
      <div className={classes.cart__content}>
        <h1 className={classes.cart__title}>Your cart</h1>
        <ul className={classes.cart__list} role="list">
          {cartItems}
        </ul>
        <p className={classes.cart__summary}>
          <span>Total:{' '}</span>
          <span>$ 40.00</span>
        </p>
        <div>
          <button
            className={classes.cart__close}
            onClick={handleCloseCartClick}
            type="button"
            aria-label="Close the cart"
          >
            &times;
          </button>
          <Button>Order</Button>
        </div>
      </div>
    </dialog>,
    portalElement
  );
});

export default Cart;
