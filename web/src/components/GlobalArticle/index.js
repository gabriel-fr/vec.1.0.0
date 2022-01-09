import React from "react";
import ProjetoAmor from "../../assets/PA.jpg";
import { ArticleContainer, ArticleDescription } from "./styles";

const GlobalArticle = () => {
  return (
    <ArticleContainer>
      <a
        style={{ textDecoration: "none", color: "#333", width: "300px" }}
        href="https://www.instagram.com/p/CQ8r_mAhJml/"
      >
        <div style={{ backgroundColor: "aliceblue", height: "500px" }}>
          <img src={ProjetoAmor} alt="Imagem Projeto Amor" style={{ width: "300px" }} />
        </div>

        <ArticleDescription>
          <h2>Participe do Projeto Amor!</h2>
          <p>
            Projeto Amor acontece toda sexta feira em conjunto com a igreja Brasa na Zona sul e
            Centro de Poto alegre
          </p>
        </ArticleDescription>
      </a>
    </ArticleContainer>
  );
};

export default GlobalArticle;
