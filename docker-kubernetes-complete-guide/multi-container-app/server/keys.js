export default {
   pgDatabase: process.env.PG_DATABASE || "database",
   pgHost: process.env.PG_HOST || "localhost",
   pgPassword: process.env.PG_PASSWORD || "password",
   pgPort: process.env.PG_PORT || 5432,
   pgUser: process.env.PG_USER || "user",
   redisHost: process.env.REDIS_HOST || "localhost",
   redisPort: process.env.REDIS_PORT || 6379,
};
