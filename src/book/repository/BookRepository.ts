import { Repository } from "typeorm";
import { Book } from "../../database/entity/Book";
import { AppDataSource } from "../../database/data-source";

export class BookReposiotry {

    private bookRepository : Repository<Book>

    constructor(){
        this.bookRepository = AppDataSource.manager.getRepository(Book)
    }

    async save (book : Book) {
        return await this.bookRepository.save(book)
    }

    async getAll () {
        return await this.bookRepository.find({order:{"created_at" : "ASC"}})
    }

    async getOneById (id : number) {
        return await this.bookRepository.findOne({where:{'id':id}})
    }

    async deleteById (id : number) {
        await this.bookRepository.delete(id)
    }

}