const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config');
const {User} = require('../db/index');
const {Course} = require('../db/index');

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const { username, password } = req.body;
    const user = new User({
        username,
        password
    });
    user.save().then(() => {
        res.json({
            msg: "User created successfully"
        });
    }).catch((err) => {
        res.json({
            msg: "User creation failed"
        });
    });
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;
    User.findOne({username, password}).then((user) => {
        if (user) {
            const token = jwt.sign({username}, JWT_SECRET);
            res.json({
                token
            });
        } else {
            res.json({
                msg: "User not found"
            });
        }
    }
    ).catch((err) => {
        res.json({
            msg: "User login failed"
        });
    });

});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find().then((courses) => {
        res.json(courses);
    }).catch((err) => {
        res.json({
            msg: "Courses not found"
        });
    });

});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.username;
    Course.findById(courseId)
        .then(course => {
            // Implement purchase logic here
            User.findOneAndUpdate({
                username: username
            }, {
                $push: { purchasedCourses: course }
            })
                .then(() => res.send({ message: "Course purchased successfully" }))
                .catch(error => res.send({ error: error.message }));
        })
        .catch(error => res.send({ error: error.message }));
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.username;
    User.findOne({ username}).then((user) => {
        if (user) {
            res.json(user.purchasedCourses);
        } else {
            res.json({
                msg: "User not found"
            });
        }
    }
    ).catch((err) => {
        res.json({
            msg: "User not found"
        });
    });
});

module.exports = router