import Header from "../components/Header";
import Main from "../components/Main";
import Projects from "../components/Projects";
import PostCard from "../components/post-card";
import Footer from "../components/Footer";
import { fetchAllData } from "../utils/dataFetch";

export default function Home({ posts }) {
  return (
    <>
      <Header />
      <Main />
      <Projects posts={posts} />
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const posts = await fetchAllData();

  return {
    props: { posts },
  };
};
