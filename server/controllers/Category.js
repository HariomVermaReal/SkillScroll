const Category = require("../models/Category");

//createCategory => handler function
exports.createCategory = async (req, res) => {
  try {
    //fetching data from req body
    const { name, description } = req.body;

    //validation
    if (!name || !description) {
      res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    //create entry in DB
    const categoryDetails = await Category.create({
      name: name,
      description: description,
    });
    console.log("TAG enterd => ", tagDetails);

    //returing resonse
    return res.status(200).json({
      success: true,
      message: "Category entery created",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//showAllCategories => handler function
exports.showAllCategories = async (req, res) => {
  try {
    const allCategories = await Category.find({});
    return res.status(200).json({
      success: true,
      message: "all tags returned successfully",
      data: allCategories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//categoryPageDetails => handler function
exports.categoryPageDetails = async (req, res) => {
  try {
    //get categoryId
    const { categoryId } = req.body;

    //get courses for specified categoryId
    const selectedCategory = await Category.findById(categoryId)
      .populate({
        path: "courses",
        match: { status: "Published" },
        populate: "ratingAndReviews",
      })
      .exec();

    // Handle the case when the category is not found
    if (!selectedCategory) {
      console.log("Category not found");
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    // Handle the case when there are no courses
    if (selectedCategory.courses.length === 0) {
      console.log("No courses found for the selected category.");
      return res.status(404).json({
        success: false,
        message: "No courses found for the selected category.",
      });
    }

    // Get courses for other categories
    const categoriesExceptSelected = await Category.find({
      _id: { $ne: categoryId },
    });
    let diffrentCategory = await Category.findOne(
      categoriesExceptSelected[getRandomInt(categoriesExceptSelected.length)]
        ._id
    )
      .populate({
        path: "courses",
        match: { status: "Published" },
      })
      .exec();

    // Get top-selling courses across all categories
    const allCategories = await Category.find()
      .populate({
        path: "courses",
        match: { status: "Published" },
        populate: {
          path: "instructor",
        },
      })
      .exec();
    const allCourses = allCategories.flatMap((category) => category.courses);
    const mostSellingCourses = allCourses
      .sort((a, b) => b.sold - a.sold)
      .slice(0, 10);

    //return response
    return res.status(200).json({
      success: true,
      data: { selectedCategory, diffrentCategory, mostSellingCourses },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      message: error.message,
    });
  }
};
