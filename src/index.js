import dotenv from "dotenv";
import { conncetDB } from "./db/index.js";

dotenv.config({ path: "/.env" });

conncetDB();
