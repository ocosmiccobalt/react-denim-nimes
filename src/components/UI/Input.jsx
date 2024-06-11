import { forwardRef } from 'react';
import classes from './Input.module.scss';

const Input = forwardRef(function Input(
  {
    Container = 'li',
    className = '',
    label,
    input = {}
  },
  ref
) {
  return (
    <Container className={`${classes.input} ${className}`}>
      <label
        className={classes.input__label}
        htmlFor={input.id}
      >
        {label}
      </label>
      <input
        className={classes.input__field}
        ref={ref}
        {...input}
      />
    </Container>
  );
});

export default Input;
