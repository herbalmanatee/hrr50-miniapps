//this file will run when it is required in server.js !!

const {Sequelize, DataTypes} = require('sequelize');

console.log('here');
//create connection to mysql server (checkout database)
const sequelize = new Sequelize('checkout', 'student', 'student', {
  host: 'localhost',
  dialect: 'mysql'
})
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })

const CheckoutBatch = sequelize.define('CheckoutBatch', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    name: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    address: {type: DataTypes.STRING},
    phoneNum: {type: DataTypes.STRING},
    ccNum: {type: DataTypes.STRING},
    expiryDate: {type: DataTypes.STRING},
    cvv: {type: DataTypes.STRING},
    billZip: {type: DataTypes.STRING},
});

// const CheckoutBatch = sequelize.define('Test', {
//   fname: {type: DataTypes.STRING}
// });

//console.log(CheckoutBatch === sequelize.models.CheckoutBatch);


const init = async () => {
  CheckoutBatch.sync({force: false})
  .catch(err => {
    console.log(err);
  })
  .then(()=> {
    //console.log('tables synced');
  })

}
init();

  //createDB

  //create database table

module.exports = {
  //database queries go here!!!!
}

