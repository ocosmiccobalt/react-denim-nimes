import classes from './Logo.module.scss';

function Logo({ Element = 'p', className = '' }) {
  return (
    <Element className={`${classes.logo} ${className}`}>
      <span lang="fr">Nîmes</span>
      <span className="visually-hidden">The denim online store</span>
    </Element>
  );
}

export default Logo;
