import dotenv from "dotenv"
import connnectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connnectDB()
.then( () => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
        
    } )
} )
.catch( (err) => {
    console.log("MONOGO db connection failed !!! ", err);
    
} )