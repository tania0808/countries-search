import React from "react";
import { Card, Image, Body, Title } from "./Card.styled";
import { PropsChildren, ImageProps } from "../Props";

export const CountryCard = ({ children }: PropsChildren) => {
  return <Card>{children}</Card>;
};

CountryCard.Image = function CardImage({ src, alt }: ImageProps) {
  return <Image src={src} alt={alt} />;
};

CountryCard.Body = function CardBody({ children }: PropsChildren) {
  return <Body>{children}</Body>;
};
CountryCard.Title = function CardTitle({ children }: PropsChildren) {
  return <Title>{children}</Title>;
};
