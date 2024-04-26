const {DataTypes}=require("sequelize")

module.exports=(database)=>{
    database.define(
        "Certification", {
            uid:{
                type:DataTypes.UUID,
                primaryKey:true,
                defaultValue:DataTypes.UUIDV4
            },
            title:{
                type:DataTypes.STRING,
                allowNull:false
            },
            institution:{
                type:DataTypes.STRING,
                allowNull:false
            },
            image:{
                type:DataTypes.STRING,
                allowNull:false
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