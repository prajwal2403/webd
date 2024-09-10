import express from "express"

const app = express();

app.get("/", (req, res) => {
    res.send(" Hello World ");
}
)

app.get("/about", (req, res) => {
    res.send(" about Hello World ");
}
)
app.get("/contact", (req, res) => {
    res.send(" contact Hello World ");
}
)
const port = 3000;
app.listen(port, () => {
    console.log(`server is running on PORT ${port}`);
})