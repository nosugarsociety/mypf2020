import styled from 'styled-components';

export const AppWrapper = styled.div`
  position: relative;
  max-width: 1230px;
  padding: 0 10px;
  margin: 0 auto;

  ${({ theme: { media } }) => media.desktop`
    padding: 0 20px;
  `}
`;

