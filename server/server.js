const app = require("./app");
const mongoose = require("mongoose");

const PORT = process.env.PORT || "3000";
const DB_NAME = process.env.DB_NAME || "messages";
const DB_URL = process.env.DB_URL || `mongodb://localhost:27017/${DB_NAME}`;


async function startApp() {
    try {
        await mongoose.connect(
            DB_URL,
            { useNewUrlParser: true},
            { useUnifiedTopology: true}
        );
        app.listen(PORT, () => {
            console.log(`Server start at port: ${PORT}`);
        })
    } catch (err) {
        console.log(err)
    }
}

startApp().then(() => {
    console.log("App start")
})
.catch((err) => console.log(err));