const Jokes = require("../models/jokes.model");

module.exports.findAllJokes = (req,res) => {
    Jokes.find()
    .then(allJokes => res.json({jokes: allJokes}))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}

module.exports.findOneJoke = (req,res) => {
    Jokes.findOne({_id: req.params.id})
    .then(oneJoke => res.json({jokes: oneJoke}))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}

module.exports.insertNewJoke = (req,res) => {
    Jokes.create(req.body)
    .then(newJoke => res.json({jokes: newJoke}))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}

module.exports.updateJoke = (req,res) => {
    Jokes.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedJoke => res.json({jokes: updatedJoke}))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}

module.exports.deleteJoke = (req,res) => {
    Jokes.remove({ _id: req.params.id })
    .then(result => res.json({result: result}))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}