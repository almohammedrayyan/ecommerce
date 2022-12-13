const app = require("./app");

const dotenv = require("dotenv");
const connectDataBase = require("./confiq/database");
//confiq

dotenv.config({ path: "backend/confiq/confiq.env" });

//connecting database

connectDataBase();

app.listen(process.env.PORT, () => {
  console.log(`server is working on https://localhost:${process.env.PORT}`);
});
