import dotenv from "dotenv";
dotenv.config();

// https://ghost.org/docs/content-api/
export const fetchAllData = async () => {
  const URL = process.env.GHOST_API_URL;
  const API_KEY = process.env.GHOST_API_KEY;
  if (!URL || !API_KEY) return "Need to provide valid environment variables";
  const response = await fetch(`${URL}/posts?key=${API_KEY}`);
  const { posts } = await response.json();

  return posts;
};

export const getAllPaths = async () => {
  const posts = await fetchAllData();
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

export const getStoryById = async (id) => {
  const URL = process.env.GHOST_API_URL;
  const API_KEY = process.env.GHOST_API_KEY;
  if (!URL || !API_KEY) return "Need to provide valid environment variables";
  const response = await fetch(`${URL}/posts/${id}?key=${API_KEY}`);
  const post = await response.json();

  return post;
};
