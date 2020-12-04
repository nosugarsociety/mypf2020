import {css} from 'styled-components';

const paragraph = css`
  font-size: 20px;
  line-height: 28px;
  font-weight: 300;
  
  ${({ theme: { media } }) => media.desktop`
    font-size: 24px;
    line-height: 32px;
  `}
`;


export const utils = {
  paragraph,
};
