const {

    getCertificationsController,
    createCertificationController,
    updateCertificationController,
    deleteCertificationController

}=require("../controllers/index")

const getCertificationsHandler=async(req, res)=>{
    try {
        const results=await getCertificationsController()
        return res.status(200).json({
            status:200,
            error:false,
            message:"Certifications loaded with success",
            body:results
        })
    } catch (error) {
        return res.status(400).json({
            status:400,
            error:false,
            message:"Error loading Certifications"
        })
    }
}

const createCertificationHandler=async (req, res)=>{

    try {
        
        const {
            title,
            institution,
            image,
            start_date,
            end_date
        }=req.body

        if(title && institution && image && start_date && end_date){

            const data={
                title,
                institution,
                image,
                start_date,
                end_date
            }

            console.log(data)

            const results=await createCertificationController(data)

            return res.status(201).json({
                status:201,
                error:false,
                message:"Successfully created certification",
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

const updateCertificationHandler=async(req, res)=>{
    try {
        const {
            id
        }=req.params

        const {
            title,
            institution,
            image,
            start_date,
            end_date
        }=req.body

        const data={
            title,
            institution,
            image,
            start_date,
            end_date
        }

        const results=await updateCertificationController(id, data)

        return res.status(200).json({
            status:200,
            error:false,
            message:"Updated certification!",
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

const deleteCertificationHandler=async(req, res)=>{
    try {
        
        const {
            id
        }=req.params

        const results=await deleteCertificationController(id)

        return res.status(200).json({
            status:200,
            error:false,
            message:"Deleted certification!",
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
   getCertificationsHandler,
   createCertificationHandler,
   updateCertificationHandler,
   deleteCertificationHandler
}