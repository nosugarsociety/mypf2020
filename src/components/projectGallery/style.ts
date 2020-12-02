import styled from 'styled-components/macro';

export const ProjectGalleryItem = styled.div`
  position: absolute;
  top: 0;  
  width: 100%;
  opacity: 0;
  visibility: hidden;
  transition: visibility .5s ease-in-out, opacity .5s ease-in-out;

  &.active {
    opacity: 1;
    visibility: visible;

    .slick-slide {
      img {
        height: auto;
      }
    }
  }

  &:not(.active) {
    /* display: none; */
  }

  .slick-slide {
    img {
      height: 0;
      max-height: 3000px;
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

`;
