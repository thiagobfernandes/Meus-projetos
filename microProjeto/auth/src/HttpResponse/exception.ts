import { HTTPenum } from "./http.enum";

export class ExceptionErrorDTO {
    private status: HTTPenum
    private message: string
    constructor(status:HTTPenum, message:string) {
        this.message = message
        this.status = status
    }
}