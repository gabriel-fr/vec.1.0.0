import React, { useState } from "react";
import {
  HeaderContainer,
  TitleContainer,
  Title,
  ColumnsContainer,
  BackgroundImage,
} from "./styles";
import TextContainer from "../TextContainer";

const Header = () => {
  const [textDetail, setTextDetail] = useState("Texto exemplo de um destaque");

  return (
    <BackgroundImage>
      <HeaderContainer>
        <TitleContainer>
          <Title>Vivendo em Cristo </Title>

          <ColumnsContainer>
            <div style={{ width: "40%" }}>
              <TextContainer title="Destaque" variant="white" text={textDetail} />
            </div>
            <div style={{ width: "50%" }}>
              <TextContainer title="Sobre" variant="red" height="250px" />
            </div>
          </ColumnsContainer>
        </TitleContainer>
      </HeaderContainer>
    </BackgroundImage>
  );
};

export default Header;
