import styled from 'styled-components/macro';

type CloseButtonProp = {
  isActive: boolean;
}

type ProejctSectionProps = {
  toTop?: number;
  project?: string;
}

type StickyHeightProp = {
  stickyHeight: number;
}

export const ThumbNail = styled.img`
  width: 200px;
  object-fit: cover;
  transform: translateY(45px);
  opacity: 0;
  transition: .3s ease-in-out;
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  display: none;

  ${({ theme: { media } }) => media.tablet`
    display: block;
    width: 200px;
  `}

  ${({ theme: { media } }) => media.desktop`
    width: 380px;
  `}
`;

export const SectionContainer = styled.div<StickyHeightProp>`
  .activated & {
    /* height: 2720px; */
  }
  height: ${props => props.stickyHeight === 0 ? 'auto' : props.stickyHeight}px; 
`;

export const ProjectSection = styled.section<ProejctSectionProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  transition: .3s ease-in-out;
  cursor: pointer;

  .big-human & {
    &.active {
      &:hover {
        h2 {
          color: #fff;
        }        
      }
    }
  }

  &.active {
    opacity: 1;
    position: sticky;
    top: ${props => props.toTop};
    z-index: 4;
    color: ${props => (props.project === 'big-human' ? '#fff' : '#000')}; 
    width: max-content;
  
    /* @media (min-width: 768px) {
      top: ${props => props.toTop};
    } */

    ${ThumbNail} {
      display: none;
    }

    &:hover {
      ${ThumbNail} {
        opacity: 0;
        transform: initial;
      }

      h2 {
        color: #000;

        span {
          background-size: 0 100%;
        }
      }
    }
  }

  &:not(.active){
    .activated & {
      opacity: 0;
    }
  }

  &:hover {
    ${ThumbNail} {
      ${({ theme: { media } }) => media.tablet`
        opacity: 1;
        transform: translateY(17px);
      `}


      ${({ theme: { media } }) => media.desktop`
        transform: translateY(30px);
      `}
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
    font-size: 7.5vw;
    max-height: 10vw;

    ${({ theme: { media } }) => media.tablet`
      font-size: 7.3vw;
      max-height: 7.6vw;
    `}

    ${({ theme: { media } }) => media.desktop`
      font-size: 7.8vw;
      max-height: 8.2vw;
    `}

    ${({ theme: { media } }) => media.largeDesktop`
      font-size: 100px;
      max-height: 105px;
    `}

    span {
      color: inherit;
      width: 100%;
      background-position-y: -4px;
      background-image: linear-gradient(transparent calc(100% - 1px), rgb(255, 255, 255) 2px);
      background-repeat: no-repeat;
      background-size: 0% 100%;
      transition: background-size 0.5s ease-in-out 0s;

      ${({ theme: { media } }) => media.tablet`
        background-position-y: -15px;
      `}

      ${({ theme: { media } }) => media.desktop`
        background-position-y: -20px;
      `}
    }
  }
`;

export const MainContainer = styled.main`
  position: relative;
  /* padding: 0 10px; */
  margin-bottom: 125px;

  ${({ theme: { media } }) => media.desktop`
    padding-right: 0;
    padding-left: 0;
  `}
`;

export const ProjectBlurbContents = styled.p`
  opacity: 0;
  transition: .3s ease-in-out;
  position: absolute;
  bottom: -86px;
  left: 4px;
  margin-right: -50%;

  ${({ theme: { media } }) => media.tablet`
    left: 8px;
  `}

  > * {
    font-size: 16px;
    
    ${({ theme: { media } }) => media.desktop`
      font-size: 18px;
    `}
  }

  a {
    display: block;
    margin-bottom: 8px;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
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
  top: 40px;
  z-index: 4;
  max-width: 1230px;
  padding: 0 20px;
  width: calc(100% - 40px);
  left: 50%;
  display: ${props => (props.isActive ? 'flex' : 'none')};
  transform: translateX(-50%);

  ${({ theme: { media } }) => media.tablet`
    width: calc(100% - 120px);  
  `}

  ${({ theme: { media } }) => media.desktop`
    width: 100%;
    top: 60px;
  `}

  svg {
    margin-left: auto;
    cursor: pointer;
  }

  path { 
    .big-human & {
      fill: #fff; 
    }
  }
`;
