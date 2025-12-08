import keys from "./keys.js";
import redis from "redis";

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1_000,
});

const sub = redisClient.duplicate();

const fib = (n) => {
  if (n < 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

sub.on("message", (channel, idx) => {
  redisClient.hset("values", idx, fib(parseInt(idx)));
});

sub.subscribe("insert");
