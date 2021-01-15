import React from 'react';
import { useTranslation } from 'react-i18next';
import routers  from '@config/routers';
import * as Layout from '@layouts';
import Logo from '@UI/Logo';
import LoginRegister from '@UI/LoginRegister';
import HistoryButton from '@UI/Button/History';
import InputSearch from '@src/features/UI/Search/Input';
import SearchSuggestion from '@src/features/UI/Search/Suggestion';

function App() {
  const { t } = useTranslation();

  return (
    <>
    <Layout.TopBar>
      <Logo size="small" />
      <div className="d-flex align-items-center justify-content-between">
        <div className="me-5">
          <InputSearch placeholder={t('common:enter song, video, singer that you need to search')} />
          <SearchSuggestion />
        </div>
        <div>
          <HistoryButton />
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
