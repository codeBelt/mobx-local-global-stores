import React from 'react';
import { Menu, Segment, Grid, Button, Label, Icon } from 'semantic-ui-react';
import NextLink from 'next/link';
import { Routes, RoutesDynamicKey } from '../../../constants/Routes';
import { defaultShowId } from '../../../domains/shows/shows.constants';
import { useRouter } from 'next/router';
import { useGlobalStore } from '../global-store-provider/GlobalStoreProvider';
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
            <NextLink href={Routes.Index} passHref={true}>
              <Menu.Item as={'a'} name="Home" active={router.route === Routes.Index} />
            </NextLink>
            <NextLink href={Routes.Episodes_Id.replace(RoutesDynamicKey.EpisodeId, defaultShowId)} passHref={true}>
              <Menu.Item as={'a'} name="Episodes" active={router.route === Routes.Episodes_Id} />
            </NextLink>
            <NextLink href={Routes.About} passHref={true}>
              <Menu.Item as={'a'} name="About" active={router.route === Routes.About} />
            </NextLink>
          </Menu>
        </Grid.Column>
        {authStore.isAuthenticated && (
          <Grid.Column textAlign="right">
            <Button as="div" labelPosition="left">
              <Label basic={true} pointing="right">
                {authStore.userFullName}
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
