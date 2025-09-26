const CourseProgress = require("../models/CourseProgress");
const SubSection = require("../models/SubSection");


exports.updateCourseProgress = async(req,res) =>{
    const {courseId, subSectionId} = req.body;
    const userId = req.user.id;
    try{
        // check if the subsection is valid 
        const subSection = await SubSection.findById(subSectionId);

        if(!subSection){
            return res.status(404).json({error:"Invalid SubSection"});
        }
        // check for old entry
        let courseProgress = await CourseProgress.findOne({
            courseID:courseId,
            userId:userId, 
        });
        if(!courseProgress){
            return res.status(404).json({
                success: false,
                message:"Course Progress does not exit"
            });
        }
        else{
            // check for re-completing video/subsection
            if(courseProgress.completedVideos.includes(subSectionId)){
                return res.status(400).json({
                    error: "SubSection already completed"
                });
            }
           
            // push into completed video
            courseProgress.completedVideos.push(subSectionId);
        }
        await courseProgress.save();
        return res.status(200).json({ message: "Course progress updated" })
    }
    catch(error){
       console.error(error);
       return res.status(400).json({error:"Internal Server Error"});
    }
}