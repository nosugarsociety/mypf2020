import {ContentfulClientApi, CreateClientParams, Entry, EntryCollection, createClient, Asset} from 'contentful';

export interface IntroProps {
  readonly name?: string;
  readonly intro?: string;
  readonly linkedin?: string;
  readonly email?: string;
}

interface ContentfulClientProps {
  fetchIntro(): Promise<Entry<IntroProps>[]>;
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
      console.log('ContentfulClien -> fetchIntro -> error', error);
      return [];
    }
  }
}

export default new ContentfulClient();


