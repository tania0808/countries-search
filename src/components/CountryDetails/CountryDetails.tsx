import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Wrapper, Image, Details, Title } from "./CountryDetails.styled";
import { Button } from "../Button/Button";
import {
  PropsChildren,
  DetailsProps,
  TitleProps,
  ImageProps,
  DataProps,
} from "../Props";

export const CountryDetails = ({ alt, src, details }: ImageProps) => {
  const baseUrl = "https://restcountries.com/v3.1";

  const { name, borders } = details?.[0];

  const countryBorders = borders
    ? borders
        .map((border: any) => border)
        .join(",")
        .toLowerCase()
    : null;

  const { data, fetchUrl } = useFetch(baseUrl, `alpha?codes=${countryBorders}`);

  useEffect(() => {
    if (borders) {
      fetchUrl(`alpha?codes=${countryBorders}`);
    }
  }, [countryBorders]);

  return (
    <Wrapper>
      <CountryDetails.Image src={src} alt={alt} />
      <CountryDetails.Description>
        <CountryDetails.Title country={name.common} />
        <CountryDetails.Infos {...details?.[0]} />
        {data !== null && data.length > 0 ? (
          <CountryDetails.Borders data={data} />
        ) : (
          <h4 className="borders">No borders</h4>
        )}
      </CountryDetails.Description>
    </Wrapper>
  );
};

CountryDetails.Image = function CountrydetailsImage({ src, alt }: ImageProps) {
  return (
    <Image>
      <img src={src} alt={alt} />
    </Image>
  );
};

CountryDetails.Description = function CountryDetailsDescription({
  children,
}: PropsChildren) {
  return <Details>{children}</Details>;
};

CountryDetails.Infos = function CountryDetailsInfos({
  name,
  population,
  region,
  subregion,
  capital,
  tld,
  currencies,
  languages,
}: DetailsProps) {
  return (
    <div className="details">
      <div className="col">
        <p className="info-name">
          Native Name: <span className="value">{name.official}</span>{" "}
        </p>
        <p className="info-name">
          Population: <span className="value">{population}</span>{" "}
        </p>
        <p className="info-name">
          Region: <span className="value">{region}</span>{" "}
        </p>
        <p className="info-name">
          Sub Region: <span className="value">{subregion}</span>{" "}
        </p>
        <p className="info-name">
          Capital: <span className="value">{capital}</span>{" "}
        </p>
      </div>
      <div className="col">
        <p className="info-name">
          Top Level Domain: <span className="value">{tld[0]}</span>{" "}
        </p>
        {Object.keys(currencies).map((key: string, index: number) => {
          return (
            <p className="info-name" key={index}>
              Currencies: <span className="value">{currencies[key].name}</span>{" "}
            </p>
          );
        })}
        <p className="info-name">
          Languages:{" "}
          <span className="value">{Object.values(languages).join(", ")}</span>{" "}
        </p>
      </div>
    </div>
  );
};

CountryDetails.Title = function CountryDetailsTitle({ country }: TitleProps) {
  return <Title>{country}</Title>;
};

CountryDetails.Borders = function CountryDetailsBorders({ data }: DataProps) {
  return (
    <div className="borders">
      <h4>Border Countries: </h4>
      <div className="border-list">
        {data.map((border: any) => {
          return (
            <Link
              className="country-link"
              key={border.ccn3}
              to={`/about/${border.ccn3}`}
            >
              <Button buttonText={border.name.common} />
            </Link>
          );
        })}
      </div>{" "}
    </div>
  );
};
