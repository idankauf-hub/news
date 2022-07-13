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
  const mockData = {
    status: "ok",
    totalResults: 10,
    articles: [
      {
        source: {
          id: "bbc-news",
          name: "BBC News",
        },
        author: "BBC News",
        title:
          "National emblem: India rejects criticism over ‘snarling’ lion statue",
        description:
          "An avatar of India's national emblem on top of the new parliament building has raised many eyebrows.",
        url: "http://www.bbc.co.uk/news/world-asia-india-62131457",
        urlToImage:
          "https://ichef.bbci.co.uk/news/1024/branded_news/207D/production/_125871380_lionslargegetty.jpg",
        publishedAt: "2022-07-13T06:52:18.3359497Z",
        content:
          "The Indian government has defended the look of the national emblem on top of the new parliament building amid criticism over its appearance. \r\nThe new statue, adapted from an ancient Indian sculpture… [+3843 chars]",
      },
      {
        source: {
          id: "bbc-news",
          name: "BBC News",
        },
        author: "BBC News",
        title:
          "Sri Lanka: President Gotabaya Rajapaksa flees the country on military jet",
        description:
          "Gotabaya Rajapaksa has arrived in the Maldives amid mass protests over Sri Lanka's economic crisis.",
        url: "http://www.bbc.co.uk/news/world-asia-62132271",
        urlToImage:
          "https://ichef.bbci.co.uk/news/1024/branded_news/1595F/production/_125851488_gettyimages-1236277715.jpg",
        publishedAt: "2022-07-13T06:07:19.7097046Z",
        content:
          "By Matt Murphy &amp; Tessa Wong in ColomboBBC News\r\nPresident Gotabaya Rajapaksa has fled Sri Lanka on a military jet, amid mass protests over its economic crisis. \r\nThe country's air force confirmed… [+5813 chars]",
      },
      {
        source: {
          id: "bbc-news",
          name: "BBC News",
        },
        author: "BBC News",
        title: "Conservative MPs to begin voting in leadership race",
        description:
          "The eight candidates need at least 30 votes each to stay in the contest to replace Boris Johnson.",
        url: "http://www.bbc.co.uk/news/uk-politics-62144239",
        urlToImage:
          "https://ichef.bbci.co.uk/news/1024/branded_news/8EC4/production/_125884563_mediaitem125884561.jpg",
        publishedAt: "2022-07-13T04:52:24.2728415Z",
        content:
          "Tory MPs are to cast their first votes in the contest to replace Boris Johnson as party leader - and prime minister.\r\nAfter nominations closed, the eight hopefuls took part in a hustings event in Par… [+2799 chars]",
      },
      {
        source: {
          id: "bbc-news",
          name: "BBC News",
        },
        author: "BBC News",
        title:
          "Rogers outage: Millions to get credits over internet and mobile blackout",
        description:
          "The disruption - which lasted for over 15 hours - affected transport, banking and emergency services.",
        url: "http://www.bbc.co.uk/news/business-62145247",
        urlToImage:
          "https://ichef.bbci.co.uk/news/1024/branded_news/C772/production/_125885015_gettyimages-1236105869.jpg",
        publishedAt: "2022-07-13T04:37:24.2423559Z",
        content:
          "By Annabelle LiangBusiness reporter\r\nCanadian mobile and internet giant Rogers says it will give credits to millions of its customers after a nationwide outage last week.\r\nIn a statement posted late … [+2472 chars]",
      },
      {
        source: {
          id: "bbc-news",
          name: "BBC News",
        },
        author: "BBC News",
        title: "The moment a kangaroo is rescued from flood waters",
        description: "Rescuers said the kangaroo was trying to escape a fox.",
        url: "http://www.bbc.co.uk/news/world-australia-62141070",
        urlToImage:
          "https://ichef.bbci.co.uk/news/1024/branded_news/13F40/production/_125882718_p0clg9dj.jpg",
        publishedAt: "2022-07-13T03:07:18.3035095Z",
        content:
          "A kangaroo has been rescued from flood waters, as heavy rain hits New South Wales, Australia. \r\nRescue workers were helping to ferry people away from flood affected areas when they came across the ma… [+223 chars]",
      },
      {
        source: {
          id: "bbc-news",
          name: "BBC News",
        },
        author: "BBC News",
        title: "President Rajapaksa in Maldives as resignation expected",
        description:
          "Gotabaya Rajapaksa's departure follows huge protests over the island's economic crisis.",
        url: "http://www.bbc.co.uk/news/live/world-asia-62144703",
        urlToImage:
          "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.2.0/bbc_news_logo.png",
        publishedAt: "2022-07-13T01:52:25.3668034Z",
        content:
          "Gotabaya RajapaksaImage caption: Gotabaya Rajapaksa\r\nPresident\r\nGotabaya Rajapaksa is in the Maldives after fleeing Sri Lanka in the dead of\r\nnight. \r\nHe\r\narrived in the capital of Male at around 03:… [+929 chars]",
      },
      {
        source: {
          id: "bbc-news",
          name: "BBC News",
        },
        author: "BBC News",
        title: "Joe Biden heads to Middle East amid faltering US sway",
        description:
          "The US president's visit to the turbulent region may highlight the limits of American power.",
        url: "http://www.bbc.co.uk/news/world-middle-east-62133978",
        urlToImage:
          "https://ichef.bbci.co.uk/news/1024/branded_news/AEAD/production/_125871744_bidenreuters24052250564393817c21d6e24feb417de9947b5ca6c4b0.jpg",
        publishedAt: "2022-07-13T00:22:18.4139731Z",
        content:
          "By Jeremy BowenBBC Middle East editor, Jerusalem\r\nJoe Biden might prefer not to have visited the Middle East this week, or any other week for that matter. His agenda is full.\r\nThe president's Democra… [+6059 chars]",
      },
      {
        source: {
          id: "bbc-news",
          name: "BBC News",
        },
        author: "BBC News",
        title: "Twitter sues Elon Musk over $44bn purchase deal",
        description:
          "Twitter sues billionaire Elon Musk in an attempt to force through his $44bn deal to buy the social media giant.",
        url: "http://www.bbc.co.uk/news/business-62144776",
        urlToImage:
          "https://ichef.bbci.co.uk/news/1024/branded_news/83B3/production/_115651733_breaking-large-promo-nc.png",
        publishedAt: "2022-07-12T21:37:22.7410672Z",
        content:
          "Twitter has taken billionaire Elon Musk to court to try to force him to buy the social media firm.\r\nIt comes after Mr Musk announced he was walking away from his proposed $44bn acquisition of Twitter… [+255 chars]",
      },
      {
        source: {
          id: "bbc-news",
          name: "BBC News",
        },
        author: "BBC News",
        title:
          "Capitol riots: Trump tweet incited 6 January attack says committee",
        description:
          'Mr Trump sent a rallying call to supporters after "the craziest meeting" of his presidency, the inquiry hears.',
        url: "http://www.bbc.co.uk/news/world-us-canada-62140410",
        urlToImage:
          "https://ichef.bbci.co.uk/news/1024/branded_news/1E3A/production/_125883770_800de79e-d272-4bc1-ab22-77a798209c4a.jpg",
        publishedAt: "2022-07-12T20:52:25.0237748Z",
        content:
          "A Trump tweet mobilised far-right extremists to converge on Washington DC on the day of last year's Capitol riot, a congressional inquiry has heard.\r\nHe posted the tweet after \"the craziest meeting o… [+3008 chars]",
      },
      {
        source: {
          id: "bbc-news",
          name: "BBC News",
        },
        author: "BBC News",
        title: "Emmys 2022: Succession leads US TV award nominations",
        description:
          "The show leads the race for the US TV awards, with nominations for both Brian Cox and Jeremy Strong.",
        url: "http://www.bbc.co.uk/news/entertainment-arts-62140086",
        urlToImage:
          "https://ichef.bbci.co.uk/news/1024/branded_news/9D92/production/_125883304_succession_gettyimages-1384425080.jpg",
        publishedAt: "2022-07-12T19:22:22.9610293Z",
        content:
          "Succession leads the charge for this year's Emmy Awards with 25 nominations, including outstanding drama series and lead actor for Scotsman Brian Cox's portrayal of media mogul Logan Roy.\r\nCox will g… [+3637 chars]",
      },
    ],
  };
  return (
    <CardContainer>
      <CardImage urlImage={urlToImage}>df</CardImage>
      <DataContainer>
        <DateDiv>
          <DateText>Friday June 25 ,2012</DateText>
        </DateDiv>
        <Title>Vaction</Title>
        <AuthorName>walla.com</AuthorName>
        <Description>
          Simone has withdrawn from the event final for floor and will make a
          decision on beam later this week" USA Gymnastics said. "Either way,
          we're all behind you, Simone.
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
