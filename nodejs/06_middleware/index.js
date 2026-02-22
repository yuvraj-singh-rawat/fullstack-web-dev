import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json()); // Parses incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded form data

// Routes 
app.post("/user/register", (req, res) => {
    const obj = req.body;
    console.log(obj);

    res.status(201).json({
        success: true,
        message: "Account created Successfully"
    })
})


app.post("/user/login", (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);

    res.status(200).json({
        success: true,
        message: "Login Successfully"
    })
})


// Query Parameter
app.get('/user/:id', (req, res) => {
    const getID = req.params.id;
    console.log(getID)

    res.status(200).json({
        success: true,
        message: "User id is found",
        userId: getID
    });

})

app.listen(PORT, () => {
    console.log(`Server listen at port ${PORT}`);
});