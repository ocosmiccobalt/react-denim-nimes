import { createContext } from 'react';

const CartContext = createContext({
  items: [],
  total: 0,
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {}
});

export default CartContext;
