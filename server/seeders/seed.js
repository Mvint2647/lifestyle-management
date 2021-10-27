const db = require('../config/connection');
const { User, Fitness, Food, Sleep } = require('../models');
const userSeeds = require('./userSeeds.json');
const fitness = require('./fitnessSeeds.json');
const food = require('./foodSeeds.json');
const sleep = require('./sleepSeeds.json');



db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});
db.once('open', async () => {
  try {
    await Fitness.deleteMany({});
    await Fitness.create(fitness);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});
db.once('open', async () => {
  try {
    await Food.deleteMany({});
    await Food.create(food);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});
db.once('open', async () => {
  try {
    await Sleep.deleteMany({});
    await Sleep.create(sleep);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});

