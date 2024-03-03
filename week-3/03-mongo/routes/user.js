const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    const user = new User({username,password});
    user.save()
        .then(()=>res.send({message:'User created successfully'}))
        .catch(error=>res.send({error: error.message}));
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find()
        .then(courses => res.send(courses))
        .catch(error => res.send({ error: error.message }));
});

router.post('/courses/:userId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const username = req.headers['username'];
    const password = req.headers['password'];
    const courseId = req.params.userId;
    Course.findById(courseId)
        .then(course => {
            // Implement purchase logic here
            User.findOneAndUpdate({
                username: username,
                password: password
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
    const username = req.headers['username'];
    const password = req.headers['password'];
    User.findOne({ username: username, password: password })
        .then(user => {
            if (user) {
                res.send(user.purchasedCourses);
            } else {
                res.send({ message: "User not found" });
            }
        })
        .catch(error => res.send({ error: error.message }));
});

module.exports = router;