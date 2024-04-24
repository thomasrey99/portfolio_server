const {Router}=require("express")

const skillsRouter=require("./skills/routes/index")

const mainRouter=Router()

mainRouter.use("/skills", skillsRouter)

module.exports=mainRouter