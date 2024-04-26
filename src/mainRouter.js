const {Router}=require("express")

const skillsRouter=require("./skills/routes/index")
const projectsRouter=require("./projects/routes/index")
const experienceRouter=require("./experience/routes/index")
const certificationsRouter=require("./certifications/routes/index")

const mainRouter=Router()

mainRouter.use("/skills", skillsRouter)
mainRouter.use("/projects", projectsRouter)
mainRouter.use("/experience", experienceRouter)
mainRouter.use("/certifications", certificationsRouter)

module.exports=mainRouter