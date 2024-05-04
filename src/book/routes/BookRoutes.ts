import { Request, Response, Router } from "express";
import { BookController } from "../controller/BookController";
import { GetBookService } from "../services/getBookService";
import { DeleteBookService } from "../services/deleteBookService";
import { CreateBookService } from "../services/createBookService";
import { UpdateBookService } from "../services/updateBookService";
import { GetAllBooksService } from "../services/getAllBooksService";

const router = Router()

router.get('/', function (request: Request, response : Response){
    return response.json({"ok":true})
})

router.get('/book', function(request: Request, response : Response){
    new BookController(new GetAllBooksService()).handle(request, response)
})

router.get('/book/:id', function(request: Request, response : Response){
    new BookController(new GetBookService()).handle(request, response)
})

router.post('/book', function(request: Request, response : Response){
    new BookController(new CreateBookService()).handle(request, response)
})

router.put('/book/:id', function(request: Request, response : Response){
    new BookController(new UpdateBookService()).handle(request, response)
})

router.delete('/book/:id', function(request: Request, response : Response){
    new BookController(new DeleteBookService()).handle(request, response)
})


export = router