import { useState, useEffect } from "react";
import { PropsChildren } from "../Props";
import {
  SearchWrapper,
  SearchInput,
  SearchFilter,
  FilterContainer,
} from "./SearchBar.styled";
import { FiSearch } from "react-icons/fi";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import { useFetch } from "../../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { allCountries, errorHandler } from "../../reducers/countriesReducer";
const baseUrl = "https://restcountries.com/v3.1";

export const SearchBar = ({ children }: PropsChildren) => {
  return <SearchWrapper>{children}</SearchWrapper>;
};

SearchBar.Input = function SearchBarInput() {
  const [query, setQuery] = useState<string>("all");
  const { data, fetchUrl } = useFetch(baseUrl, "all");
  const error = useSelector((state: RootState) => state.countries.error);
  const dispatch = useDispatch();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (data) dispatch(allCountries(data));
  }, [data, query]);

  useEffect(() => {
    const getData = setTimeout(() => {
      if ((query !== "" && query !== "all") || error) {
        fetchUrl(`name/${query}`);
      } else {
        fetchUrl("all");
      }
    }, 600);
    dispatch(errorHandler(false));

    return () => clearTimeout(getData);
  }, [query]);

  return (
    <SearchInput>
      <FiSearch className="icon" />
      <input
        onChange={handleOnChange}
        type="text"
        placeholder="Search for a country..."
      />
    </SearchInput>
  );
};

SearchBar.Filter = function SearchBarFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { data, fetchUrl } = useFetch(baseUrl, "all");
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const handleOpenSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleFilter = (event: React.MouseEvent<HTMLParagraphElement>) => {
    event.preventDefault();
    const region: HTMLParagraphElement = event.currentTarget;
    fetchUrl(`region/${region.innerText}`);
    setIsOpen(false);
  };

  useEffect(() => {
    if (data) dispatch(allCountries(data));
  }, [data]);

  return (
    <SearchFilter>
      Filter by region
      {isOpen ? (
        <BsChevronCompactUp className="icon" onClick={handleOpenSelect} />
      ) : (
        <BsChevronCompactDown className="icon" onClick={handleOpenSelect} />
      )}
      {isOpen && (
        <FilterContainer>
          {regions.map((region, index) => {
            return (
              <p onClick={handleFilter} key={index}>
                {region}
              </p>
            );
          })}
        </FilterContainer>
      )}
    </SearchFilter>
  );
};
