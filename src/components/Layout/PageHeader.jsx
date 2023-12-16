import Logo from './Logo.jsx';
import SiteList from './SiteList.jsx';
import ShowCartButton from '../Cart/ShowCartButton.jsx';
import Intro from './Intro/Intro.jsx';
import classes from './PageHeader.module.scss';

function PageHeader({ onShowCart }) {
  return (
    <header className={classes['page-header']}>
      <div className={`${classes['page-header__wrapper']} wrapper`}>
        <Logo className={classes['page-header__logo']} />
        <nav className={classes['page-header__nav']} aria-label="Primary">
          <SiteList />
        </nav>
        <div className={classes['page-header__user-tools']}>
          <ShowCartButton onClick={onShowCart} />
        </div>
      </div>
      <Intro />
    </header>
  );
}

export default PageHeader;
