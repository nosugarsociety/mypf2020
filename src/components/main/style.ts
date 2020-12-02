import styled from 'styled-components/macro';

type CloseButtonProp = {
  isActive: boolean;
}


export const ThumbNail = styled.img`
  width: 380px;
  object-fit: cover;
  transform: translateY(45px);
  opacity: 0;
  transition: .3s ease-in-out;
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
`;

export const SectionContainer = styled.div`

`;

export const ProjectSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  transition: .3s ease-in-out;
  cursor: pointer;

  &.active {
    opacity: 1;
    position: sticky;
    z-index: 1;
    top: 280px;
  }

  &:not(.active){
    .activated & {
      opacity: 0;
    }
  }



  &:hover {
    ${ThumbNail} {
      opacity: 1;
      transform: translateY(30px);
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
    max-height: 105px;

    span {
      color: inherit;
      width: 100%;
      background-position-y: -20px;
      background-image: linear-gradient(transparent calc(100% - 1px), rgb(255, 255, 255) 2px);
      background-repeat: no-repeat;
      background-size: 0% 100%;
      transition: background-size 0.5s ease-in-out 0s;
    }
  }
`;

export const MainContainer = styled.main`
  margin-bottom: 125px;
  position: relative;
`;

export const ProjectBlurbContents = styled.p`
  opacity: 0;
  transition: .3s ease-in-out;
  position: absolute;
  bottom: -64px;

  > * {
    font-size: 18px;
  }

  a {
    display: block;
    margin-bottom: 8px;

  }

  .active & {
    opacity: 1;
  }
`;

export const ProjectInactive = styled.div`
  ${ProjectSection} {
    cursor: auto; 

    h2 {
      color: #bcbcbc;
    }

    &:hover {
      h2 {
        color: #bcbcbc;

        span {
          background-size: 0% 100%;
        }
      }
    }
  }
`;

export const CloseButtonContainer = styled.div<CloseButtonProp>`
  display: flex;
  position: fixed;
  top: 60px;
  right: 0;
  z-index: 4;
  width: 1190px;
  left: 50%;
  display: ${props => (props.isActive ? 'flex' : 'none')};;
  transform: translateX(-50%);

`;

export const CloseButton = styled.button`
  border: none;
  display: inline-block;
  background-image: url('./close.svg');
  background-color: transparent;
  width: 20px;
  height: 20px;
  margin-left: auto;
  margin-left: auto;
  cursor: pointer;
  
  /* display: none; */
`
