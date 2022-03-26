// model -> handle data-related logic
const fs = require("fs");
const path = require("path");

// global path
const p = path.join(
    path.dirname(process.mainModule.filename),
    "data",
    "users.json"
);

// utility function
// readFile -> callback
const getUsersFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports = class User {
    constructor(
        test,
        user_id,
        user_temperature,
        user_date
    ) {
        this.test = test;
        this.user_id = user_id;
        this.user_temperature = user_temperature;
        this.user_date = user_date;
    }

    save() {
        getUsersFromFile(user => {
            // if id is already exist -> update user
            // *define but not used (no update data api)
            if (this.test) {
                const existingUser = user.findIndex(
                    prod => prod.test === this.test
                )
                console.log(existingUser)
                const updateusers = [...user];
                updateusers[existingUser] = this;
                fs.writeFile(p, JSON.stringify(updateusers), (err) => {
                    console.log(err);
                });
            } else {
                // if id is null / not exist -> generate one
                this.test = 0;
                user.push(this);
                fs.writeFile(p, JSON.stringify(user), (err) => {
                    console.log(err);
                });
            }
        });
    }

    static fetchAll(cb) {
        getUsersFromFile(cb);
    }

};