const Post = require('../models/post')

module.exports = function (app) {
  app
    .route('/api/posts/:category')
    .get((req, res, next) => {
      const { category } = req.params
      Post.find({ category })
        .then(data => {
          // app.log.trace(data)
          return res.json(data)
        })
        .catch(next)
    })
    .post((req, res, next) => {
      const { category } = req.params
      new Post({ ...req.body, category })
        .save()
        .then(data => res.json(data))
        .catch(next)
    })
  app.route('/api/posts/:category/:post_id').get((req, res, next) => {
    const { category, post_id } = req.params
    Post.findById(post_id).then(data => res.json(data)).catch(next)
  })

  app.use(function (err, req, res, next) {
    if (err) {
      res.status(400).json(err)
    }
  })
}
