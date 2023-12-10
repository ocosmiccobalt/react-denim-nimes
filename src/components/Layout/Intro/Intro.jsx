import Button from '../../UI/Button.jsx';
import Skip from './Skip.jsx';
import Hero from './Hero.jsx';
import AuxSocials from './AuxSocials.jsx';
import classes from './Intro.module.scss';

function Intro() {
  return (
    <div className={classes.intro}>
      <h1 className="visually-hidden"><span lang="fr">Nîmes</span>, Denim Online Store</h1>

      <div className={`${classes.intro__wrapper} wrapper`}>
        <div className={classes.intro__inner}>
          <p className={classes.intro__tagline}>The quality you deserve</p>
          <p className={classes.intro__name}>DENIM</p>
          <Button className={classes.intro__button} modifier='intro'>
            Check new collection
          </Button>
        </div>
        <Skip className={classes.intro__skip} />
        <Hero className={classes.intro__hero} imgClassName={classes.intro__image} />
        <AuxSocials className={classes.intro__socials} />
      </div>
    </div>
  );
}

export default Intro;
