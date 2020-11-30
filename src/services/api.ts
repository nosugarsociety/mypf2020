import {ContentfulClientApi, CreateClientParams, Entry, EntryCollection, createClient, Asset} from 'contentful';

export interface IntroProps {
  /* My intro */
  readonly name?: string;
  readonly intro?: string;
  readonly linkedin?: string;
  readonly email?: string;
}

export interface ProjectItem { 
  /* Project Item */
  readonly projectName?: string  
  readonly url?: string  
  readonly description?: string  
  readonly thumbnail?: Asset  
  readonly gallery?: any  
}

interface ContentfulClientProps {
  fetchIntro(): Promise<Entry<IntroProps>[]>;
  fetchProjectItem(): Promise<Entry<ProjectItem>[]>;
}

class ContentfulClient implements ContentfulClientProps {
  private client: ContentfulClientApi;

  constructor() {
    this.client = createClient({
      space: `${process.env.REACT_APP_CONTENTFUL_SPACE_ID}`,
      accessToken: `${process.env.REACT_APP_DELIVERY_API_KEY}`,
    } as CreateClientParams);
  }

  async fetchIntro() {
    try { 
      const entries: EntryCollection<IntroProps> = await this.client.getEntries({
        content_type: 'intro'
      });
      return entries.items;
    } catch (error) {
      console.log('ContentfulClient -> fetchIntro -> error', error);
      return [];
    }
  }

  async fetchProjectItem() {
    try { 
      const entries: EntryCollection<ProjectItem> = await this.client.getEntries({
        content_type: 'projectItem'
      });
      return entries.items;
    } catch (error) {
      console.log('ContentfulClient -> fetchProjectItem -> error', error);
      return [];
    }
  }
}

export default new ContentfulClient();


