const {Skill}=require("../../database")

const getSkillsController=async ()=>{
    const results=await Skill.findAll()
    return results
}

const createSkillController=async (data)=>{

    await Skill.findOrCreate({
        where:{
            name:data.name
        },
        defaults:data
    })

    return data

}

const updateSkillController=async (id, data)=>{

    const skill=await Skill.findByPk(id)
    const updateSkill= await skill.update(data)
    return updateSkill

}

const deleteSkillController=async (id)=>{

    const skill=await Skill.findByPk(id)
    await skill.destroy()
    return skill
}

module.exports={
    getSkillsController,
    createSkillController,
    updateSkillController,
    deleteSkillController
}