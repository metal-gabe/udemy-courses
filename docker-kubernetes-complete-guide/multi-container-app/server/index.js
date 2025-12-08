import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import keys from "./keys";
import redis from "redis";
import { Pool } from "pg";

// general server setup
const app = express();
app.use(cors());
app.use(bodyParser.json());

// redis pool & client setup
const pgClient = new Pool({
   database: keys.pgDatabase,
   host: keys.pgHost,
   password: keys.pgPassword,
   port: keys.pgPort,
   user: keys.pgUser,
});

pgClient.on("error", () => console.log("Lost PG connection"));

pgClient.query("CREATE TABLE IF NOT EXISTS values (number INT)").catch((err) => console.log(err));

const redisClient = redis.createClient({
   host: keys.redisHost,
   port: keys.redisPort,
   retry_strategy: () => 1_000,
});

const redisPublisher = redisClient.duplicate();

// route handlers
app.get("/", (req, res) => {
   res.send("Hi");
});

app.get("/values/all", async (req, res) => {
   const values = await pgClient.query("SELECT * FROM values");
   res.send(values.rows);
});

app.get("/values/current", async (req, res) => {
   redisClient.hgetall("values", (err, values) => {
      res.send(values);
   });
});

app.post("/values", async (req, res) => {
   const index = req.body.index;

   if (parseInt(index) > 40) {
      return res.status(422).send("Index too high");
   }

   redisClient.hset("values", index, "Nothing yet!");
   redisPublisher.publish("insert", index);
   pgClient.query("INSERT INTO values(number) VALUES($1)", [index]);
   res.send({ working: true });
});

app.listen(5_000, () => console.log("Listening on port 5000"));
