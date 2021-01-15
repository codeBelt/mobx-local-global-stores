import React, { useEffect, useState } from 'react';
import { EpisodesPageStore } from './EpisodesPage.store';
import { observer } from 'mobx-react-lite';
import { LoadingIndicator } from '../../ui/loading-indicator/LoadingIndicator';
import { EpisodesTable } from './episodes-table/EpisodesTable';

export interface IProps {}

export const EpisodesPage: React.FC<IProps> = observer((props) => {
  const [localStore] = useState(EpisodesPageStore());

  useEffect(() => {
    localStore.init();
  }, [localStore]);

  return (
    <LoadingIndicator isActive={localStore.episodesResults.isRequesting}>
      {localStore.generateTableData.map((model) => (
        <EpisodesTable key={model.title} tableData={model} />
      ))}
    </LoadingIndicator>
  );
});

EpisodesPage.defaultProps = {};
