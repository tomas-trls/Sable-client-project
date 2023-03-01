import Layout from "../../components/Layout/Layout";
import NavContainer from "../../containers/NavContainer/NavContainer";
import "../Home/Home.scss";
import HomePageContainer from "../../containers/HomePageContainer/HomePageContainer";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";
const Home = () => {
  return (
    <div className="home-container">
      <NavContainer />
      <Layout>
        <PageHeader heading="Home" headerType="headingOnly" />
        <HomePageContainer />
      </Layout>
    </div>
  );
};

export default Home;

