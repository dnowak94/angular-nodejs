var express = require('express');
var router = express.Router();
var models = require('../models/models');
var async = require('async');
var httpStatusCodes = require('http-status-codes');

async function createHero(hero) {
  let newHero = models.Hero.build(hero);
  console.log(newHero.name);
  await newHero.save();
}

async function updateHero(hero) {
  let updatedHero = await models.Hero.findByPk(hero.id);
  updatedHero.name = hero.name;
  console.log("updatedHero: ", JSON.stringify(updatedHero, null, 2));
  await updatedHero.save();
}

/* GET heroes listing. */
router.get('/', async function(req, res) {
  const heroes = await models.Hero.findAll();
  console.log("All heroes:", JSON.stringify(heroes, null, 2));
  res.send(heroes);
});

router.get('/:id', async function(req, res) {
  const hero = await models.Hero.findByPk(Number(req.params['id']));
  console.log("hero: ", JSON.stringify(hero, null, 2));
  res.send(hero);
})

router.post('/', async function(req, res) {
  console.log(JSON.stringify(req.body, null, 2));
  let body = JSON.parse(req.body);
  console.log("body:", body);
  saveHero(body);
  res.sendStatus(httpStatusCodes.StatusCodes.OK);
});

router.put('/:id', async function(req, res) {
  updateHero(req.body);
  res.sendStatus(httpStatusCodes.OK);
});

module.exports = router;
