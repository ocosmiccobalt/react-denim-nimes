import { useContext } from 'react';

import CartContext from '../../store/cart-context.jsx';
import UserProgressContext from '../../store/user-progress-context.jsx';
import Modal from '../UI/Modal.jsx';
import Input from '../UI/Input.jsx';
import Button from '../UI/Button.jsx';
import useHttp from '../../hooks/use-http.js';
import classes from './Checkout.module.scss';

const requestConfig = {
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
  } = useHttp('http://localhost:3000/orders', requestConfig);

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
      <Button type="submit">Submit Order</Button>
      <button
        className={classes.checkout__close}
        onClick={handleCloseCheckout}
        type="button"
        aria-label="Close the checkout"
      >
        &times;
      </button>
    </div>
  );

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
        <ul className={classes.checkout__list}>
          <Input label='Full Name' input={{ type: 'text', id: 'name', name: 'name' }} />
          <Input label='Email Address' input={{ type: 'email', id: 'email', name: 'email' }} />
          <Input label='Street' input={{ type: 'text', id: 'street', name: 'street' }} />
          <Input label='Postal Code' input={{ type: 'text', id: 'postal-code', name: 'postal-code' }} />
          <Input label='City' input={{ type: 'text', id: 'city', name: 'city' }} />
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
