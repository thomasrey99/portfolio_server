const server=require("./src/app");
const { dataBase } = require("./src/database");
const {
    SERVER_PORT
}=process.env

const startServer=async()=>{
    try {
      await dataBase.sync({alter:true})
      server.listen(SERVER_PORT, () => {
        console.log(`Server listening!`);
      });
    } catch (error) {
      console.error('Error starting server:', error.message);  
    }
 }

startServer()