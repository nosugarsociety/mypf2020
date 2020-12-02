/* eslint-disable array-callback-return */
import React, {useEffect, useState, useContext} from 'react';
import Slider from 'react-slick';
import {SlickStyles} from '../../theme/slick';
import {Entry} from 'contentful';
import {store} from '../../context';
import {
  TOGGLE_ACTIVE, 
  TOGGLE_ACTIVATE,
  SET_ACTIVE_TARGET 
} from '../../context/types';
import {ContentfulClient} from '../../services';
import {ProjectGalleryProps} from '../../services/api';
import {ProjectGalleryItem} from './style';

export const ProjectGallery = () => {
  const globalState = useContext<any>(store);
  console.log("globalState gallery:", globalState.state);
  const {activeTarget} = globalState.state;
  const activeIdValue = activeTarget.replace(/\W+/g, '-').toLowerCase();

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const [galleries, setGallery] = useState();
  
  const fetchProjectImgs = async (): Promise<Entry<ProjectGalleryProps>[]>  => {
    const projectGalleries = await ContentfulClient.fetchGalleryImg() as any;
  
    if (projectGalleries) {
      setGallery(projectGalleries);
    }
    return projectGalleries;
  };

  useEffect(() => {
    fetchProjectImgs();
  }, []);

  useEffect(() => {
    console.log("activeIdValue:", activeIdValue);
    const bodyClassValue = document.body.classList[0];
    if(activeIdValue) {
      document.body.classList.add(activeIdValue);
    } else {
      document.body.classList.remove(bodyClassValue);
    }

  }, [activeIdValue]);

  const renderGalleries = (galleries: ProjectGalleryProps[] | undefined) => {
  
    return galleries?.map((gallery: any, i) => {
      const {galleryImg, titleOfGallery} = gallery?.fields;      
      return (
        <ProjectGalleryItem 
          id={titleOfGallery} 
          key={titleOfGallery}
          className={activeIdValue === titleOfGallery ? 'active' : ''}
        >          
          <Slider {...settings}>            
            {galleryImg.map((img: any) => {
              const {url, fileName} = img.fields.file;
              return <img src={url} alt={fileName} key={fileName} />
            })}
          </Slider>
        </ProjectGalleryItem>
      );
    })
  }

  return (
    <React.Fragment>    
      <SlickStyles />
      {galleries && renderGalleries(galleries)}  
    </React.Fragment>
  )
} 
