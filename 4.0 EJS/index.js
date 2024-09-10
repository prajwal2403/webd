import express from "express";
import bodyParser  from "body-parser";


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

const date = new Date();
let day = date.getDate();

app.get("/", (req,res)=>{
    res.render("index.ejs",{
        dayTime: "Weekday", advice:"It's time to work Hard"
    });
});

app.listen(port,()=>{
    console.log(`Server iis running on port ${port}`);
})