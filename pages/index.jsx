import Head from "next/head";
import styles from "../styles/Home.module.css";
import { fetchAllData } from "../utils/dataFetch";
import PostCard from "../components/post-card";

export default function Home({ posts }) {
  return posts.map((post) => {
    return <PostCard post={post} key={post.id} />;
  });
}

export const getStaticProps = async () => {
  const posts = await fetchAllData();

  return {
    props: { posts },
  };
};
