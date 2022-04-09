import React from 'react';
import { Image, Table } from 'semantic-ui-react';
import { IEpisodeTableRow } from '../../../../../domains/shows/shows.types';

interface IProps {
  readonly rowData: IEpisodeTableRow;
  testId?: string;
}

export const EpisodesTableRow: React.FC<IProps> = (props) => {
  const { testId = EpisodesTableRow.displayName } = props;

  return (
    <Table.Row key={props.rowData.episode}>
      <Table.Cell>
        <Image src={props.rowData.image} rounded={true} size="small" alt={`${props.rowData.episode} screenshot`}/>
      </Table.Cell>
      <Table.Cell>{props.rowData.episode}</Table.Cell>
      <Table.Cell>{props.rowData.date}</Table.Cell>
      <Table.Cell data-testid={`${testId}_name`}>{props.rowData.name}</Table.Cell>
    </Table.Row>
  );
};

EpisodesTableRow.displayName = 'EpisodesTableRow';
