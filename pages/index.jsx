import Header from "../components/Header";
import Main from "../components/Main";
import MainProject from "../components/MainProject";
import OtherProjects from "../components/OtherProjects";
import Footer from "../components/Footer";
import { fetchAllData } from "../utils/dataFetch";

const Home = ({ posts }) => {
  return (
    <>
      <Header />
      <Main />
      <section className="projects">
        <MainProject post={posts[0]} />
        <div className="other-projects">
          {posts.map((post, key) => {
            if (key === 0) return null;

            return <OtherProjects post={post} />;
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const posts = await fetchAllData();

  return {
    props: { posts },
  };
};

export default Home;
