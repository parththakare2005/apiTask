const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let tasks =[
    {
        id:1,
        title:"Learn Node",
        completed:false,
    },
    {
        id:2,
        title:"Learn React",
        completed:true,
    },
];

app.get("/tasks",(req,res)=>
{
    res.status(200).json(tasks);
});

app.post("/tasks",(req,res)=>
{
    let {title} = req.body;
     
    if(!title)
    {
        return res.status(400).json({
            message:"Title is invalid",
        })
    }
    const newTask = {
        id:task.length+1,
        title,
    }
    tasks.push(newTask);

});

app.patch("/tasks/:id",(req,res)=>
{
    const task = task.find((id)=>task.id == id);
    if(!task)
    {
        return res.status(404).json({
            message:"Not Found ",
        })
    }
    task.completed = ! task.completed;
    res.json(task);
})
app.listen(5000,()=>
{
    console.log("server running on port 5000");
});