export interface AuthModel {
  results: UserModel[];
  info: UserResponseInfoModel;
}

export interface UserModel {
  gender: string;
  name: UserNameModel;
}

export interface UserNameModel {
  title: string;
  first: string;
  last: string;
}

export interface UserResponseInfoModel {
  seed: string;
  results: number;
  page: number;
  version: string;
}
