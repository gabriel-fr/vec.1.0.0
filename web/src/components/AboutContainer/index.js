import { BackgroundImage } from "../Header/styles";
import {
  SmallContainer,
  TrasparentContainer,
  TextContainer,
  AboutButtons,
  AboutLinks,
} from "./styles";

const AboutContainer = () => {
  return (
    <>
      <BackgroundImage>
        <div style={{ paddingTop: 100, paddingBottom: 80, height: 300, marginBottom: 50 }}>
          <SmallContainer>
            <TrasparentContainer>
              <div style={{ flexBasis: "50%", minWidth: 300 }}>
                <TextContainer>
                  Neste ambiente do site dispomos de alguns itens exclusivos do Vivendo em Cristo;
                  unificamos materiais específicos para o regozijo no Reino com ajuda de grandes
                  amigos nesta bem-aventurada jornada! Os códigos "Embed" são para aqueles que
                  queiram inserir os Artigos direto para sua page; Mas esteja livre para modificar e
                  agrupar em seu próprio link.
                  <br />
                  <br />- Qualquer novidade de cupons poderá estar em "Destaque" na parte superior
                  da page.
                </TextContainer>
              </div>
              <div style={{ flexBasis: "50%", minWidth: 300 }}>
                <AboutButtons>
                  <h2 style={{ color: "#ff523b", paddingRight: 19 }}>Exclusivo</h2>
                  <AboutLinks>
                    <li>
                      <a href="https://www.cuponomia.com.br/">Cupons</a>
                    </li>
                    <li>
                      <a href="https://www.todamateria.com.br/bibliografia/">Bibliografia</a>
                    </li>
                    <li>
                      <a href="https://www.radiogospelfm.com.br/">Rádio</a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/c/TheChosenSeries/videos">Vídeos</a>
                    </li>
                  </AboutLinks>
                </AboutButtons>
              </div>
            </TrasparentContainer>
          </SmallContainer>
        </div>
      </BackgroundImage>
    </>
  );
};

export default AboutContainer;
