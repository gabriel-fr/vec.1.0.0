import { Container, FooterContainer, ColumnStyle } from "./styles";
import { RowStyle } from "../UserArticle/styles";
import { AboutLinks } from "../AboutContainer/styles";

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <RowStyle>
          <ColumnStyle>
            <AboutLinks>
              <a href="http://arcturo.co/vec-pt" target="_blank" rel="noopener noreferrer">
                <li>Apoie</li>
              </a>
              <a
                href="https://www.google.com/maps/search/church+near+me/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>Ache sua Congregacao</li>
              </a>
              <a
                href="http://www.centrowhite.org.br/files/ebooks/egw/Caminho%20a%20Cristo.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>O Caminho</li>
              </a>
              <a
                href="https://www.igrejaemportoalegre.com.br/categoria/discipulos/jovens/"
                rel="noopener noreferrer"
              >
                <li>Seja um Afiliado</li>
              </a>
              <a href="politicas.html" target="_blank" rel="noopener noreferrer">
                <li>Políticas de Privacidade</li>
              </a>
            </AboutLinks>
          </ColumnStyle>
        </RowStyle>
        <hr />
        <p>Termos e Condições</p>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
