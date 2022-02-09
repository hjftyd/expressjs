const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const tagRoute = require("./routes/tags");
const dotenv = require("dotenv");

dotenv.config();
app.use(express.json());
const port = 3000
   
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
   
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/tags", tagRoute);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});