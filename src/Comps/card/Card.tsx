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
import { CardMedia } from "@mui/material";
import { COLORS } from "../../styles/colors";

interface CardProps {
  refLastArticle?: any;
  description?: string;
  publishedAt?: string;
  author?: string;
  title?: string;
  urlToImage?: string;
  urlToNews?: string | undefined;
}
const Card: React.FC<CardProps> = ({
  refLastArticle,
  description,
  publishedAt,
  author,
  title,
  urlToImage,
  urlToNews,
}) => {
  return (
    <CardContainer ref={refLastArticle}>
      <CardMedia
        component="img"
        sx={{
          "@media (min-width: 600px)": {
            height: "100%",
          },
          borderRadius: "20px 0px 0px 20px",
          borderRight: `1px solid ${COLORS.lightgray}`,
          width: { sm: 250 },
        }}
        image={urlToImage}
      />
      <DataContainer>
        <DateDiv>
          <DateText>{publishedAt}</DateText>
        </DateDiv>
        <Title>{title}</Title>
        <AuthorName>{author}</AuthorName>
        <Description>{description}</Description>
        <BtnDiv>
          <Button
            href={urlToNews || ""}
            target="_blank"
            variant="contained"
            endIcon={<RightArrow />}
            sx={{
              bgcolor: "#0058B9",
              borderRadius: 20,
              width: 226,
              height: 36,
              textAlign: "center",
              fontFamily: "Roboto",
              fontWeight: 500,
              fontSize: 14,
              lineHeight: 26,
              display: "flex",
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
