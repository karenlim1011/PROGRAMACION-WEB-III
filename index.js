import express from "express";
import { Sequelize, DataTypes, STRING } from 'sequelize';

const sequelize = new Sequelize('practica', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

const conectaBD =  async () =>{
    try {
        await sequelize.authenticate();
        await sequelize.sync();
    } catch (error){
        console.error('Error de conexion:', error);
        process.exit(1);
    }
}


const app = express();
app.use(express.json());

conectaBD();

const categorias = sequelize.define('categorias',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true
    },
    nombre: {
       type: DataTypes-STRING(100),
       allowNull: false 
    },
    descripcion: {
        type: DataTypes-STRING(225),
    }
}, {
    tableName: 'categorias',
    timestamps: false
});

//PRIMER EJERCICIO
app.post('/categorias', async (req, res) => {
    const {nombre, descripcion} = req.body;
    const resultado = await categorias.create({nombre, descripcion});
    res.status(201).json(resultado);
});


//SEGUNDO EJERCICIO
//tambien aparece del ejercicio post con su id lo puse id: 3 desde el xammp
app.get('/categorias', async (req, res) =>{
    const resultado = await categorias.findAll();
    res.status(200).json(resultado);
});

//TERCER EJERCICIO
app.get('/categorias/:id', async(req, res) => {
    const resultado = await categorias.findByPk(req.params.id);
    res.status(200).json(resultado);
});

//CURATO EJERCICIO
app.patch('/categorias/:id', async(req, res) =>{
    const id = req.params.id;
    const resultado = await categorias.update(req.body, {where: {id}
    });
    res.status(200).json({mensaje: '¡La categoria se actualizo correctamente!'})
});

//QUINTO EJERCICIO
app.delete('/categorias/:id', async(req, res) => {
    const id = req.params.id;
    const rersultado = await categorias.destroy({where: {id}
    });
    res.status(200).json({mensaje: 'La categoria seleccionada se elimino en correcion'})
});

const puerto = 3001;
app.listen(puerto, 
    () => { console.log(`Servidor en http://localhost:${puerto}`);
});



