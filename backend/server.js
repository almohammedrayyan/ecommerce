const app = require("./app");

const dotenv = require("dotenv");
const connectDataBase = require("./confiq/database");
//handling uncaught exception

process.on("uncaughtException", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`Shutting down the server due to unhandled promise rejection`);
  process.exit(1);
});
//confiq

dotenv.config({ path: "backend/confiq/confiq.env" });

//connecting database

connectDataBase();

app.listen(process.env.PORT, () => {
  console.log(`server is working on https://localhost:${process.env.PORT}`);
});

//unhandled promise rejection

process.on("unhandledRejection", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`Shutting down the server due to unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
