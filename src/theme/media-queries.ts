import {
  css,
  CSSObject,
  SimpleInterpolation,
  FlattenSimpleInterpolation,
} from 'styled-components';

type ObjectMap<T> = {[key: string]: T};

const breakpoints: ObjectMap<number> = {
  mobile: 400,
  tablet: 768,
  desktop: 1024,
  largeDesktop: 1280,
};

export const media = Object.keys(breakpoints).reduce(
  (
    acc: {
      [key: string]: (
        first: TemplateStringsArray | CSSObject,
        ...interpolations: SimpleInterpolation[]
      ) => FlattenSimpleInterpolation;
    },
    label
  ) => {
    acc[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}px) {
        ${css(...args)};
      }
    `;
    return acc;
  },
  {}
);
