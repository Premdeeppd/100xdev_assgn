const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config');
const {Admin} = require('../db/index');
const {Course} = require('../db/index');


// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;
    const admin = new Admin({
        username,
        password
    });
    admin.save().then(() => {
        res.json({
            msg: "Admin created successfully"
        });
    }).catch((err) => {
        res.json({
            msg: "Admin creation failed"
        });
    });
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;
    Admin.findOne({username, password}).then((admin) => {
        if (admin) {
            const token = jwt.sign({username}, JWT_SECRET);
            res.json({
                token
            });
        } else {
            res.json({
                msg: "Admin not found"
            });
        }
    }
    ).catch((err) => {
        res.json({
            msg: "Admin login failed"
        });
    });
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const { title, description, imageLink, price } = req.body;
    const course = new Course({
        title,
        description,
        imageLink,
        price
    });
    course.save().then(() => {
        res.json({
            msg: "Course created successfully",
            courseId: course._id
        });
    }).catch((err) => {
        res.json({
            msg: "Course creation failed"
        });
    });
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find({}).then((courses) => {
        res.json({
            courses
        });
    }).catch((err) => {
        res.json({
            msg: "Fetching courses failed"
        });
    });
});

module.exports = router;