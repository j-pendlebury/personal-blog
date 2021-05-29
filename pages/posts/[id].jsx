import Link from "next/link";
import { getStoryById, getAllPaths } from "../../utils/dataFetch";
import envConfig from "../../utils/envGetter";

const Post = ({ post }) => {
  return (
    <>
      <Link href="/">
        <a>Go Back</a>
      </Link>
      <div dangerouslySetInnerHTML={createMarkup(post.html)}></div>
    </>
  );
};

const createMarkup = (html) => {
  return { __html: html };
};

export const getStaticProps = async ({ params }) => {
  const post = await getStoryById(envConfig, params.id);

  return {
    props: {
      post: post.posts[0],
    },
  };
};

export const getStaticPaths = async () => {
  const routes = await getAllPaths(envConfig);

  return {
    paths: routes,
    fallback: false,
  };
};

export default Post;
