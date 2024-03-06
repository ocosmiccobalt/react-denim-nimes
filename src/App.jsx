import PageHeader from './components/Layout/PageHeader.jsx';
import PageMain from './components/Layout/PageMain.jsx';
import Products from './components/Products/Products.jsx';
import PageFooter from './components/Layout/PageFooter.jsx';
import Cart from './components/Cart/Cart.jsx';
import CartProvider from './store/CartProvider.jsx';
import UserProgressProvider from './store/UserProgressProvider.jsx';

function App() {
  return (
    <UserProgressProvider>
      <CartProvider>
        <Cart />
        <PageHeader />
        <PageMain>
          <Products sectionId='products' />
        </PageMain>
        <PageFooter />
      </CartProvider>
    </UserProgressProvider>
  );
}

export default App;
