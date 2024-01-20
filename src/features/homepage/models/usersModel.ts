export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street?: string;
    suite?: string;
    city?: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company: {
    name: string;
    catchPhrase?: string;
    bs?: string;
  };
}

export enum ECardType {
  POST = 'post',
  USER = 'user',
}
