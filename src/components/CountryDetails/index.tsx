import { Wrapper, Image, Details } from "./index.styled";
import { PropsChildren } from "../PropsChildren";

interface ImageProps extends PropsChildren {
  alt: string;
  src: string;
}

export const CountryDetails = ({ alt, src }: ImageProps) => {
  return (
    <Wrapper>
      <CountryDetails.Image src={src} alt={alt} />
      <CountryDetails.Info>
        <h1>hello</h1>
      </CountryDetails.Info>
    </Wrapper>
  );
};

CountryDetails.Image = function CountrydetailsImage({ src, alt }: ImageProps) {
  return <Image>
    <img  src={src} alt={alt}  />
  </Image>;
};
CountryDetails.Info = function CountrydetailsInfo({ children }: PropsChildren) {
  return <Details>{children}</Details>;
};
