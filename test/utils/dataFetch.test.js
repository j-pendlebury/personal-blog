import { fetchAllData, getAllPaths, getStoryById } from "../../utils/dataFetch";
import { returnAllData, returnSingleStory } from "../helpers/ghostApiDataMock";
import fetchMock from "fetch-mock";

const setupMock = (mockData) => {
  return fetch.mockResponseOnce(JSON.stringify(mockData));
};

describe("good scenario", () => {
  beforeAll(() => {
    process.env.GHOST_API_URL = "https://foo.bar";
    process.env.GHOST_API_KEY = "1234abcd";
  });

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
});

describe("two missing environment variables", () => {
  beforeAll(() => {
    delete process.env.GHOST_API_URL;
    delete process.env.GHOST_API_KEY;
  });

  it("should not call fetchAllData if both env variables are missing", async () => {
    setupMock(returnAllData);
    const data = await fetchAllData();

    expect(fetch).not.toHaveBeenCalled();
  });

  it("should not call getStoryById if both env variables are missing", async () => {
    setupMock(returnSingleStory);
    const data = await getStoryById("1");

    expect(fetch).not.toHaveBeenCalled();
  });
});

describe("one missing environment variable", () => {
  beforeAll(() => {
    delete process.env.GHOST_API_KEY;
  });

  it("should not call fetchAllData if one env variable is missing", async () => {
    setupMock(returnAllData);
    const data = await fetchAllData();

    expect(fetch).not.toHaveBeenCalled();
  });
});
