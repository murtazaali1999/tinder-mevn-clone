const User = require("../models/user");


module.exports = {
    createUser: async (req, res) => {
        const { name, image } = req.body;

        await User.create()

    }
}