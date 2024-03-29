import * as React from 'react';
import {StackActions} from '@react-navigation/native';

class NavigationReadiness {
  isReady = false;
  registerListener = (listener: () => void) => {
    this.listener = listener;
  };
  listener?: () => void;
  setIsReady = (isReady: boolean) => {
    if (this.listener) {
      this.listener();
    }
    this.isReady = isReady;
  };
}
export const navigationReadiness = new NavigationReadiness();
export const navigationRef =
  React.createRef() as unknown as React.RefObject<any>;

export const push = (
  name: string,
  params: Record<string, unknown> | undefined = undefined,
): void => {
  if (navigationReadiness.isReady && navigationRef.current) {
    navigationRef.current?.dispatch(StackActions.push(name, params));
  }
};
export const pop = (): void => {
  if (navigationReadiness.isReady && navigationRef.current) {
    navigationRef.current?.dispatch(StackActions.pop());
  }
};

export const navigate = (
  name: string,
  params: Record<string, unknown> | undefined = undefined,
): void => {
  if (navigationReadiness.isReady && navigationRef.current) {
    navigationRef.current?.navigate(name, params);
  }
};

export const resetTo = (screen: string): void => {
  if (navigationReadiness.isReady && navigationRef.current) {
    navigationRef.current?.reset({
      index: 0,
      routes: [{name: screen.toString()}],
    });
  }
};
