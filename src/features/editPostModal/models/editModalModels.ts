export interface IPostEditDetails {
  id?: string;
  title: string;
  body?: number;
}

export enum EInputReturnType {
  DONE = 'done',
  NEXT = 'next',
}
