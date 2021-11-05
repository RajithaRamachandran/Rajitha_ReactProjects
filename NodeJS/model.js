const mongoose=require('mongoose')

let M_Schema= mongoose.Schema

const todoSchema=new M_Schema(
    {
        moviename:String,
        actor:String,
        actress:String,
        director:String,
        releaseyear:String,
        camera:String,
        producer:String,
        language:String
    }
)


var todomodel=mongoose.model("todos",todoSchema)
module.exports={todomodel}