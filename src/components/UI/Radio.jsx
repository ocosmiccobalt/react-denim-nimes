import classes from './Radio.module.scss';

function Radio({
  Container = 'li',
  className = '',
  label,
  labelModifiers = [],
  input: {
    name, id, value, defaultChecked = false
  }
}) {
  const labelModifiedClasses = labelModifiers.map((m) => classes['radio__label--' + m]);
  const labelClassName = [
    classes.radio__label,
    ...labelModifiedClasses
  ].join(' ');

  return (
    <Container className={className}>
      <input
        className='visually-hidden'
        type='radio'
        name={name}
        id={id}
        value={value}
        defaultChecked={defaultChecked}
      />
      <label
        className={labelClassName}
        htmlFor={id}
      >
        {label}
      </label>
    </Container>
  );
}

export default Radio;
