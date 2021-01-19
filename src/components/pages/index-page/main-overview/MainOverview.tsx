import React from 'react';
import { Item } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { IndexPageStore } from '../IndexPage.store';
import { useLocalStore } from '../../../shared/local-store-provider/LocalStoreProvider';

interface IProps {}

export const MainOverview: React.FC<IProps> = observer((props) => {
  const localStore = useLocalStore<IndexPageStore>();

  const show = localStore.showResults.data;
  const image: string = show?.image?.medium ?? '';
  const network: string = show?.network?.name ?? '';
  const summary: string = show?.summary ?? '';

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
          <Item.Extra>{show?.genres.join(' | ')}</Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  );
});

MainOverview.displayName = 'MainOverview';
MainOverview.defaultProps = {};
