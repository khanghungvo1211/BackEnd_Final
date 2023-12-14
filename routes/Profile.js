const express = require("express")
const router = express.Router()
const { auth, isInstructor } = require("../middlewares/auth")
const {
  deleteAccount,
  updateProfile,
  getAllUserDetails,
  updateDisplayPicture,
  getEnrolledCourses,
  instructorDashboard,
} = require("../controllers/Profile")

/**
 * @swagger
 * tags:
 *   name: Profile
 *   description: Operations related to user profiles
 * 
 * /deleteProfile:
 *   delete:
 *     summary: Delete user account
 *     description: Endpoint to delete a user account. Only accessible by authenticated users with demo capability.
 *     security:
 *       - auth: []
 *       - isDemo: []
 *     tags: [Profile]
 *     responses:
 *       '200':
 *         description: User account deleted successfully
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 * 
 * /updateProfile:
 *   put:
 *     summary: Update user profile
 *     description: Endpoint to update user profile information. Only accessible by authenticated users with demo capability.
 *     security:
 *       - auth: []
 *       - isDemo: []
 *     tags: [Profile]
 *     responses:
 *       '200':
 *         description: User profile updated successfully
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 * 
 * /getUserDetails:
 *   get:
 *     summary: Get user details
 *     description: Endpoint to fetch user details. Requires authentication.
 *     security:
 *       - auth: []
 *     tags: [Profile]
 *     responses:
 *       '200':
 *         description: User details retrieved successfully
 *       '401':
 *         description: Unauthorized
 * 
 * /getEnrolledCourses:
 *   get:
 *     summary: Get enrolled courses
 *     description: Endpoint to fetch enrolled courses of a user. Requires authentication.
 *     security:
 *       - auth: []
 *     tags: [Profile]
 *     responses:
 *       '200':
 *         description: Enrolled courses retrieved successfully
 *       '401':
 *         description: Unauthorized
 * 
 * /updateDisplayPicture:
 *   put:
 *     summary: Update display picture
 *     description: Endpoint to update user's display picture. Requires authentication with demo capability.
 *     security:
 *       - auth: []
 *       - isDemo: []
 *     tags: [Profile]
 *     responses:
 *       '200':
 *         description: Display picture updated successfully
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 * 
 * /getInstructorDashboardDetails:
 *   get:
 *     summary: Get instructor dashboard details
 *     description: Endpoint to fetch instructor dashboard details. Requires authentication as an instructor.
 *     security:
 *       - auth: []
 *       - isInstructor: []
 *     tags: [Profile]
 *     responses:
 *       '200':
 *         description: Instructor dashboard details retrieved successfully
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 */
// ********************************************************************************************************
//                                      Profile routes
// ********************************************************************************************************
// Delet User Account
router.delete("/deleteProfile",auth,deleteAccount)
router.put("/updateProfile", auth, updateProfile)
router.get("/getUserDetails", auth, getAllUserDetails)
// Get Enrolled Courses
router.get("/getEnrolledCourses", auth, getEnrolledCourses)
router.put("/updateDisplayPicture", auth, updateDisplayPicture)
//get instructor dashboard details
router.get("/getInstructorDashboardDetails",auth,isInstructor, instructorDashboard)

module.exports = router;