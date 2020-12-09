import styled from 'styled-components/macro';

export const ProjectGalleryItem = styled.div`
  position: absolute;
  top: 0;  
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity .5s ease-in-out;

  &.active {
    opacity: 1;
    visibility: visible;

    .slick-slide {
      img {
        height: 100vh;

        ${({ theme: { media } }) => media.tablet`    
          height: auto;
        `}
      }
    }
  }

  &:not(.active) {
    /* display: none; */
  }

  .slick-slide {
    img {
      height: 0;
      object-fit: cover;      
      object-position: top;
    }
  }

  .slick-arrow {
    position: absolute;
    font-size: 0;
    width: 50%;
    top: 0;
    height: 100%;
    border: none;
    z-index: 3;
    background-color: transparent;

    &:focus {
      outline: none;
    }

    &.slick-prev {
      left: 0;      
      cursor: url('./arrow-left.svg'), auto;
    }

    &.slick-next {
      right: 0;
      cursor: url('./arrrow.svg'), auto;
    }
  }

  .big-human & {
    .slick-arrow { 
      &.slick-prev {   
        cursor: url('./arrow-left-white.svg'), auto;
      }

      &.slick-next {
        cursor: url('./arrow-white.svg'), auto;
      }
    }
  }

`;
