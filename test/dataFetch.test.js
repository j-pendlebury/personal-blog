import { fetchAllData, getAllPaths, getStoryById } from "../utils/dataFetch";
import { returnAllData, returnSingleStory } from "./helpers/ghostApiDataMock";
import fetchMock from "fetch-mock";

const setupMock = (mockData) => {
  return fetch.mockResponseOnce(JSON.stringify(mockData));
};

it("fetches all data correctly", async () => {
  setupMock(returnAllData);
  const data = await fetchAllData();

  expect(data).toEqual(returnAllData.posts);
  expect(fetch).toHaveBeenCalledTimes(1);
});

it("gets all paths correctly", async () => {
  setupMock(returnAllData);
  const result = await getAllPaths();
  const { posts } = returnAllData;
  const routes = [];

  posts.forEach((post) => {
    routes.push({
      params: {
        id: post.id,
      },
    });
  });

  expect(result).toEqual(routes);
  expect(fetch).toHaveBeenCalledTimes(1);
});

it("gets correct data by ID", async () => {
  setupMock(returnSingleStory);
  const result = await getStoryById("1");

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(result).toEqual(returnSingleStory);
});
