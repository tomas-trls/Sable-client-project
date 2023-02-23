import Layout from "../../components/Layout/Layout";
import PageHeader from "../../components/PageHeader/PageHeader";
import NavContainer from "../../containers/NavContainer/NavContainer";
import "../Home/Home.scss";

const Home = () => {
  return (
    <div className="app-container">
      <NavContainer />
      <Layout>
        <PageHeader headerType="headingOnly" heading="Home" />
        <h1>Page Heading</h1>
        <h2>Section Heading</h2>
        <h3>Panel Heading</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non error
          dolor in nostrum minima odio a fuga saepe soluta adipisci perspiciatis
          maxime tempora, temporibus beatae voluptas repellat rerum.
          Dignissimos, necessitatibus.
        </p>
      </Layout>
    </div>
  );
};

export default Home;
