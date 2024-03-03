const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin} = require("../db/index");
const {Course} = require("../db/index");

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const admin = new Admin({username,password});
    admin.save()
        .then(()=>res.send({message:'Admin created successfully'}))
        .catch(error=>res.send({error: error.message}));

});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const {title, description, price, imageLink} = req.body;
    const course = new Course({title, description, price, imageLink});
    course.save()
        .then(()=> res.send({message:"Course created successfully", courseId: course._id}))
        .catch(error=> res.send({error: error.message}));
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find()
        .then(courses=>res.send(courses))
        .catch(error=>res.send({error: error.message}));

});

module.exports = router;