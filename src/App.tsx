import React from 'react';
import * as Layout from './features/layouts';
import * as UI from './features/UI';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useTranslation } from 'react-i18next';
import routers from './config/routers';

function App() {
  const { t } = useTranslation();

  return (
    <>
    <Layout.TopBar>
      <UI.Logo size="small" />
      <div className="d-flex align-items-center justify-content-between">
        <div className="mr-5">
          <UI.InputSearch placeholder={t('common:enter song, video, singer that you need to search')} />
        </div>
        <div>
          <UI.Button.History />
        </div>
      </div>
      <UI.LoginRegister />
    </Layout.TopBar>
    <Layout.Header />
    {routers}
    </>
  );
}

export default App;
