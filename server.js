const { app, json_converter } = require("./config/express");
require("dotenv").config();
const connect_DB = require("./config/connectDB");
const router = require("./router/router");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//connecting to database
connect_DB();

//middleware
app.set("trust proxy", 5);
app.use(
  cors({
    // origin: "*",
    // origin: "https://graphic-card-seller.onrender.com",
    origin: [
      "*",
      "http://localhost:3000",
      "https://graphic-card-seller.onrender.com",
      "https://graphic-card-seller.cyclic.app",
    ], // replace with the origin of your client-side application
    credentials: true,
  })
);
app.use(json_converter);
app.use(cookieParser());
app.use("/api/v1", router);
//err handler
// app.use((err, req, res) => {
//   res.json({
//     message: err.message,
//   });
// });

app.listen(process.env.PORT, () => {
  console.log(`port at ${process.env.PORT}`);
});
