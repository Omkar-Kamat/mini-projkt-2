import app from "./app.js"

const PORT = process.env.PORT; 


app.listen(PORT,(err,data)=>{
    console.log(`Listening on PORT ${PORT}`);
})