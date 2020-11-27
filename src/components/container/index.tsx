import React from 'react';
import {AppWrapper} from './style';

export const AppContainer = (props: any) => {
  return (
    <AppWrapper>{props.children}</AppWrapper>
  );
}
