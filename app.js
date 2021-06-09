require('dotenv').config()
const express = require('express')
const app = express()
var cors = require('cors');
const Users = require('./models/users');
const sequelize = require('./db/conexion')
const router = require('./routes/routes')

//Middleware globales
app.use(express.json())
app.use(cors({
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers" : "Content-Type",
  "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH"
}));

//Configuraciones globales
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')


app.get('/', (req, res) => {
  res.send('✅ - Server is up and running !!');
});
app.use('/', router);


//Iniciamos nuestro servidor
async function inicioServidor() {
  try{
      await sequelize.authenticate();
      console.log('Conexiòn con la DB correcta!')
      app.listen(process.env.PORT, function (){
          console.log(`Sistema iniciado en  http://${process.env.HOST}:${process.env.PORT}`)
      })
  } catch (err) {
      console.log(err)
      console.log('No se pudo conectar con la DB')
  }
}

async function synchronizeTables() {
  // await sequelize.sync({ force: true });
  Users.sync({ force: true })
  // Categories.sync({ force: true })
  // Products.sync({ force: true })
  // Customers.sync({ force:true })
  console.log('All models were synchronized successfully')
}

inicioServidor()
// synchronizeTables()