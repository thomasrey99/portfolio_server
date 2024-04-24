const { DataTypes } = require("sequelize");

module.exports=(database)=>{
    database.define(
        "Skill", {
            uid:{
                type:DataTypes.UUID,
                primaryKey:true,
                defaultValue:DataTypes.UUIDV4
            },
            name:{
                type:DataTypes.STRING,
                allowNull:false
            },
            image:{
                type:DataTypes.STRING,
                allowNull:false,
            },
            year_learning:{
                type:DataTypes.STRING,
                allowNull:false,
            }
        },
        {
            freezeTableName: true,
            timestamps: false,
            createdAt:false,
            updatedAt:false
        }
    )
}