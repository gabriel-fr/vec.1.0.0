import React, { useState } from "react";
import { Title, ArticlesContainer } from "./styles";
import GlobalArticle from "../GlobalArticle";

const GlobalArticles = () => {
  const [globalArticle, setGlobalArticle] = useState({
    photo: "https://i.ibb.co/mz8R02z/Whats-App-Image-2022-01-09-at-14-49-58.jpg",
    title: "Participe do Projeto Amor!",
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
