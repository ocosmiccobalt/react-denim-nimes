import socialsData from '../../data/socialsData.js';
import classes from './AuxSocials.module.scss';

function AuxSocials({ className = '' }) {
  const socials = socialsData.slice(0, 2).map((item) => (
    <li key={item.id} className={classes['aux-socials__item']}>
      <a
        className={classes['aux-socials__link']}
        rel="noopener noreferrer"
        href={item.url}
        target="_blank"
      >
        {item.title}
      </a>
    </li>
  ));

  return (
    <ul className={`${classes['aux-socials']} ${className}`} role="list">
      {socials}
    </ul>
  );
}

export default AuxSocials;
