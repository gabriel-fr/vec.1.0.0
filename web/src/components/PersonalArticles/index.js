import React from "react";
import { Title } from "../GlobalArticles/styles";
import { RowArticles, Article } from "./styles";

const PersonalArticles = () => {
  return (
    <div>
      <Title>Artigos</Title>
      <RowArticles>
        <Article>
          <a href="/" style={{ textDecoration: "none", color: "#333" }}>
            <img
              style={{ display: "block", width: "100%" }}
              src="https://picsum.photos/1080/1440?random=8"
              alt="Article"
            />
            <h4>Silver Laceless Shoe</h4>
            <p> Nesta categoria toda a coluna é o botao para o link;</p>
            <hr />
            <p>01/10/20</p>
          </a>
        </Article>
        <Article>
          <a href="/" style={{ textDecoration: "none", color: "#333" }}>
            <img
              style={{ display: "block", width: "100%" }}
              src="https://picsum.photos/1080/1440?random=7"
              alt="Article"
            />
            <h4>Silver Laceless Shoe</h4>
            <p> Nesta categoria toda a coluna é o botao para o link;</p>
            <hr />
            <p>01/10/20</p>
          </a>
        </Article>
        <Article>
          <a href="/" style={{ textDecoration: "none", color: "#333" }}>
            <img
              style={{ display: "block", width: "100%" }}
              src="https://picsum.photos/1080/1440?random=6"
              alt="Article"
            />
            <h4>Silver Laceless Shoe</h4>
            <p> Nesta categoria toda a coluna é o botao para o link;</p>
            <hr />
            <p>01/10/20</p>
          </a>
        </Article>
        <Article>
          <a href="/" style={{ textDecoration: "none", color: "#333" }}>
            <img
              style={{ display: "block", width: "100%" }}
              src="https://picsum.photos/1080/1440?random=5"
              alt="Article"
            />
            <h4>Silver Laceless Shoe</h4>
            <p> Nesta categoria toda a coluna é o botao para o link;</p>
            <hr />
            <p>01/10/20</p>
          </a>
        </Article>
      </RowArticles>
    </div>
  );
};

export default PersonalArticles;
