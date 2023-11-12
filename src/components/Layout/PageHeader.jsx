import Logo from './Logo.jsx';
import classes from './PageHeader.module.scss';

function PageHeader() {
  return (
    <header className={classes['page-header']}>
      <div className={classes['page-header__wrapper']}>
        <Logo />
      </div>
    </header>
  );
}

export default PageHeader;
