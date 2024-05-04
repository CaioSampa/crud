import { IResponse } from "../../IResponse";
import { IService } from "../../IService";
import { BookReposiotry } from "../repository/BookRepository";

export class DeleteBookService implements IService {

    constructor(
        private bookRepository = new BookReposiotry()
    ){}

    async execute(body?: any): Promise<IResponse> {
        try {
            const id = body.params.id
            await this.bookRepository.deleteById(id)
            
            return {data: null, success: true, message: "deleted"}
        } catch (error) {
            console.log("---------DeleteBookService---------- \n", error)
            throw new Error("oops an error occurred while deleting the book")
        }
    }
    
}