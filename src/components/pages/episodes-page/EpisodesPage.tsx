import React from 'react';
import { EpisodesPageStore } from './EpisodesPage.store';
import { EpisodesTable } from './episodes-table/EpisodesTable';
import { useLocalStore } from '../../shared/local-store-provider/LocalStoreProvider';

export interface IProps {}

export const EpisodesPage: React.FC<IProps> = (props) => {
  const localStore = useLocalStore<EpisodesPageStore>();

  return (
    <>
      {localStore.generateTableData.map((model) => (
        <EpisodesTable key={model.title} tableData={model} />
      ))}
    </>
  );
};

EpisodesPage.displayName = 'EpisodesPage';
EpisodesPage.defaultProps = {};
