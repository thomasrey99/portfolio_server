const {
    getSkillsController,
    createSkillController,
    updateSkillController,
    deleteSkillController
}=require("../controllers/index")

const getSkillsHandler=async(req, res)=>{

    try {

        const results=await getSkillsController()
        
        return res.status(200).json({
            status:200,
            error:false,
            message:"Skills charged",
            body:results
        })

    } catch (error) {

        return res.status(400).json({
            status:401,
            error:true,
            message:error,
            body:null
        })

    }
}

const createSkillHandler=async(req, res)=>{

    try {
        
        const {
            name,
            image,
            year_learning
        }=req.body

        if(name && image && year_learning){
            const data={
                name,
                image,
                year_learning
            }
            const newSkill=await createSkillController(data)
            return res.status(200).json({
                status:200,
                error:false,
                message:"Skill created!",
                body:newSkill
            })
        }else{
            return res.status(500).json({
                status:500,
                error:true,
                message:`The following information needs to be loaded: ${!name && "\n name"} ${!image && "\n image"} ${!year_learning && "\n year_learning"}`,
                body:null
            })
        }

    } catch (error) {
        return res.status(500).json({
            status:400,
            error:true,
            message:"",
            body:null
        })
    }
}

const updateSkillHandler=async(req, res)=>{

    try {
        const {
            id
        }=req.params

        const {
            name,
            image,
            year_learning
        }=req.body

        const data={
            name,
            image,
            year_learning
        }

        const results=await updateSkillController(id, data)

        return res.status(200).json({
            status:200,
            error:false,
            message:"Skill updated!",
            body:results
        })

    } catch (error) {
        
        return {
            status:400,
            error:true,
            message:error,
            body:null
        }

    }
}

const deleteSkillHandler=async(req, res)=>{

   try {
    
    const {
        id
    }=req.params

    const results=await deleteSkillController(id)

    return res.status(200).json({
        status:200,
        error:false,
        message:"skill removed",
        body:results
    })

   } catch (error) {
    
    return res.status(400).json({
        status:400,
        error:true,
        message:error,
        body:null
    })

   }

}

module.exports={
    getSkillsHandler,
    createSkillHandler,
    updateSkillHandler,
    deleteSkillHandler
}