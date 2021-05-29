import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.resolve(__dirname, ".env.local") });

const envConfig = {
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_API_KEY,
};

export default envConfig;
