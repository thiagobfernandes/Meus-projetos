import { HTTPenum } from "./http.enum";

export class ResponseDTO {
    private status:HTTPenum
    private message:string
    private response:any
    constructor(status:HTTPenum, message:string, response:any) { this.message = message, this.response = response, this.status = status}
}