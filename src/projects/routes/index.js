const {Router}=require("express")

const {
    getProjectsHandler,
    createProjectHandler,
    updateProjectHandler,
    deleteProjectHandler
}=require("../handlers/index")

const projectsRouter=Router()

projectsRouter.get("/", getProjectsHandler)
              .post("/", createProjectHandler)
              .patch("/:id", updateProjectHandler)
              .delete("/:id", deleteProjectHandler)

module.exports=projectsRouter