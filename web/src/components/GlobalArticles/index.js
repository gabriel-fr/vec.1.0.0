import React from "react";
import { Title, ArticlesContainer } from "./styles";
import GlobalArticle from "../GlobalArticle";

const GlobalArticles = () => {
  return (
    <>
      <Title>Artigos Globais</Title>
      <ArticlesContainer>
        <GlobalArticle />
        <GlobalArticle />
        <GlobalArticle />
      </ArticlesContainer>
    </>
  );
};

export default GlobalArticles;
