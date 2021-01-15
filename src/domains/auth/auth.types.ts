export interface IUserResponse {
  results: IUser[];
  info: IUserResponseInfo;
}

export interface IUser {
  gender: string;
  name: IUserName;
}

export interface IUserName {
  title: string;
  first: string;
  last: string;
}

export interface IUserResponseInfo {
  seed: string;
  results: number;
  page: number;
  version: string;
}
