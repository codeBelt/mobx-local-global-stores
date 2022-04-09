import { render, screen } from '@testing-library/react'
import { EpisodesTableRow } from './EpisodesTableRow';
import {IEpisodeTableRow} from '../../../../../domains/shows/shows.types';

describe('EpisodesTableRow', () => {
  test('renders a heading', () => {
    const mock: IEpisodeTableRow =  {
      episode: 2,
      name: 'Robert',
      date: 'string',
      image: 'string',
    }
    render(<EpisodesTableRow rowData={mock} />)

    const name = screen.getByTestId('EpisodesTableRow_name')

    expect(name.innerHTML).toBe('Robert')
  })
})
