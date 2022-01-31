import Header from "./components/Header";
import GlobalArticles from "./components/GlobalArticles";
import UserArticles from "./components/UserArticles";
import AboutContainer from "./components/AboutContainer";

function Home() {
  return (
    <>
      <Header />
      <GlobalArticles />
      <UserArticles />
      <AboutContainer />
    </>
  );
}

export default Home;
