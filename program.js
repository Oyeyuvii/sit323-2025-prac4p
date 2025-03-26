const express = require ("express");
const res= require("express/lib/response");
const app= express();
const add= (n1,n2) => {
    return n1+n2;
}
const subtract=(n1,n2) =>{
    return n1-n2;
}
const multiply=(n1,n2) =>{
    return n1*n2;
}
const divison=(n1,n2) =>{
    if (n2==0 || n1==0){
        throw new Error("Dividing by zero is prohibited.");
    }
    return n1/n2;
}
app.get("/add",(req,res)=>{
    try{
        const n1= parseFloat(req.query.n1);
        const n2= parseFloat(req.query.n2);
        if(isNaN(n1)){
            throw new Error("n1 is incorrectly defined");
        }
        if(isNaN(n2)){
            throw new Error("n2 is incorrectly defined");
        }
        if(n1==NaN || n2==NaN){
            console.log()
            throw new error("Prasing Error");
        }
        const result = add(n1,n2);
        res.status(200).json({statuscode:200, data: result});
    }
    catch(error){
        console.log(error)
        res.status(500).json({statuscode:500, msg: error.toString() });
    }
});
app.get("/subtract",(req,res)=>{
    try{
        const n1= parseFloat(req.query.n1);
        const n2= parseFloat(req.query.n2);
        if(isNaN(n1)){
            throw new Error("n1 is incorrectly defined");
        }
        if(isNaN(n2)){
            throw new Error("n2 is incorrectly defined");
        }
        if(n1==NaN || n2==NaN){
            console.log()
            throw new error("Prasing Error");
        }
        const result = subtract(n1,n2);
        res.status(200).json({statuscode:200, data: result});
    }
    catch(error){
        console.log(error)
        res.status(500).json({statuscode:500, msg: error.toString() });
    }
});
app.get("/multiply",(req,res)=>{
    try{
        const n1= parseFloat(req.query.n1);
        const n2= parseFloat(req.query.n2);
        if(isNaN(n1)){
            throw new Error("n1 is incorrectly defined");
        }
        if(isNaN(n2)){
            throw new Error("n2 is incorrectly defined");
        }
        if(n1==NaN || n2==NaN){
            console.log()
            throw new error("Prasing Error");
        }
        const result = multiply(n1,n2);
        res.status(200).json({statuscode:200, data: result});
    }
    catch(error){
        console.log(error)
        res.status(500).json({statuscode:500, msg: error.toString() });
    }
});
app.get("/divison",(req,res)=>{
    try{
        const n1= parseFloat(req.query.n1);
        const n2= parseFloat(req.query.n2);
        if(isNaN(n1)){
            throw new Error("n1 is incorrectly defined");
        }
        if(isNaN(n2)){
            throw new Error("n2 is incorrectly defined");
        }
        if(n1==NaN || n2==NaN){
            console.log()
            throw new error("Prasing Error");
        }
        const result = divison(n1,n2);
        res.status(200).json({statuscode:200, data: result});
    }
    catch(error){
        console.log(error)
        res.status(500).json({statuscode:500, msg: error.toString() });
    }
});
const port= 3040;
app.listen(port,()=> {
    console.log("hello im listening to port"+port);
})