 let express =  require("express")
 const mongoose = require("mongoose")
 const categoryRoutes = require("./middleware")

 let app =  express()
 let PORT = 3000


 mongoose
 .connect("mongodb://localhost/first_mongoDB") 
 .then(()=> console.log("dataBase connectted"))
 .catch((err)=>console.log("err conncting dataBase",err))


 app.get('/',(req,res)=>{
	res.send("<h1> What's Good! </h1>");
 })

 app.use('/',categoryRoutes)


 app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});