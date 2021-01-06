import React from 'react';
import * as Layout from '@layouts';
import { Button, Logo, InputSearch, LoginRegister } from '@UI';
import { useTranslation } from 'react-i18next';
import { routers }  from '@config';

function App() {
  const { t } = useTranslation();

  return (
    <>
    <Layout.TopBar>
      <Logo size="small" />
      <div className="d-flex align-items-center justify-content-between">
        <div className="me-5">
          <InputSearch placeholder={t('common:enter song, video, singer that you need to search')} />
        </div>
        <div>
          <Button.History />
        </div>
      </div>
      <LoginRegister />
    </Layout.TopBar>
    <Layout.Header />
    {routers}
    </>
  );
}

export default App;
