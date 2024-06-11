import Logo from './Logo.jsx';
import SiteList from './SiteList.jsx';
import ShowCartButton from '../Cart/ShowCartButton.jsx';
import Intro from './Intro/Intro.jsx';
import classes from './PageHeader.module.scss';

function PageHeader() {
  const nav = (
    <nav
      className={classes['page-header__nav']}
      aria-label='Primary'
    >
      <SiteList />
    </nav>
  );

  const userTools = (
    <div className={classes['page-header__user-tools']}>
      {/* Search */}
      {/* Login etc. */}
      <ShowCartButton />
    </div>
  );

  return (
    <header className={classes['page-header']}>
      <div className={`${classes['page-header__wrapper']} wrapper`}>
        <Logo className={classes['page-header__logo']} />
        {nav}
        {userTools}
      </div>
      <Intro />
    </header>
  );
}

export default PageHeader;
