import  mongoose from  'mongoose';
const db = async () =>{
    try {
        
        const databaseresponse = await mongoose.connect('mongodb://127.0.0.1:27017/webclass')
        console.log("db is connected Successfully...!");
        
    } catch (error) {
        console.log(error);
    }
}
export default db;