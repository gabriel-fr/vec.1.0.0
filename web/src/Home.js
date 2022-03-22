import Header from "./components/Home/Header";
import GlobalArticles from "./components/Home/GlobalArticles";
import UserArticles from "./components/Home/UserArticles";
import AboutContainer from "./components/Home/AboutContainer";
import SocialMidiasContainer from "./components/Home/SocialMidiasContainer";
import Footer from "./components/Home/Footer";

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
