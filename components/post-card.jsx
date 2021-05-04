import Link from "next/link";

const PostCard = ({ post: { title, id, feature_image } }) => {
  return (
    <Link href={`/posts/${id}`}>
      <a>
        <div id={title}>
          <img src={feature_image} width={"200px"} />
          <h1>{title}</h1>
        </div>
      </a>
    </Link>
  );
};

export default PostCard;
