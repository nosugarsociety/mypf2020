/* eslint-disable array-callback-return */
import React, {useEffect, useState, useRef, useContext} from 'react';
import Slider from 'react-slick';
import {SlickStyles} from '../../theme/slick';
import {Entry} from 'contentful';
import {store} from '../../context';
import {SET_STICKY_SCROLL_HEIGHT} from '../../context/types';
import {ContentfulClient} from '../../services';
import {ProjectGalleryProps} from '../../services/api';
import {ProjectGalleryItem} from './style';

export const ProjectGallery = () => {
  const galleryItem = useRef<any>(null);
  
  const globalState = useContext<any>(store);
  const {activeTarget} = globalState.state;
  const {dispatch} = globalState;
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
    const bodyClassValue = document.body.classList[0];
    if(activeIdValue) {
      document.body.classList.add(activeIdValue);
    } else {
      document.body.classList.remove(bodyClassValue);
    }
  }, [activeIdValue]);
  
  useEffect(() => {  
    const targetHeight = activeIdValue ? document.getElementById(`${activeIdValue}`)?.scrollHeight : 0;
    dispatch({type: SET_STICKY_SCROLL_HEIGHT, activeTargetHeight: targetHeight})
  }, [activeIdValue, dispatch]);

  const renderGalleries = (galleries: ProjectGalleryProps[] | undefined) => {
  
    return galleries?.map((gallery: any, i) => {
      const {galleryImg, titleOfGallery} = gallery?.fields;      
      return (
        <ProjectGalleryItem 
          ref={galleryItem}
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
