import React from "react";

type Post = {
  post: {
    id: string;
    feature_image: string;
    title: string;
    excerpt: string;
  };
};

const MainProject = ({ post }: Post) => {
  return (
    <div className="first-project">
      <a href={`posts/${post.id}`}>
        <div className="image">
          <img src={post.feature_image} alt="" />
        </div>
        <div className="text-wrapper">
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </div>
      </a>
    </div>
  );
};

export default MainProject;
