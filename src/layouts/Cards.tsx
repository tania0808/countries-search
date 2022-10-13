import { Wrapper } from "../components/Card/Card.styled";
import { CountryCard } from "../components/Card/CountryCard";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Cards = () => {
  const countries = useSelector((state: RootState) => state.countries.value);
  const error = useSelector((state: RootState) => state.countries.error);

  if (error) {
    return <h1>There is no such a country</h1>;
  }

  if (countries.length > 0) {
    return (
      <Wrapper>
        {countries.map((country: any, index: number) => (
          <CountryCard key={index}>
            <Link to={`/about/${country.ccn3}`}>
              <CountryCard.Image
                src={country.flags.png ? country.flags.png : null}
                alt={country.name.common}
              />
              <CountryCard.Body>
                <CountryCard.Title>{country.name.common}</CountryCard.Title>
                <p>
                  <span>Population: </span>
                  {country.population}
                </p>
                <p>
                  <span>Region: </span>
                  {country.region}
                </p>
                <p>
                  <span>Capital: </span>
                  {country.capital}
                </p>
              </CountryCard.Body>
            </Link>
          </CountryCard>
        ))}
      </Wrapper>
    );
  }

  return <h2>Loading ...</h2>;
};
