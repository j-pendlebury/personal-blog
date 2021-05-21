const Projects = ({ posts }) => {
  return (
    <section className="projects">
      <div className="first-project">
        <a href={`posts/${posts[0].id}`}>
          <div className="image">
            <img src={posts[0].feature_image} alt="" />
          </div>
          <div className="text-wrapper">
            <h2>{posts[0].title}</h2>
            <p>{posts[0].excerpt}</p>
          </div>
        </a>
      </div>
      <div className="other-projects">
        {posts.map((post, key) => {
          if (key === 0) {
            return null;
          }

          return (
            <div className="other-project">
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
        })}
      </div>
    </section>
  );
};

export default Projects;
