import { useState, useRef } from 'react';
import Radio from '../UI/Radio.jsx';
import Input from '../UI/Input.jsx';
import Button from '../UI/Button.jsx';
import classes from './ProductForm.module.scss';

const LEGENDS = ['Color', 'Size'];

function ProductForm({
  id,
  colors = ['blue gray', 'navy', 'gray'],
  sizes = ['XS', 'S', 'M', 'L', 'XL'],
  compact = true
}) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const formClassName = [
    classes['product-form'],
    compact ? classes['product-form--compact'] : '',
  ].join(' ');

  const legendClassName = [
    classes['product-form__subtitle'],
    compact ? 'visually-hidden' : '',
  ].join(' ');

  function handleSubmit(evt) {
    evt.preventDefault();

    const enteredAmountValue = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmountValue;

    if (
      enteredAmountValue.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    const formData = new FormData(evt.target);
    const formObj = Object.fromEntries(formData.entries());
    console.log(formObj);
  }

  const colorControls = colors.map((c, i) => {
    const label = <span className='visually-hidden'>{c}</span>;
    const cString = c.trim().toLowerCase().split(' ').join('-');
    const input = {
      name: id + '-color',
      id: id + '-d-' + cString,
      value: cString,
      defaultChecked: i === 0
    };

    return (
      <Radio
        key={c}
        className={classes['product-form__item']}
        label={label}
        labelModifiers={['item-color', 'bg']}
        input={input}
      />
    );
  });

  const sizeControls = sizes.map((s) => {
    const input = {
      name: id + '-size',
      id: id + '-' + s,
      value: s,
      defaultChecked: s === 'S'
    };

    return (
      <Radio
        key={s}
        className={classes['product-form__item']}
        label={s}
        labelModifiers={['item-size', 'text']}
        input={input}
      />
    );
  });

  const amountControl = (
    <Input
      ref={amountInputRef}
      Container='div'
      label='Amount'
      input={{
        name: id + '-amount',
        id: id + '-amount',
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
      }}
    />
  );

  const fieldsets = LEGENDS.map((legend) => (
    <fieldset key={legend} className={classes['product-form__group']}>
      <legend className={legendClassName}>{legend}</legend>
      <ul
        className={classes['product-form__list']}
        role="list"
        style={compact ? { marginBottom: 0 } : undefined}
      >
        {(legend === 'Color') && colorControls}
        {(legend === 'Size') && sizeControls}
      </ul>
    </fieldset>
  ));

  return (
    <form
      className={formClassName}
      method="post"
      onSubmit={handleSubmit}
      aria-label="Choose color, size, and amount"
    >
      {fieldsets}
      {amountControl}
      <Button modifier={compact ? 'compact' : 'product-form'} type="submit">
        + Add
      </Button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
}

export default ProductForm;
