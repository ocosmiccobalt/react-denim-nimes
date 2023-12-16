import { useReducer } from 'react';

import CartContext from './cart-context.jsx';

const defaultCartState = {
  items: [],
  total: 0
};

function cartReducer(state, action) {
  if (action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item);
    const updatedTotal = state.total + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      total: updatedTotal
    };
  }

  return defaultCartState;
}

function CartProvider({ children }) {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  function handleAddItemToCart(item) {
    dispatchCartAction({ type: 'ADD', item: item });
  }

  function handleRemoveItemFromCart(id) {
    dispatchCartAction({ type: 'REMOVE', id: id });
  }

  const cartContext = {
    items: cartState.items,
    total: cartState.total,
    addItem: handleAddItemToCart,
    removeItem: handleRemoveItemFromCart
  };

  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
