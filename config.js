
    //Este es la conexion a la base de datos en global
    //db: process.env.MONGODB || 'mongodb+srv://jorgecopado17:admin123@cluster0.xdwf9.mongodb.net/Test1?retryWrites=true&w=majority',

module.exports = {

    port: process.env.PORT ||3000,

    db: process.env.MONGODB || 'mongodb+srv://jorgecopado17:admin123@cluster0.xdwf9.mongodb.net/Pr2?retryWrites=true&w=majority',

    urlParser : {

        useNewUrlParser: true,
        useCreateIndex: true ,
        useUnifiedTopology: true,
        useFindAndModify: false ,
    }
};