import { useContext } from 'react';

import CartContext from '../../store/cart-context.jsx';
import UserProgressContext from '../../store/user-progress-context.jsx';
import Modal from '../UI/Modal.jsx';
import CartItem from './CartItem.jsx';
import Button from '../UI/Button.jsx';
import classes from './Cart.module.scss';

function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const total = `$ ${cartCtx.total.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function handleGoToCheckout() {
    userProgressCtx.showCheckout();
  }

  function handleCartItemRemove(id) {
    cartCtx.removeItem(id);
  }

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

  return (
    <Modal
      open={userProgressCtx.progress === 'cart'}
      onClose={userProgressCtx.progress === 'cart' ? handleCloseCart : null}
    >
      <h2 className={classes.cart__title}>Your cart</h2>
      <ul
        className={classes.cart__list}
        role='list'
      >
        {cartItems}
      </ul>
      <p className={classes.cart__summary}>
        <span>Total:{' '}</span>
        <span>{total}</span>
      </p>
      <div>
        <button
          className={classes.cart__close}
          onClick={handleCloseCart}
          type='button'
          aria-label='Close the cart'
        >
          &times;
        </button>
        {hasItems && <Button onClick={handleGoToCheckout}>Order</Button>}
      </div>
    </Modal>
  );
}

export default Cart;
