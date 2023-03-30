const { User } = require('../models');

const userData = [
  {
    username: "saulwade",
    password: "771270se",
    email: "saulwade29@gmail.com"
  },
  {
    username: "emilianop",
    password: "password2",
    email: "emilianop@gmail.com"
  }
];

const seedUsers = async () => {
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
};

module.exports = seedUsers;
