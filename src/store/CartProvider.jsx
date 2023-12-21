import { useReducer } from 'react';

import CartContext from './cart-context.jsx';

const defaultCartState = {
  items: [],
  total: 0
};

function cartReducer(state, action) {
  if (action.type === 'ADD') {
    const updatedTotal = state.total + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

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
