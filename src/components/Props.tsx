export type PropsChildren = {
  children?: JSX.Element | JSX.Element[];
};

export type ObjectProps = {
  [key: string]: any;
};

export interface DetailsProps {
  name: any;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  tld: any[];
  currencies: ObjectProps;
  languages: any;
}

export interface TitleProps {
  country: string;
}

export interface ImageProps extends PropsChildren {
  alt: string;
  src: string;
  details?: any[];
}

export interface DataProps {
  data: any[];
}
