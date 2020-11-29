import React, {useEffect, useState} from 'react';
import {ContentfulClient} from '../../services';
import {Entry} from 'contentful';
import {IntroProps} from '../../services/api';

export const Header = () => {
  const [intro, setIntro] = useState<any>([]);

  const fetchIntros = async (): Promise<Entry<IntroProps>[]> => {
    const intros = await ContentfulClient.fetchIntro();    
    setIntro(intros);
    return intros;
  }

  useEffect(() => {
    fetchIntros();
  }, []);

  const {fields} = intro[0];
  const {name} = fields;
  console.log(name);
  
  return (
    <header>
      <h1>name: {name}</h1>
    </header>
  )
};
