import PageHeader from './components/Layout/PageHeader.jsx';
import PageMain from './components/Layout/PageMain.jsx';
import Products from './components/Products/Products.jsx';
import PageFooter from './components/Layout/PageFooter.jsx';

function App() {
  return (
    <>
      <PageHeader />
      <PageMain>
        <Products sectionId='products' />
      </PageMain>
      <PageFooter />
    </>
  );
}

export default App;
