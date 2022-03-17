const express = require("express");

const Course = require("../models/course");
const router = express.Router();

// creating the routers for routes

// router.get("/", (req, res) => {
//   res.send("Hello your courses here!");
// });

//create course

router.post("/", async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.json(course);
  } catch (error) {
    res.json(error);
  }
});

//get all courses
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.json(error);
  }
});

//get single course

router.get("/:courseId", async (req, res) => {
  const courseId = req.params.courseId;

  try {
    const c = await Course.findById(courseId);

    res.json(c);
  } catch (error) {
    res.json(error);
  }
});

// delete course
router.delete("/:courseId", async (req, res) => {
  try {
    await Course.deleteOne({ _id: req.params.courseId });
    res.status(200).json({
      message: "Course deleted successfully !!",
    });
  } catch (error) {
    res.json(error);
  }
});

// update courses

router.put("/:courseId",async (req, res) => {
  const courseId = req.params.courseId;
  try {
    const updateCourse = await Course.updateOne(
      {
        _id: courseId,
      },
      req.body
    );

    res.json(updateCourse);
  } catch (error) {

    res.json(error);
  }
});

module.exports = router;
