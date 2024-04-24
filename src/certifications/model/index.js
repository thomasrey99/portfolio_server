const {DataTypes}=require("sequelize")

module.exports=(database)=>{
    database.define(
        "Certification", {
            uid:{
                type:DataTypes.UUID,
                primaryKey:true,
            },
            title:{
                type:DataTypes.STRING,
                allowNull:false
            },
            institution:{
                type:DataTypes.STRING,
                allowNull:false
            },
            start_date:{
                type:DataTypes.DATE,
                allowNull:false,
            },
            end_date:{
                type:DataTypes.DATE,
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