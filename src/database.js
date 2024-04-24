const { Sequelize } = require("sequelize");
const skillModel=require("./skills/model/index")
const experienceModel=require("./experience/model/index")
const certificationModel=require("./certifications/model/index")

require("dotenv").config(); 

const {
    DB_USER,
    DB_PASSWORD,  
    DB_HOST, 
    DB_NAME,
    DB_DIALECT,
    DB_PORT
  } = process.env;

const dataBase=new Sequelize( 
`${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
{logging:false}
)

//*CONEXION DE MODELOS
skillModel(dataBase)
experienceModel(dataBase)
certificationModel(dataBase)

module.exports={
    ...dataBase.models,
    dataBase
}