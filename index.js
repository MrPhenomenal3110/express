const express = require("express");

const app = express();

app.use(express.json());

const PORT = 5137;

const courses = [
    {
        id: 1,
        name: "Physics",
    },
    {
        id: 2,
        name: "Chemistry",
    },
    {
        id: 3,
        name: "Mathematics",
    },
    {
        id: 4,
        name: "Computer Science",
    },
];

app.get("/courses", (req, res) => {
    res.json(courses)
});

app.post("/courses", (req, res)=> {
    const data = req.body;
    const course = {
        id: courses.length+1,
        ...data,
    }
    courses.push(course);
    res.send(200);

})
app.put("/courses/:id", (req, res) => {
    const ID = parseInt(req.params["id"]);
    const data = req.body.name;

    courses[ID-1].name = data;
    res.send(200);

})

app.delete("/courses/:id", (req, res) => {
    const ID = parseInt(req.params["id"]);
    courses.splice(ID-1, 1);
    res.send(200);
})

app.listen(PORT, ()=> {
    console.log(`Listening at port: ${PORT}`);
});