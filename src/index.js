// // Import delle dipendenze
// const express = require('express');
// const mysql = require('mysql');

// // Configurazione dell'app Express
// const app = express();
// app.use(express.json());

// // Configurazione del database MySQL
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'jaita',
//   port: '5000',
//   password: 'jaita107',
//   database: 'jadventures'
// });

// // Connessione al database MySQL
// db.connect((err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('Connesso al database MySQL');
// });

// // Creazione della tabella Guild se non esiste
// db.query(`CREATE TABLE IF NOT EXISTS Guild (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   name VARCHAR(255),
//   authentication_seal VARCHAR(255),
//   seal_img_url VARCHAR(255),
//   n_employees INT,
//   hq_address VARCHAR(255)
// )`, (err, result) => {
//   if (err) throw err;
//   console.log('Tabella Guild creata/modificata con successo');
// });

// // Creazione della tabella Quest se non esiste
// db.query(`CREATE TABLE IF NOT EXISTS Quest (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   date_created DATE,
//   status VARCHAR(255),
//   rank VARCHAR(255),
//   reward INT,
//   area VARCHAR(255),
//   date_completed DATE,
//   mape_url VARCHAR(255),
//   description TEXT,
//   type VARCHAR(255),
//   guild_id INT,
//   FOREIGN KEY (guild_id) REFERENCES Guild(id)
// )`, (err, result) => {
//   if (err) throw err;
//   console.log('Tabella Quest creata/modificata con successo');
// });

// // API per ottenere tutte le gilde
// app.get('/guilds', (req, res) => {
//   db.query('SELECT * FROM Guild', (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });

// // API per ottenere tutte le quest
// app.get('/quests', (req, res) => {
//   db.query('SELECT * FROM Quest', (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });

// // Avvio del server Express
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server in esecuzione sulla porta ${PORT}`));
