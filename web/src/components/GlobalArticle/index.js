import React from "react";
import {
  ArticleContainer,
  ArticleDescription,
  RedirectLink,
  TextDescription,
  ArticleImage,
} from "./styles";

const GlobalArticle = ({ photo, title, description, redirectLink }) => {
  return (
    <ArticleContainer>
      <RedirectLink href={redirectLink}>
        <div style={{ backgroundColor: "aliceblue", height: "500px" }}>
          <ArticleImage src={photo} alt={title} />
        </div>

        <ArticleDescription>
          <h2>{title}</h2>
          <TextDescription>{description}</TextDescription>
        </ArticleDescription>
      </RedirectLink>
    </ArticleContainer>
  );
};

export default GlobalArticle;
