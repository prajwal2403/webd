//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
var bandName = " ";
var isUserAuthorized = false;
function password(req, res, next) {
    console.log(req.body);
    bandName = req.body["password"];
    if (bandName == "ILoveProgramming") { 
        isUserAuthorized = true;
     }
     next();

}

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(password);
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");

})

app.use(password);

app.post("/check", (req, res) => {
    if (isUserAuthorized == true){
        res.sendFile(__dirname + "/public/secret.html");
    }
    else{
        res.sendFile(__dirname + "/public/index.html");
    }

})

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
})