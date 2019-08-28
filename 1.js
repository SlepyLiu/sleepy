var express=require("express")
var app=express()
var mongoClient=require("mongodb").MongoClient
// console.log(mongoClient)

app.get("/add",(req,res)=>{
    mongoClient.connect("mongodb://127.0.0.1:27017",(err,db)=>{


        var dbName=db.db("admin")
        dbName.collection("col").insert({"username":"jack"},function(err){
            if(err){
                throw err
            }
            res.send("chengle")
            db.close()
        })
    })
    
})
app.listen(3000)