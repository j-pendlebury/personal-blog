// https://ghost.org/docs/content-api/
export const fetchAllData = async ({ url, key }) => {
  if (checkMissingEnv(url, key)) return "Missing parameters";
  const response = await fetch(`${url}/posts?key=${key}`);
  const { posts } = await response.json();

  return posts;
};

export const getAllPaths = async ({ url, key }) => {
  if (checkMissingEnv(url, key)) return "Missing parameters";
  const posts = await fetchAllData({ url, key });
  const routes = [];

  posts.forEach((post) => {
    routes.push({
      params: {
        id: post.id,
      },
    });
  });

  return routes;
};

export const getStoryById = async ({ url, key }, id) => {
  if (checkMissingEnv(url, key)) return "Missing parameters";
  const response = await fetch(`${url}/posts/${id}?key=${key}`);
  const post = await response.json();

  return post;
};

const checkMissingEnv = (url, key) => {
  return !url || !key;
};
