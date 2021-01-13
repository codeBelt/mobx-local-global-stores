import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

interface IStyleProps {}

export const use__name__Styles = makeStyles<Theme, IStyleProps>((theme) =>
  createStyles({
    root: {
      color: 'pink',
    },
  })
);
