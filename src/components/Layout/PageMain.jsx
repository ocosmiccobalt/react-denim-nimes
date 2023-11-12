import classes from './PageMain.module.scss';

function PageMain({ children }) {
  return (
    <main className={classes['page-main']}>
      <div className="wrapper">
        {children}
      </div>
    </main>
  );
}

export default PageMain;
