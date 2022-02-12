import Header from "./components/Header";
import GlobalArticles from "./components/GlobalArticles";
import UserArticles from "./components/UserArticles";
import AboutContainer from "./components/AboutContainer";
import SocialMidiasContainer from "./components/SocialMidiasContainer";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <Header />
      <GlobalArticles />
      <UserArticles />
      <AboutContainer />
      <SocialMidiasContainer />
      <Footer />
    </>
  );
}

export default Home;
