import styled from 'styled-components/macro';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 117px;

`;

export const Name = styled.h2`
  ${({theme}) => theme.utils.paragraph};
  margin-bottom: 23px;
`;

export const Contents = styled.p`
  ${({theme}) => theme.utils.paragraph}; 
  max-width: 680px; 
`;

export const MainIntro = styled.div`
  margin-bottom: 45px;
`;

export const Contact = styled.div`
  margin-left: auto;

  a {
    font-size: 18px; 
    margin-right: 15px;

    &:before {
      content: '';
      display: inline-block;
      width: 15px;
      height: 15px;
      margin-right: 10px;
      border: 1px solid #A5A5A5;
      border-radius: 100%;
      vertical-align: middle;
    }

    &:hover {
      text-decoration: underline;

      &:before {
        background-color: white;
        border-color: white;
      }
    }
  }
`;
