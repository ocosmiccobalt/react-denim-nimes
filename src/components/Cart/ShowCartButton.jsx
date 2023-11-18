import classes from './ShowCartButton.module.scss';

function ShowCartButton({ amount, onClick }) {
  return (
    <button className={classes['show-cart-button']} type="button" onClick={onClick}>
      <span className="visually-hidden">Open the cart</span>
      <span className={classes['show-cart-button__amount']}>
        <span className="visually-hidden">Amount of items:</span>
        <span>{amount}</span>
      </span>
      <svg className={classes['show-cart-button__icon']} width="20" height="18" aria-hidden="true" focusable="false">
        <use xlinkHref="#icon-cart"></use>
      </svg>
    </button>
  );
}

export default ShowCartButton;
