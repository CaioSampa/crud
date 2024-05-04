import { Request, Response } from "express";
import { IResponse } from "./IResponse";

export interface IController {
    handle (request : Request, response : Response) : Promise <any>
}