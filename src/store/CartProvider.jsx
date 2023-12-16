import CartContext from './cart-context.jsx';

function CartProvider({ children }) {
  function handleAddItemToCart() {}

  function handleRemoveItemFromCart() {}

  const cartContext = {
    items: [],
    total: 0,
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
