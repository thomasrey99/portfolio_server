const { Certification }=require("../../database")

const getCertificationsController=async()=>{

    const certification=await Certification.findAll()

    return certification

}

const createCertificationController=async(data)=>{

    await Certification.create(data)

    return data

}

const updateCertificationController=async(id, data)=>{

    const certification=await Certification.findByPk(id)

    const updateCertification=await certification.update(data)

    return updateCertification

}

const deleteCertificationController=async(id)=>{
    
    const certification=await Certification.findByPk(id)

    await certification.destroy()

    return certification

}

module.exports={
    getCertificationsController,
    createCertificationController,
    updateCertificationController,
    deleteCertificationController
}