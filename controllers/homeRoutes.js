const router = require("express").Router();
const { Post, Comment, User } = require("../models");
const withAuth = require('../utils/auth');

router.get("/", async (req, res) => {
    // get all posts for the homepage
    try {
        // Get all posts
        const postData = await Post.findAll({
        });
        // Serialize data so the template can read it
        const post = postData.map((post) => post.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('homepage', {
            post,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/post/:id", async (req, res) => {
    // get a single post
});

router.get("/login", (req, res) => {
    // login
});

router.get("/signup", (req, res) => {
    // signup
})

module.exports = router;