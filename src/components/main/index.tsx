import React, {useEffect, useState, useContext} from 'react';
import {store} from '../../context';
import {Entry} from 'contentful';
import {ContentfulClient} from '../../services';
import {ProjectItem} from '../../services/api';
import {
  TOGGLE_ACTIVE, 
  TOGGLE_ACTIVATE,
  SET_ACTIVE_TARGET 
} from '../../context/types';

import {
  MainContainer, 
  ThumbNail, 
  ProjectSection,
  ProjectBlurb,
  ProjectBlurbContents,
  ProjectInactive,
  SectionContainer,
  CloseButton,
  CloseButtonContainer,
} from './style';

export const Main = () => {
  const globalState = useContext<any>(store);
  const {dispatch} = globalState;
  const {
    active,
    activated,
    activeTarget
  } = globalState.state;

  const [items, setItems] = useState<any>();
  
  const fetchProjectItems = async (): Promise<Entry<ProjectItem>[]> => {
    const projectItems = await ContentfulClient.fetchProjectItem();
    setItems(projectItems);
    return projectItems;
  };

  useEffect(() => {
    fetchProjectItems();
  }, [])

  const toggleActive = (e: React.SyntheticEvent, name: any) => {
    dispatch({type: TOGGLE_ACTIVE, active: !active})
    dispatch({type: TOGGLE_ACTIVATE, activated: true})
    dispatch({type: SET_ACTIVE_TARGET, activeTarget: name})
  };

  const turnOffActive = () => {
    dispatch({type: TOGGLE_ACTIVE, active: !active})
    dispatch({type: TOGGLE_ACTIVATE, activated: false})
    dispatch({type: SET_ACTIVE_TARGET, activeTarget: ''})
    window.scrollTo(0, 0);
  };

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

      return (
        <ProjectSection 
          key={projectName}   
          onClick={(e) => toggleActive(e, projectName)}                  
          className={activeTarget === projectName ? 'active' : ''}
        >
          <ProjectBlurb>
            <h2>
              <span>{projectName}</span>
            </h2>
            <ProjectBlurbContents>
              <a href={url} target="_blank" rel="noreferrer">{pureUrl}</a>
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
      <SectionContainer>
        {items && renderSection(items)}
        {inactiveSection()}
      </SectionContainer>
    </MainContainer>
  )
};
