import app from "./app.js"
import {connectToDatabase} from "./database/connect.js"


connectToDatabase();
const PORT = process.env.PORT || 8000;


app.listen(PORT, () => {
    console.log(`listening on Port ${PORT}`);
})