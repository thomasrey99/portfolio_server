const {DataTypes}=require("sequelize")

module.exports=(database)=>{
    database.define(
        "Experience", {
            uid:{
                type:DataTypes.UUID,
                primaryKey:true,
            },
            company:{
                type:DataTypes.STRING,
                allowNull:false
            },
            name:{
                type:DataTypes.STRING,
                allowNull:false
            },
            description:{
                type:DataTypes.TEXT,
                allowNull:false,
            },
            start_date:{
                type:DataTypes.STRING,
                allowNull:false,
            },
            end_date:{
                type:DataTypes.STRING,
                allowNull:false
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