const { Experience }=require("../../database")

const getExperienceController=async()=>{

    const experience=await Experience.findAll()

    return experience

}

const createExperienceController=async(data)=>{

    await Experience.create(data)

    return data

}

const updateExperienceController=async(id, data)=>{

    const experience=await Experience.findByPk(id)

    const updateExperience=await experience.update(data)

    return updateExperience

}

const deleteExperienceController=async(id)=>{
    
    const experience=await Experience.findByPk(id)

    await experience.destroy()

    return experience

}

module.exports={
    getExperienceController,
    createExperienceController,
    updateExperienceController,
    deleteExperienceController
}