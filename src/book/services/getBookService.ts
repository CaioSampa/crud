import { IResponse } from "../../IResponse";
import { IService } from "../../IService";
import { BookReposiotry } from "../repository/BookRepository";

export class GetBookService implements IService {

    constructor(
        private bookRepository = new BookReposiotry()
    ){}

    async execute(body?: any): Promise<IResponse> {
        try {
            const id = body.params.id
            const book = await this.bookRepository.getOneById(id)
            
            return {data: book, success: true}
        } catch (error) {
            console.log("---------GetBookService---------- \n", error)
            throw new Error("oops an error occurred while picking up the book")
        }
    }
    
}