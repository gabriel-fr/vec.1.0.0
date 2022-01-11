import React from "react";
import {
  UserArticleContainer,
  UserProfile,
  UserPhoto,
  UserDescription,
  UserName,
  ProfileButtons,
} from "./styles";
import AccountBox from "@material-ui/icons/AccountBox";
import BookIcon from "@material-ui/icons/Book";
import PersonalArticles from "../PersonalArticles";

const UserArticle = () => {
  return (
    <div>
      <UserArticleContainer>
        <UserProfile>
          <div>
            <UserPhoto
              src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=154"
              alt="Writer Photo"
            />
          </div>
        </UserProfile>
        <UserProfile>
          <div>
            <UserDescription>
              I graduated woth the class of 1983. Netus vestibulum mus quid aite qui nullam cupidate
              aenean leo. Egestas curae ridiculus voluptalibus distinclio ilum. Molitia viverra
              quidem similique iste.
              <UserName>Marcelo Barcelos</UserName>
            </UserDescription>
          </div>
        </UserProfile>
        <UserProfile>
          <ProfileButtons>
            <a href="/profile" title="Perfil" target="_blank" style={{ margin: 10 }}>
              <AccountBox style={{ color: "white", width: 50, height: 50 }} />
            </a>
            <a href="/" title="Leitura Preferida">
              <BookIcon style={{ color: "white", width: 50, height: 47 }} />
            </a>
          </ProfileButtons>
        </UserProfile>
        <PersonalArticles />
      </UserArticleContainer>
    </div>
  );
};

export default UserArticle;
