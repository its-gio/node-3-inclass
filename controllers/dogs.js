module.exports.addDog = (req, res) => {
  const { color, breed, age, name } = req.body;
  const db = req.app.get("db");

  db.addDog(color, breed, age, name)
    .then(() => res.sendStatus(200))
}

module.exports.getDogs = (req, res) => {
  const db = req.app.get("db");

  db.getDogs()
    .then(allDogs => res.status(200).json(allDogs));
  
}