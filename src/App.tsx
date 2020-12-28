import React from 'react';
import * as Layout from './features/layouts';
import * as UI from './features/UI';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {

  return (
    <>
    <Layout.TopBar>
      <UI.Logo size="small" />
      <div className="d-flex align-items-center justify-content-between">
        <div className="mr-5">
          <UI.InputSearch />
        </div>
        <div>
          <UI.Button.History />
        </div>
      </div>
      <UI.LoginRegister />
    </Layout.TopBar>
    <Layout.Header />
    </>
  );
}

export default App;
