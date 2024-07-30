const express = require ("express");
const cors = require("cors");
const {accountRouter} = require("./routes/account.route");

const app =express();

app.use (cors());

app.use("/accounts, accountRouter")



app.listen(3001, () => {
    console.log("server is runnning on port 3001");
});