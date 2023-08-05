const CourseProgress = require("../models/CourseProgress");
const SubSection = require("../models/SubSection");

exports.updateCourseProgress = async (req, res) => {
  const { courseId, SubSectionId } = req.body;
  const userId = req.user.id;

  try {
    const subSection = await SubSection.findById(SubSectionId);

    //check if the subsection is valid
    if (!subSection) {
      return res.status(404).json({ error: "Invalid SubSection" });
    }

    //check for old entry
    let courseProgress = await CourseProgress.findOne({
      courseID: courseId,
      userId: userId,
    });
    if (!courseProgress) {
      return res.status(404).json({
        success: false,
        message: "Course Progress does not exist",
      });
    } else {
      //check for re-completing video/subsection
      if (courseProgress.completedVideos.includes(SubSectionId)) {
        return res.status(400).json({
          error: "Subsection already completed",
        });
      }

      //poush into completed video
      courseProgress.completedVideos.push(SubSectionId);
      console.log("Copurse Progress Push Done");
    }
    return res.status(200).json({
      success: true,
      message: "Course Progress Updated Successfully",
    });
    await courseProgress.save();
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: "Internal Server Error" });
  }
};
