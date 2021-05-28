import path from "path";
import { fetchAllData, convert } from "../utils/dataFetch";
import returnValue from "./helpers/ghostApiDataMock";
import fetchMock from "fetch-mock";
import dotenv from "dotenv";
dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

const URL = process.env.GHOST_API_URL;
const API_KEY = process.env.GHOST_API_KEY;

beforeEach(() => {
  fetch.resetMocks();
});

it("fetches data correctly", async () => {
  fetch.mockResponseOnce(JSON.stringify(returnValue));

  const data = await fetchAllData(URL, API_KEY);

  expect(data).toEqual(returnValue.posts);
  expect(fetch).toHaveBeenCalledTimes(1);
});
