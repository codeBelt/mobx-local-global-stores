import { Auth } from 'apollo/type-defs.graphqls';
import { AuthModel } from './auth.models';

export const authReducer = (user: AuthModel): Auth => {
  return {
    isAuthenticated: Boolean(user),
    userFullName: `${user?.results[0]?.name?.first} ${user?.results[0]?.name?.last}`,
  };
};
