import React from 'react';
import { Item } from 'semantic-ui-react';
import { useGetShowDetailsAndCastByShowIdQuery } from 'domains/shows/getShowDetailsAndCastByShowId.graphql';
import { defaultShowId } from 'domains/shows/shows.constants';

interface IProps {}

export const MainOverview: React.FC<IProps> = (props) => {
  const { data } = useGetShowDetailsAndCastByShowIdQuery({
    variables: {
      showId: defaultShowId,
    },
  });

  const show = data?.show;
  const image: string = show?.image ?? '';
  const network: string = show?.network?.name ?? '';
  const summary: string = show?.summary ?? '';
  const genres: string[] = show?.genres ?? [''];

  return (
    <Item.Group>
      <Item>
        <Item.Image src={image} />
        <Item.Content>
          <Item.Header as="a">{show?.name}</Item.Header>
          <Item.Meta>{network}</Item.Meta>
          <Item.Description>
            <div dangerouslySetInnerHTML={{ __html: summary }} />
          </Item.Description>
          <Item.Extra>{genres.join(' | ')}</Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  );
};

MainOverview.displayName = 'MainOverview';
MainOverview.defaultProps = {};
