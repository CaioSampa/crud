import { IResponse } from "../../IResponse";
import { IService } from "../../IService";
import { BookReposiotry } from "../repository/BookRepository";

export class GetAllBooksService implements IService {

    constructor(
        private bookRepository = new BookReposiotry()
    ){}

    async execute(body?: any): Promise<IResponse> {
        try {
            const books = await this.bookRepository.getAll()
            
            return {data: books, success: true}
        } catch (error) {
            console.log("---------GetAllBooksService---------- \n", error)
            throw new Error("oops an error occurred while picking up the books")
        }
    }
    
}