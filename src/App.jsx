import { useState, useRef } from 'react';

import PageHeader from './components/Layout/PageHeader.jsx';
import PageMain from './components/Layout/PageMain.jsx';
import Products from './components/Products/Products.jsx';
import PageFooter from './components/Layout/PageFooter.jsx';
import Cart from './components/Cart/Cart.jsx';
import CartProvider from './store/CartProvider.jsx';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const cartDialog = useRef();

  if (cartIsShown) {
    cartDialog.current.open();
  }

  function handleShowCart() {
    setCartIsShown(true);
  }

  function handleCloseCart() {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      <Cart ref={cartDialog} onClose={handleCloseCart} />
      <PageHeader onShowCart={handleShowCart} />
      <PageMain>
        <Products sectionId='products' />
      </PageMain>
      <PageFooter />
    </CartProvider>
  );
}

export default App;
