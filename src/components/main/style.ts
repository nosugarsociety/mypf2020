import styled from 'styled-components/macro';

export const ThumbNail = styled.img`
  width: 380px;
  object-fit: cover;
  transform: translateY(20px);
  opacity: 0;
  transition: .3s ease-in-out;
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
`;

export const ProjectSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;

  &:hover {
    ${ThumbNail} {
      opacity: 1;
    }

    h2 {
      color: #fff;

      span {
        background-size: 100% 100%;
      }
    }
  }
`;

export const ProjectBlurb = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  z-index: 3;

  h2 {
    span {
      color: inherit;
      width: 100%;
      background-position-y: -20px;
      background-image: linear-gradient(transparent calc(100% - 1px), rgb(255, 255, 255) 2px);
      background-repeat: no-repeat;
      background-size: 0% 100%;
      transition: background-size 0.3s ease-in-out 0s;
    }
  }
`;

export const MainContainer = styled.main`

`;

export const ProjectBlurbContents = styled.p`
  opacity: 0;
  transition: .3s ease-in-out;
  position: absolute;
  bottom: -25px;
`;
