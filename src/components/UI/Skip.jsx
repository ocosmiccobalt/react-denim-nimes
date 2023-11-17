import classes from './Skip.module.scss';

function Skip({
  href = '#products',
  ariaLabel = 'To the main content',
  className = ''
}) {
  return (
    <a className={`${classes.skip} ${className}`} href={href} aria-label={ariaLabel}>
      <svg className={classes.skip__icon} width="12" height="29" aria-hidden="true" focusable="false">
        <use xlinkHref="#arrow-to-skip"></use>
      </svg>
    </a>
  );
}

export default Skip;
