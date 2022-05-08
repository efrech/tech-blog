const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
    try {
        // Get all posts
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            attributes: [
                'id',
                'title',
                'content',
                'date_created'
            ] 
        });
        // Serialize data so the template can read it
        const post = postData.map((post) => post.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('all-posts-admin', {
            post,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Show new posts to the user
router.get("/new", withAuth, (req, res) => {
    res.render('new-posts');
})

router.get("/edit/:id", withAuth, async (res, req) => {
    // To be able to find posts by primary key and render the edit post on the dashboard
    try {
        const postData = await Post.findByPk(req.params.id, {
          include: [
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
    
        res.render('edit-posts', {
          ...post,
          logged_in: req.session.logged_in
        });
      } catch (err) {
        res.status(500).json(err);
      }
})

module.exports = router;