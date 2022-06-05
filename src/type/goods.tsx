interface IBigImages {
  created_at: null | number;
  goods_id: number;
  id: number;
  name: string;
  updated_at: null | number;
}
interface IDescriptions {
  created_at: null | number;
  good_id: number;
  icon: string;
  id: number;
  text: string;
  updated_at: null | number;
}
export interface IGood {
  id: number;
  active: number;
  barcode: string;
  bigImages: IBigImages[];
  number: number;
  article: string;
  descriptions: IDescriptions[];
  name: string;
  series: string;
  series_decoding: string;
  price: number | null;
  rrc: number;
  desc: string;
  created_at: null | number;
  updated_at: null | number;
}
