import React from "react";
import {
  AuthorName,
  BtnDiv,
  CardContainer,
  CardImage,
  DataContainer,
  DateDiv,
  DateText,
  Description,
  Title,
} from "./style";
import Button from "@mui/material/Button";
import { RightArrow } from "../../Icons";

interface CardProps {
  description?: string;
  publishedAt?: string;
  author?: string;
  title?: string;
  urlToImage?: string;
  urlToNews?:string
}
const Card: React.FC<CardProps> = ({
  description,
  publishedAt,
  author,
  title,
  urlToImage,
  urlToNews
}) => {

  return (
    <CardContainer>
      <CardImage urlImage={urlToImage}>df</CardImage>
      <DataContainer>
        <DateDiv>
          <DateText>{publishedAt}</DateText>
        </DateDiv>
        <Title>{title}</Title>
        <AuthorName>{author}</AuthorName>
        <Description>
          {description}
        </Description>
        <BtnDiv>
          <Button
            href={mockData.articles[0].url}
            target="_blank"
            variant="contained"
            endIcon={<RightArrow />}
            sx={{
              bgcolor: "#0058B9",
              borderRadius: 20,
              width: 226,
              height: 36,
              textAlign:"center",
              fontFamily:"Roboto",
              fontWeight:500,
              fontSize:14,
              lineHeight:26,
              display:"flex",

            }}
          >
            NAVIGATE TO DISPATCH
          </Button>
        </BtnDiv>
      </DataContainer>
    </CardContainer>
  );
};

export default Card;
