const { Router }=require("express")

const {
    getExperienceHandler,
    createExperienceHandler,
    updateExperienceHandler,
    deleteExperienceHandler
}=require("../handlers/index")

const experienceRouter=Router()

experienceRouter.get("/", getExperienceHandler)
                .post("/", createExperienceHandler)
                .patch("/:id", updateExperienceHandler)
                .delete("/:id", deleteExperienceHandler)

module.exports=experienceRouter