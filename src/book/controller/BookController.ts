import { Request, Response } from "express";
import { IController } from "../../IController";
import { IService } from "../../IService";

export class BookController implements IController {
  
    constructor(private service : IService){}
    
    async handle(request: Request, response: Response): Promise<any> {
        const body = request.body
        body.params = request.params
  
        try {
            const result = await this.service.execute(body)
            return response.status(200).json(result)
        } catch (error) {
            return response.status(400).json(error || "Unknown Error")
        }

    }
    
}