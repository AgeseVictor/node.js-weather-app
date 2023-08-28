const express = require('express');

const app = express();

// middleware && static files
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use((req,res,next)=>{
    let now = new Date().toDateString();
    console.log(now)
    next();
})






const blogs = [
    {title: 'why meat is sweeter than fish', snippet: "I like rice to beans"},
    {title: 'why egg is sweeter than crayfish', snippet: "I yam rice to bread"},
    {title: 'why suya is sweeter than sharwama', snippet: "I like beef to beans"},
]

app.get('/', (req,res)=>{
    res.render("index", {title: "home", blogs})    
});

app.get('/bad', (req, res)=>{
    res.send({
        errorMessage: "error"
    })
})


// 404
app.use((req, res)=>{
    res.send("404")
})







app.listen(5000, ()=>console.log('server is running!'))