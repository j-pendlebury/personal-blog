import { fetchAllData, getAllPaths, getStoryById } from "../../utils/dataFetch";
import { returnAllData, returnSingleStory } from "../helpers/ghostApiDataMock";
import fetchMock from "fetch-mock";

const setupMock = (mockData) => {
  return fetch.mockResponseOnce(JSON.stringify(mockData));
};

const mockEnvConfig = {
  url: "https://foo.bar",
  key: "1234abcd",
};

const emptyMockEnvConfig = {};

describe("good scenario", () => {
  it("fetches all data correctly", async () => {
    setupMock(returnAllData);
    const data = await fetchAllData(mockEnvConfig);

    expect(data).toEqual(returnAllData.posts);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("gets all paths correctly", async () => {
    setupMock(returnAllData);
    const result = await getAllPaths(mockEnvConfig);
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
    const result = await getStoryById(mockEnvConfig, "1");

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result).toEqual(returnSingleStory);
  });
});

describe("two missing environment variables", () => {
  it("should not call fetchAllData if both env variables are missing", async () => {
    setupMock(returnAllData);
    const result = await fetchAllData(emptyMockEnvConfig);

    expect(fetch).toThrowError();
    expect(result).toEqual("Missing parameters");
  });

  it("should not call getStoryById if both env variables are missing", async () => {
    setupMock(returnSingleStory);
    const result = await getStoryById(emptyMockEnvConfig, "1");

    expect(fetch).toThrowError();
    expect(result).toEqual("Missing parameters");
  });
});

describe("one missing environment variable", () => {
  it("should not call fetchAllData if one env variable is missing", async () => {
    setupMock(returnAllData);
    const result = await fetchAllData(emptyMockEnvConfig);

    expect(fetch).toThrowError();
    expect(result).toEqual("Missing parameters");
  });
});
