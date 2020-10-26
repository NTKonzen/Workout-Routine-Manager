const express = require('express');
const mongoose = require('mongoose')
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`);
});
