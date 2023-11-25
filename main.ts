// @deno-types="npm:@types/express@4"
import express from "npm:express@4.18.2";
import mongoose from "npm:mongoose@8.0.0";

import addDisco from "./resolvers/addDisco.ts";
import getDisco from "./resolvers/getDisco.ts";
import getDiscos from "./resolvers/getDiscos.ts";
import getDiscosByName from "./resolvers/getDiscoByName.ts";
import getDiscosByFormat from "./resolvers/getDiscoByFormat.ts";
import getDiscosByCountry from "./resolvers/getDiscoByCountry.ts";
import updateDisco from "./resolvers/updateDisco.ts";
import deleteDisco from "./resolvers/deleteDisco.ts";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";


const env = await load();

const MONGO_URL = env.MONGO_URL || Deno.env.get("MONGO_URL");

if (!MONGO_URL) {
  console.log("No mongo URL found");
  Deno.exit(-1);
}

await mongoose.connect(MONGO_URL);
const app = express();
app.use(express.json());

app
.post("/api/discos", addDisco)
.delete("/api/discos/:id", deleteDisco)
.get("/api/discos", getDiscos)
.get("/api/discos/:id", getDisco)
.get("/api/discos/nombre/:name", getDiscosByName)
.get("/api/discos/formato/:format", getDiscosByFormat)
.get("/api/discos/pais/:country", getDiscosByCountry)
.put("/api/discos/:id", updateDisco);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});