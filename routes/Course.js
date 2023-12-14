// Import the required modules
const express = require("express")
const router = express.Router()

// Import the Controllers

// Course Controllers Import
const {
  createCourse,
  getAllCourses,
  getCourseDetails,
  getInstructorCourses,
  editCourse,
  getFullCourseDetails,
  deleteCourse,
  searchCourse,
  markLectureAsComplete,
} = require("../controllers/Course")


// Categories Controllers Import
const {
  showAllCategories,
  createCategory,
  categoryPageDetails,
  addCourseToCategory,
} = require("../controllers/Category")

// Sections Controllers Import
const {
  createSection,
  updateSection,
  deleteSection,
} = require("../controllers/Section")

// Sub-Sections Controllers Import
const {
  createSubSection,
  updateSubSection,
  deleteSubSection,
} = require("../controllers/Subsection")

// Rating Controllers Import
const {
  createRating,
  getAverageRating,
  getAllRating,
} = require("../controllers/RatingAndReviews")

//demo
const { isDemo } = require("../middlewares/demo");

// Importing Middlewares
const { auth, isInstructor, isStudent, isAdmin } = require("../middlewares/auth")

/**
 * @swagger
 * tags:
 *   name: Courses
 *   description: Operations related to courses
 * 
 * /createCourse:
 *   post:
 *     summary: Create a course
 *     description: Endpoint to create a course. Only accessible by instructors.
 *     security:
 *       - auth: []
 *       - isInstructor: []
 *     tags: [Courses]
 *     responses:
 *       '200':
 *         description: Course created successfully
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 * 
 * /addSection:
 *   post:
 *     summary: Add a section to a course
 *     description: Endpoint to add a section to a course. Only accessible by instructors.
 *     security:
 *       - auth: []
 *       - isInstructor: []
 *     tags: [Courses]
 *     responses:
 *       '200':
 *         description: Section added successfully
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 * 
 * /updateSection:
 *   post:
 *     summary: Update a section
 *     description: Endpoint to update a section in a course. Only accessible by instructors.
 *     security:
 *       - auth: []
 *       - isInstructor: []
 *     tags: [Courses]
 *     responses:
 *       '200':
 *         description: Section updated successfully
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 * 
 * /deleteSection:
 *   post:
 *     summary: Delete a section
 *     description: Endpoint to delete a section from a course. Only accessible by instructors with demo capability.
 *     security:
 *       - auth: []
 *       - isInstructor: []
 *       - isDemo: []
 *     tags: [Courses]
 *     responses:
 *       '200':
 *         description: Section deleted successfully
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 * 
 * /updateSubSection:
 *   post:
 *     summary: Edit a subsection
 *     description: Endpoint to edit a subsection in a course. Only accessible by instructors.
 *     security:
 *       - auth: []
 *       - isInstructor: []
 *     tags: [Courses]
 *     responses:
 *       '200':
 *         description: Subsection updated successfully
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 * 
 * /deleteSubSection:
 *   post:
 *     summary: Delete a subsection
 *     description: Endpoint to delete a subsection from a course. Only accessible by instructors.
 *     security:
 *       - auth: []
 *       - isInstructor: []
 *     tags: [Courses]
 *     responses:
 *       '200':
 *         description: Subsection deleted successfully
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 * 
 * /addSubSection:
 *   post:
 *     summary: Add a subsection to a section
 *     description: Endpoint to add a subsection to a section in a course. Only accessible by instructors.
 *     security:
 *       - auth: []
 *       - isInstructor: []
 *     tags: [Courses]
 *     responses:
 *       '200':
 *         description: Subsection added successfully
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 * 
 * /getAllCourses:
 *   get:
 *     summary: Get all registered courses
 *     description: Endpoint to fetch all registered courses.
 *     tags: [Courses]
 *     responses:
 *       '200':
 *         description: List of courses retrieved successfully
 * 
 * /getCourseDetails:
 *   post:
 *     summary: Get details for a specific course
 *     description: Endpoint to fetch details for a specific course.
 *     tags: [Courses]
 *     responses:
 *       '200':
 *         description: Course details retrieved successfully
 * 
 * /editCourse:
 *   post:
 *     summary: Edit a course
 *     description: Endpoint to edit a course. Only accessible by instructors with demo capability.
 *     security:
 *       - auth: []
 *       - isInstructor: []
 *       - isDemo: []
 *     tags: [Courses]
 *     responses:
 *       '200':
 *         description: Course edited successfully
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 * 
 * /getInstructorCourses:
 *   get:
 *     summary: Get all courses of a specific instructor
 *     description: Endpoint to fetch all courses of a specific instructor.
 *     security:
 *       - auth: []
 *       - isInstructor: []
 *     tags: [Courses]
 *     responses:
 *       '200':
 *         description: List of courses retrieved successfully
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 * 
 * /getFullCourseDetails:
 *   post:
 *     summary: Get full course details
 *     description: Endpoint to fetch full details for a specific course.
 *     security:
 *       - auth: []
 *     tags: [Courses]
 *     responses:
 *       '200':
 *         description: Full course details retrieved successfully
 *       '401':
 *         description: Unauthorized
 * 
 * /deleteCourse:
 *   delete:
 *     summary: Delete a course
 *     description: Endpoint to delete a course. Only accessible by admins with demo capability.
 *     security:
 *       - auth: []
 *       - isAdmin: []
 *       - isDemo: []
 *     tags: [Courses]
 *     responses:
 *       '200':
 *         description: Course deleted successfully
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 * 
 * /searchCourse:
 *   post:
 *     summary: Search courses
 *     description: Endpoint to search for courses.
 *     tags: [Courses]
 *     responses:
 *       '200':
 *         description: List of matching courses retrieved successfully
 * 
 * /updateCourseProgress:
 *   post:
 *     summary: Mark lecture as complete
 *     description: Endpoint to mark a lecture as complete. Only accessible by authenticated students.
 *     security:
 *       - auth: []
 *       - isStudent: []
 *     tags: [Courses]
 *     responses:
 *       '200':
 *         description: Lecture marked as complete
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 *
 * 
 * /createRating:
 *   post:
 *     summary: Create a rating for a course
 *     description: Endpoint to create a rating for a course. Only accessible by students.
 *     security:
 *       - auth: []
 *       - isStudent: []
 *     tags: [Rating]
 *     responses:
 *       '200':
 *         description: Rating created successfully
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 * 
 * /getAverageRating:
 *   get:
 *     summary: Get the average rating for a course
 *     description: Endpoint to fetch the average rating for a course.
 *     tags: [Rating]
 *     responses:
 *       '200':
 *         description: Average rating retrieved successfully
 * 
 * /getReviews:
 *   get:
 *     summary: Get all reviews
 *     description: Endpoint to fetch all reviews for courses.
 *     tags: [Rating]
 *     responses:
 *       '200':
 *         description: List of reviews retrieved successfully
 */

