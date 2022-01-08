import React from "react";
import { HeaderContainer, TitleContainer, Title, ColumnsContainer } from "./styles";
import TextContainer from "../TextContainer";

const Header = () => {
  return (
    <HeaderContainer>
      <TitleContainer>
        <Title>Vivendo em Cristo </Title>

        <ColumnsContainer>
          <div style={{ width: "50%" }}>
            <TextContainer title="Destaque" variant="white" />
          </div>
          <div style={{ width: "50%" }}>
            <TextContainer title="Sobre" variant="red" />
          </div>
        </ColumnsContainer>
      </TitleContainer>
    </HeaderContainer>
  );
};

export default Header;
