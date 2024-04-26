const { 
    getProjectsController, 
    createProjectController, 
    updateProjectController, 
    deleteProjectController }=require("../controllers/index")

const getProjectsHandler=async (req, res)=>{

    try {
        const results=await getProjectsController()
        return res.status(200).json({
            status:200,
            error:false,
            message:"Projects loaded correctly!",
            body:results
        })
    } catch (error) {
        return res.status(200).json({
            status:400,
            error:true,
            message:"Error loading projects",
            body:null
        })
    }

}

const createProjectHandler=async(req, res)=>{

    try {
        
        const {
            project_name,
            image,
            link_repo,
            link_deploy
        }=req.body
    
        if(project_name && image && link_repo && link_deploy){
            
            const data={
                project_name,
                image,
                link_deploy,
                link_repo
            }
            
            const newProject=await createProjectController(data)

            return res.status(201).json({
                status:201,
                error:false,
                message:"Project created!",
                body:newProject
            })

        }else{

            return res.status(500).json({
                status:500,
                error:false,
                message:"Insufficient information",
                body:null
            })

        }

    } catch (error) {
        
        return res.status(400).json({
                status:400,
                error:false,
                message:"Error creating project",
                body:null
        })

    }
}

const updateProjectHandler=async(req, res)=>{
    try {

        const {
            id
        }=req.params

        const {
            project_name,
            image,
            link_deploy,
            link_repo
        }=req.body

        const data={
            project_name,
            image,
            link_deploy,
            link_repo
        }

        const result=await updateProjectController(id, data)

        return res.status(200).json({
            status:200,
            error:false,
            message:"Project updated!",
            body:result
        })

    } catch (error) {

        return res.status(400).json({
                status:400,
                error:false,
                message:"Error updating project",
                body:null
        })

    }
}

const deleteProjectHandler=async(req, res)=>{

    try {
        
        const {
            id
        }=req.params

        const result=await deleteProjectController(id)

        return res.status(200).json({
            status:200,
            error:false,
            message:"Project deleted!",
            body:result
        })

    } catch (error) {
        
        return res.status(400).json({
            status:400,
            error:false,
            message:"Error deleting project",
            body:null
        })

    }

}

module.exports={
    getProjectsHandler,
    createProjectHandler,
    updateProjectHandler,
    deleteProjectHandler
}