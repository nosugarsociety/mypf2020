import React, {useEffect, useState, useContext} from 'react';
import {store} from '../../context';
import {Entry} from 'contentful';
import {ContentfulClient} from '../../services';
import {ProjectItem} from '../../services/api';
import {CloseButton} from '../inline-svg/close-button';
import {
  TOGGLE_ACTIVE, 
  TOGGLE_ACTIVATE,
  SET_ACTIVE_TARGET,
  SET_STICKY_SCROLL_HEIGHT,
} from '../../context/types';

import {
  MainContainer, 
  ThumbNail, 
  ProjectSection,
  ProjectBlurb,
  ProjectBlurbContents,
  ProjectInactive,
  SectionContainer,
  // CloseButton,
  CloseButtonContainer,
} from './style';

export const Main = () => {
  const [sectionToTopDistance, setSectionToTopDistance] = useState<number>(0);
  const [stickyScrollHeight , setStickyScrollHeight] = useState<number>(0);
  const globalState = useContext<any>(store);
  const {dispatch} = globalState;
  const {
    active,
    activated,
    activeTarget,
    activeTargetHeight,
  } = globalState.state;

  const [items, setItems] = useState<any>();
  const toggleActive = (e: React.SyntheticEvent, name: any) => {
    const target = e.currentTarget;
    const distanceToTop = target.getBoundingClientRect().top;
    setSectionToTopDistance(distanceToTop);    
    dispatch({type: TOGGLE_ACTIVE, active: !active})
    dispatch({type: TOGGLE_ACTIVATE, activated: true})
    dispatch({type: SET_ACTIVE_TARGET, activeTarget: name})
  };

  const turnOffActive = () => {
    dispatch({type: TOGGLE_ACTIVE, active: false})
    dispatch({type: TOGGLE_ACTIVATE, activated: false})
    dispatch({type: SET_ACTIVE_TARGET, activeTarget: ''})
    dispatch({type: SET_STICKY_SCROLL_HEIGHT, stickySrollHeight: 0});
    window.scrollTo(0, 0);
  };
  
  const fetchProjectItems = async (): Promise<Entry<ProjectItem>[]> => {
    const projectItems = await ContentfulClient.fetchProjectItem();
    setItems(projectItems);
    return projectItems;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleEsc = (e: any) => {
    if (e.keyCode === 27) {
      turnOffActive();
   }
 };

  // FETCH PROJECTS
  useEffect(() => {
    fetchProjectItems();
  }, [])

  // SET STICKY SCROLL HEIGHT
  useEffect(() => {
    const marginToTopWindow = document.getElementById("header")?.style.marginTop;
    const distance = (activeTargetHeight + marginToTopWindow) - sectionToTopDistance;
    setStickyScrollHeight(distance);
  }, [sectionToTopDistance, activeTargetHeight]);

  useEffect(() => {
    if(active) {
      window.addEventListener('keydown', handleEsc);
    }
  }, [active, handleEsc]);

  const renderSection = (items: ProjectItem[]) => {
    return items?.map((item: any, i) => {      
      const {
        projectName,
        description,
        url,
        thumbnail,
      } = item?.fields;
      const pureUrl = url.replace(/^https?:\/\//,'');
      const imgSrc = thumbnail?.fields?.file?.url;   
      const projectValue = projectName.replace(/\W+/g, '-').toLowerCase();

      return (
        <ProjectSection 
          key={projectName}   
          onClick={(e) => toggleActive(e, projectName)} 
          toTop={sectionToTopDistance}
          project={projectValue}
          className={activeTarget === projectName ? 'active' : ''}
        >
          <ProjectBlurb>
            <h2>
              <span>{projectName}</span>
            </h2>
            <ProjectBlurbContents>
              <a 
                href={url} 
                target="_blank" 
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}>
                {pureUrl}
              </a>
              <span>{description}</span>
            </ProjectBlurbContents>
          </ProjectBlurb>
          <ThumbNail src={imgSrc} />
        </ProjectSection>
      );
    })
  };

  const inactiveSection = () => {
    return (
      <ProjectInactive>
        <ProjectSection>
          <ProjectBlurb>
            <h2>
              <span>BedBath and Beyond</span>
            </h2>
          </ProjectBlurb>
        </ProjectSection>
        <ProjectSection>
          <ProjectBlurb>
            <h2>
              <span>TD Bank</span>
            </h2>
          </ProjectBlurb>
        </ProjectSection>
        <ProjectSection>
          <ProjectBlurb>
            <h2>
              <span>P.J Clarks</span>
            </h2>
          </ProjectBlurb>
        </ProjectSection>
        <ProjectSection>
          <ProjectBlurb>
            <h2>
              <span>Spectrum</span>
            </h2>
          </ProjectBlurb>
        </ProjectSection>
      </ProjectInactive>
    );
  };

  return (
    <MainContainer className={activated ? 'activated': ''}>
      <CloseButtonContainer isActive={active} onClick={() => turnOffActive()}>
        <CloseButton  />
      </CloseButtonContainer>
      <SectionContainer stickyHeight={stickyScrollHeight}>
        {items && renderSection(items)}
        {inactiveSection()}
      </SectionContainer>
    </MainContainer>
  )
};
