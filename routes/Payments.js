// Import the required modules
const express = require("express")
const router = express.Router()
/**
 * @swagger
 * tags:
 *   name: Payments
 *   description: Operations related to payments
 * 
 * /capturePayment:
 *   post:
 *     summary: Capture payment
 *     description: Endpoint to capture a payment. Only accessible by authenticated students.
 *     security:
 *       - auth: []
 *       - isStudent: []
 *     tags: [Payments]
 *     responses:
 *       '200':
 *         description: Payment captured successfully
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 * 
 * /verifyPayment:
 *   post:
 *     summary: Verify payment signature
 *     description: Endpoint to verify payment signature.
 *     security:
 *       - auth: []
 *     tags: [Payments]
 *     responses:
 *       '200':
 *         description: Payment signature verified successfully
 *       '401':
 *         description: Unauthorized
 * 
 * /sendPaymentSuccessEmail:
 *   post:
 *     summary: Send payment success email
 *     description: Endpoint to send a payment success email notification. Only accessible by authenticated users.
 *     security:
 *       - auth: []
 *     tags: [Payments]
 *     responses:
 *       '200':
 *         description: Payment success email sent successfully
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 */

const { capturePayment, verifySignature,sendPaymentSuccessEmail } = require("../controllers/Payments")
const { auth, isInstructor, isStudent, isAdmin } = require("../middlewares/auth")
router.post("/capturePayment", auth, isStudent, capturePayment)
router.post("/verifyPayment",auth,verifySignature)
router.post("/sendPaymentSuccessEmail", auth, sendPaymentSuccessEmail)

module.exports = router;