export const isProd = false;
export interface Config {
  general: {
    apiUrl: string;
  };
}

export function getConfig(): Config {
  return {
    general: {
      apiUrl: 'https://jsonplaceholder.typicode.com/',
    },
  };
}
