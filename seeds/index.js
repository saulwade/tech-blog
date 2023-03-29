const sequelize = require('../config/connection');
const seedUsers = require('./user-Seeds');
const seedPosts = require('./post-Seeds');
const seedComments = require('./comment-Seeds');

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
    
    await seedPosts();
    console.log('\n----- POSTS SEEDED -----\n');
    
    await seedComments();
    console.log('\n----- COMMENTS SEEDED -----\n');

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedAll();
