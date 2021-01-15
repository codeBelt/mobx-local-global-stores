import React from 'react';
import { Menu, Segment, Grid, Button, Label, Icon } from 'semantic-ui-react';
import { MenuNavLink } from './MenuNavLink';
import { Routes, RoutesDynamicKey } from '../../../constants/Routes';
import { defaultShowId } from '../../../domains/shows/shows.constants';
import { useRouter } from 'next/router';

interface IProps {}

export const MainNav: React.FC<IProps> = (props) => {
  const router = useRouter();

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
      </Grid>
    </Segment>
  );
};
