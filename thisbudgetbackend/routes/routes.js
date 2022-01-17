const express = require("express");
const router = express.Router();
const registerTemplateCopy = require("../models/registermodel");

router.post('/register', (req, res) => {
    const registeredUser = new registerTemplateCopy({
        fullName: req.body.fullName,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
    })
    registeredUser.save()
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    })
})

module.exports = router;