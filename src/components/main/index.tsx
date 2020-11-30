import React, {useEffect, useState} from 'react';
import {Entry} from 'contentful';
import {ContentfulClient} from '../../services';
import {ProjectItem} from '../../services/api';
import {
  MainContainer, 
  ThumbNail, 
  ProjectSection,
  ProjectBlurb,
  ProjectBlurbContents,
} from './style';

export const Main = () => {
  const [items, setItems] = useState<any>();
  
  const fetchProjectItems = async (): Promise<Entry<ProjectItem>[]> => {
    const projectItems = await ContentfulClient.fetchProjectItem();
    setItems(projectItems);
    return projectItems;
  };

  useEffect(() => {
    fetchProjectItems();
  }, [])

  const renderSection = (items: ProjectItem[]) => {
    return items?.map((item: any) => {      
      // console.log(item);
      const {
        projectName,
        description,
        url,
        thumbnail,
      } = item?.fields;

      const pureUrl = url.replace(/^https?:\/\//,'');
      const imgSrc = thumbnail?.fields?.file?.url;

      return (
        <ProjectSection>
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

  return (
    <MainContainer>
      {items && renderSection(items)}
    </MainContainer>
  )
};

