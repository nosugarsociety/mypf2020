import styled from 'styled-components/macro';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 80px;
  margin-bottom: 36px;
  position: relative;
  
  ${({ theme: { media } }) => media.tablet`    
    margin-bottom: 0;
    flex-direction: row;
  `}

  ${({ theme: { media } }) => media.desktop`    
    margin-top: 80px;
  `}
`;

export const Name = styled.h2`
  ${({theme}) => theme.utils.paragraph};
  margin-bottom: 23px;
`;

export const Contents = styled.p`  
  ${({theme}) => theme.utils.paragraph}; 
  max-width: 610px;

  ${({ theme: { media } }) => media.desktop`    
    max-width: 720px;
  `}
`;

export const MainIntro = styled.div`
  margin-bottom: 25px;
  
  ${({ theme: { media } }) => media.tablet`    
    margin-bottom: 40px;
  `}
`;

export const Contact = styled.div`
  ${({ theme: { media } }) => media.tablet`    
    margin-left: auto;
    position: absolute;      
    right: 0;
    top: 0;
  `}

  ${({ theme: { media } }) => media.largeDesktop`    
    min-width: initial;
  `}

  a {
    font-size: 18px; 
    margin-right: 15px;

    &:last-of-type {
      margin-right: 0;
    }

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
