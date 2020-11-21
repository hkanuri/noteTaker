const express = require("express");
// const apiRoutes = require("./routes/apiRoutes");
// const htmlRoutes = require("./routes/htmlRoutes");


const app= express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// app.use("/api", apiRoutes);
// app.use("/", htmlRoutes);
require("./routes/apiRoutes")(app)
require("./routes/htmlRoutes")(app)

app.use(express.static("public"));

app.listen(PORT, () => console.log(`Listeing on PORT: ${PORT}`));