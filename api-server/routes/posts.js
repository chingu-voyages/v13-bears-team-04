const Post = require('../models/post')

module.exports = function (app) {
  app
    .route('/api/posts/:category')
    .get((req, res) => {
      const { category } = req.params
      console.log(category)
      Post.find({ category })
        .then(data => res.json(data))
        .catch(error => res.status(400).json(error))
    })
    .post((req, res) => {
      const { category } = req.params
      new Post({ ...req.body, category })
        .save()
        .then(data => res.json(data))
        .catch(error => res.status(400).json(error))
    })
  app.route('/api/posts/:category/:post_id').get((req, res) => {
    const { category, post_id } = req.params
    Post.findById(post_id)
      .then(data => res.json(data))
      .catch(error => res.status(400).json(error))
  })
}
