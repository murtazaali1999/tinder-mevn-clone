const User = require("../models/user");
const { createClient } = require("pexels");

const client = createClient('563492ad6f91700001000001b75fdbeea5d149f79dd993fc4a942a16');
const query = "Nature";

module.exports = {
    createUser: async (req, res) => {

        const photo = await client.photos.search({ query, per_page: 1 });

        await User.create({
            name: photo.photos[0].photographer,
            image: photo.photos[0].url
        }, (res) => {
            console.log("Done");
        })

    },
    getUsers: async (req, res) => {
        const users = await User.find();

        res.status(200).json({ user: users });
    }
}