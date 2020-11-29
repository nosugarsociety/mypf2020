import React, {useEffect, useState} from 'react';
import {ContentfulClient} from '../../services';
import {Entry} from 'contentful';
import {IntroProps} from '../../services/api';
import {
  HeaderContainer,
  Name, 
  Contents,  
  MainIntro,
  Contact,
} from './style';


export const Header = () => {
  const [introContents, setIntro] = useState<any>([]);

  const fetchIntros = async (): Promise<Entry<IntroProps>[]> => {
    const intros = await ContentfulClient.fetchIntro(); 
    if (intros) {   
      setIntro(intros);
    }
    return intros;
  }

  useEffect(() => {
    fetchIntros();
  }, []);
  
  console.log("introcontents:", introContents);

  const fields = introContents[0]?.fields;
  const name = fields?.name;
  const email = fields?.email;
  const linkedin = fields?.linkedin;
  const intros = fields?.intro;

  return (
    <HeaderContainer>
      <MainIntro>
        <Name>{name}</Name>
        <Contents>{intros}</Contents>
      </MainIntro>
      <Contact>
        <a href={`mailto:${email}`}>email</a>
        <a href={linkedin} target='_blank' rel="noreferrer">linkedIn</a>
      </Contact>
    </HeaderContainer>
  )
};
