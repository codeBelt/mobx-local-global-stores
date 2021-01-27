import { makeVar } from '@apollo/client';
import { SortDirection } from 'constants/common.types';

export const episodesSortByVar = makeVar<SortDirection>(SortDirection.ASCENDING);
