// communicate between front-end and back-end (act like interface)

const User = require("../models/user");

// getAllUsers -> GET
exports.getAllUsers = (req, res, next) => {
    const users = User.fetchAll((users) => {
        res.send(users);
    });
};

// addUser -> POST
exports.addUser = (req, res, next) => {
    const user_id = req.body.user_id;
    const user_temperature = req.body.user_temperature;
    const user_date = req.body.user_date;
    // form model
    const user = new User(
        null, // assign User_id dater
        user_id,
        user_temperature,
        user_date,
    );
    user.save();
    res.sendStatus(200);
};