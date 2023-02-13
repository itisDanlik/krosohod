export type Sneakers = {
  id: string;
  title: string;
  price: number;
  imgUrl: string;
  type: number;
  size: number;
  count: number;
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface SneakersSliceState {
  items: Sneakers[];
  status: Status
}

export type SearchSneakersParams = {
  sortBy: string;
  order: string;
  category: string;
  search: string;
  currentPage: string;
}