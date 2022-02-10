import Header from "./components/Header";
import GlobalArticles from "./components/GlobalArticles";
import UserArticles from "./components/UserArticles";
import AboutContainer from "./components/AboutContainer";
import SocialMidiasContainer from "./components/SocialMidiasContainer";

function Home() {
  return (
    <>
      <Header />
      <GlobalArticles />
      <UserArticles />
      <AboutContainer />
      <SocialMidiasContainer />
    </>
  );
}

export default Home;
