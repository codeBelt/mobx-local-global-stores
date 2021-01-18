import React from 'react';
import { EpisodesPageStore } from './EpisodesPage.store';
import { observer } from 'mobx-react-lite';
import { LoadingIndicator } from '../../ui/loading-indicator/LoadingIndicator';
import { EpisodesTable } from './episodes-table/EpisodesTable';
import { useLocalStore } from '../../shared/local-store-provider/LocalStoreProvider';

export interface IProps {}

export const EpisodesPage: React.FC<IProps> = observer((props) => {
  const localStore = useLocalStore<EpisodesPageStore>();

  return (
    <LoadingIndicator isActive={localStore.episodesResults.isRequesting}>
      {localStore.generateTableData.map((model) => (
        <EpisodesTable key={model.title} tableData={model} />
      ))}
    </LoadingIndicator>
  );
});

EpisodesPage.defaultProps = {};
