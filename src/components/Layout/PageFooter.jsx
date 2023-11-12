import Logo from './Logo.jsx';
import classes from './PageFooter.module.scss';

function PageFooter() {
  return (
    <footer className={classes['page-footer']}>
      <div className={classes['page-footer__wrapper']}>
        <Logo />
      </div>
    </footer>
  );
}

export default PageFooter;
