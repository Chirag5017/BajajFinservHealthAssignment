import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


import userRoute from "./routes/user.route.js";
app.use("/bfhl", userRoute);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})