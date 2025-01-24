const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());


app.get('/ping',(req,res)=>{
    res.status(200).send({
        message: "API is working now"
    })
})                                                                                        

app.listen(PORT,()=>{console.log(`The server is running at http://localhost:${PORT}`)});
