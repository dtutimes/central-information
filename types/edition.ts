export enum EditionStatus {
  // hidden till restored
  Draft = 0,
  // published to main website
  Published = 1,
  // auto publish at a given time
  Approved = 2,
}

export interface IEdition {
  _id: string;
  name: string;
  edition_id: number;
  status: EditionStatus;
  edition_link: string;
  published_at?: string;
  createdAt?: string;
  updatedAt?: string;
}
