const {Router}=require("express")

const skillsRouter=require("./skills/routes/index")
const projectsRouter=require("./projects/routes/index")

const mainRouter=Router()

mainRouter.use("/skills", skillsRouter)
mainRouter.use("/projects", projectsRouter)
module.exports=mainRouter