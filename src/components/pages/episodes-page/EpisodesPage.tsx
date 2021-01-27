import React, { useMemo } from 'react';
import { EpisodesTable } from './episodes-table/EpisodesTable';
import { Container } from 'semantic-ui-react';
import { EpisodesToggle } from './episodes-toggle/EpisodesToggle';
import { Episode, useGetEpisodesByShowIdQuery } from './EpisodesPage.graphql';
import { generateAndSortTableData } from './EpisodesPage.utils';
import { episodesSortByVar } from './EpisodesPage.state';
import { useReactiveVar } from '@apollo/client';

export interface IProps {
  episodeId: string;
}

export const EpisodesPage: React.FC<IProps> = (props) => {
  const { data, error, loading } = useGetEpisodesByShowIdQuery({ variables: { showId: props.episodeId } });

  const sortDirection = useReactiveVar(episodesSortByVar);

  const tableData = useMemo(
    () => generateAndSortTableData(data?.episodes as Episode[], sortDirection, error?.message),
    [loading, sortDirection]
  );

  return (
    <>
      <Container textAlign="right" fluid={true}>
        <EpisodesToggle />
      </Container>
      {tableData.map((model) => (
        <EpisodesTable key={model.title} tableData={model} />
      ))}
    </>
  );
};

EpisodesPage.displayName = 'EpisodesPage';
EpisodesPage.defaultProps = {};
