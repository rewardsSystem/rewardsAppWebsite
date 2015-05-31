module.exports = {
    find: function(req, res) {
        console.log("find called");
        User.find({}, function(err, results) {
            console.log("results", results);

            res.json(results);
        });
    }
}