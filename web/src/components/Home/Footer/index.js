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
          <ColumnStyle>
            <div>
              <h3>Agradecimentos</h3>
              <p>
                Obrigado para os envolvidos neste projeto, pelo máximo esforço e paciencia, e a
                Jesus Cristo o Salvador, obrigado e louvor, porque esta é a vontade do Criador em
                seu Cristo. Pai, eu escolho não me preocupar com o que vejo e declaro e que a paz
                governe em meu coração; <br /> <br />
                Bem-aventurados os que não viram e ainda creram <br /> João 20:29 <br /> <br />
                Rei dos reis e Senhor dos senhores <br /> 1 Timóteo 1:17
              </p>
            </div>
          </ColumnStyle>
          <ColumnStyle>
            <AboutLinks>
              <a
                href="https://www.abiblia.org/ver.php?id=3546"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>Biblepédia</li>
              </a>
              <a
                href="https://www.livrariadacomunidade.com.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>Produtos</li>
              </a>
              <a
                href="https://www.igrejaemportoalegre.com.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>Parceiros</li>
              </a>
            </AboutLinks>
          </ColumnStyle>
        </RowStyle>
        <hr />
        <div style={{ textAlign: "center" }}>
          <p>Termos e Condições - 2022</p>
        </div>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
