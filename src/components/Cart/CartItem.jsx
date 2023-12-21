import classes from './Cart.module.scss';

function CartItem({
  title,
  color,
  size,
  price,
  amount,
  onAdd,
  onRemove
}) {
  const formattedPrice = `$ ${price.toFixed(2)}`;
  const formattedColor = color.split('-').join(' ');

  return (
    <li className={classes.cart__item}>
      <h3 className={classes.cart__name}>
        {title}
        {', '}
        <span className={`${classes.cart__color} ${classes['cart__color--' + color]}`}>
          {formattedColor}
        </span>
        {', '}
        <span>
          size: {size}
        </span>
      </h3>
      <p className={classes.cart__price}>{formattedPrice}</p>
      <p className={classes.cart__amount}>Amount: {amount}</p>
      <div className={classes.cart__buttons}>
        <button
          className={classes.cart__button}
          type="button"
          aria-label="Minus one"
          onClick={onRemove}
        >
          -
        </button>
        <button
          className={classes.cart__button}
          type="button"
          aria-label="Plus one"
          onClick={onAdd}
        >
          +
        </button>
      </div>
    </li>
  );
}

export default CartItem;
