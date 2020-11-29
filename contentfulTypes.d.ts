import { Entry, Asset } from 'contentful' 
export const ProjectItem = 'projectItem'
export interface ProjectItem { 
  //Project Item
  /*  */
  readonly projectName?: string  
  readonly url?: string  
  readonly description?: string  
  readonly thumbnail?: Asset  
  readonly gallery?: any  
}

export const ProjectGallery = 'projectGallery'
export interface ProjectGallery { 
  //Project Gallery
  /*  */
  readonly titleOfGallery?: string  
  readonly galleryImg?: ReadonlyArray<Asset>  
}

export const Intro = 'intro'
export interface Intro { 
  //Intro
  /* My intro */
  readonly name: string  
  readonly intro: string  
  readonly linkedin?: string  
  readonly email: string  
}

