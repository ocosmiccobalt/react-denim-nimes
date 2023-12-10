import ProductCard from './ProductCard.jsx';
import classes from './Products.module.scss';

const COLORS = [
  'blue gray',
  'navy',
  'gray',
  'coal',
  'light gray',
  'blue',
];

const DUMMY_PRODUCTS = [
  { id: 1, title: 'Jacket', price: 40, availableColors: [COLORS[4], COLORS[1], COLORS[5]], largeCard: false, },
  { id: 2, title: 'Jacket', price: 70, availableColors: [COLORS[5], COLORS[4], COLORS[2]], largeCard: false, },
  { id: 3, title: 'Jacket', price: 60, availableColors: [COLORS[2], COLORS[3], COLORS[0]], largeCard: false, },
  { id: 4, title: 'Jacket', price: 50, availableColors: [COLORS[1], COLORS[3], COLORS[5]], largeCard: false, },
  { id: 5, title: 'Jacket', price: 160, availableColors: [COLORS[1], COLORS[0], COLORS[5]], largeCard: true, },
  { id: 6, title: 'Jacket', price: 40, availableColors: [COLORS[4], COLORS[5], COLORS[3]], largeCard: false, },
  { id: 7, title: 'Jacket', price: 110, availableColors: [COLORS[2], COLORS[0], COLORS[1]], largeCard: false, },
  { id: 8, title: 'Jacket', price: 35, availableColors: [COLORS[5], COLORS[3], COLORS[0]], largeCard: false, },
  { id: 9, title: 'Jacket', price: 85, availableColors: [COLORS[1], COLORS[5], COLORS[2]], largeCard: false, },
];

function Products({ sectionId }) {
  const itemClassName = `${classes.products__item} ${classes['products__item--catalog']}`;

  const items = DUMMY_PRODUCTS.map((p) => {
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
