import React from 'react';
import { Header, Table } from 'semantic-ui-react';
import { IEpisodeTable } from '../../../../domains/shows/shows.types';
import { EpisodesTableRow } from './episodes-table-row/EpisodesTableRow';
import { observer } from 'mobx-react-lite';

interface IProps {
  readonly tableData: IEpisodeTable;
}

export const EpisodesTable: React.FC<IProps> = observer((props) => {
  return (
    <div key={props.tableData.title}>
      <Header as="h2">{props.tableData.title}</Header>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={1}>Scene</Table.HeaderCell>
            <Table.HeaderCell>Episode</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {props.tableData.rows.map((model) => (
            <EpisodesTableRow key={model.episode} rowData={model} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
});
