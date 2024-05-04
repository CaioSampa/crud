import { IResponse } from "../../IResponse";
import { IService } from "../../IService";
import { Book } from "../../database/entity/Book";
import { BookReposiotry } from "../repository/BookRepository";

export class CreateBookService implements IService {

    constructor(
        private bookRepository = new BookReposiotry()
    ){}

    async execute(body?: any): Promise<IResponse> {
        try {
            const name = body.name 
            const description = body.description
            const price = body.price

            if(!name || !description || !price) throw new Error("Fill in the fields correctly")

            const book = new Book(name, description, price)

            const bookSaved = await this.bookRepository.save(book)

            return {data:bookSaved, success: true}
        } catch (error) {
            console.log("---------CreateBookService---------- \n", error)
            throw new Error("oops An error occurred while creating the book") 
        }
    }
    
}