import {DefaultTheme} from 'styled-components';
import {resets} from './reset';
import {media} from './media-queries';
import {utils} from './utils';
import {colors} from './colors';
import {SlickStyles} from './slick';

export const theme: DefaultTheme = {
  media,
  colors,
  SlickStyles,
  resets,
  utils,
};
