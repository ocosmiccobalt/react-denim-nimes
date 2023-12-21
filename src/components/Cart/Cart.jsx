import {
  forwardRef,
  useRef,
  useImperativeHandle,
  useContext
} from 'react';
import { createPortal } from 'react-dom';

import Button from '../UI/Button.jsx';
import CartContext from '../../store/cart-context.jsx';
import CartItem from './CartItem.jsx';
import classes from './Cart.module.scss';

const Cart = forwardRef(function Cart({ onClose }, ref) {
  const cartCtx = useContext(CartContext);
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    };
  });

  const portalElement = document.getElementById('overlays');

  const total = `$ ${cartCtx.total.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  function handleCloseCartClick() {
    dialog.current.close();
  }

  function handleCartItemRemove() {}

  function handleCartItemAdd(item) {
    cartCtx.addItem({ ...item, amount: 1 });
  }

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      title={item.title}
      color={item.color}
      size={item.size}
      price={item.price}
      amount={item.amount}
      onRemove={handleCartItemRemove.bind(null, item.id)}
      onAdd={handleCartItemAdd.bind(null, item)}
    />
  ));

  return createPortal(
    <dialog className={classes.cart} ref={dialog} onClose={onClose}>
      <div className={classes.cart__content}>
        <h2 className={classes.cart__title}>Your cart</h2>
        <ul className={classes.cart__list} role="list">
          {cartItems}
        </ul>
        <p className={classes.cart__summary}>
          <span>Total:{' '}</span>
          <span>{total}</span>
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
          {hasItems && <Button>Order</Button>}
        </div>
      </div>
    </dialog>,
    portalElement
  );
});

export default Cart;
