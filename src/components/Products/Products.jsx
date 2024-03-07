import ProductCard from './ProductCard.jsx';
import useHttp from '../../hooks/use-http.js';
import classes from './Products.module.scss';

const requestConfig = {};

function Products({ sectionId }) {
  const {
    data: products,
    isLoading,
    error: httpError
  } = useHttp('http://localhost:3000/products', requestConfig, []);

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

  const itemClassName = `${classes.products__item} ${classes['products__item--catalog']}`;

  const items = products.map((p) => {
    const className = p.largeCard ?
      itemClassName + ` ${classes['products__item--large']}` :
      itemClassName;

    return (
      <li
        key={p.id}
        className={className}
      >
        <ProductCard
          id={p.id}
          title={p.title}
          price={p.price}
          colors={p.availableColors}
          large={p.largeCard}
        />
      </li>
    );
});

  return (
    <section
      className={`${classes.products} ${classes['products--catalog']}`}
      id={sectionId}
    >
      <h2 className="visually-hidden">Catalog</h2>
      <ul
        className={`${classes.products__list} ${classes['products__list--catalog']}`}
        role="list"
      >
        {items}
      </ul>
    </section>
  );
}

export default Products;
