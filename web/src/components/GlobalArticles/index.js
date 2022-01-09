import React, { useState } from "react";
import { Title, ArticlesContainer } from "./styles";
import GlobalArticle from "../GlobalArticle";
import ProjetoAmor from "../../assets/PA.jpg";

const GlobalArticles = () => {
  const [globalArticle, setGlobalArticle] = useState({
    photo: ProjetoAmor,
    title: "Participe do Projeto Amor",
    description:
      "Projeto Amor acontece toda sexta feira em conjunto com a igreja Brasa na Zona sul e Centro de Porto alegre",
    redirectLink: "https://www.instagram.com/p/CQ8r_mAhJml/",
  });

  const { photo, title, description, redirectLink } = globalArticle;

  return (
    <div style={{ paddingBottom: "90px" }}>
      <Title>Artigos Globais</Title>
      <ArticlesContainer>
        <GlobalArticle
          photo={photo}
          title={title}
          description={description}
          redirectLink={redirectLink}
        />
        <GlobalArticle
          photo={photo}
          title={title}
          description={description}
          redirectLink={redirectLink}
        />
        <GlobalArticle
          photo={photo}
          title={title}
          description={description}
          redirectLink={redirectLink}
        />
      </ArticlesContainer>
    </div>
  );
};

export default GlobalArticles;
