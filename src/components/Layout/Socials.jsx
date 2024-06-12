import SOCIAL_MEDIA from '../../data/social-media.js';
import classes from './Socials.module.scss';

function Socials() {
  const socials = SOCIAL_MEDIA.map((item) => (
    <li
      key={item.id}
      className={classes.socials__item}
    >
      <a
        className={classes.socials__link}
        rel='noopener noreferrer'
        href={item.url}
        target='_blank'
        aria-label={item.title}
      >
        <svg
          className={`${classes.socials__icon} ${classes['socials__icon' + item.id]}`}
          width={item.w}
          height={item.h}
          aria-hidden='true'
          focusable='false'
        >
          <use xlinkHref={`#icon-${item.id}`}></use>
        </svg>
      </a>
    </li>
  ));

  return (
    <ul
      className={classes.socials}
      role='list'
    >
      {socials}
    </ul>
  );
}

export default Socials;
