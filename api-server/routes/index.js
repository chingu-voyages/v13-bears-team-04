module.exports = function (app) {
  app.route('/').get((req, res) => {
    res.json({ message: 'hello from express!' })
  })
}
