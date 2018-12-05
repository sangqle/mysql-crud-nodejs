class RedisDatabase {
  constructor() {
    this.redis = require("redis");
  }

  connectDB() {
    const client = this.redis.createClient({
      host: "127.0.0.1",
      port: 6379
    });

    client.on("error", err => {
      console.log("Error " + err);
    });

    client.on("ready", err => {
      console.log("Ready ");
    });

    return client;
  }
}

module.exports = new RedisDatabase().connectDB();
