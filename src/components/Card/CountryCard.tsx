import React from "react";
import { Card, Image, Body, Title } from "./Card.styled";
import { PropsChildren } from "../Props";
interface Props extends PropsChildren {
  code: number
}

export const CountryCard = ({ children, code }: Props) => {
  const handleFilter = () => {
    console.log(code);
  }
  return <Card onClick={handleFilter}>{children}</Card>;
};

interface ImageP {
  alt: string;
  src: string;
}

CountryCard.Image = function CardImage({ src, alt }: ImageP) {
  return <Image src={src} alt={alt} />;
};

CountryCard.Body = function CardBody({ children }: PropsChildren) {
  return <Body>{children}</Body>;
};
CountryCard.Title = function CardTitle({ children }: PropsChildren) {
  return <Title>{children}</Title>;
};
