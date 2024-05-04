import "reflect-metadata"
import { DataSource } from "typeorm"
import { Book } from "./entity/Book"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "caio",
    password: "TotalArmy229",
    database: "crud",
    synchronize: true,
    logging: false,
    entities: [Book],
    migrations: [],
    subscribers: [],
})
