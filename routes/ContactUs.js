const express = require("express")
const router = express.Router()
const {contactUs}=require("../controllers/ContactUs");

/**
 * @swagger
 * tags:
 *   name: Contact Us
 *   description: Operations related to contacting the platform
 * 
 * /contactUs:
 *   post:
 *     summary: Contact Us
 *     description: Endpoint to submit a contact request.
 *     tags: [Contact Us]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the person contacting.
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email of the person contacting.
 *               message:
 *                 type: string
 *                 description: Message content.
 *             required:
 *               - name
 *               - email
 *               - message
 *     responses:
 *       '200':
 *         description: Contact request submitted successfully
 *       '400':
 *         description: Bad request. Invalid input data.
 */



router.post("/contactUs", contactUs);

module.exports = router;

