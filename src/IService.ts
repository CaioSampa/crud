import { IResponse } from "./IResponse";

export interface IService {
    execute (body? : any) : Promise <IResponse>
}