import React from 'react';
import { EpisodesPageStore } from './EpisodesPage.store';
import { EpisodesTable } from './episodes-table/EpisodesTable';
import { useLocalStore } from '../../shared/local-store-provider/LocalStoreProvider';
import { observer } from 'mobx-react-lite';
import { Container } from 'semantic-ui-react';
import { EpisodesToggle } from './episodes-toggle/EpisodesToggle';

interface IProps {}

export const EpisodesPage: React.FC<IProps> = observer((props) => {
  const localStore = useLocalStore<EpisodesPageStore>();

  return (
    <>
      <Container textAlign="right" fluid={true}>
        <EpisodesToggle />
      </Container>
      {localStore.sortedTableData.map((model) => (
        <EpisodesTable key={model.title} tableData={model} />
      ))}
    </>
  );
});

EpisodesPage.displayName = 'EpisodesPage';
EpisodesPage.defaultProps = {};
