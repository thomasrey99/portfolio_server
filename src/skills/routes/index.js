const { Router } = require("express")

const {
    getSkillsHandler,
    createSkillHandler,
    updateSkillHandler,
    deleteSkillHandler
}=require("../handlers/index")

const skillsRouter=Router()

skillsRouter.get("/", getSkillsHandler)
            .post("/", createSkillHandler)
            .patch("/:id", updateSkillHandler)
            .delete("/:id", deleteSkillHandler)

module.exports=skillsRouter