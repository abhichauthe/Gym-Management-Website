const express = require("express");
const Contact = require("../models/Contact");
const router = express.Router();

const sendContactDetails = async (req, res) => {
  try {
    const { fullName, email, subject, massage } = req.body;
    const newContact = await Contact.create({
      fullName,
      email,
      subject,
      massage,
    });
    res
      .status(200)
      .json({ message: "Form submitted successfully!", payload: newContact });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred. Please try again later." });
  }
};

router.route("/submit-contact-form").post(sendContactDetails);

module.exports = router;
