import React from 'react';
import { Menu, Segment, Grid, Button, Label, Icon } from 'semantic-ui-react';
import { MenuNavLink } from './MenuNavLink';
import { Routes, RoutesDynamicKey } from '../../../constants/Routes';
import { defaultShowId } from '../../../domains/shows/shows.constants';
import { useRouter } from 'next/router';
import { useGlobalStore } from '../../../stores/GlobalStore.utils';
import { observer } from 'mobx-react-lite';

interface IProps {}

export const MainNav: React.FC<IProps> = observer((props) => {
  const router = useRouter();
  const { authStore } = useGlobalStore();

  return (
    <Segment inverted={true}>
      <Grid columns="equal">
        <Grid.Column>
          <Menu inverted={true} pointing={true} secondary={true}>
            <Menu.Item as={MenuNavLink} href={Routes.Index} name="Home" active={router.route === Routes.Index} />
            <Menu.Item
              as={MenuNavLink}
              href={Routes.Episodes_Id.replace(RoutesDynamicKey.EpisodeId, defaultShowId)}
              name="Episodes"
              active={router.route === Routes.Episodes_Id}
            />
            <Menu.Item as={MenuNavLink} href={Routes.About} name="About" active={router.route === Routes.About} />
          </Menu>
        </Grid.Column>
        {authStore.isAuthenticated && (
          <Grid.Column textAlign="right">
            <Button as="div" labelPosition="left">
              <Label basic={true} pointing="right">
                {authStore.authResults.data}
              </Label>
              <Button icon={true} onClick={() => authStore.signOut()}>
                Sign Out <Icon name="share square outline" />
              </Button>
            </Button>
          </Grid.Column>
        )}
      </Grid>
    </Segment>
  );
});
