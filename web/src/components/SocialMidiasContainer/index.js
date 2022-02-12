import { SmallContainer } from "../AboutContainer/styles";
import { RowContainer } from "./styles";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

const SocialMidiasContainer = () => {
  return (
    <div style={{ paddingBottom: 80 }}>
      <div style={{ padding: "70px 0" }}>
        <SmallContainer>
          <RowContainer>
            <h3>
              Nada por contenda ou por vanglória, mas com humildade na mente; cada um considere os
              outros melhores do que a si mesmo. Filipenses (2:3)
            </h3>
          </RowContainer>
        </SmallContainer>
      </div>
      <div>
        <div style={{ margin: "30px auto" }}>
          <SmallContainer>
            <RowContainer>
              <a
                href="mailto:gabriel.ribeiro8@hotmail.com?subject=Site Vivendo em Cristo"
                style={{ textDecoration: "none", color: "darkgrey" }}
                target="_blank"
                rel="noreferrer"
              >
                <EmailIcon
                  style={{ filter: "drop-shadow(1px 1px 0.8px red) invert(75%)", fontSize: 75 }}
                />
              </a>

              <a
                href="https://www.instagram.com/jovens.poa/"
                style={{ textDecoration: "none", color: "darkgrey" }}
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon
                  style={{ filter: "drop-shadow(1px 1px 0.8px red) invert(75%)", fontSize: 75 }}
                />
              </a>

              <a
                href="https://twitter.com/JovensPoa"
                style={{ textDecoration: "none", color: "darkgrey" }}
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon
                  style={{ filter: "drop-shadow(1px 1px 0.8px red) invert(75%)", fontSize: 75 }}
                />
              </a>
              <a
                href="https://www.facebook.com/jovens.poa"
                style={{ textDecoration: "none", color: "darkgrey" }}
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon
                  style={{ filter: "drop-shadow(1px 1px 0.8px red) invert(75%)", fontSize: 75 }}
                />
              </a>
              <a
                href="https://www.youtube.com/c/IgrejaemPortoAlegre"
                style={{ textDecoration: "none", color: "darkgrey" }}
                target="_blank"
                rel="noreferrer"
              >
                <YouTubeIcon
                  style={{ filter: "drop-shadow(1px 1px 0.8px red) invert(75%)", fontSize: 75 }}
                />
              </a>
            </RowContainer>
          </SmallContainer>
        </div>
      </div>
    </div>
  );
};

export default SocialMidiasContainer;
