/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */
const { DataSource } = require("typeorm");

module.exports.PostgresSource = new DataSource({
    type: 'postgres',
    port: +process.env.DB_PORT,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    entities: ['./dist/**/**.entity.js'],
    migrations: ['./dist/migrations/database/**.js'],
    synchronize: false,
    logging: 'all',
    migrationsRun: true,
})