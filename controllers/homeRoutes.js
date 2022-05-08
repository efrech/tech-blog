const router = require("express").Router();
const { Post, Comment, User } = require("../models");


router.get("/", async (req, res) => {
    // get all posts for the homepage
    try {
        // Get all posts
        const postData = await Post.findAll({
        });
        // Serialize data so the template can read it
        const post = postData.map((post) => post.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('posts', {
            post,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/post/:id", async (req, res) => {
    // get a single post
    try {
        const postData = await Post.findByPk(req.params.id, {
          include: [
            {
              model: User,
              attributes: ['username'],
            },
            {
            model: Comment,
            attributes: ['date_created', 'content'],
            include: {
                model: User,
                attributes: ['username']
            }
            }
          ],
        });
    
        const post = postData.get({ plain: true });
    
        res.render('post', {
          ...post,
          logged_in: req.session.logged_in
        });
      } catch (err) {
        res.status(500).json(err);
      }
});

router.get("/login", (req, res) => {
    // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
});

router.get("/signup", (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
      }
      res.render('signup');
})

module.exports = router;