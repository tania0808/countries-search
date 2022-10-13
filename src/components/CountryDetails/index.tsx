import { Wrapper, Image, Details, Title } from "./index.styled";
import { PropsChildren } from "../PropsChildren";
import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import { Button } from "../Button";

interface ImageProps extends PropsChildren {
  alt: string;
  src: string;
  details?: any[];
}

export const CountryDetails = ({ alt, src, details }: ImageProps) => {
  const baseUrl = "https://restcountries.com/v3.1";

  const {
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = details?.[0];

  const countryBorders = borders
    ? borders
        .map((border: any) => border)
        .join(",")
        .toLowerCase()
    : null;
  console.log(countryBorders);

  const { data, fetchUrl } = useFetch(baseUrl, `alpha?codes=${countryBorders}`);
  console.log(data);

  useEffect(() => {
    if (borders) {
      fetchUrl(`alpha?codes=${countryBorders}`);
    }
  }, [countryBorders]);

  if (details) {
    return (
      <Wrapper>
        <CountryDetails.Image src={src} alt={alt} />
        <CountryDetails.Info>
          <CountryDetails.Title country={name.common} />
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
                    Currencies:{" "}
                    <span className="value">{currencies[key].name}</span>{" "}
                  </p>
                );
              })}
              <p className="info-name">
                Languages:{" "}
                <span className="value">
                  {Object.values(languages).join(", ")}
                </span>{" "}
              </p>
            </div>
          </div>
          {data !== null && data.length > 0 ? (
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
          ) : (
            <h4 className="borders">No borders</h4>
          )}
        </CountryDetails.Info>
      </Wrapper>
    );
  }
  return <h1>Belgium</h1>;
};

CountryDetails.Image = function CountrydetailsImage({ src, alt }: ImageProps) {
  return (
    <Image>
      <img src={src} alt={alt} />
    </Image>
  );
};

CountryDetails.Info = function CountryDetailsInfo({ children }: PropsChildren) {
  return <Details>{children}</Details>;
};

interface TitleProps {
  country: string;
}

CountryDetails.Title = function CountrydetailsInfo({ country }: TitleProps) {
  return <Title>{country}</Title>;
};
