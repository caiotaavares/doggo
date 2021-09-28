module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'doggo',
    define: {
        underscored: true,
        // por padrão é criada o created at e updated at na tabela, logo esse comando retina o updated at
        timestamps: false
    }
}