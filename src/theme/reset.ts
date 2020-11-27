import {css} from 'styled-components';

const button = css`
  appearance: none;
  border: none;
  background: none;
  font-family: inherit;
  outline: 0;
  padding: 0;
  margin: 0;

  cursor: pointer;
  &[disabled] {
    opacity: 0.5;
  }
`;

export const resets = {
  button,
};
