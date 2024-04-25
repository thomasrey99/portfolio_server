const {DataTypes}=require("sequelize")

module.exports=(database)=>{
    database.define(
        "Project",
        {
            uid:{
                type:DataTypes.UUID,
                primaryKey:true,
                defaultValue:DataTypes.UUIDV4
            },
            project_name:{
                type:DataTypes.STRING,
                allowNull:false
            },
            image:{
                type:DataTypes.STRING,
                allowNull:false
            },
            link_repo:{
                type:DataTypes.STRING,
                allowNull:false
            },
            link_deploy:{
                type:DataTypes.STRING,
                allowNUll:false
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