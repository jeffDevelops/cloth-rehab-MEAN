const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://jefferyreynolds@localhost:5432/cloth_rehab');

// Import models
const Shirt = sequelize.import('./shirt');
// ... other models here ...

//Export models and Sequelize for seed file
module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;
module.exports.models = {
  Shirt: Shirt
  // ... other models here ...
}
