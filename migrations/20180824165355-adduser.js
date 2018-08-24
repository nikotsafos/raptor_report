'use strict';
// Adding or dropping a column
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('birds', 'userId', Sequelize.INTEGER);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('birds', 'userId');
  }
};
