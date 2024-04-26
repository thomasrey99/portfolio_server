const {Project}=require("../../database")

const getProjectsController=async()=>{

    const results=await Project.findAll()

    return results

}

const createProjectController=async(data)=>{

    await Project.findOrCreate({
        where:{
            project_name:data.project_name
        },
        defaults:data
    })
    
    return data
}

const updateProjectController=async(id, data)=>{

    const project=await Project.findByPk(id)
    const updateProject=await project.update(data)
    return updateProject

}

const deleteProjectController=async(id)=>{

    const project=await Project.findByPk(id)
    await project.destroy()
    return project

}

module.exports={
    getProjectsController,
    createProjectController,
    updateProjectController,
    deleteProjectController
}