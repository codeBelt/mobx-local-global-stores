import React from 'react';
import { Menu, Segment, Grid, Button, Label, Icon } from 'semantic-ui-react';
import NextLink from 'next/link';
import { Routes, RoutesDynamicKey } from 'constants/Routes';
import { defaultShowId } from 'constants/shows.constants';
import { useRouter } from 'next/router';
import { useGetAuthQuery } from 'domains/auth/getAuth.graphql';
import { signOut } from 'domains/auth/auth.utils';

interface IProps {}

export const MainNav: React.FC<IProps> = (props) => {
  const router = useRouter();

  const { data } = useGetAuthQuery();

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
        {data?.auth?.isAuthenticated && (
          <Grid.Column textAlign="right">
            <Button as="div" labelPosition="left">
              <Label basic={true} pointing="right">
                {data?.auth?.userFullName}
              </Label>
              <Button icon={true} onClick={() => signOut()}>
                Sign Out <Icon name="share square outline" />
              </Button>
            </Button>
          </Grid.Column>
        )}
      </Grid>
    </Segment>
  );
};

MainNav.displayName = 'MainNav';
MainNav.defaultProps = {};
