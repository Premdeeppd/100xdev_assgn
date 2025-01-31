const {Admin} = require('../db/index');
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers['username'];
    const password = req.headers['password'];
    if(username && password){
        Admin.findOne({username
            ,password})
            .then(admin=>{
                if(admin){
                    next();
                }else{
                    res.send({message:"Unauthorized"});
                }
            })
            .catch(error=>res.send({error: error.message}));

    }
    else{
    res.send({message:"Unauthorized"});
    }
}

module.exports = adminMiddleware;