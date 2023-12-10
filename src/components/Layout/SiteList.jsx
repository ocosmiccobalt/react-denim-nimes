import classes from './SiteList.module.scss';

function SiteList() {
  return (
    <ul className={classes['site-list']} role="list">
      <li className={classes['site-list__item']}>
        <a className={classes['site-list__link']}>Woman</a>
      </li>
      <li className={classes['site-list__item']}>
        <a className={classes['site-list__link']}>Man</a>
      </li>
      <li className={classes['site-list__item']}>
        <a className={classes['site-list__link']}>New</a>
      </li>
    </ul>
  );
}

export default SiteList;
