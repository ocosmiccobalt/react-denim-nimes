import Modal from '../UI/Modal.jsx';
import Button from '../UI/Button.jsx';
import classes from './Cart.module.scss';

function Cart({ onClose }) {
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

  return (
    <Modal onClose={onClose}>
      <div className={classes.cart}>
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
            onClick={onClose}
            type="button"
            aria-label="Close the cart"
          >
            &times;
          </button>
          <Button>Order</Button>
        </div>
      </div>
    </Modal>
  );
}

export default Cart;
