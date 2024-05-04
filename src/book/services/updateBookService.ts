import { IResponse } from "../../IResponse";
import { IService } from "../../IService";
import { BookReposiotry } from "../repository/BookRepository";

export class UpdateBookService implements IService {

    constructor(
        private bookRepository = new BookReposiotry()
    ){}

    async execute(body?: any): Promise<IResponse> {
        try {
            if (!body || !body.params.id) throw new Error("Missing book ID in request body");
          
            const { name, description, price } = body;

            const book = await this.bookRepository.getOneById(body.params.id)
            console.log(book)

            if(!book) throw new Error("Book don't exist")
            
            if(name) book.name = name
            if(description) book.description = description
            if(price) book.price = price

            const bookSaved = await this.bookRepository.save(book)

            return {data:bookSaved, success: true}
        } catch (error) {
            console.log("---------UpdateBookService---------- \n", error)
            throw new Error("Oops An error occurred while updating the workbook")
        }
    }
    
}