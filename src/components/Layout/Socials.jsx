import socialsData from '../../data/socials-data.js';
import classes from './Socials.module.scss';

function Socials() {
  const socials = socialsData.map((item) => (
    <li key={item.id} className={classes.socials__item}>
      <a
        className={classes.socials__link}
        rel="noopener noreferrer"
        href={item.url}
        target="_blank"
      >
        <span className="visually-hidden">{item.title}</span>
        <svg
          className={`${classes.socials__icon} ${classes['socials__icon' + item.id]}`}
          width={item.w}
          height={item.h}
          aria-hidden="true"
          focusable="false"
        >
          <use xlinkHref={`#icon-${item.id}`}></use>
        </svg>
      </a>
    </li>
  ));

  return (
    <ul className={classes.socials} role="list">
      {socials}
    </ul>
  );
}

export default Socials;
