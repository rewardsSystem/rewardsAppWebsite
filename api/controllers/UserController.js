module.exports = {
    // find: function(req, res) {
    //     console.log("The find called");
    //     User.find({}).exec(function(err, results) {
    //         res.json(results);
    //     });
    // },
    // 
    // create: function(req, res) {
    //     console.log("The create called");
    //     res.json({});
    // },
    // 
    findOne: function (req, res) {
        console.log("The find one called called");
        User.findOne({id: req.params.id}).populate("children").exec(function(err, user) {
            res.json(user);
        });
    }
}