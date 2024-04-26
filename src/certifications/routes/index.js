const {Router}=require("express")

const {

    getCertificationsHandler,
    createCertificationHandler,
    updateCertificationHandler,
    deleteCertificationHandler

}=require("../handlers/index")

const certificationsRouter=Router()

certificationsRouter.get("/", getCertificationsHandler)
                    .post("/", createCertificationHandler)
                    .patch("/:id", updateCertificationHandler)
                    .delete("/:id", deleteCertificationHandler)

module.exports=certificationsRouter