module.exports = router;

// ********************************************************************************************************
//                                      Course routes
// ********************************************************************************************************

// Courses can Only be Created by Instructors
router.post("/createCourse", auth, isInstructor, createCourse)
//Add a Section to a Course
router.post("/addSection", auth, isInstructor, createSection)
// Update a Section
router.post("/updateSection", auth, isInstructor, updateSection)
// Delete a Section
router.post("/deleteSection", auth, isInstructor,isDemo, deleteSection)
// Edit Sub Section
router.post("/updateSubSection", auth, isInstructor, updateSubSection)
// Delete Sub Section
router.post("/deleteSubSection", auth, isInstructor, deleteSubSection)
// Add a Sub Section to a Section
router.post("/addSubSection", auth, isInstructor, createSubSection)
// Get all Registered Courses
router.get("/getAllCourses", getAllCourses)
// Get Details for a Specific Courses
router.post("/getCourseDetails", getCourseDetails)
// Edit a Course
router.post("/editCourse", auth, isInstructor,isDemo, editCourse)
// Get all Courses of a Specific Instructor
router.get("/getInstructorCourses", auth, isInstructor, getInstructorCourses)
//Get full course details
router.post("/getFullCourseDetails", auth, getFullCourseDetails)
// Delete a Course
router.delete("/deleteCourse",auth,isDemo, deleteCourse)
// Search Courses
router.post("/searchCourse", searchCourse);
//mark lecture as complete
router.post("/updateCourseProgress", auth, isStudent, markLectureAsComplete);



// ********************************************************************************************************
//                                      Category routes (Only by Admin)
// ********************************************************************************************************
// Category can Only be Created by Admin
// TODO: Put IsAdmin Middleware here
router.post("/createCategory", auth, isAdmin, createCategory)
router.get("/showAllCategories", showAllCategories)
router.post("/getCategoryPageDetails", categoryPageDetails)
router.post("/addCourseToCategory", auth, isInstructor, addCourseToCategory);

// ********************************************************************************************************
//                                      Rating and Review
// ********************************************************************************************************
router.post("/createRating", auth, isStudent,isDemo, createRating)
router.get("/getAverageRating", getAverageRating)
router.get("/getReviews", getAllRating)

module.exports = router;