const {
    getExperienceController,
    createExperienceController,
    updateExperienceController,
    deleteExperienceController
}=require("../controllers/index")

const getExperienceHandler=async(req, res)=>{
    try {
        const results=await getExperienceController()
        return res.status(200).json({
            status:200,
            error:false,
            message:"Experiences loaded with success",
            body:results
        })
    } catch (error) {
        return res.status(400).json({
            status:400,
            error:false,
            message:"Error loading experiences"
        })
    }
}

const createExperienceHandler=async (req, res)=>{

    try {
        
        const {
            company,
            position_name,
            image,
            description,
            start_date,
            end_date
        }=req.body

        if(company && position_name && image && description && start_date && end_date){

            const data={
                company,
                position_name,
                image,
                description,
                start_date,
                end_date
            }
            
            console.log(data)

            const results=await createExperienceController(data)

            return res.status(201).json({
                status:201,
                error:false,
                message:"Successfully created experience",
                body:results
            })

        }else{
            
            return res.status(500).json({
                status:400,
                error:true,
                message:"Insufficient information, complete all fields",
                body:null
            })

        }

    } catch (error) {
        
        return res.status(400).json({
            status:400,
            error:true,
            message:error,
            body:null
        })

    }

}

const updateExperienceHandler=async(req, res)=>{
    try {
        const {
            id
        }=req.params

        const {
            company,
            position_name,
            image,
            description,
            start_date,
            end_date
        }=req.body

        const data={
            company,
            position_name,
            image,
            description,
            start_date,
            end_date
        }

        const results=await updateExperienceController(id, data)

        return res.status(200).json({
            status:200,
            error:false,
            message:"Updated experience!",
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

const deleteExperienceHandler=async(req, res)=>{
    try {
        
        const {
            id
        }=req.params

        const results=await deleteExperienceController(id)

        return res.status(200).json({
            status:200,
            error:false,
            message:"Deleted experience",
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
    getExperienceHandler, 
    createExperienceHandler,
    updateExperienceHandler,
    deleteExperienceHandler
}