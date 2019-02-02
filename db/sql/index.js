// const mysql = require('mysql');
// const mysqlConfig = require('../../config.js');

// const connection = mysql.createConnection(mysqlConfig);

const Sequelize = require('sequelize');
const sequelize = new Sequelize('badmovies', 'root', '' , {
  host: 'localhost',
  port: '3306',
  dialect: 'mysql'
});

const Favorite = sequelize.define('favorite', {
    movieID: {
      type: Sequelize.UUID,
      primaryKey: true
    },
    status: {
        type: Sequelize.BOOLEAN
    },
    submittedTime: {
      type: Sequelize.STRING
    }
  });

    Favorite.removeAttribute('id');

  let saveFave = function(input) {
    console.log('saveFave got called')
    return Favorite.sync().then( () => {
        // Table created
        console.log('table exists')
        return Favorite.create({
          movieID: input,
          status: true,
          submittedTime: Date.now()
        });
      });
    }
    
module.exports.saveFave = saveFave;