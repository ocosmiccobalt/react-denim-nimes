import Logo from './Logo.jsx';
import Socials from './Socials.jsx';
import classes from './PageFooter.module.scss';

function PageFooter() {
  return (
    <footer className={classes['page-footer']}>
      <div className={`${classes['page-footer__wrapper']} wrapper`}>
        <Logo />
        <Socials />
      </div>
    </footer>
  );
}

export default PageFooter;
