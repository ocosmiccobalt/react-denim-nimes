import { useContext } from 'react';

import CartContext from '../../store/cart-context.jsx';
import UserProgressContext from '../../store/user-progress-context.jsx';
import CHECKOUT_FORM_CONTROLS from '../../data/checkout-form-controls.js';
import Modal from '../UI/Modal.jsx';
import Input from '../UI/Input.jsx';
import Button from '../UI/Button.jsx';
import useHttp from '../../hooks/use-http.js';
import classes from './Checkout.module.scss';

const HOST = 'http://localhost:3000';

const REQUEST_CONFIG = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const {
    data,
    isLoading: isSending,
    error,
    clearData,
    clearError,
    sendRequest
  } = useHttp(HOST + '/orders', REQUEST_CONFIG);

  const total = `$ ${cartCtx.total.toFixed(2)}`;

  function handleCloseCheckout() {
    userProgressCtx.hideCheckout();
  }

  function handleFinish() {
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    clearError();

    const formData = new FormData(evt.target);
    const customerData = Object.fromEntries(formData.entries());

    sendRequest(JSON.stringify(
      {
        order: {
          items: cartCtx.items,
          total: cartCtx.total,
          customer: customerData
        }
      }
    ));
  }

  const actions = (
    <div>
      <Button type='submit'>Submit Order</Button>
      <button
        className={classes.checkout__close}
        onClick={handleCloseCheckout}
        type='button'
        aria-label='Close the checkout'
      >
        &times;
      </button>
    </div>
  );

  const controls = CHECKOUT_FORM_CONTROLS.map((c) => (
    <Input
      key={c.label}
      label={c.label}
      input={c.input}
    />
  ));

  let modal = (
    <Modal
      open={userProgressCtx.progress === 'checkout'}
      onClose={handleCloseCheckout}
    >
      <form onSubmit={handleSubmit}>
        <h2 className={classes.checkout__title}>Checkout</h2>
        <p className={classes.checkout__total}>
          <span>Total:{' '}</span>
          <span>{total}</span>
        </p>
        <ul
          className={classes.checkout__list}
          role='list'
        >
          {controls}
        </ul>

        {error && <p style={{ textAlign: 'center' }}>Failed to submit order. {error}</p>}

        {!isSending && actions}
        {isSending && <p style={{ textAlign: 'center' }}>Sending order data...</p>}
      </form>
    </Modal>
  );

  if (data && !error) {
    modal = (
      <Modal
        open={userProgressCtx.progress === 'checkout'}
        onClose={handleFinish}
      >
        <h2 className={classes.checkout__title}>Success!</h2>
        <p className={classes.checkout__description}>Your order was submitted successfully.</p>
        <p className={classes.checkout__description}>
          We will get back to you with more details via email within the next
          few minutes.
        </p>
        <Button onClick={handleFinish}>Okay</Button>
      </Modal>
    );
  }

  return modal;
}

export default Checkout;
