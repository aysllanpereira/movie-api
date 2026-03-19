const userRoutes = require('./routes/user.routes');
const reviewRoutes = require('./routes/review.routes');
const movieRoutes = require('./routes/movie.routes')

const sequelize = require('./config/database');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/user', userRoutes);
app.use('/review', reviewRoutes);
app.use('/movie', movieRoutes);

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log('Banco conectado');

        await sequelize.sync( { alter: true } );
        
        app.listen(3000, () => {
            console.log(`Servidor rodando na porta 3000`);
        })
    } catch (error) {
        console.log(error);
    }
};

startServer();