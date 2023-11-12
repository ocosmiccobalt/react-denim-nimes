import PageHeader from './components/Layout/PageHeader.jsx';
import PageMain from './components/Layout/PageMain.jsx';
import PageFooter from './components/Layout/PageFooter.jsx';

function App() {
  return (
    <>
      <PageHeader />
      <PageMain>
        <h1>Denim online store</h1>
      </PageMain>
      <PageFooter />
    </>
  );
}

export default App;
