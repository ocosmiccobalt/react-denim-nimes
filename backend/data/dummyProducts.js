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

export default DUMMY_PRODUCTS;
