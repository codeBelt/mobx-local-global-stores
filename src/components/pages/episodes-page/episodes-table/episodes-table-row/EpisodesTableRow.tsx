import React from 'react';
import { Image, Table } from 'semantic-ui-react';
import { IEpisodeTableRow } from '../../../../../domains/shows/shows.types';
import { observer } from 'mobx-react-lite';

interface IProps {
  readonly rowData: IEpisodeTableRow;
}

export const EpisodesTableRow: React.FC<IProps> = observer((props) => {
  return (
    <Table.Row key={props.rowData.episode}>
      <Table.Cell>
        <Image src={props.rowData.image} rounded={true} size="small" />
      </Table.Cell>
      <Table.Cell>{props.rowData.episode}</Table.Cell>
      <Table.Cell>{props.rowData.date}</Table.Cell>
      <Table.Cell>{props.rowData.name}</Table.Cell>
    </Table.Row>
  );
});
