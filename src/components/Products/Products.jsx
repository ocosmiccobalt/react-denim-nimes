import ProductCard from './ProductCard.jsx';
import useHttp from '../../hooks/use-http.js';
import classes from './Products.module.scss';

const SERVER = import.meta.env.PROD ?
  import.meta.env.VITE_BACKEND_PROD_SERVER :
  import.meta.env.VITE_BACKEND_DEV_SERVER;

const REQUEST_CONFIG = {};
const INITIAL_DATA = [];

function Products({ sectionId }) {
  const {
    data: products,
    isLoading,
    error: httpError
  } = useHttp(SERVER + '/products', REQUEST_CONFIG, INITIAL_DATA);

  if (isLoading) {
    return (
      <h2 style={{ textAlign: 'center' }}>Fetching products...</h2>
    );
  }

  if (httpError) {
    return (
      <h2 style={{ textAlign: 'center' }}>{httpError}</h2>
    );
  }

  const sectionClassName = `${classes.products} ${classes['products--catalog']}`;
  const listClassName = `${classes.products__list} ${classes['products__list--catalog']}`;
  const itemClassName = `${classes.products__item} ${classes['products__item--catalog']}`;

  const items = products.map((p) => {
    const className = p.largeCard ?
      itemClassName + ` ${classes['products__item--large']}` :
      itemClassName;

    /*
      For some reason MySQL query returns price
      (inserted as NUMERIC)
      as string
    */
    const priceAsNumber = parseFloat(p.price);

    return (
      <li
        key={p.id}
        className={className}
      >
        <ProductCard
          id={p.id}
          title={p.title}
          price={priceAsNumber}
          colors={p.availableColors}
          large={p.largeCard}
        />
      </li>
    );
});

  return (
    <section
      className={sectionClassName}
      id={sectionId}
    >
      <h2 className='visually-hidden'>Catalog</h2>
      <ul
        className={listClassName}
        role='list'
      >
        {items}
      </ul>
    </section>
  );
}

export default Products;
